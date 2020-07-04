<template>
  <div class="container-fluid">
    <div class="row flex-xl-nowrap">
	  <div class="fixed-top d-none d-xl-block col-xl-2 bd-toc">
			<br><br><br><br>
      <ul class="section-nav">
			  <li class="toc-entry toc-h2"><a href="#active-job">Active Job</a>
			    <ul>
						<li class="toc-entry toc-h3"><a href="#x1">搭光路</a></li>
						<li class="toc-entry toc-h3"><a href="#x2">电路部分</a></li>
						<li class="toc-entry toc-h3"><a href="#x3">Explore</a></li>
					</ul>
				<li class="toc-entry toc-h2"><a href="#todo-list">Todo List</a></li>
				<li class="toc-entry toc-h2"><a href="#archived-work">Archived Work</a>
					<ul>
						<li class="toc-entry toc-h3"><a href="#set-up-table">Set up Optical Table</a></li>
						<li class="toc-entry toc-h3"><a href="#imaging-system">Set up Chamber and Imaging System</a></li>
					</ul>
				</li>
			</ul>
    </div>
	  <main class="offset-xs-0 offset-xl-2 col-sm-12 col-xs-12 col-xl-10 py-md-3 pl-md-5 bd-content" role="main">
	    <h1 class="bd-title" id="content">Optics</h1>
      <p class="bd-lead">The tool to control ions.</p>
      
		  <div class="anchor" id="active-job"></div>
      <h4><span style="color:#800000;font-family:comic sans ms,cursive;">Active Job</span></h4>
      <h5 id="x1">搭光路</h5>
      <p>370, 399, 935的光路已经初步搭好了，之后更换物镜细调。</p>
      <p>一般方法：先不加透镜使光穿过刀片，然后加透镜使光穿过刀片。之后使光略微有个倾角打到刀片上，观察聚焦效果。</p>
      <p>370,399合束，注意用beam profile观察焦点处光斑的重合情况。</p>
      <p>目前进波长计走的是保偏光纤，需要调偏振使其稳定。调节设备：PAX1000VIS/M。</p>
      <p>准备搭171的光路。</p>
      <p>装PBS时不要压的太用力，否则会影响性能甚至压碎。</p>
      <p>测试EOM的方法，调节FP腔时，需要让出射的两个光点重合在一起。然后接上PD直接在示波器上看就行，注意光强不要加太强。</p>
      <p>PMT的平移台需要往后挪，避免遮挡光路。</p>
      
      <h5 id="x2">电路部分</h5>
      <p>铜管艰难地做好了，但其Q值只有160。双螺旋铜管，不知道会不会出什么问题</p>
      <p>DAC的滤波板和线先凑合用着，之后再改进。（新画一块板子）</p>
      <p>DDS后面要安装VVA</p>
      <p>需调节micromotion</p>
      
      <h5 id="x3">Explore</h5>
      <p>Maverick, big brother in our lab, gave a lecture <a href="Daily-operations-with-single-ion.pptx">"What to do after loading ion?"</a>
		    on Jan 4, 2020. Worth a read!</p>
		  <p>To explore what we need to do, here is a phD thesis <a href="Moehring-Thesis.pdf">"Remote Entanglement of Trapped Atomic Ions"</a>
		    which can gives us some background for ion photon entanglement.</p>

		  <div class="anchor" id="todo-list"></div>
		  <h4><span style="color:#800000;font-family:comic sans ms,cursive;">Todo List</span></h4>
		  <p>There always a lot things to do:</p>
		  <ul>
			  <li>Make Yb171 ion stable</li>
			  <li>install another PMT</li>
			  <li>install 935 AOM</li>
			  <li>Impletement a sequencer</li>
			  <li>lock 370's frequency</li>
			  <li>Increase fidelity</li>
			  <li>Applying 12.6GHz microwave</li>
			  <li>Increase qubit coherence</li>
			  <li>...and much more!</li>
		  </ul>
		
		<div class="anchor" id="archived-work"></div>
		<h4><p><span style="color:#800000;font-family:comic sans ms,cursive;">Archived Work</span></p></h4>
		
		<div class="anchor" id="set-up-table"></div>
		<h5>Set up Optical Table</h5>
		<p>The table plate for the optical small table is customized by 大恒光电. Here is the <a href="table/optical-small-table-drawing.pdf">drawing</a>.</p>
	  <p>While the table legs is from Thorlabs. Here is the list to build a leg:</p>
	  <table class="table">
			<thead>
				<tr>
					<th scope="col">Modal</th>
					<th scope="col">Description</th>
					<th scope="col">Unit Price</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>C1515/M</td>
					<td>Metric Mounting Post Bracket</td>
					<td>￥826.83</td>
				</tr>
				<tr>
					<td>PSHA/M</td>
					<td>Metric Adjustable Height Collar</td>
					<td>￥534.55</td>
				</tr>
				<tr>
					<td>PB4/M</td>
					<td>6662-001 Rev C, P-Series Pedestal Base Adpater</td>
					<td>￥106.05</td>
				</tr>
				<tr>
					<td>P300/M</td>
					<td>Ø38mm Solid Post 300mm Length</td>
					<td>￥674.48</td>
				</tr>
				<tr>
					<td>PF175</td>
					<td>P-Series Clamping Fork</td>
					<td>￥149.50</td>
				</tr>
			</tbody>
		</table>
	  <div class="row" v-lazy-container="{ selector: 'img' }" v-viewer>
      <div class="col-xs-12 col-sm-12 col-md-6">
	      <figure class="figure">
			    <img data-src="table/optical_table.jpg" data-loading="table/optical_table_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 1:</strong> Optical table set up!</figcaption>
	      </figure>
 	    </div>
 	    <div class="col-xs-12 col-sm-12 col-md-6">
	      <figure class="figure">
			    <img data-src="table/optical_small_table.jpg" data-loading="table/optical_small_table_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 2:</strong> Our optical small table</figcaption>
	      </figure>
 	    </div>
	  </div>
		
		<div class="anchor" id="imaging-system"></div>
		<h5>Set up Chamber and Imaging System</h5>
		<p>Before we build up our imaging system, we fix the chamber's position. 
		   <a href="imaging-system/stands.zip">Homemade stands</a> are used to rest the chamber on to a designed height.
		   (The window center is set to 3 inches height, thus most of the mirrors can be mounted directly to pedestal posts.)</p>   
		<p>Below is the schematic of the imaging system. 
		   As fig 1 indicates, the objective will collect the light emitted from the object point at its working distance. 
		   The Best Form lens which designed to minimize spherical aberration will then focuses the light to the position of the aperture.
		   We use two lens (F=50) to form a doublets as an eyepiece. The doublets' focus length is 25mm. 
		   So to realize magnification, the distance from aperture to the doublets should between 25mm to 50mm.</p>
		<p>This is a decoupled imaging system. 
		   Therefore, you can tune the telescoping lens tube first to see a clear aperture eage on CCD.
		   Then adjust the stages to observe the blades' structure.</p>
		<div class="row" v-lazy-container="{ selector: 'img' }">
		  <div id="fig3" class="col-12">
		    <template v-if="img3">
            <img data-src="imaging-system/schematic.svg" data-loading="loading.svg" class="figure-img img-fluid rounded"  @click="img3=false">
        </template>
		    <template v-else>
           <div style="position:relative;">
	           <a class="btn btn-link" style="position:absolute;top:10px;" @click="img3=true">back</a>
	         </div>
	         <div class="overflow-auto">
	    	     <embed src="imaging-system/schematic.svg" width="1134" height="638">
	      	 </div>
        </template>
		    <div class="figure-caption"><strong>Fig 3:</strong> The schematic of our imaging system</div>
	    </div>
	  </div>
	  <div class="row" v-lazy-container="{ selector: 'img' }" v-viewer>
	    <div class="col-xs-12 col-sm-12 col-md-8">
	      <figure class="figure">
			    <img data-src="imaging-system/photo.jpg" data-loading="imaging-system/photo_s.jpg" class="figure-img img-fluid rounded">
		      <figcaption class="figure-caption"><strong>Fig 4:</strong> A photo of our imaging system</figcaption>
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
      img3: true
    };
  }
};
</script>

<style scoped>

</style>
