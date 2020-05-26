<template>
  <div v-katex:auto class="container-fluid">
    <div class="row">
	  <div class="col-12">
	    <h1>Motional State Engineering with Trapped Ion</h1>
        <p>This article discusses some methods to engineer the motional state of a trap ion, 
		   including unitary methods and dissipative methods.
		   Some examples of preparing the coherent state and sequeezed state are also given.</p>
		<h3>Introduction</h3>
		<p>Quantum harmonic oscillator (QHO) is arguably the most fundamental model in quantum
           mechanics. It's also the building block in quantum Bosonic field theory as the field can be regarded
           as an ensemble of many modes of quantized harmonic oscillators. The external motion of single
           trapped ion within the Lamb-Dicke regime can be well regarded as a QHO [1]. Hence, it
           can be a nice prototype for experimentally studying the physical properties of QHO. One of the
           most important and interesting issues is the states, especially some nonclassical states engineering
           of QHO [1]. These nonclassical states are highly useful resources both in quantum information
           processing [2, 3] and quantum metrology [4, 5]. Hence, they arouse a comprehensive interest in
           experimental quantum optics. Besides the trapped ion system [6-8], many other experimental
           platforms pursue the ability of these states preparation, including the cavity-QED system [9, 10],
           the opto-mechanical system [11], the circuit-QED system [12-15], the circuit-QAD (where "A"
           means "acoustic") system [16] and etc. Trapped ion system may be the pioneer in this area,
           largely thanks to the experimental work of NIST group [6-8] in the 1990s revealing the excellent
           controllability of the system. Since then, the area of motional state engineering and application
           with trapped ion system keep active with some recent achievements such as the disspative
           engineering method of these states [17] and application of these states to quantum information
           processing [18, 19] and quantum sensing [20-22]. This article will illustrate the synthesis
           principles of some of these states with both unitary method and dissipative method.</p>
		<h3>Coherent state and typical nonclassical state of QHO</h3>
		<p>We can introduce the annihilation operator \(\hat{a}\) and creation operator \(\hat{a}^\dagger\) to completely
           describe the QHO dynamics following Dirac. The Hamiltonian of the QHO is \(H_\text{QHO} = \omega(\hat{a}^\dagger\hat{a}+1/2)\)
           where \(\omega\) is the eigen-frequency of the oscillator (\(\hbar\) is set to unity for simplicity here). 
		   The eigenstates of the QHO can then be expressed as a series
           of Fock states \(|n\rangle\) with eigenvalues \(\omega(n+1/2)\). All other states will be expressed in the basis of
           Fock states in the following. Coherent state is defined as the eigenstate of annihilation operator
           \(\hat{a}\) and can be characterized by a complex number \(\alpha\) (there are many textbooks in quantum optics
           providing introduction of coherent state, e.g. the Ref. [23]) with an expansion under the Fock-state basis:
           $$|\alpha\rangle=e^{-\frac{|\alpha|^{2}}{2}} \sum_{n=0}^{\infty} \frac{\alpha^{n}}{\sqrt{n !}}|n\rangle.\tag{1}$$
           With introducing a so-called displacement operator \(\hat{D}(\alpha)=e^{\alpha \hat{a}^{\dagger}-\alpha^{*} \hat{a}}\), 
		   the coherent state \(|\alpha\rangle\) can be regarded as a displaced vacuum state with a displacement amount \(\alpha\), 
		   i.e. \(|\alpha\rangle=\hat{D}(\alpha)|0\rangle\). As a mechanical oscillator, 
		   the two quadratures of QHO is position operator \(\hat{X}\) and momentum operator \(\hat{P}\).
		   A displacement operator in the position space with amount \(x\) or in the momentum space with amount \(p\) can be expressed as 
		   \(e^{-ix\hat{P}}\) or \(e^{ip\hat{X}}\) respectively where \(\hat{P}=\frac{i}{\sqrt{2}}(\hat{a}^\dagger-\hat{a})\)
           and \(\hat{X}=\frac{1}{\sqrt{2}}(\hat{a}^\dagger+\hat{a})\). 
		   (Since \([\hat{X},\hat{P}]=i\), it's easy to check that \(\hat{X}e^{-ix\hat{P}}|x_0\rangle=(x+x_0)e^{-ix\hat{P}}|x_0\rangle\).)
		   According to the BCH formula, \(e^{-ix\hat{P}}e^{ip\hat{X}}\)
           is equivalent to \(e^{-ix\hat{P}+ip\hat{X}}\) up to an overall phase
		   (this overall phase is of geometric origin and essential in two-qubit phase gate [24]). 
		   Noting that \(e^{-ix\hat{P}+ip\hat{X}}=e^{\alpha \hat{a}^{\dagger}-\alpha^{*} \hat{a}}\)
           with \(\alpha=\frac{1}{\sqrt{2}}(x+ip)\), \(\hat{D}(\alpha)\) can be regarded as a displacement operator in phase space.</p>
		<p>The measurement or characterization of non-classicality of a QHO state is always a hot topic in
           quantum optics. There exists a formal definition for non-classicality: a state is said to be nonclassical
           when it cannot be described as a statistical mixture of coherent states; or equivalently,
           under the Glauber-Sudarshan P-representation, a non-classical state should be
           highly singular (even more singular than Dirac δ-function because the P-function of a pure coherent
           state is a Dirac δ-function and it may be regarded as classical state) or not be postive definite
           [25, 26]. According to this definition, we can readily see that Fock state, i.e. the energy eigenstate
           of \(H_\text{QHO}\) is a nonclassical state. Some Fock states superposition such as \((|0\rangle+|n\rangle)/\sqrt{2}\) 
		   which is very useful in quantum metrology without entanglement [14, 21] is also a nonclassical state. The
           so-called squeezed state that exhibits reduced noise in one quadrature component is a typical
           nonclassical state too. Here the squeezed state can be defined by the squeezing operator 
		   \(\hat{S}(\xi)=\exp \left[\left(\xi^{*} \hat{a}^{2}-\xi \hat{a}^{\dagger 2}\right) / 2\right]\)
		   with a complex squeezing parameter \(\xi(r,\theta)=re^{i\theta}\) where \(\theta/2\) is the angle of
           squeezing axis along which the squeezing ratio \(e^{-2r}\) is achieved. For example, 
		   \(|0,\xi\rangle=\hat{S}(\xi)|0\rangle=\frac{1}{\sqrt{\cosh r}} \sum_{n=0}^{\infty}\left(-e^{i \theta} \tanh r\right)^{n} \sqrt{(2 n) !} /\left(2^{n} n !\right)|2 n\rangle\)
		   is called a squeezed vacuum state. If we set \(\theta=0\), this state will have a reduced uncertainty 
		   in quadrature X with a ratio \(e^{-2r}\) but a amplified uncertainty in quadrature P with a ratio \(e^{2r}\). 
		   This state is also very useful in quantum sensing of tiny physical quantities [22] and quantum information processing [27].</p>
		
		<h3>Motional state engineering with unitary method</h3>
		<p>Typical synthesis methods of these states is based on unitary operations on an intial ground
           state with very low entropy [28], hence a ground state cooling and nonlinear interaction (maybe) [1] is
           necessary. For generating a coherent state of single ion mode, we first prepare the motional ground
           state and then apply a displacement operation. The displacement operation can be
           produced by many methods, such as by a spatially uniform driving field, by a spin-independent (-dependent)
           force, by a sudden shift of the trap center and etc. [1, 6]. The most common-used are the first
           two methods.</p>
        <p>The interaction of a single trapped ion with a spatially uniform
           field can be just regarded as an electric dipole \(e\hat{z}=ez_0(\hat{a}+\hat{a}^\dagger)\) (considering only the Z-axis ion
           motion with zero-point width \(z_0\)) interacting with the driving field 
		   \(E=E_{0}\left(e^{-i(\omega t+\phi)}+e^{i(\omega t+\phi)}\right) / 2\)
           of amplitude \(E_0\), frequency \(\omega\) and phase \(\phi\). Hence we have
		   $$\begin{aligned}
           \hat{H}(t) &= \hat{H}_0+\hat{H}_1(t) \\
           &=\omega_z(\hat{a}^\dagger\hat{a}+\frac{1}{2})-\frac{e E_0z_{0}}{2} \left(e^{-i(\omega t+\phi)}+e^{i(\omega t+\phi)}\right)\left(\hat{a}+\hat{a}^{\dagger}\right).
           \end{aligned}\tag{2}$$
		   Using BCH formula again, the time-dependent term \(\hat{H}_1\) under interaction picture become
		   $$\begin{aligned}
           \hat{H}_{1,I} &= e^{i\hat{H}_0t}\hat{H}_1e^{-i\hat{H}_0t} \\
           &=-\frac{e E_0z_{0}}{2} \left(e^{-i(\omega t+\phi)}+e^{i(\omega t+\phi)}\right)\left(\hat{a}e^{-i\omega_zt}+\hat{a}^{\dagger}e^{i\omega_zt}\right) \\
		   &=-\frac{e z_{0} E_{0}}{2}\left(\hat{a} e^{i \phi}+\hat{a}^{\dagger} e^{-i \phi}\right) \\
           &=\frac{g}{2}\left(\hat{a} e^{i \phi}+\hat{a}^{\dagger} e^{-i \phi}\right),
           \end{aligned}\tag{3}$$
		   where we have used the resonance condition \(\omega=\omega_z\), i.e. setting the frequency of driving field \(\omega\)
           equal to the motional frequency !z, and also the rotating wave approximation. Hence we can see
           the evolution operator \(U=e^{-i\hat{H}_{1,I}t}\) is just the displacement operator with 
		   \(\alpha=-ige^{-i\phi}/2t\).</p>
		<p>The method which use spin-independent force has just the same interaction Hamiltonian but with a different
           mechanism that it employs the common Stark shift of internal levels of ion and is most suited for
           hyperfine ionic qubit. For such type of qubit, two Raman laser beams with differential frequency
           equal to the motional frequency is driven on the ion as a displacement operation (a detailed
           derivation can be refered to Ref. [29]).</p>
		<p>Generation of Fock state is relatively easy, after the ground state cooling, a blue-sideband π-pulse 
		   combined with a carrier π-pulse can be a climbing ladder operation to the ion.</p>
		<p>Generation of sequeezed state or equivalently the sequeezed operation \(\hat{S}(\xi)\) can be created by a parametric
           driving, by Raman laser beams with differential frequency equal to twice the motional frequency,
           or by a nonadiabatic drop in the trap spring constant [6]. The most common-used are the first
           two methods. For the parametric driving, we add an oscillating field at twice the motional
           frequency to, say, the axial electrodes as shown in Fig. 1 (where we adopt a blade trap as an
           example). Hence the trapping potential along Z direction is [1]:
		   $$\Phi=\frac{\gamma z^2}{2}(V+\tilde{V}\cos(2\omega_zt+\phi)),\tag{4}$$
		   where \(V\) is the static voltage, \(\tilde{V}\) is the oscillating voltage and \(\gamma\) is a geometric parameter. With
           \(\hat{z}=z_0(\hat{a}+\hat{a}^\dagger)\), we get the Hamiltonian under the parametric driving field as:
		   $$\hat{H}=\omega\left(\hat{a}^{\dagger} \hat{a}+\frac{1}{2}\right)+\frac{e \tilde{V} \gamma z_{0}^{2}}{2} \cos \left(2 \omega_{z} t+\phi\right)\left(\hat{a}+\hat{a}^{\dagger}\right)^{2}.\tag{5}$$
		   By analogy with equation (3), the time-dependent term under interaction picture become:
		   $$\hat{H}_{1,I}=\frac{g}{2}\left(\hat{a}^2 e^{i \phi}+\hat{a}^{\dagger 2} e^{-i \phi}\right),\tag{6}$$
		   where \(g=e\tilde{V}\gamma z_0^2/2\). Hence, the squeezing operator \(\hat{S}(\xi)\) is just the evolution operator of the Hamiltonian above and the
           squeezing parameter is \(\xi=ige^{-i\phi}/2t\). For the optical method, the two Raman laser beams with
           differential frequency equal to twice the motional frequency is driven on to the ion for squeezing
           operation, a detailed derivation of the Hamiltonian can be also refered to Ref. [29].</p>
	  </div>
	  <div class="col-center-block">  
        <embed src="motional_state_engineering/blade.svg">
	  </div>
      <div class="col-12">
        <figcaption class="figure-caption text-left"><strong>Figure 1: A linear Paul trap with a parametric driving field along Z-axis.</strong>  
		    Besides a constant voltage V, the four outside segments (DC1, DC5, DC6, DC10) of the blade electrodes 
            is superimposed with a oscillating RF field at twice the frequency of motion along Z-axis (\(2\omega_z\)). Note the
            essential difference between the parametric driving and coherent driving. The latter only need an oscillating
            field adding on one side of the electrodes, say the left two segments (DC1, DC10).</figcaption>
	    <br>
	  </div>
      <div class="col-12">
		<h3>Motional state engineering with dissipative method</h3>
		<p>Although at most of the time, dissipation is detrimental effect to the experiments with fragile
           quantum systems where high-fidelity unitary process and long coherence time are required, a
           tamed dissipation can become useful resources in both quantum information processing [30, 31]
           and quantum-state engineering [17, 32-38]. The basic idea of dissipatively generate a quantum
           state is to engineer a master equation \(\mathrm{d} \rho / \mathrm{d} t=\mathcal{L}(\cdot) \rho\) 
		   with a specific Lindblad super-operator \(\mathcal{L}(\cdot)\)
           such that the steady state of this equation is our target quantum state. This method has been
           successfully realized by ETH trapped ion group in motional state engineering [17]. Following this
           work, we will illustrate the principle of the displacement and squeezing operations based on this
           dissipative method.</p>
		<p>We all are very familiar with resolved sideband cooling of trapped ions [1], it can be implemented by
           alternating a red-sideband pulse with a dissipative process, i.e. the optical pumping to constantly
           dissipate the motional energy into the vacuum. We define the red-sideband coupling strength as \(\Omega_r\)
		   (i.e. the red-sideband Hamiltonian is \(\hat{H}_r=\Omega_r(\hat{a}\sigma_++\hat{a}^\dagger\sigma_-)\)) 
		   and the pumping rate as \(\Gamma\). If \(\Gamma\gg\Omega_r\)which is always true in the sideband cooling process, 
		   the evolution of motional state density matrix \(\hat{\rho}\) can be described by a master equation below 
		   (which can be found in the supplementary material of Ref. [17]):
		   $$\frac{\mathrm{d} \hat{\rho}}{\mathrm{d} t}=\frac{2 \Omega_{r}^{2}}{\Gamma} \mathcal{L}(\hat{a}) \hat{\rho}=\frac{2 \Omega_{r}^{2}}{\Gamma}\left[\hat{a} \hat{\rho} \hat{a}^{\dagger}-\frac{1}{2}\left(\hat{a}^{\dagger} \hat{a} \hat{\rho}+\hat{\rho} \hat{a}^{\dagger} \hat{a}\right)\right]$$
		   where the steady state is readily to be seen as the vacuum state j0i. Just as a simple analogy, if
           we let a "modified" red-sideband pulse alternate with the optical pumping where the "modified"
           red-sideband Hamiltonian is \(\hat{H}_{r}=\Omega_{r}\left(\hat{a} \sigma_{+}+\hat{a}^{\dagger} \sigma_{-}\right)\), then this process can be described 
		   by a master equation \(\mathrm{d}\rho/\mathrm{d}t=2\Omega^2/\Gamma\mathcal{L}(\hat{K}\rho)\) and the steady state is just 
		   a state \(|\cdot\rangle\) annihilated by the operator \(\hat{K}\). We have already known that a coherent state is just 
		   a displaced vacuum state \(|\alpha\rangle=\hat{D}(\alpha)|0\rangle\), and it can be annihilated by \(\hat{D}(\alpha)\hat{a}\hat{D}^\dagger(\alpha)\). 
		   Therefore, if we set \(K=\hat{D}(\alpha)\hat{a}\hat{D}^\dagger(\alpha)=\hat{a}-\alpha\), we can
           acquire the coherent state as the steady state of the "modified" sideband cooling process. In the
           same manner, if we set \(K=\hat{S}(\xi(r, \theta)) \hat{a} \hat{S}^{\dagger}(\xi(r, \theta))=\cosh (r) \hat{a}+e^{i \theta} \sinh (r) \hat{a}^{\dagger}\), 
		   the steady state is the squeezed vacuum state. This method is very ingenious and convenient, we first need to engineer the
           Hamiltonian \(\hat{H}_-\) and then alternate the pulse of this Hamiltonian with the optical pumping just
           after the Doppler cooling of the ion. The steady state is independent on the initial state, i.e. all the
           initial states will in principle be pumped into the steady state. Also, the dissipative type method is
           very robust to noise. The construction of the Hamiltonian \(\hat{H}_-\) is easy because either \(\hat{D}(\alpha)\hat{a}\hat{D}^\dagger(\alpha)\)
           or \(\hat{S}(\xi)\hat{a}\hat{S}^\dagger(\xi)\) is just a linear combination of carrier, red-sideband and blue-sideband Hamiltonians.
           Besides, by the climbing ladder operator \(\hat{K}^\dagger\), we can generate many other nonclassical states such
           as the displaced Fock state, the squeezed Fock state and etc.</p>
		
		<h3>References</h3>
		<div class="mw-references-columns">
		  <ol>
		    <li>D. Leibfried, R. Blatt, C. Monroe and D. Wineland (2003). "Quantum dynamics of single trapped ions". <em>Reviews of Modern Physics</em>. <strong>75</strong>: 281-324.</li>
			<li>Samuel L. Braunstein and Peter van Loock (2005). "Quantum information with continuous variables". <em>Reviews of Modern Physics</em>. <strong>77</strong>: 513-577.</li>
			<li>Christian Weedbrook, Stefano Pirandola, Raúl García-Patrón, Nicolas J. Cerf, Timothy C. Ralph, Jeffrey H. Shapiro and Seth Lloyd (2012). <a href="https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.84.621">"Quantum information with continuous variables"</a>. <em>Reviews of Modern Physics</em>. <strong>84</strong>: 621-669.</li>
			<li>Luca Pezzè, Augusto Smerzi, Markus K. Oberthaler, Roman Schmied and Philipp Treutlein (2018). <a href="https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.90.035005">"Quantum metrology with nonclassical states of atomic ensembles"</a>. <em>Reviews of Modern Physics</em>. <strong>90</strong>: 035005.</li>
			<li>Daniel Braun, Gerardo Adesso, Fabio Benatti, Roberto Floreanini, Ugo Marzolino, Morgan W. Mitchell and Stefano Pirandola. (2018). "Quantum-enhanced measurements without entanglement". <em>Reviews of Modern Physics</em>. <strong>90</strong>: 035006.</li>
			<li>D. M. Meekhof, C. Monroe, B. E. King, W. M. Itano and D. J. Wineland (1996). "Generation of nonclassical motional states of a trapped atom". <em>Physical Review Letters</em>. <strong>76</strong>: 1796-1799.</li>
			<li>D. Leibfried, D. M. Meekhof, B. E. King, C. Monroe, W. M. Itano and D. J. Wineland (1996). "Experimental determination of the motional quantum state of a trapped atom". <em>Physical Review Letters</em>. <strong>77</strong>: 4281-4285.</li>
			<li>C. Monroe, D. M. Meekhof, B. E. King and D. J. Wineland (1996). <a href="https://science.sciencemag.org/content/272/5265/1131">"A “Schrödinger Cat” Superposition State of an Atom"</a>. <em>Science</em>. <strong>272</strong> (5265): 1131-1136.</li>
			<li>P. Bertet, A. Auffeves, P. Maioli, S. Osnaghi, T. Meunier, M. Brune, J. M. Raimond and S. Haroche (2002). "Direct measurement of the wigner function of a one-photon fock state in a cavity". <em>Physical Review Letters</em>. <strong>89</strong>: 200402.</li>
			<li>Samuel Deléglise, Igor Dotsenko, Clément Sayrin, Julien Bernu, Michel Brune, Jean-Michel Raimond and Serge Haroche (2008). <a href="https://www.nature.com/articles/nature07288">"Reconstruction of non-classical cavity field states with snapshots of their decoherence"</a>. <em>Nature</em>. <strong>455</strong>: 510-514.</li>
			<li>Markus Aspelmeyer, Tobias J. Kippenberg and Florian Marquardt (2014). "Cavity optomechanics". <em>Reviews of Modern Physics</em>. <strong>86</strong>: 1391-1452.</li>
			<li>A. Wallraff, D. I. Schuster, A. Blais, L. Frunzio, R.-. S. Huang, J. Majer, S. Kumar, S. M. Girvin and R. J. Schoelkopf (2004). "Strong coupling of a single photon to a superconducting qubit using circuit quantum electrodynamics". <em>Nature</em>. <strong>431</strong> (7005): 162-167.</li>
			<li>W. Wang, L. Hu, Y. Xu, K. Liu, Y. Ma, Shi-Biao Zheng, R. Vijay, Y. P. Song, L.-M. Duan and L. Sun (2017). "Converting quasiclassical states into arbitrary fock state superpositions in a superconducting circuit". <em>Physical Review Letters</em>. <strong>118</strong>: 223604.</li>
			<li>W. Wang, Y. Wu, Y. Ma, W. Cai, L. Hu, X. Mu, Y. Xu, Zi-Jie Chen, H. Wang, Y. P. Song, H. Yuan, C.-L. Zou, L.-M. Duan and L. Sun (2019). "Heisenberg-limited single-mode quantum metrology in a superconducting circuit". <em>Nature Communications</em>. <strong>10</strong> (1): 4382.</li>
			<li>P. Campagne-Ibarcq and A. Eickbusch and S. Touzard and E. Zalys-Geller and N. E. Frattini and V. V. Sivak and P. Reinhold and S. Puri and S. Shankar and R. J. Schoelkopf and L. Frunzio and M. Mirrahimi and M. H. Devoret (2019). <a href="https://arxiv.org/abs/1907.12487">"Quantum error correction of a qubit encoded in grid states of an oscillator"</a>.</li>
			<li>Yiwen Chu, Prashanta Kharel, Taekwan Yoon, Luigi Frunzio, Peter T. Rakich and Robert J. Schoelkopf (2018). <a href="https://www.nature.com/articles/s41586-018-0717-7">"Creation and control of multi-phonon fock states in a bulk acoustic-wave resonator"</a>. <em>Nature</em>. <strong>563</strong> (7733): 666-670.</li>
			<li>D. Kienzler, H.-Y. Lo, B. Keitch, L. de Clercq, F. Leupold, F. Lindenfelser, M. Marinelli, V. Negnevitsky and J. P. Home (2015). <a href="https://science.sciencemag.org/content/347/6217/53">"Quantum harmonic oscillator state synthesis by reservoir engineering"</a>. <em>Science</em>. <strong>347</strong> (6217): 53-56.</li>
			<li>C. Flühmann, V. Negnevitsky, M. Marinelli, and J.P. Home (2018). <a href="https://journals.aps.org/prx/abstract/10.1103/PhysRevX.8.021001">"Sequential Modular Position and Momentum Measurements of a Trapped Ion Mechanical Oscillator"</a>. <em>Physical Review X</em>. <strong>8</strong>: 021001.</li>
			<li>C. Flühmann, T. L. Nguyen, M. Marinelli, V. Negnevitsky, K. Mehta and J. P. Home (2019). <a href="https://www.nature.com/articles/s41586-019-0960-6">"Encoding a qubit in a trapped-ion mechanical oscillator"</a>. <em>Nature</em>. <strong>566</strong>: 513-517.</li>
			<li>Fabian Wolf, Chunyan Shi, Jan C. Heip, Manuel Gessner, Luca Pezzè, Augusto Smerzi, Marius Schulte, Klemens Hammerer and Piet O. Schmidt (2019). <a href="https://www.nature.com/articles/s41467-019-10576-4">"Motional Fock states for quantum-enhanced amplitude and phase measurements with trapped ions"</a>. <em>Nature Communications</em>. <strong>10</strong>: 2929.</li>
			<li>Katherine C. McCormick, Jonas Keller, Shaun C. Burd, David J. Wineland, Andrew C. Wilson, and Dietrich Leibfried (2019). "Quantum-enhanced sensing of a single-ion mechanical oscillator". <em>Nature</em>. <strong>572</strong> (7767): 86-90.</li>
			<li>S. C. Burd, R. Srinivas, J. J. Bollinger, A. C. Wilson, D. J. Wineland, D. Leibfried, D. H. Slichter and D. T. C. Allcock (2019). "Quantum amplification of mechanical oscillator motion". <em>Science</em>. <strong>364</strong> (6446): 1163-1165.</li>
			<li>Marlan O. Scully and M. Suhail Zubairy, <em>Quantum optics</em>, Cambridge university press, 1997.</li>
			<li>P J Lee, K-A Brickman, L Deslauriers, P C Haljan, L-M Duan, and C Monroe (2005). "Phase control of trapped ion quantum gates". <em>Journal of Optics B: Quantum and Semiclassical Optics</em>. <strong>7</strong> (10): S371-S383.</li>
			<li>A. I. Lvovsky and J. H. Shapiro (2002). "Nonclassical character of statistical mixtures of the single-photon and vacuum optical states". <em>Physical Review A</em>. <strong>65</strong>: 033830.</li>
			<li>Alessandro Zavatta, Valentina Parigi and Marco Bellini (2007). "Experimental nonclassicality of single-photonadded thermal light states". <em>Physical Review A</em>. <strong>75</strong>: 052106.</li>
			<li>Wenchao Ge, Brian C. Sawyer, Joseph W. Britton, Kurt Jacobs, John J. Bollinger, and Michael Foss-Feig (2019). "Trapped ion quantum information processing with squeezed phonons". <em>Physical Review Letters</em>. <strong>122</strong>: 030501.</li>
			<li>L. Podhora and T. Pham and A. Lešundák and P. Obšil and M. Čížek and O. Číp and P. Marek and L. Slodička and R. Filip (2020). <a href="https://arxiv.org/abs/2004.12863">"Unconditional accumulation of nonclassicality in a single-atom mechanical oscillator"</a>.</li>
			<li>An Shuoming, <em>Quantum Control in the trapped ion system</em>, PhD thesis, Tsinghua University, 2017.</li>
			<li>Frank Verstraete, Michael M. Wolf, and J. Ignacio Cirac (2009). "Quantum computation and quantum-state engineering driven by dissipation". <em>Nature Physics</em>. <strong>5</strong> (9): 633-636.</li>
			<li>Fernando Pastawski, Lucas Clemente, and Juan Ignacio Cirac (2011). "Quantum memories based on engineered dissipation". <em>Physical Review A</em>. <strong>83</strong>: 012304.</li>
			<li>Y. Lin, J. P. Gaebler, F. Reiter, T. R. Tan, R. Bowler, A. S. Sørensen, D. Leibfried, and D. J. Wineland (2013). <a href="https://www.nature.com/articles/nature12801/">"Dissipative production of a maximally entangled steady state of two quantum bits"</a>. <em>Nature</em>. <strong>504</strong>: 415-418.</li>
			<li>Hanna Krauter, Christine A. Muschik, Kasper Jensen,WojciechWasilewski, Jonas M. Petersen, J. Ignacio Cirac, and Eugene S. Polzik (2011). "Entanglement generated by dissipation and steady state entanglement of two macroscopic objects". <em>Physical Review Letters</em>. <strong>107</strong>: 080503.</li>
			<li>B. Kraus and H. P. Büchler and S. Diehl and A. Kantian and A. Micheli and P. Zoller (2008). <a href="https://journals.aps.org/pra/abstract/10.1103/PhysRevA.78.042307">"Preparation of entangled states by quantum markov processes"</a>. <em>Physical Review A</em>. <strong>78</strong>: 042307.</li>
			<li>Jaeyoon Cho, Sougato Bose and M. S. Kim (2011). "Optical pumping into many-body entanglement". <em>Physical Review Letters</em>. <strong>106</strong>: 020504.</li>
			<li>S. Diehl, A. Micheli, A. Kantian, B. Kraus, H. P. Büchler and P. Zoller (2008). "Quantum states and phases in driven open quantum systems with cold atoms". <em>Nature Physics</em>. <strong>4</strong>: 878-883.</li>
			<li>R. Blatt, J. I. Cirac, and P. Zoller (1995). "Trapping states of motion with cold ions". <em>Physical Review A</em>. <strong>52</strong>: 518-524.</li>
			<li>J. F. Poyatos, J. I. Cirac, and P. Zoller (1996). "Quantum reservoir engineering with laser cooled trapped ions". <em>Physical Review Letters</em>. <strong>77</strong>: 4728-4731.</li>
			<li>Daniel Kienzler, <em>Quantum Harmonic Oscillator State Synthesis by Reservoir Engineering</em>, PhD thesis, Humboldt Universität zu Berlin, 2015.</li>
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