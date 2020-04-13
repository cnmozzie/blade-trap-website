<template>
  <div class="container-fluid">
    <div class="row flex-xl-nowrap">
	  <div class="fixed-top d-none d-xl-block col-xl-2 bd-toc">
			<br><br><br><br>
            <ul class="section-nav">
			    <li class="toc-entry toc-h2"><a href="#overview">Overview</a>
				<li class="toc-entry toc-h2"><a href="#air-bake-out">Air Bake-out</a>
					<ul>
						<li class="toc-entry toc-h3"><a href="#prebake">Prebake</a></li>
						<li class="toc-entry toc-h3"><a href="#bake-chamber">Bake the Vaccum Chamber</a></li>
					</ul>
				</li>
				<li class="toc-entry toc-h2"><a href="#wire-bonding">Wire Bonding</a>
					<ul>
						<li class="toc-entry toc-h3"><a href="#task-description">Task Description</a></li>
						<li class="toc-entry toc-h3"><a href="#enviroment">Enviroment</a></li>
						<li class="toc-entry toc-h3"><a href="#procesure">Procesure</a></li>
						<li class="toc-entry toc-h3"><a href="#wire-bonding-figures">Figures</a></li>
					</ul>
				</li>
				<li class="toc-entry toc-h2"><a href="#blade-alignment-and-measurement">Blade alignment and measurement</a></li>
				<li class="toc-entry toc-h2"><a href="#oven-assembling-and-test">Oven Assembling and Test</a>
					<ul>
						<li class="toc-entry toc-h3"><a href="#assembling">Assembling</a></li>
						<li class="toc-entry toc-h3"><a href="#test-method">Test Method</a></li>
						<li class="toc-entry toc-h3"><a href="#test-result">Test Result</a></li>
						<li class="toc-entry toc-h3"><a href="#oven-figures">Figures</a></li>
					</ul>
				</li>
				<li class="toc-entry toc-h2"><a href="#assemble-chamber">Assemble the Chamber</a></li>
			</ul>
      </div>
	  <main class="offset-xs-0 offset-xl-2 col-sm-12 col-xs-12 col-xl-10 py-md-3 pl-md-5 bd-content" role="main">
	    <h1 class="bd-title" id="content">Chamber</h1>
        <p class="bd-lead">Make a clear room for ions.</p>
		<div class="anchor" id="overview"></div>
        <h4><span style="color:#800000;font-family:comic sans ms,cursive;">Overview</span></h4>
		<p>The blade trap is more like a handicraft. There's no a standar way to make it.
		   We use <a href="Blade-trap-assembly-and-vacuum-system.pdf">《装腔宝典》</a>（国际知名专家Jarry Ma倾情撰写） as our primary reference here.</p>

		<p>Make sure you have plenties of money to prepare the necessary parts and devices before you start to go. 
		  Click <a href="chamber.html">here</a> to look at the parts list for assembling the chamber!</p>

	    <div class="anchor" id="air-bake-out"></div>
        <h4><span style="color:#800000;font-family:comic sans ms,cursive;">Air Bake-out</span></h4>

	    <p>To achieve a high vacuum condition , it is critical that materials are free of gasses, water vapor, and other contaminants. 
	       A vacuum bake-out is a process used to remove such contaminants. You may like to search it online to learn more.</p>

		<div class="anchor" id="prebake"></div>
		<h5>Prebake</h5>
	    <p>Some components of the chamber can be baked-out in the air. Reducing flange, octagon vacuum chamber, conical reducer nipples and 5-way cross are baked before assembling.</p>
	    <p>Our oven can set different phases with different temperatures. Heating is divided to eight phases and each lasts 1080 minutes(the longest time we can set.). 
	       The first phase is set to 200℃ while others are set to 300℃.</p>
	    <p>Then we need to cool down the oven to room temperature to get back our chamber. Cooling is divided to four phases and each lasts 1080 minutes. 
	       The first phase is set to 40℃ while others are set to 20℃. When the temperature is near 80~90℃, we can open the oven door slightly to speed up the cooling process.</p>
	    <div class="row" v-lazy-container="{ selector: 'img' }" v-viewer>
          <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure">
			  <img data-src="air_bake-out/inside-oven.jpg" data-loading="air_bake-out/inside-oven_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 1:</strong> The chamber components are wrapped with foil. We've put some bricks around it to make it more like baking!</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure">
			  <img data-src="air_bake-out/outside-oven.jpg" data-loading="air_bake-out/outside-oven_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 2:</strong> Our hot oven</figcaption>
	    	</figure>
 	      </div>
	    </div>
		
		<div class="anchor" id="bake-chamber"></div>
		<h5 id="bake-chamber">Bake the Vaccum Chamber</h5>
		
		<p>After assembling the vacuum chamber, we should start the air bake-out. 
		   The contaminants will be pumped out by the both molecular pump and getter-ion pump outside through the angle valve during baking. 
		   (Note: StarCell ION pump can have a high pumping speed only to some specific contaminants, thus it's important the chamber has get an high vacuum condition before finish baking.)</p>
	    <p>To start the air bake-out, you should first connect the angle valve to the outside pump. Then connect the controller wire and power wire of NEG pump.
	       You can also connect the oven pin to the outside current source in order to do degassing during the bake-out.</p>
		<p>Slowly increase the oven temperature from room temperature to 145℃, and keep this temperature during bake-out. 
		   (Rapidly temperature change and too high temperature may break the chamber window.)
		   The NEG pump should keep in conditioning mode (250℃ by default) during bake-out process too.
	       At the same time, start mechanical pump, wait until it to be stable, then start molecular pump. 
		   When the chamber reaches a reasonable vacuum condition (E-8 Torr magnitude), you can start the getter-ion pump.
		   As a rule of thumb, you can start ion pump when the oven reaches 145℃, as <a href="#fig3">Fig 3</a> does.</p>
		<p>With the contaminants slowly pumping out, the pressure should gradually reach the pump's limit (about 1~3 E-9 Torr).
		   It's time to activate the NEG pump. Since we will open the oven and close the angle valve the time the activation is finished, 
		   we will cool the oven temperature to 100℃ first, in case the oven temperature change too rapidly.
		   (We forgot do it during the first activation in <a href="#fig3">Fig 3</a>, thus we stop the activation and do it again after cooling down to 100℃.)
	       You can consider to perform degassing for ytterbium oven  when waiting for the hot oven cooling down. 
		   When activation finished, close the angle valve and start StarCell ION pump.
		   Stop the NEG pump and wait the oven cooling to room temperature. The chamber pressure should reach E-11 Torr region thus finishes the baking process.</p>
		<p>The pressure was slowly growing up from 3.4E-11 Torr to 2.2E-10 Torr after we taking out the chamber from the oven. 
	       Fortunately, after about a week, the pressure went back to 1.3E-10 Torr and became stable, which is an acceptable vacuum condition.</p>
		<div class="row" v-lazy-container="{ selector: 'img' }">
		  <div id="fig3" class="col-12">
		    <template v-if="img3">
             <img data-src="air_bake-out/stage1.svg" data-loading="loading.svg" class="figure-img img-fluid rounded"  @click="img3=false">
            </template>
		    <template v-else>
              <div style="position:relative;">
	            <a class="btn btn-link" style="position:absolute;top:10px;" @click="img3=true">back</a>
	          </div>
	          <div class="overflow-auto">
	    	    <embed src="air_bake-out/stage1.svg" width="1040" height="400">
	      	  </div>
            </template>
		    <div class="figure-caption"><strong>Fig 3:</strong> The first try of air bake-out. 
		    After start the ion pump, the pressure dropped slowly in the first day, and seemed not changed in the next few days.
		    Typcally, the ion pump pressure can reach E-9 Torr region. Thus we decide to start cooling in advance.
		    After the activation, the NEG current is finally stuck in 850nA, which is far from satisfied.</div>
	      </div>
		  <div id="fig4" class="col-12">
		    <template v-if="img4">
              <img data-src="air_bake-out/stage2.svg" data-loading="loading.svg" class="figure-img img-fluid rounded"  @click="img4=false">
            </template>
		    <template v-else>
              <div style="position:relative;">
	            <a class="btn btn-link" style="position:absolute;top:10px;" @click="img4=true">back</a>
	          </div>
	      	  <div class="overflow-auto">
	    	    <embed src="air_bake-out/stage2.svg" width="1040" height="400">
	      	  </div>
            </template>
		    <div class="figure-caption"><strong>Fig 4:</strong> After tighting some bolts, we start the second try of air bake-out.
	  	      Although we had a better start than before, but the ion pump pressure is still stuck at 2E-8 Torr.
		      After a few days I realised I made a mistake before that I forget to clean the angle valve before assembling the chamber.
		      Therefore we stop this bake-out and change the angle valve to a clean one.</div>
		  </div>
		  <div id="fig5" class="col-12">
	        <template v-if="img5">
              <img data-src="air_bake-out/stage3.svg" data-loading="loading.svg" class="figure-img img-fluid rounded"  @click="img5=false">
            </template>
		    <template v-else>
              <div style="position:relative;">
	    	    <a class="btn btn-link" style="position:absolute;top:10px;" @click="img5=true">back</a>
	    	  </div>
	    	  <div class="overflow-auto">
	      	    <embed src="air_bake-out/stage3.svg" width="1040" height="400">
	      	  </div>
            </template>
		    <div class="figure-caption"><strong>Fig 5:</strong> The third try of air bake-out looks normal in the end.
		      (The current data is recorded as the operation voltage is set to -5000kV.)</div>
		  </div>
		</div>
		
		<div class="anchor" id="wire-bonding"></div>
		<h4><span style="color:#800000;font-family:comic sans ms,cursive;">Wire Bonding</span></h4>
		<div class="anchor" id="task-description"></div>
		<h5>Task Description</h5>
		<p>The blade electrodes are connect with externel voltage source via wires. The blade is bonded with gold bonding wires, 
		   which will extend by insulated Cu wire to connect ouside voltage source eventually.
		   We also need to bond the capacitors to the blade via gold wires to filter the noise. </p>
		<div class="anchor" id="enviroment"></div>
		<h5>Enviroment</h5>
		<p>Blades, wires and capacitors, together with device or tools that will contact with them are all cleaned by pure ethanol to avoid organic matters influence the vacuum condition.
    	   The insulated wire is not recommended to clean ultrasonically since insulating material may take off from the wire during the cleaning.</p>
		<div class="anchor" id="procesure"></div>
		<h5>Procesure</h5>
		<p>The first step is to bond gold wires on the bonder platform. 
		   You would like blades, gold bonding wires, capacitors, a wire bonder, some other tools like tweezers to start.
		   (Parameters for the wire bonder should be proper choosed so that bonder joint is tight while the blade or capacitors won't be broken.)
		   The procesure to bond gold wires is quite trivial:
		   <ul>
			<li>bond a short wire to one side of a capacitor, then bond a long wire to the other side of the capacitor (each DC blade need 5 capacitors)</li>
			<li>bond the short wire to the blade segment while the long wire to the blade ground</li>
			<li>bond another gold wires to every DC, RF and ground electrodes. Make sure they are long enough to connect with insulated wires (14 wires in total)</li>
		   </ul>
		   <em>Note: we just confirmed that if you wind the gold wire around the copper wire, it's possible to use the bonder to bond those two wires,
		       which may be a bit difficult if using a spot welder. Thus you can avoid the tedious work later by connecting those wires first, 
			   though it may not easy to wind the insulated wire to the holder. After all, troubles conserve.</em>
		</p>
		<p>Suppose we want to connect gold wires to insulated wires later, the next step is winding insulated wires to the holder 
		   (or blade alignment, discussing later). Before winding, the insulated material on the wire ends should be taken off.
		   You can cut it with a knife or scissors, or even burn it with fire, whatever you like.
		   A small trick is applied here to keep the wires neat: the wire should enclose previous wires when winding around the hole. (See <a href="#img11">Fig 11</a>)</p>
		<p>Since the blade and insulated wire is attached to the holder now, it seems impossible to use the bonder. 
		   Therefore we use a spot welder instead. Using stainless steel sheets to assist is optional. Winding the gold wire then welding directly is fine too. (See <a href="#img13">Fig 13</a>)
		   Again, Parameters for the spot welder should be proper choosed so that joint is tight while the gold wire won't be broken.</p>
		<div class="anchor" id="wire-bonding-figures"></div>
		<h5>Figures</h5>
		<div class="row" v-lazy-container="{ selector: 'img' }" v-viewer>
          <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure">
			  <img data-src="bond_blade/wire_bonder.jpg" data-loading="bond_blade/wire_bonder_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 6:</strong> Our wire bonder</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure">
			  <img data-src="bond_blade/RF_blade.jpg" data-loading="bond_blade/RF_blade_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 7:</strong> An RF blade and a capacitor with gold wires</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure">
			  <img data-src="bond_blade/DC_blade.jpg" data-loading="bond_blade/DC_blade_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 8:</strong> A already bonded DC blade</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure">
			  <img data-src="bond_blade/working_view.jpg" data-loading="bond_blade/working_view_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 9:</strong> Our lovely blade in microscope view</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure">
			  <img data-src="bond_blade/holder_and_wire.jpg" data-loading="bond_blade/holder_and_wire_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 10:</strong> Wind the insulated wire around the hole...</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure" id="img11">
			  <img data-src="bond_blade/holder_with_wire.jpg" data-loading="bond_blade/holder_with_wire_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 11:</strong> Then put blades...</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure">
			  <img data-src="bond_blade/spot_welder.jpg" data-loading="bond_blade/spot_welder_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 12:</strong> Our spot welder. Press 'PROG' and 'CHG' can set the pulse power; Press 'RUN' to start welding.</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure" id="img13">
			  <img data-src="bond_blade/au_wire_and_cu_wire.jpg" data-loading="bond_blade/au_wire_and_cu_wire_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 13:</strong> Welder leaving wires and finish this job!</figcaption>
	    	</figure>
 	      </div>
	    </div>

		<div class="anchor" id="blade-alignment-and-measurement"></div>
		<h4><span style="color:#800000;font-family:comic sans ms,cursive;">Blade alignment and measurement</span></h4>

		<p>The bonder cannot be used after blades attached to the holder while the blade alignment may be harder after connecting gold wire with copper wire.
		   Thus we aligned blades right after winding insulated wires to the holder.</p>	
		
		<p>The goal of blade alignment is making DC null point and RF null point coinside when applying symmetry voltage. 
		   Specifically, the blade eages should form a rectangle on the side view. 
		   The segment of DC blades should also aligned so that the null point can located at the center.
		   We used a WiFi digital handheld microscope to help alignment.</p>
		   
		<p>For a nearly perfect alignment, you can refer to Jarry Ma's <a href="Blade-trap-assembly-and-vacuum-system.pdf">《装腔宝典》</a>.
		   An absolute coordinate system method is introduced. You may find the operation describe there cumbersome. (I feel the same.)
		   A more feasible way is first align the blades with eye estimation. Then apply greedy algorithm to adjust the blades step by step.</p>
		
		<p>Lacking of experiments, our alignment result is far from satisfied (<a href="#img16">Fig 16</a>). 
		   We just pay too much attention on segments alignment than side edges alignment.
		   I would adjust my tactic and be more patient if I would do it again.</p>
		
		<div class="row" v-lazy-container="{ selector: 'img' }" v-viewer>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure">
			  <img data-src="alignment/aligning_blades.jpg" data-loading="alignment/aligning_blades_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 14:</strong> Aligning blades by F100 microscope...</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure">
			  <img data-src="alignment/checking_result.jpg" data-loading="alignment/checking_result_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 15:</strong> Observing the side view of the blades with another microscope...</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-12">
	        <figure class="figure" id="img16">
			  <img data-src="alignment/alignment_results.svg" data-loading="alignment/alignment_results_s.png" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 16:</strong> This figure is combined with pictures of two side views,
		        whose 4 edges are denoted by blue and orange box respectively. Suppose the blade's edge is straight, 
		        the side view of 4 edges at the middle should form the pink box. The RF and DC null for a symmetry voltage is denoted as pink and green point.
		        Using CCD camera's data, we estimate that the height difference of each blade pair is 348.4um and 263.9um.</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure">
			  <img data-src="alignment/ccd_picture.png" data-loading="alignment/ccd_picture_s.png" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 17:</strong> Buttom view of blades in CCD using LMU-5x-NUV as objective. 
		        The reading of stage's vernier micrometer is showed in this figure. It was read when each corner (orange circle) was tuned to the middle of CCD screen.
		        We estimate that the gap between downner blades is about 421.5um.</figcaption>
	    	</figure>
 	      </div>
	    </div>
		
		<div class="anchor" id="oven-assembling-and-test"></div>
		<h4><p><span style="color:#800000;font-family:comic sans ms,cursive;">Oven assembling and test</span></p></h4>

		<p>The ytterbium source is indispensable for our ion trap experiments. Here we refer to it as "oven". 
		   The oven should have a container to contain the ytterbium, two ends to connect to the current source and a widget to fix its postion. 
		   Once we assembled the oven, we would like to put it into a vacuum glass tube and see if it works.</p>
		<div class="anchor" id="assembling"></div>
		<h5>Assembling</h5>
		<p>We use a plastic syringe needle as the container. 
		   A customized metal bracket (see <a href="#img18">Fig 18</a>) together with ceramic cement is used to fix the needle to the chamber. 
     	   A ceramic tube is also needed to seperate the needle and the braket so that the oven will not directly connect to the ground. 
		   Again, we use insulated wires (should be abled to withstand 10A current) and stainless steel sheets to connect the oven with external current source. 
		   You may also want a steel wire to poke the ytterbium into the needle. Most of things mentioned above can clean ultrasonically. 
		   (Be Cautioned! Someone of our neighbor lab just tried to clean the barium with pure ethanol and found it disappeared.)</p>
		<p>We need to cut the ytterbium to small pieces (cut it to thin stripes may be helpful) so as to put it to the needle. 
		   Yb174 is in the form of ingots while Yb171 is in the form of patches. It's not easy to tell which one is easier to handle.
		   Once you poked the ytterbium to the needle, following below steps:
		   <ul>
			<li>fix the ceramic tube to the bracket with ceramic cement (can speed up by a heat gun)</li>
			<li>take off the insulated material from the wire ends and weld it with a steel sheet</li>
			<li>put the needle to the tube with the right direction and connect it with two insulated wire via steel sheets</li>
			<li>fix the needle to the ceramic tube with ceramic cement</li>
		   </ul>
		   <em>Tips: The resistance of welder joint should be small, otherwise all the power will be absorbed and the ytterbium will not be heated. 
		       However, it's not easy even just to connect wires or needles with steel sheets by a spot welder. 
		       One reason is that the steel sheet is not well contacted with the wire when welding. 
			   Thus using pliers to squeeze the joint before welding is strongly recommended.
			   Using gold wire to reduce the resistance may be feasible too.</em>
	    </p>
		<div class="anchor" id="test-method"></div>
		<h5>Test Method</h5>
		<p>As <a href="#img21">Fig 21</a> shows, we connect a vacuum glass tube to a 4-way cross fitting, another two ways of which connect to a mocular pump and a current source.
		   Be careful and don't let screws or wires touch the chamber, otherwise it'll short to the ground.
		   The copper gasket can be reused in this test, as we don't need a very high vacuum condition.</p>
		<p>Oven test is also a process of degassing. When increasing the current, you should see the pressure quickly increases, then slowly drop down.
		   Record the data before the ytterbium spout out if you feel boring.</p>
		<div class="anchor" id="test-result"></div>
		<h5>Test Result</h5>
		<p>The threshhold current for oven 174 is about 5.5A. (The resistance is large because our outside ground wire here is too thin.) Below is the testing data:</p>
		<table class="table table-striped">
			<tbody>
				<tr>
					<th scope="row">current(A)</th>
					<td>1</td>
					<td>1.5</td>
					<td>2</td>
					<td>2.5</td>
					<td>3</td>
					<td>3.5</td>
					<td>4</td>
					<td>4.5</td>
					<td>5</td>
					<td>5.5</td>
				</tr>
				<tr>
					<th scope="row">voltage(V)</th>
					<td>1.2</td>
					<td>1.5</td>
					<td>1.8</td>
					<td>2.2</td>
					<td>2.6</td>
					<td>3.0</td>
					<td>3.5</td>
					<td>4.9</td>
					<td>4.5</td>
					<td>5.0</td>
				</tr>
				<tr>
					<th scope="row">pressure(e-6 mBar)</th>
					<td>-</td>
					<td>5.0</td>
					<td>5.2</td>
					<td>5.2</td>
					<td>5.2</td>
					<td>5.2</td>
					<td>5.4</td>
					<td>5.6</td>
					<td>5.4</td>
					<td>drop quickly</td>
				</tr>
			</tbody>
		</table>
		<p>The threshhold current for oven 171 is about 6.0A. Below is the testing data:</p>
		<table class="table table-striped">
			<tbody>
				<tr>
					<th scope="row">current(A)</th>
					<td>2.5</td>
					<td>3</td>
					<td>3.5</td>
					<td>4</td>
					<td>4.5</td>
					<td>5</td>
					<td>5.5</td>
					<td>6.0</td>
				</tr>
				<tr>
					<th scope="row">voltage(V)</th>
					<td>0.482</td>
					<td>0.578</td>
					<td>0.643</td>
					<td>0.740</td>
					<td>0.842</td>
					<td>0.938</td>
					<td>1.038</td>
					<td>-</td>
				</tr>
				<tr>
					<th scope="row">pressure(e-6 mBar)</th>
					<td>6.1</td>
					<td>6.1</td>
					<td>5.8</td>
					<td>5.6</td>
					<td>5.4</td>
					<td>5.2</td>
					<td>4.8</td>
					<td>drop quickly</td>
				</tr>
			</tbody>
		</table>
		<p>Our 171 Oven failed the test several times. Here is some lessons:
		   <ul>
			<li>The steel sheet should welded closely to needle tip, or the front end of the needle could be hardly heated.</li>
			<li>Make sure the welder joint is tight. Reduce the resistance as much as poosible, or the oven may be heated unevenly.</li>
			<li>Put the needle tip close to the tube, thus we can see the spouted ytterbium more clearly.</li>
		   </ul>
		</p>
		<div class="anchor" id="oven-figures"></div>
		<h5>Figures</h5>
		<div class="row" v-lazy-container="{ selector: 'img' }" v-viewer>
          <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure" id="img18">
			  <img data-src="oven/some_parts_for_oven.jpg" data-loading="oven/some_parts_for_oven_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 18:</strong> Some parts to assemble the oven. Can you tell the ytterbium 171 from the steel sheet?</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure">
			  <img data-src="oven/poking_ytterbium.jpg" data-loading="oven/poking_ytterbium_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 19:</strong> Poking the ytterbium to the needle. Quite tedious work...</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure">
			  <img data-src="oven/assembled_ovens.jpg" data-loading="oven/assembled_ovens_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 20:</strong> Assembled ovens</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure" id="img21">
			  <img data-src="oven/test_equipment.jpg" data-loading="oven/test_equipment_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 21:</strong> We use a vacuum glass tube to test the oven.</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure">
			  <img data-src="oven/abandoned_oven.jpg" data-loading="oven/abandoned_oven_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 22:</strong> 7.5A current is going through the oven. 
		        Though temperature is very high, we still can't observe the ytterbium. This oven is abandoned finally.</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure">
			  <img data-src="oven/result_of_oven171.jpg" data-loading="oven/result_of_oven171_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 23:</strong> The spouted ytterbium 171.</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure">
			  <img data-src="oven/result_of_oven174.jpg" data-loading="oven/result_of_oven174_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 24:</strong> The spouted ytterbium 174.</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure">
			  <img data-src="oven/molecular_pump.jpg" data-loading="oven/molecular_pump_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 25:</strong> Our molecular pump. 
		        Open the valve and turn "PUMPING" button from 0 to 1 to open mechanical pump firstly. 
		        Wait the pressure to get down below 0.1 mBar, then open molecular pump by press "Start/Stop" button.</figcaption>
	    	</figure>
 	      </div>
	    </div>
		
		<div class="anchor" id="assemble-chamber"></div>
		<h4><span style="color:#800000;font-family:comic sans ms,cursive;">Assemble the Chamber</span></h4>

		<p>Now we have all parts to assemble a chamber. We first connect the vacuum chamber with a 5-way cross through a nipple reducer, as <a href="#img26">Fig 26</a> shows.
		   Then we install the blade holder and the oven. The next step is to connect insulated Cu wires of oven, DC and RF electrodes with the feedthrough.
		   Finally, we install all other vacuum parts to the chamber. Click <a href="chamber.html">here</a> to see how we assembling the chamber.</p>
		   
		<p>Before we put the chamber into the oven, we tested all the electronic connections. 
		   The pressure reached 9e-7 mBar after 3 hours' pumping with a molecular pump, which proved no air leakage of the chamber.
		   A good helical resonator was also used for a quick test, which resulted a 285's Q factor and 23MHz's resonant frequency.</p>
		
		<p>It's a simple but tedious work. As Jarry Ma's <a href="Blade-trap-assembly-and-vacuum-system.pdf">《装腔宝典》</a> indicated, 
		   there are 4 things need to be pay attention:
		   <ul>
			<li>Whether the light path is clear.</li>
			<li>Make sure all the wires is correctly connected, not short or open circuits.</li>
			<li>All the parts should be vaccum compatible. Avoid to introduce new contaminants.</li>
			<li>Some parts are fragile. Take care with them when mapulating.</li>
		   </ul>
		   Unfortunately, <strong>we almost fell into very trap listed above</strong> and pay the price.</p>

		<p>Since there are only 5 holes on each edge of the holder, we connected the DC ground electrode via a gold wire to the insulated wire of the other side.
		   After wire bonding, we cannot change the position of this gold wire, for which we take risk that a laser from side window may be blocked by the gold wire.</p>
		   
		<p>As metioned on "Oven Assembling" section, it's not easy to connect wires or needles with steel sheets by a spot welder. 
		   Thus we tend to leave a relativetely long needle and steel sheet. Such a length should be well selected so as to avoid them touching the chamber.
		   After installing two ovens to the chamber, we found that steel sheets of oven 174 touched the chamber and shorted to the ground.
		   The oven is no longer floating to the ground, thus we should make sure the current go from the correct pin to heat the oven by denoting the ground pin.
		   DC electrodes connection also matters. Due to some mistakes, we connect them with the Sub D pins in a strange order, 
		   which partly account for the wrong DC voltage in the second trial to load ions.</p>
		   
		<p>How does the vaccum condition perform if I don't clean the vaccum parts and assemble it to the chamber directly?
		   I think many people have such thoughts but dare not give a try. Well, I tried. (I would rather not do it.)
		   Most carelessness is harmless. But an angle valve coming back from a machine factory is definitely dangerous.
		   Because of no cleaning the angle valve, it take me 10 days to find the problem and get a reasonable good vaccum condition.(See "Air Bake-out" section.)</p>
		   
		<p>It has been about two months since I installed the holder to the chamber. The first feeling when I saw the holder broken to two parts is not frustrated, but shocked.
		   We finally rescued the holder with ceramic cement. Here's the suggestion: <em>take care of the last 10 minutes.</em> 
		   You definitely don't want to repeat what you did a month ago.</p>
		
		<div class="row" v-lazy-container="{ selector: 'img' }" v-viewer>
          <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure" id="img26">
			  <img data-src="chamber/main_structure_of_chamber.jpg" data-loading="chamber/main_structure_of_chamber_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 26:</strong> Main body of the chamber.</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure">
			  <img data-src="chamber/subd_parts.jpg" data-loading="chamber/subd_parts_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 27:</strong> Parts to assemble SubD connector.</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure">
			  <img data-src="chamber/assemble_dc_feedthrough.jpg" data-loading="chamber/assemble_dc_feedthrough_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 28:</strong> Install DC feedthrough is not easy...</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure" id="img29">
			  <img data-src="chamber/top_view.jpg" data-loading="chamber/top_view_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 29:</strong> Top view of the chamber.</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure" id="img30">
			  <img data-src="chamber/buttom_view.jpg" data-loading="chamber/buttom_view_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 30:</strong> Buttom view od the chamber.</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure">
			  <img data-src="chamber/oven_feedthrough.jpg" data-loading="chamber/oven_feedthrough_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 31:</strong> Oven Feedthrough. Connect red circled pin to the current source and green pin 
		        to the ground for Yb174 oven. Connect them with pink circled pin for Yb171 oven. (Either can be connected to ground.)</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure">
			  <img data-src="chamber/rf_feedthrough.jpg" data-loading="chamber/rf_feedthrough_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 32:</strong> RF Feedthrough. The pins' mark corresponds to RF and ground electrodes showed in 
			    <a href="#img29">Fig 29</a> and <a href="#img30">Fig 30</a>.</figcaption>
	    	</figure>
 	      </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
	        <figure class="figure">
			  <img data-src="chamber/dc_feedthrough.jpg" data-loading="chamber/dc_feedthrough_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 33:</strong> DC Feedthrough. The ten colored numbers corresponds to denoted electrodes showed in 
			    <a href="#img29">Fig 29</a> and <a href="#img30">Fig 30</a>. The other 15 pins is denoted by white dashes as they are open circuits.</figcaption>
	    	</figure>
 	      </div>
	    </div>
      </main>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      img3: true,
	  img4: true,
	  img5: true
    };
  }
};
</script>

<style scoped>

</style>