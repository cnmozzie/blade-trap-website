<template>
  <div>
    <div>
        <h3 id="chatting-room">Chatting Room</h3>
		<br>
        <div v-if="login">
          <p @mouseleave="show_logout=false" name="user">Hello <a href="#user" :style="{color:selectedColor}" @mouseover="show_logout=true" @click="show_logout=true">{{user_name}}</a>
      	    <a href="#" v-if="show_logout" @click="logout">[logout]</a>, want to leave a comment?</p>
	      <form class="form-row">
            <div class="col-7" rows="3">
              <textarea class="form-control" id="exampleFormControlTextarea1" v-model="input_message" placeholder="Leave a message..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary col-1" @click="post_message">Send Comment</button>
          </form>
        </div>
        <div v-else>
          <form class="form-inline">
	        <label class="col-sm-1">Name</label>
            <div class="form-group col-sm-3">
              <input type="text" class="form-control" v-model="user_name">
            </div>
            <label class="col-sm-1">Color</label>
            <div class="form-group col-sm-2">
              <select class="custom-select" id="inlineFormCustomSelect" v-model="selectedColor" >
                <option selected value="black" style="color:black">black</option>
      		  <option value="aqua" style="color:aqua">aqua</option>
                <option value="fuchsia" style="color:fuchsia">fuchsia</option>
                <option value="gray" style="color:gray">gray</option>
                <option value="lime" style="color:lime">lime</option>
	            <option value="maroon" style="color:maroon">maroon</option>
                <option value="red" style="color:red">red</option>
                <option value="blue" style="color:blue">blue</option>
                <option value="green" style="color:green">green</option>
		        <option value="navy" style="color:navy">navy</option>
                <option value="olive" style="color:olive">olive</option>
                <option value="orange" style="color:orange">orange</option>
                <option value="purple" style="color:purple">purple</option>
		        <option value="silver" style="color:silver">silver</option>
                <option value="teal" style="color:teal">teal</option>
              </select>
            </div>
            <button type="button" class="btn btn-primary col-sm-2" @click="register">Register to chat</button>
          </form>
        </div>

        <div v-for="message in messages" class="col-sm-9">
          <hr>
          <p>
      	    <span :style="{color:message.color}"><strong><big>{{message.user_name}}</big></strong></span>&nbsp;
            <span style="color:grey;"><small>{{message.create_time}}</small></span>
	      </p>
          <p>{{message.text}}</p>
        </div>
    </div>
    <!-- Modal -->
    <div>
      <b-modal 
	    ref="my-modal" 
		:title="title" 
		header-border-variant="light" 
		header-bg-variant="light"
		body-bg-variant="light"
		footer-border-variant="light" 
		footer-bg-variant="light">
	    <div v-if="next_step">
          We want to entangle ions between two traps via
		  <input type="text" class="form-control col-sm-10" placeholder="phonon" v-model="answer2">
        </div>
        <div v-else>
          Which ion is used in our labs?
		  <input type="text" class="form-control col-sm-10" placeholder="Ca43" v-model="answer1">
        </div>
		<span v-if="error_info!=null" style="color:red;"><small>{{error_info}}</small></span>
		<template v-slot:modal-footer>
          <div class="w-100">
            <button type="button" class="btn btn-primary float-right" v-if="next_step" @click="finish_register">Finish</button>
            <button type="button" class="btn btn-primary float-right" v-else @click="go_next">Next</button>
          </div>
        </template>
      </b-modal>
    </div>
  </div>
</template>

<script>

module.exports = {
  data: function() {
    return {
      login: false,
	  show_logout: false,
	  next_step: false,
  	  user_name: null,
	  answer1: null,
	  answer2: null,
	  selectedColor: "black",
	  title: "Identity Verification (1/2)",
	  messages: null,
	  input_message: null,
	  error_info: null
    };
  },
  methods: {
    post_message: function (event) {
      this.$http.post('post-chat', {
        name: this.user_name,
		color: this.selectedColor,
        text: this.input_message
      })
      .then((response) => {
	    console.log(response.data);
        if (response.data == "1 rows inserted into table messages\n") {
		  this.$http
            .get('get?table=messages&orderBy=create_time')
            .then(response => (this.messages = response.data))
            .catch((error) => {
              console.log(error);
          });
		}
      })
      .catch((error) => {
        console.log(error);
      });
	  this.input_message = null;
    },
	register: function (event) {
	  if (this.user_name == null) {
		  this.user_name = "userA";
	  }
	  this.$http.post('register', {
        name: this.user_name,
        color: this.selectedColor
      })
      .then((response) => {
	    console.log(response.data);
        if (response.data == "Start the first question.\n") {
		    this.next_step = false;
			this.title = "Identity Verification (1/2)";
		    this.$refs['my-modal'].show();
		}
		else if (response.data == "Go to the second question.\n") {
		    this.next_step = true;
			this.title = "Identity Verification (2/2)";
		    this.$refs['my-modal'].show();
		}
		else {
		    this.$cookies.set("name", this.user_name, "30d", "/blade-trap");
			this.$cookies.set("color", this.selectedColor, "30d", "/blade-trap");
	        this.login = true;
		}
      })
      .catch((error) => {
        console.log(error);
      });
	},
	go_next: function (event) {
	  this.error_info = null;
	  this.$http.post('register', {
        answer: this.answer1
      })
      .then((response) => {
	    console.log(response.data);
        if (response.data == "Go to the second question.\n") {
		    this.next_step = true;
			this.title = "Identity Verification (2/2)";
		}
		else {
		  this.error_info = response.data;
		}
      })
      .catch((error) => {
        console.log(error);
      });
	},
	finish_register: function (event) {
	  this.error_info = null;
	  this.$http.post('register', {
        answer: this.answer2
      })
      .then((response) => {
	    console.log(response.data);
        if (response.data == "Register success!\n") {
		    this.$refs['my-modal'].hide();
			this.$cookies.set("name", this.user_name, "30d", "/blade-trap");
			this.$cookies.set("color", this.selectedColor, "30d", "/blade-trap");
	        this.login = true;
		}
		else {
		  this.error_info = response.data;
		}
      })
      .catch((error) => {
        console.log(error);
      });
	},
	logout: function (event) {
	  this.$cookies.remove("name", "/blade-trap");
	  this.$cookies.remove("color", "/blade-trap");
	  this.login = false;
	  this.show_logout = false;
	}
  },
  created () {
    this.$http
      .get('get?table=messages&orderBy=create_time')
      .then(response => (this.messages = response.data))
      .catch((error) => {
        console.log(error);
      });
	if(this.$cookies.isKey("name") && this.$cookies.isKey("color") && this.$cookies.isKey("token")) {
      this.user_name = this.$cookies.get("name");
	  this.selectedColor = this.$cookies.get("color");
	  this.login = true;
	}
  }
};
</script>

<style scoped>
p {
  line-height: 20px;
  padding: 2px 0;
  font-size: 14px;
  text-shadow: none;
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-word;
}

</style>
