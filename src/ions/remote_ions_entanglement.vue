<template>
  <div v-katex:auto class="container-fluid">
    <div class="row">
	  <div class="col-12">
	    <h1>Remote Ions Entanglement</h1>
        <p>This article illustrate the principle of entanglement generation between distant quantum
           nodes represented by trapped ions.</p>
		<h3>Introduction</h3>
		<p>Internet is an essential tool in modern human society. It can be regarded as resources (like computation
           powers, informations and memories) distribution over a wide space and inter-connection
           at a distance through classical communication channels. A quantum internet [1] is nothing but a
           quantum resource distribution over many nodes and correlation through quantum communication
           channels. Here, quantum resource is fundamentally a large array of material qubits exploiting
           quantum superposition and entanglement; quantum communication channels can be naturally realized
           by flying optical photons which can carry information to distant locations fast. The quantum
           network can be divided into two classes [2], the first is the quantum communication network for the
           transmission of quantum information over long distances, typically the teleportation of quantum
           states; the second is the quantum computation network for the entanglement distribution over
           large numbers of quantum bits in different nodes, i.e. the distributed quantum computation or
           network-scaled quantum computation. Trapped-ion system becomes a leading platform in local
           quantum computation (here "local" means all the gate operations are implemented between qubits
           in the same trap) since the seminar work of Cirac and Zoller [3]. Thanks to its well isolation
           from the environment and strong controllability, a long coherence time of the single-ion quantum
           memory [4], a high-fidelity two-qubit gate [5, 6] and a near-unit detection efficiency [7, 8] have been
           achieved. All the above achievements are also helpful in the construction of quantum network [2].
           </p>
		<h3>Two-ion entanglement at a distance</h3>
		<p>Two distant ionic qubits, of course, do not have appreciable direct interactions between them.
           Hence the entanglement generation must be mediated by certain information carriers. The optical
		   photons emitted from the ions are the natural candidate for carrying informations. In terms of
           the number of involved light quanta, the entanglement schemes can be classified into two types.
           The first type involves only single photon between two ions [9] and have experimentally realized
           by Blatt group [10]. The second type employs two photons, one from each ion to interfere with
           each other and then entangle parent ions [2, 11, 12]. And this type of entanglement scheme have
           the advantage of being less sensitive to mechanical vibrations and optical paths alignment and is
           used primarily in distant-qubit entanglement experiments. Therefore, we will mainly focus on this
           2-photon scheme. We will illustrate the scheme employing \(^{171}\text{Yb}^+\) ions as a prototype.</p>
	  </div>
	  <div class="col-center-block">  
        <embed src="remote_ions_entanglement/atomic-levels-and-setup.svg" width="600" height="600" id="fig1">
	  </div>
      <div class="col-12">
        <figcaption class="figure-caption text-left"><strong>Figure 1: Involving atomic levels and the setup for ion-ion entanglement. 
		  (This Figure is clipping from the Ref. [2].) (a)</strong> A broad band laser π-pulse simultaneously couples \(|0\rangle\) 
		  to \(|0'\rangle\) and \(|1\rangle\) to \(|1'\rangle\). <strong>(b)</strong> A following spontaneous emission results in an 
		  ion-photon entanglement state \(\alpha|0\rangle|\nu_\text{blue}\rangle+\beta|1\rangle|\nu_\text{red}\rangle\). The schematic polarization 
		  beam splitter (PBS) indicates an elimination of the unwanted σ-polarized photons. <strong>(c)</strong> Two identical setups for ion-ion
          entanglement. Two \(^{171}\text{Yb}^+\) ions are confined in the Paul traps and the emitted photons are collected into
          the single mode fibers to interfere on a beam splitter (BS) shown in the dased-line box. The apparatus
          shown in the box represent a Bell measurement device of linear optics. The coincident click event of the two
          photon detectors heralds the ion-ion entanglement.</figcaption>
	    <br>
	  </div>
      <div class="col-12">
		<p>Atom-photon link is the first step towards the ion-ion entanglement [13, 14]. It's also crucial
           in the \(^{171}\text{Yb}^+\) qubit detection scheme. For an qubit state 
		   \(\alpha|0\rangle+\beta|1\rangle\),  we use a resonant laser near 369.53 nm couples \(|1\rangle\) to \(|1'\rangle\) 
		   following a spontaneous emission into a ion-photon states \(\alpha|0\rangle\otimes|\text{vac}\rangle+\beta|1\rangle\otimes|\nu_\mathbf{k}\rangle\), 
		   which is a typical ion-photon entanglement state. Then the PMT click heralds the qubit system collapse into \(|1\rangle\) with 
		   a probability \(|\beta|^2\) following a cyclic transition between \(|1'\rangle\) and \(|^2S_{1/2},F=1\rangle\)-manifold which emit many scattering photons. 
		   By repeating this process we can estimate the value of \(\beta\). That's how we <em>measured</em> the qubit state.</p>
		<p>It's worth noting that if the initial qubit is already entangled with other qubit 
		   (e.g. \(\alpha|0\rangle\otimes|\psi_0\rangle+\beta|1\rangle\otimes|\psi_1\rangle\)), such entanglement information will maintain during the detection process described above.
		   The qubit system collapse into \(|1\rangle\otimes|\psi_1\rangle\) with a probability \(|\beta|^2\) while \(|0\rangle\otimes|\psi_0\rangle\) otherwise.
		    </p>
		<p>To implement ion-ion entanglement, we consider a broad band π-polarized
		   laser coupling both \(|0\rangle\) to \(|0'\rangle\) and \(|1\rangle\) to \(|1'\rangle\). (See <a href="#fig1">Fig. 1(a)</a>).
		   Starting from the same intial qubit state \(\alpha|0\rangle+\beta|1\rangle\), if the laser pulse is a π-pulse, the state will be
           \(\alpha|0'\rangle+\beta|1'\rangle\). Then as shown in <a href="#fig1">Fig. 1(b)</a>, a spontaneous emission results in a ion-photon
           entanglement state \(\alpha|0\rangle|\nu_\text{blue}\rangle+\beta|1\rangle|\nu_\text{red}\rangle\). (Although there is probability for 
		   \(|1'\rangle\) decaying into \(|^2S_{1/2},F=1,m_F=\pm1\rangle\) and emitting σ-polarized photons, we could always use a polarizing beam
           splitters (PBS) to eliminate this case.) The photon qubit is encoded by its frequency, denoting by
		   \(|\nu_\text{blue}\rangle\) and \(|\nu_\text{red}\rangle\) here. For \(^{171}\text{Yb}^+\) ions, 
		   these two frequencies have a difference around 14.7 GHz, while the bandwidth of each state is around 20 MHz which is just the excited-level linewidth, 
		   so these type of photonic qubit is well-defined. If we consider another ion is initialized in the state 
           \(\gamma|0\rangle+\delta|1\rangle\), then due to the same argument, the ion-photon entanglement state will be 
           \(\gamma|0\rangle|\nu_\text{blue}\rangle+\delta|1\rangle|\nu_\text{red}\rangle\). Hence, the state of the two ion-photon systems is:
		   <div class="anchor" id="eq1"></div>
		   $$\begin{aligned}
           |\psi\rangle_{12} &=(\alpha|0\rangle_1|\nu_\text{blue}\rangle_1+\beta|1\rangle_1|\nu_\text{red}\rangle_1) \\
           &\otimes(\gamma|0\rangle_2|\nu_\text{blue}\rangle_2+\delta|1\rangle_2|\nu_\text{red}\rangle_2)
           \end{aligned}\tag{1}$$</p>
	  </div>
	  <div class="col-center-block">  
        <embed src="remote_ions_entanglement/beam-splitter.svg" width="300" height="300" id="fig2">
	  </div>
      <div class="col-12">
        <figcaption class="figure-caption text-center"><strong>Figure 2:</strong> Two photon modes interfere on a beam splitter.</figcaption>
	    <br>
	  </div>
      <div class="col-12">
		<p>The second step is photon-photon inteference which is most crucial in the generation of ion-ion
           entanglement. The two emitted photons are respectively collected into single mode fibers as shown
           in <a href="#fig1">Fig. 1(c)</a> and then interfere on a beam splitter (BS), see <a href="#fig2">Fig. 2</a>. The effect of BS to the photon
           annihilation (creation) operators from the two input ports, \(\hat{a}\) and \(\hat{b}\) is like a SU(2)-rotaion to them [15]:
		   $$\begin{aligned}
           &\hat{a} \rightarrow \hat{a}^{\prime}=e^{i \theta J_{y}} \hat{a} e^{-i \theta J_{y}}=\hat{a} \cos \left(\frac{\theta}{2}\right)-\hat{b} \sin \left(\frac{\theta}{2}\right)\\
           &\hat{b} \rightarrow \hat{b}^{\prime}=e^{i \theta J_{y}} \hat{b} e^{-i \theta J_{y}}=\hat{a} \sin \left(\frac{\theta}{2}\right)+\hat{b} \cos \left(\frac{\theta}{2}\right),
           \end{aligned}\tag{2}$$
		   where \(J_{y}=\frac{i\left(\hat{a} \hat{b}^{\dagger}-\hat{a}^{\dagger} \hat{b}\right)}{2}\) and \(\theta\) is the rotation angle. 
		   For a <em>50/50 lossless BS</em>, the rotation angle is π/2. (This fact exhibits the essential connection between the Ramsey interferometry and Mach-Zehnder
           interferometry, since a Ramsey pulse is two rotaion with one interrogation time between them during which the microwave and atoms has a coherent free evolution respectively
		   while Mach-Zehnder interferometry is implemented by two beam-splitters with a free light path between them where each beam has a coherent free evolution respectively.
		   In other words, Ramsey interferometry compares atom's coherence with microwave's and Mach-Zehnder interferometry compares photons' coherence of two different path.)</p>
		<p>Next, we will show that the inteference on BS with detections after the two output
           ports is equivalent to a Bell measurement, i.e. the apparatus in the dashed-line box in <a href="#fig1">Fig. 1(c)</a> is a
           Bell measurement device of linear optics [12, 16]. There are totally four photon operators \(\hat{a}_r\), \(\hat{a}_b\), \(\hat{b}_r\)
           and \(\hat{b}_b\) representing the red photon and blue photon of spatial mode "a" and "b".
           Only the same color will interfere with each other, hence we acquire the output mode operators with
           a 50/50 lossless BS: \(\hat{a}_{i}^{\prime}=1 / \sqrt{2}\left(\hat{a}_{i}-\hat{b}_{i}\right)\) and 
		   \(\hat{b}_{i}^{\prime}=1/\sqrt{2}\left(\hat{a}_{i}+\hat{b}_{i}\right)\) where \(i = r, b\). Before the BS, four Bell
           states of photon are \(\left|\phi^{\pm}\right\rangle=1/\sqrt{2}\left(\left|\nu_{r}\right\rangle_{1}\left|\nu_{r}\right\rangle_{2} \pm\left|\nu_{b}\right\rangle_{1}\left|\nu_{b}\right\rangle_{2}\right)\) 
		   and \(\left|\psi^{\pm}\right\rangle=1/\sqrt{2}\left(\left|\nu_{r}\right\rangle_{1}\left|\nu_{b}\right\rangle_{2} \pm\left|\nu_{b}\right\rangle_{1}\left|\nu_{r}\right\rangle_{2}\right)\),
           i.e. \(\left|\phi^{\pm}\right\rangle=1/\sqrt{2}\left(a_{r}^{\prime \dagger} b_{r}^{\prime \dagger}\pm a_{b}^{\prime \dagger} b_{b}^{\prime \dagger}\right)|\text{vac}\rangle\) 
		   and \(\left|\psi^{\pm}\right\rangle=1/\sqrt{2}\left(a_{r}^{\prime \dagger} b_{b}^{\prime \dagger}\pm a_{b}^{\prime \dagger} b_{r}^{\prime \dagger}\right)|\text{vac}\rangle\). 
		   Hence after the BS, they will become:
		   $$\begin{aligned}
           \left|\phi^{\pm}\right\rangle^{\prime} &=\frac{1}{2 \sqrt{2}}\left(\left(b_{r}^{\prime \dagger}\right)^{2}-\left(a_{r}^{\prime \dagger}\right)^{2} \pm\left[\left(b_{b}^{\prime \dagger}\right)^{2}-\left(a_{b}^{\prime \dagger}\right)^{2}\right]\right)|\text{vac}\rangle \\
           \left|\psi^{+}\right\rangle^{\prime} &=\frac{1}{\sqrt{2}}\left(b_{r}^{\prime \dagger} b_{b}^{\prime \dagger}-a_{r}^{\prime \dagger} a_{b}^{\prime \dagger}\right)|\text{vac}\rangle \\
           \left|\psi^{-}\right\rangle^{\prime} &=\frac{1}{\sqrt{2}}\left(a_{r}^{\prime \dagger} b_{b}^{\prime \dagger}-a_{b}^{\prime \dagger} b_{r}^{\prime \dagger}\right)|\text{vac}\rangle.
           \end{aligned}\tag{3}$$
		   It's clearly that only the state \(|\psi^{-}\rangle'\) has a coincident click pattern on two detectors as shown in
           <a href="#fig1">Fig. 1b</a>. The state of the total system after the respective ion-photon entanglement has the form of <a href="#eq1">Eq. (1)</a>. 
		   This can be expanded in the Bell bases with setting \(\alpha=\beta=\gamma=\delta=1/\sqrt{2}\) [17]:
		   <div class="anchor" id="eq4"></div>
		   $$\begin{aligned}
           |\psi\rangle_{12} &=\frac{1}{2}(|0\rangle_1|\nu_\text{blue}\rangle_1+|1\rangle_1|\nu_\text{red}\rangle_1)\otimes(|0\rangle_2|\nu_\text{blue}\rangle_2+|1\rangle_2|\nu_\text{red}\rangle_2) \\
           &=\frac{1}{2}(|\phi^{+}\rangle_{\mathrm{ion}}|\phi^{+}\rangle_{\mathrm{ph}}+|\phi^{-}\rangle_{\mathrm{ion}}|\phi^{-}\rangle_{\mathrm{ph}}+|\psi^{+}\rangle_{\mathrm{ion}}|\psi^{+}\rangle_{\mathrm{ph}}+|\psi^{-}\rangle_{\mathrm{ion}}|\psi^{-}\rangle_{\mathrm{ph}})
           \end{aligned}\tag{4}$$
		   Hence when coincident clicks on two photon detectors occurs, the state of <a href="#eq4">Eq. (4)</a> projects into
           \(|\psi^{-}\rangle_{\mathrm{ion}}|\psi^{-}\rangle_{\mathrm{ph}}\) 
		   indicating an entangled state of two distant ions which can be regarded as entanglement
           swapping from two distinct atom-photon pairs to one atom-atom pair plus one photon-photon pair.</p>
		<p>It may be more intuitive if we just use the origin basis instead of Bell basis.
		   After a beam-splitter whose rotaion angle is \(\theta\), the state of <a href="#eq1">Eq. (1)</a> should become
		   <div class="anchor" id="eq5"></div>
		   $$\begin{aligned}
           |\psi\rangle_{12}^\prime &=\left[\alpha|0\rangle_1\left(|\nu_b\rangle_1\cos\frac{\theta}{2}-|\nu_b\rangle_2\sin\frac{\theta}{2}\right)+\beta|1\rangle_1\left(|\nu_r\rangle_1\cos\frac{\theta}{2}-|\nu_r\rangle_2\sin\frac{\theta}{2}\right)\right] \\
           &\otimes\left[\gamma|0\rangle_2\left(|\nu_b\rangle_1\sin\frac{\theta}{2}+|\nu_b\rangle_2\cos\frac{\theta}{2}\right)+\delta|1\rangle_2\left(|\nu_r\rangle_1\sin\frac{\theta}{2}+|\nu_r\rangle_2\cos\frac{\theta}{2}\right)\right].
           \end{aligned}\tag{5}$$
		   A naive expanding of <a href="#eq5">Eq. (5)</a> will give 16 terms, but only terms with both spatial modes can be coincidentally detected by both detectors.
		   Therefore, once we observed a coincident click pattern on two detectors, \(|\psi\rangle_{12}^\prime\) collapsed into
		   $$\begin{aligned}
           |\psi\rangle_{12}^{\prime\prime} &=\alpha\gamma|0\rangle_1|0\rangle_2|\nu_b\rangle_1|\nu_b\rangle_2\left(\cos^2\frac{\theta}{2}-\sin^2\frac{\theta}{2}\right) \\
           &+\alpha\delta|0\rangle_1|1\rangle_2\left(|\nu_b\rangle_1|\nu_r\rangle_2\cos^2\frac{\theta}{2}-|\nu_r\rangle_1|\nu_b\rangle_2\sin^2\frac{\theta}{2}\right) \\
		   &+\beta\gamma|1\rangle_1|0\rangle_2\left(|\nu_r\rangle_1|\nu_b\rangle_2\cos^2\frac{\theta}{2}-|\nu_b\rangle_1|\nu_r\rangle_2\sin^2\frac{\theta}{2}\right) \\
		   &+\beta\delta|1\rangle_1||1\rangle_2|\nu_r\rangle_1|\nu_r\rangle_2\left(\cos^2\frac{\theta}{2}-\sin^2\frac{\theta}{2}\right).
           \end{aligned}\tag{6}$$
		   For a 50/50 lossless BS, the rotation angle is π/2, thus
		   $$|\psi\rangle_{12}^{\prime\prime}=(-\alpha \delta|0\rangle_{1}|1\rangle_{2}+\beta \gamma|1\rangle_{1}|0\rangle_{2})\left|\psi^{-}\right\rangle_\text{ph}. \tag{7}$$</p>
		<h3>Two-qubit gate mediated by photon</h3>
		<p>Without setting \(\alpha=\beta=\gamma=\delta\), the coincident-click event is still equivalent to a heralded gate
           operation [18, 19]. As we shows above, the coincident clicks on two detectors amount to a projection \(_\mathrm{ph}\langle\psi^-|\):
		   $$\begin{aligned}
           |\psi\rangle_{12}^{\prime\prime} & \propto_{\mathrm{ph}}\left\langle\psi^{-}\left|\left(\alpha|0\rangle_{1}\left|\nu_\text{blue}\right\rangle_{1}+\beta|1\rangle_{1}\left|\nu_\text{red}\right\rangle_{1}\right) \otimes\left(\gamma|0\rangle_{2}\left|\nu_\text{blue}\right\rangle_{2}+\delta|1\rangle_{2}\left|\nu_\text{red}\right\rangle_{2}\right)\right.\right.\\
           & \propto \alpha \delta|0\rangle_{1}|1\rangle_{2}-\beta \gamma|1\rangle_{1}|0\rangle_{2} \\
		   & \propto \hat{Z}_{1}\left(\hat{I}-\hat{Z}_{1} \hat{Z}_{2}\right)\left(\alpha|0\rangle_{1}+\beta|1\rangle_{1}\right) \otimes\left(\gamma|0\rangle_{2}+\delta|1\rangle_{2}\right),
           \end{aligned}\tag{8}$$
		   where \((\hat{I}-\hat{Z}_{1} \hat{Z}_{2})\) is a projector to the eigenspace of \(-\hat{Z}_{1} \hat{Z}_{2}\) with eigenvalue \(-1\) 
		   and \(\hat{Z}_{1}\) is an additional single qubit operation on qubit 1 which is relatively easy in qubit operation and has been achieved
           with fidelity above 99.999% in trapped-ion system [20]. This gate is of course probabilistic due
           to the finite photon collection effciency, detection effciency and the branching ratio of decaying
           along the π-polarized channel etc. [18]. The typical success probability is in the order of \(10^{-6}\),
           while a recent experiment imporves this value to the order of \(10^{-4}\) with an entanglement fidelity
           around 94% [21] achieving the world record of the speed and fidelity of remote ion entanglement.
           Although the success probability is small, this type of gate is very robust to noise like the mechanical
           vibration, ion position variation, etc. and can lead to effcient quantum computation [18] which
           has a theoretical proof based on the effcient construction of two-dimensional cluster states [2, 18].
           Hence, trapped-ion system scaled with photonic link is also a promising platform for measurementbased quantum computing [22].</p>
		<h3>References</h3>
		<div class="mw-references-columns">
		  <ol>
		    <li>H. J. Kimble (2008). <a href="https://www.nature.com/articles/nature07127">"The quantum internet"</a>. <em>Nature</em>. <strong>453</strong> (7198): 1023-1030.</li>
			<li>L.-M. Duan and C. Monroe (2010). <a href="https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.82.1209">"Colloquium: Quantum networks with trapped ions"</a>. <em>Reviews of Modern Physics</em>. <strong>82</strong>: 1209-1224.</li>
			<li>J. I. Cirac and P. Zoller (1995). <a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.74.4091">"Quantum computations with cold trapped ions"</a>. <em>Physical Review Letters</em>. <strong>74</strong>: 4091-4094.</li>
			<li>Ye Wang, Mark Um, Junhua Zhang, Shuoming An, Ming Lyu, Jing-Ning Zhang, L.-M. Duan, Dahyun Yum, and Kihwan Kim (2017). <a href="https://www.nature.com/articles/s41566-017-0007-1">"Single-qubit quantum memory exceeding ten-minute coherence time"</a>. <em>Nature Photonics</em>. <strong>11</strong> (10): 646-650.</li>
			<li>J. P. Gaebler, T. R. Tan, Y. Lin, Y. Wan, R. Bowler, A. C. Keith, S. Glancy, K. Coakley, E. Knill, D. Leibfried, and D. J. Wineland (2016). <a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.117.060505">"High-fidelity universal gate set for \(^9\text{Be}^+\) ion qubits"</a>. <em>Physical Review Letters</em>. <strong>117</strong>: 060505.</li>
			<li>C. J. Ballance, T. P. Harty, N. M. Linke, M. A. Sepiol, and D. M. Lucas (2016). <a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.117.060504">"High-fidelity quantum logic gates using trapped-ion hyperfine qubits"</a>. <em>Physical Review Letters</em>. <strong>117</strong>: 060504.</li>
			<li>A. H. Myerson, D. J. Szwer, S. C. Webster, D. T. C. Allcock, M. J. Curtis, G. Imreh, J. A. Sherman, D. N. Stacey, A. M. Steane, and D. M. Lucas (2008). <a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.100.200502">"High-fidelity readout of trapped-ion qubits"</a>. <em>Physical Review Letters</em>. <strong>100</strong>: 200502.</li>
			<li>Rachel Noek, Geert Vrijsen, Daniel Gaultney, Emily Mount, Taehyun Kim, Peter Maunz, and Jungsang Kim (2013). <a href="https://www.osapublishing.org/ol/abstract.cfm?uri=ol-38-22-4735">"High speed, high fidelity detection of an atomic hyperfine qubit"</a>. <em>Optics Letters</em>. <strong>38</strong> (22): 4735-4738.</li>
			<li>C. Cabrillo, J. I. Cirac, P. García-Fernández, and P. Zoller (1999). <a href="https://journals.aps.org/pra/abstract/10.1103/PhysRevA.59.1025">"Creation of entangled states of distant atoms by interference"</a>. <em>Physical Review A</em>. <strong>59</strong>: 1025-1033.</li>
			<li>L. Slodička, G. Hétet, N. Röck, P. Schindler, M. Hennrich, and R. Blatt (2013). <a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.110.083603">"Atom-atom entanglement by single-photon detection"</a>. <em>Physical Review Letters</em>. <strong>110</strong>: 083603.</li>
			<li>L.-M. Duan and H. J. Kimble (2003). <a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.90.253601">"Effcient engineering of multiatom entanglement through single-photon detections"</a>. <em>Physical Review Letters</em>. <strong>90</strong>: 253601.</li>
			<li>Christoph Simon and William T. M. Irvine (2003). <a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.91.110405">"Robust long-distance entanglement and a loophole-free bell test with ions and photons"</a>. <em>Physical Review Letters</em>. <strong>91</strong>: 110405.</li>
			<li>B. B. Blinov, D. L. Moehring, L.-M. Duan, and C. Monroe (2004). <a href="https://www.nature.com/articles/nature02377">"Observation of entanglement between a single trapped atom and a single photon"</a>. <em>Nature</em>. <strong>428</strong> (6979): 153-157.</li>
			<li>D. L. Moehring, M. J. Madsen, B. B. Blinov, and C. Monroe (2004). <a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.93.090410">"Experimental bell inequality violation with an atom and a photon"</a>. <em>Physical Review Letters</em>. <strong>93</strong>: 090410.</li>
			<li>Bernard Yurke, Samuel L. McCall, and John R. Klauder (1986). <a href="https://journals.aps.org/pra/abstract/10.1103/PhysRevA.33.4033">"SU(2) and SU(1,1) interferometers"</a>. <em>Physical Review A</em>. <strong>33</strong>: 4033-4054.</li>
			<li>Samuel L. Braunstein and A. Mann (1995). <a href="https://journals.aps.org/pra/abstract/10.1103/PhysRevA.51.R1727">"Measurement of the bell operator and quantum teleportation"</a>. <em>Physical Review A</em>. <strong>51</strong>: R1727-R1730.</li>
			<li>D. L. Moehring, P. Maunz, S. Olmschenk, K. C. Younge, D. N. Matsukevich, L.-M. Duan, and C. Monroe (2007). <a href="https://www.nature.com/articles/nature06118">"Entanglement of single-atom quantum bits at a distance"</a>. <em>Nature</em>. <strong>449</strong> (7158): 68-71.</li>
			<li>L.-M. Duan, M. J. Madsen, D. L. Moehring, P. Maunz, R. N. Kohn, and C. Monroe (2006). <a href="https://journals.aps.org/pra/abstract/10.1103/PhysRevA.73.062324">"Probabilistic quantum gates between remote atoms through interference of optical frequency qubits"</a>. <em>Physical Review A</em>. <strong>73</strong>: 062324.</li>
			<li>P. Maunz, S. Olmschenk, D. Hayes, D. N. Matsukevich, L.-M. Duan, and C. Monroe. (2009). <a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.102.250502">"Heralded quantum gate between remote quantum memories"</a>. <em>Physical Review Letters</em>. <strong>102</strong>: 250502.</li>
			<li>T. P. Harty, D. T. C. Allcock, C. J. Ballance, L. Guidoni, H. A. Janacek, N. M. Linke, D. N. Stacey, and D. M. Lucas (2014). <a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.113.220501">"High-fidelity preparation, gates, memory, and readout of a trapped-ion quantum bit"</a>. <em>Physical Review Letters</em>. <strong>113</strong>: 220501.</li>
			<li>L. J. Stephenson, D. P. Nadlinger, B. C. Nichol, S. An, P. Drmota, T. G. Ballance, K. Thirumalai, J. F. Goodwin, D. M. Lucas, and C. J. Ballance (2020). <a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.124.110501">"High-rate, high-hidelity entanglement of qubits across an elementary quantum network"</a>. <em>Physical Review Letters</em>. <strong>124</strong>: 110501.</li>
			<li>Robert Raussendorf and Hans J. Briegel (2001). <a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.86.5188">"A one-way quantum computer"</a>. <em>Physical Review Letters</em>. <strong>86</strong>: 5188-5191.</li>
          </ol>
		</div>
      </div>
	</div>
  </div>
</template>

<script>
module.exports = {

};
</script>

<style scoped>
.col-center-block {  
    float: none;  
    display: block;  
    margin-left: auto;  
    margin-right: auto;  
}  
h1 {
    margin-top: 1em;
    font-size: 2.0em;
	margin-bottom: 0.25em;
	padding: 0;
	font-family: 'Linux Libertine','Georgia','Times',serif;
	line-height: 1.3;
}
h3 {
    margin-top: 1em;
    font-size: 1.4em;
	margin-bottom: 0.25em;
	padding: 0;
	font-family: 'Linux Libertine','Georgia','Times',serif;
	line-height: 1.3;
}
h1, h3 {
	color: #000;
	background: none;
	font-weight: normal;
	overflow: hidden;
	border-bottom: 1px solid #a2a9b1;
}
.mw-references-columns {
    column-width: 30em;
	font-size: 90%;
    margin-bottom: 0.5em;
}
</style>