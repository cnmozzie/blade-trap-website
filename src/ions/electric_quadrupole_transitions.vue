<template>
  <div v-katex:auto class="container-fluid">
    <div class="row">
	  <div class="col-12">
	    <h1>Electric Quadrupole Transitions</h1>
        <p>When we talk about the light-atom interaction, we need a quantity to describe whether the coupling is strong or week.
		   For a two level system, such quantity is Rabi frequency, which can be measured precisely in experiment.
		   Before doing an experiment, one might want to calculate it first.
		   If we treat the laser as a locally uniform electromagnetic field, it can be write as a harmonic time-dependent operator.
		   Then the evolution of the two level system can be quickly solvedunder the interaction picture. 
		   However, the magnitude of the operator is not only dependent on the light intensity, but also the coupling strength between two states.
		   For complex atoms, it's very hard to calculate the coupling strength. 
		   Luckily, if we know the life time of the upper level, we can use the perturbation theory the extract the information the coupling strength,
		   thus we can calculate the Rabi frequency given the frequency, polarization and intensity information of the laser.</p>
		<p>This article will start from the interaction picture, shows the connection between of the level lifetime and Rabi frequency,
		   introduces the theory about electric dipole and quadrupole transitions, and lastly
		   provides some examples for calculating the rabi rate of \(^{171}Yb^+\) ion's transitions.</p>
        <h3>The interaction picture</h3>
		<p>Given the Schrödinger picture time-dependent Hamiltonian \(\hat{H}_{S}(t)=\hat{H}_{0}+\hat{V}_{S}(t)\),
		   where \(\hat{H}_{0}\) is independent of time t, The time evolution 
		   is \(\mathrm{i} \hbar \frac{\mathrm{d}}{\mathrm{d} t}|\psi(t)\rangle_{S}=\left[\hat{H}_{0}+\hat{V}_{S}(t)\right]|\psi(t)\rangle_{S}\).
		   Let's define the "interaction picture" states \(|\psi(t)\rangle_{I}=e^{\mathrm{i} \hat{H}_{0} t / \hbar}|\psi(t)\rangle_{S}\)
		   and the "interaction picture" operators \(\hat{O}_{I}(t)=e^{\mathrm{i} \hat{H}_{0} t / \hbar} \hat{O}_{S} e^{-\mathrm{i} \hat{H}_{0} t / \hbar}\).
		   Now \(\hat{H}_{0}\) in the Schrödinger equation is "eliminated" and the time evolution of states can be expressed as:
		   $$\mathrm{i} \hbar \frac{\mathrm{d}}{\mathrm{d} t}|\psi(t)\rangle_{I}=\hat{V}_{I}(t)|\psi(t)\rangle_{I}.\tag{1}$$</p>
		<p>Define the unitary time evolution operator in the interaction picture \(\hat{U}_{I}(t)\): 
		   \(|\psi(t)\rangle_{I}=\hat{U}_{I}(t)|\psi(t=0)\rangle_{I}=\hat{U}_{I}(t)|\psi(t=0)\rangle_{S}\). Then 
		   \(\mathrm{i} \hbar \frac{\mathrm{d}}{\mathrm{d} t}\hat{U}_{I}(t)=\hat{V}_{I}(t) \hat{U}_{I}(t)\), whose formal solution is <strong>Dyson series</strong>: 
		   \(\hat{U}_{I}(t)=\mathbb{1}+\frac{-\mathrm{i}}{\hbar} \int_{t_{1}=0}^{t} \hat{V}_{I}\left(t_{1}\right) \mathrm{d} t_{1}+\left(\frac{-\mathrm{i}}{\hbar}\right)^{2} \int_{t_{1}=0}^{t} \int_{t_{2}=0}^{t_{1}} \hat{V}_{I}\left(t_{1}\right) \hat{V}_{I}\left(t_{2}\right) \mathrm{d} t_{1} \mathrm{~d} t_{2}+\ldots\).</p>
		<p>Let \(|i\rangle\) and \(|f\rangle\) be normalized eigenstates of \(\hat{H}_{0}\): \(\hat{H}_{0}|i\rangle=E_i|i\rangle\), \(\hat{H}_{0}|f\rangle=E_f|f\rangle\).
		   Start at state \(|i\rangle\) at t = 0, evolve over time t, the probability of final state \(|f\rangle\) is 
		   \(P(i \rightarrow f, t)=\left|\left\langle f\left|U_{S}(t)\right| i\right\rangle\right|^{2}=\left|\left\langle f\left|e^{-\frac{i}{\hbar} \hat{H}_{0} t} \hat{U}_{I}(t)\right| i\right\rangle\right|^{2}
		   =\left|\left\langle f\left|e^{-\frac{i}{\hbar} E_{f} t} \hat{U}_{I}(t)\right| i\right\rangle\right|^{2}=\left|\left\langle f\left|\hat{U}_{I}(t)\right| i\right\rangle\right|^{2}\).</p>
		
		<h3>Transition probability: harmonic perturbation</h3>
		<p>Consider a perturbation to the Hamiltonian that oscillates sinusoidally in time. This is usually termed a harmonic perturbation. Thus,
		   $$\hat{H}_{S}(t)=\left\{\begin{array}{ll}
             \hat{H}_{0}, & t<0 \\
             \hat{H}_{0}+\hat{V} e^{i \omega t}+\hat{V}^{\dagger} e^{-i \omega t}, & t>0
             \end{array}\right.\tag{2}$$
		   where \(\omega\) is a nonzero real constant, \(\hat{V}\) may not be hermitian, but is t-independent.
		   In general, it's a function of the position, momentum, and spin operators.</p>
		<p>Keep up to 1st order term in the Dyson series of \(\hat{U}_{I}(t)\), we have 
		   \(\left\langle f\left|\hat{U}_{I}(t)\right| i\right\rangle=\langle f \mid i\rangle+\frac{-\mathrm{i}}{\hbar} \int_{t_{1}=0}^{t} e^{\mathrm{i}\left(E_{f}-E_{i}\right) t_{1} / \hbar}\left(e^{\mathrm{i} \omega t} V_{f i}+e^{-\mathrm{i} \omega t} V_{f i}^{\dagger}\right) \mathrm{d} t_{1}+O\left(V^{2}\right) 
           =\langle f \mid i\rangle-\left[\frac{V_{f i}}{\left(E_{f}-E_{i}+\hbar \omega\right)}\left(e^{\frac{\mathrm{i}}{\hbar}\left(E_{f}-E_{i}+\hbar \omega\right) t}-1\right)+\frac{V_{f i}^{\dagger}}{\left(E_{f}-E_{i}-\hbar \omega\right)}\left(e^{\frac{\mathrm{i}}{\hbar}\left(E_{f}-E_{i}-\hbar \omega\right) t}-1\right)\right]+O\left(V^{2}\right)\).
		   For \(f\neq i\) case, the transition probability is 
		   \(P(i \rightarrow f, t)= \frac{4 \sin ^{2}\left(\frac{\Delta E+\hbar \omega}{2 \hbar} t\right)}{(\Delta E+\hbar \omega)^{2}}\left|V_{f i}\right|^{2}+\frac{4 \sin ^{2}\left(\frac{\Delta E-\hbar \omega}{2 \hbar} t\right)}{(\Delta E-\hbar \omega)^{2}}\left|V_{f i}^{\dagger}\right|^{2} 
           +\frac{4 \sin \left(\frac{\Delta E+\hbar \omega}{2 \hbar} t\right) \sin \left(\frac{\Delta E-\hbar \omega}{2 \hbar} t\right)}{(\Delta E)^{2}-\hbar^{2} \omega^{2}}\left(V_{f i}^{*} V_{f i}^{\dagger} e^{-\mathrm{i} \omega t}+\left(V_{f i}^{\dagger}\right)^{*} V_{f i} e^{\mathrm{i} \omega t}\right)\).</p>
		<p>The function \(\operatorname{sinc} (x)\) takes its largest values when \(|x|\gg\pi\), as \(t\) increases, the ranges in \(\omega\) over which these two terms are non-negligible gradually shrink in size. 
		   Eventually, when \(t\gg2\pi/|\omega_{fi}|\), these two ranges become strongly non-overlapping. Hence, in this limit, 
		   $$P_{i \rightarrow f}(t)=\frac{t^{2}}{\hbar^{2}}\left\{\left|V_{f i}\right|^{2} \operatorname{sinc}^{2}\left[\left(\omega+\omega_{f i}\right) t / 2\right]+\left|V_{f i}^{\dagger}\right|^{2} \operatorname{sinc}^{2}\left[\left(\omega-\omega_{f i}\right) t / 2\right]\right\},\tag{3}$$
		   where \(\omega_{fi}=\Delta E/\hbar\).</p>
		<p>Take \(t\rightarrow +\infty \) limit, the transition rate is given by <strong>Fermi's golden rule</strong>: 
		   \(\Gamma(i \rightarrow f) \equiv \lim _{t \rightarrow+\infty} \frac{P(i \rightarrow f, t)}{t}=\frac{2 \pi}{\hbar}\left[\delta\left(E_{f}-E_{i}+\hbar \omega\right)\left|V_{f i}\right|^{2}+\delta\left(E_{f}-E_{i}-\hbar \omega\right)\left|V_{f i}^{\dagger}\right|^{2}\right]\).
		   It indicates that when the decay-width of state \(|f\rangle\) is smaller than the laser's line-width, reduce the line-width of the laser will increse the transition rate.</p>
		
		<h3>Rabi formula</h3>
		<p>For a two-state system, we can has analyticly calculated the evolution of states under Hamiltonian (2).
		   Now a state \(|\psi\rangle=c_1|i\rangle+c_2|f\rangle\) under interaction picture is governed by eq.(1):
		   $$\begin{array}{l}
           \mathrm{i} \frac{d c_{1}}{d t}=\frac{\gamma}{2} \exp \left[+\mathrm{i}\left(\omega-\omega_{21}\right) t\right] c_{2}, \\
           \mathrm{i} \frac{d c_{2}}{d t}=\frac{\gamma^*}{2} \exp \left[-\mathrm{i}\left(\omega-\omega_{21}\right) t\right] c_{1},
           \end{array}$$
		   where \(\left\langle f\left|\hat{V}^{\dagger}\right| i\right\rangle\) is set to \(\frac{\gamma^*}{2}\hbar\) and \(\omega_{21}=(E_f-E_i)/\hbar\).
		   It can be combined to give a second-order differential equation for the time variation of the amplitude \(c_2\):
		   $$\frac{d^{2} c_{2}}{d t^{2}}+\mathrm{i}\left(\omega-\omega_{21}\right) \frac{d c_{2}}{d t}+\frac{\gamma^{2}}{4} c_{2}=0.$$
		   It is easily to see that \(e^{rt}\) satisfied the above equation whose eigen-equation is
		   \(r^2+i(\omega-\omega_{21})+\frac{\gamma^2}{4}=0\). Given the initial conditions \(c_2=0\) and \(\mathrm{i}\frac{d c_{2}}{d t}=\gamma^*/2\), 
		   we have 
		   \(c_{2}(t)=\frac{-\mathrm{i} \gamma^*}{\left[\gamma^{2}+\left(\omega-\omega_{21}^{2}\right]^{2}\right]^{1 / 2}} \exp \left[-\mathrm{i}\left(\omega-\omega_{21}\right) \frac{t}{2}\right] 
           \sin \left(\left[\gamma^{2}+\left(\omega-\omega_{21}\right)^{2}\right]^{1 / 2} \frac{t}{2}\right)\), with
           \(c_{1}(t)=\exp \left[\mathrm{i}\left(\omega-\omega_{21}\right) \frac{t}{2}\right] \cos \left(\left[\gamma^{2}+\left(\omega-\omega_{21}\right)^{2}\right]^{1 / 2} \frac{t}{2}\right) 
           -\frac{\mathrm{i}\left(\omega-\omega_{21}\right)}{\left[\gamma^{2}+\left(\omega-\omega_{21}\right)^{2}\right]^{1 / 2}} \exp \left[\mathrm{i}\left(\omega-\omega_{21}\right) \frac{t}{2}\right] 
           \sin \left(\left[\gamma^{2}+\left(\omega-\omega_{21}\right)^{2}\right]^{1 / 2} \frac{t}{2}\right)\).
		   It follows that the probability of finding the system in final state
		   $$P_{2}(t)=\frac{\gamma^{2}}{\gamma^{2}+\left(\omega-\omega_{21}\right)^{2}} \sin ^{2}\left(\left[\gamma^{2}+\left(\omega-\omega_{21}\right)^{2}\right]^{1 / 2} \frac{t}{2}\right),$$
		   which is generally known as the <em>Rabi formula</em>.</p>
		<p>One can check that when \(|\gamma t|\) is much small than 1, the transition probability is just the result we obtained by perturbation method.</p>
		
		<h3>Electromagnetic radiation</h3>
		<p>Let us use the above results to investigate the interaction of an atomic electron with classical (i.e., non-quantized) electromagnetic radiation.</p>
		<p>The Hamiltonian of an atomic electron placed in an electromagnetic field is
		   $$H=\frac{(\mathrm{p}-e \mathbf{A})^{2}}{2 m_{\mathrm{e}}}+e \phi+V_{0}(r),$$
		   where \(\mathbf{A}\) and \(\phi\) are functions of the position operators. If we adopt the gauge \(\nabla \cdot \mathbf{A}=0\), 
		   the above equation can be written 
		   $$H=\frac{p^{2}}{2 m_{e}}-\frac{e \mathbf{A} \cdot \mathbf{p}}{m_{e}}+\frac{e^{2} A^{2}}{2 m_{e}}+e \phi+V_{0}(r).$$
		   Suppose that the perturbation corresponds to a linearly polarized, monochromatic, plane-wave. In this case, \(\phi=0\), 
		   \(\mathbf{A}=A_{0} \bm{\epsilon} \cos (\mathbf{k} \cdot \mathbf{r}-\omega t)\), 
		   where \(\mathbf{k}\) is the wavevector (note that \(\omega=k c\)), and \(\bm{\epsilon}\) a unit vector which specifies the direction of polarization 
		   (i.e., the direction of \(\mathbf{E}\)). The Hamiltonian now becomes \(H=H_0+H_1(t)\), with
		   $$H_{0}=\frac{p^{2}}{2 m_{e}}+V_{0}(r),$$ and
		   $$H_{1}=-\frac{e A_{0} \bm{\epsilon} \cdot \mathbf{p}}{2 m_{e}}[\exp (i \mathbf{k} \cdot \mathbf{r}-i \omega t)+\exp (-i \mathbf{k} \cdot \mathbf{r}+i \omega t)],$$
		   where the \(A^2\) term, which is second order in \(A_0\), has been neglected. This has the same form as eq.(2), provided that
		   $$V^{\dagger}=-\frac{e A_{0} \boldsymbol{\epsilon} \cdot \mathbf{p}}{2 m_{\mathrm{e}}} \exp (\mathrm{i} \mathbf{k} \cdot \mathbf{r}).$$</p>
		<p>It follows from eq.(3) that the transition probability for radiation induced absorption (\(\omega_{fi}>0\)) is
		   $$P_{i \rightarrow f}^{a b s}(t)=\frac{t^{2}}{\hbar^{2}} \frac{e^{2}\left|A_{0}\right|^{2}}{4 m_{e}^{2}}|\langle f|\boldsymbol{\epsilon} \cdot \mathbf{p} \exp (i \mathbf{k} \cdot \mathbf{r})| i\rangle|^{2} \operatorname{sinc}^{2}\left[\left(\omega-\omega_{f i}\right) t / 2\right].$$
		   Now, the mean energy density of an electromagnetic wave is \(u=\frac{1}{2}\epsilon_0|E_0|^2\), where \(E_0=A_0\omega\) is the peak electric and magnetic field-strengths.
		   It thus follows that 
		   $$P_{i \rightarrow f}^{a b s}(t)=\frac{t^{2} e^{2}}{2 \epsilon_{0} \hbar^{2} m_{c}^{2} \omega^{2}}|\langle f|\boldsymbol{\epsilon} \cdot \mathbf{p} \exp (\mathrm{i} \mathbf{k} \cdot \mathbf{r})| i\rangle|^{2} u \operatorname{sinc}^{2}\left[\left(\omega-\omega_{f i}\right) t / 2\right]. \tag{4}$$
		   Thus, not surprisingly, the transition probability for radiation induced absorption (or stimulated emission) is directly proportional to the <em>energy density</em> of the incident radiation.</p>
		<p>Suppose that the incident radiation is not monochromatic, but instead extends over a range of frequencies. We can write \(u=\int_{-\infty}^{\infty} \rho(\omega) d \omega\), 
		   where \(\rho(\omega) d \omega\) is the energy density of radiation whose frequencies lie between \(\omega\) and \(\omega+d\omega\). Eq. (4) generalizes to
		   $$P_{i \rightarrow f}^{a b s}(t)=\int_{-\infty}^{\infty} \frac{t^{2} e^{2}}{2 \epsilon_{0} \hbar^{2} m_{e}^{2} \omega^{2}}|\langle f|\boldsymbol{\epsilon} \cdot \mathbf{p} \exp (\mathrm{i} \mathbf{k} \cdot \mathbf{r})| i\rangle|^{2} \rho(\omega) \operatorname{sinc}^{2}\left[\left(\omega-\omega_{f i}\right) t / 2\right] d \omega.$$
		   Note, however, that the above expression is only valid provided the radiation in question is <em>incoherent</em>: i.e., there are no phase correlations between waves of different frequencies.
		   Given that the function \(\operatorname{sinc}^{2}\left[\left(\omega-\omega_{f i}\right) t / 2\right]\) is very strongly peaked about \(\omega=\omega_{fi}\) (assuming that \(t\gg 2\pi/\omega_{fi}\)), 
		   and \(\int_{-\infty}^{\infty} \operatorname{sinc}^{2}(x) d x=\pi\), the above equation reduces to
		   $$P_{i \rightarrow f}^{a b s}=\frac{\pi e^{2} \rho\left(\omega_{f i}\right)}{\epsilon_{0} \hbar^{2} m_{e}^{2} \omega_{f i}^{2}}|\langle f|\boldsymbol{\epsilon} \cdot \mathbf{p} \exp (i \mathbf{k} \cdot \mathbf{r})| i\rangle|^{2}t.$$
		   As has already been explained, the above expression is only valid when \(P_{i \rightarrow f}^{a b s}\ll 1\). However, the result that
		   $$w_{i \rightarrow f}^{a b s} \equiv \frac{d P_{i \rightarrow f}^{a b s}}{d t}=\frac{\pi e^{2} \rho\left(\omega_{f i}\right)}{\epsilon_{0} \hbar^{2} m_{e}^{2} \omega_{f i}^{2}}|\langle f|\boldsymbol{\epsilon} \cdot \mathbf{p} \exp (i \mathbf{k} \cdot \mathbf{r})| i\rangle|^{2}$$
		   is <em>constant</em> in time is universally valid. Here, \(w_{i \rightarrow f}^{a b s}\) is the transition probability per unit time interval, otherwise known as the <em>transition rate</em>. 
		   Given that the transition rate is constant, we can write
		   $$P_{i \rightarrow f}^{a b s}(t+d t)-P_{i \rightarrow f}^{a b s}(t)=\left[1-P_{i \rightarrow f}^{a b s}(t)\right] w_{i \rightarrow f}^{a b s} d t.$$
		   With the initial condition \(P_{i\rightarrow f}^{abs}(0)=0\). The above equation can be solved to give
		   $$P_{i \rightarrow f}^{a b s}(t)=1-\exp \left(-w_{i \rightarrow f}^{a b s} t\right).$$
		   Using similar arguments to the above, the transition probability for stimulated emission can be shown to take the form
		   $$P_{i \rightarrow f}^{stm}(t)=1-\exp \left(-w_{i \rightarrow f}^{a b s} t\right),$$
		   where the corresponding transition rate is written
		   $$w_{i \rightarrow f}^{stm} =\frac{\pi e^{2} \rho\left(\omega_{if}\right)}{\epsilon_{0} \hbar^{2} m_{e}^{2} \omega_{if}^{2}}|\langle f|\boldsymbol{\epsilon} \cdot \mathbf{p} \exp (i \mathbf{k} \cdot \mathbf{r})| i\rangle|^{2}.$$</p>	
		
		<h3>Electric dipole approximation</h3>
		<p>In general, the wavelength of the type of electromagnetic radiation which induces, or is emitted during, transitions between different atomic energy levels 
		   is much larger than the typical size of an atom. Thus,
		   $$\exp (\mathrm{i} \mathbf{k} \cdot \mathbf{r})=1+\mathrm{i} \mathbf{k} \cdot \mathbf{r}+\cdots,\tag{5}$$
		   can be approximated by its first term, unity. This approach is known as the <em>electric dipole approximation</em>. It follows that
		   \(\langle f| V^{\dagger} | i\rangle \simeq -\frac{e A_{0}  }{2 m_{\mathrm{e}}} \boldsymbol{\epsilon}\cdot\langle f|\mathbf{p}| i\rangle\).
		   Now, it is readily demonstrated that \(\left[\mathbf{r}, H_{0}\right]=\frac{i \hbar \mathbf{p}}{m_{e}}\), so 
		   \(\langle f|\mathbf{p}| i\rangle=-i \frac{m_{e}}{\hbar}\left\langle f\left|\left[\mathbf{r}, H_{0}\right]\right| i\right\rangle=i m_{e} \omega_{f i}\langle f|\mathbf{r}| i\rangle\).
		   Thus, our previous expressions for the transition rates for radiation induced absorption and stimulated emission reduce to 
		   $$\begin{aligned}
           w_{i \rightarrow f}^{a b s} &= \frac{\pi}{\epsilon_{0} \hbar^{2}}\left|\boldsymbol{\epsilon} \cdot \mathbf{d}_{i f}\right|^{2} \rho\left(\omega_{f i}\right), \\
           w_{i \rightarrow f}^{s t m} &= \frac{\pi}{\epsilon_{0} \hbar^{2}}\left|\boldsymbol{\epsilon} \cdot \mathbf{d}_{i f}\right|^{2} \rho\left(\omega_{i f}\right),
           \end{aligned}\tag{6}$$ 
		   respectively. Here, \(\mathbf{d}_{i f}=\langle f|e \mathbf{r}| i\rangle\) is the effective electric dipole moment of the atom when making a transition from state \(i\) to state \(f\).</p>
		<p>Eqs. (6) give the transition rates for absorption and stimulated emission, respectively, induced by a linearly polarized plane-wave. Let's look at the transition rates induced by <em>unpolarized isotropic</em> radiation. 
		   To obtain these we must average Eqs. (6) over all possible polarizations and propagation directions of the wave. To facilitate this process, we can define a set of Cartesian coordinates such that the wavevector \(\mathbf{k}\), 
		   which specifies the direction of wave propagation, points along the z-axis, and the vector \(\mathbf{d}_{if}\), which specifies the direction of the atomic dipole moment, lies in the x-z plane. 
		   It follows that the vector \(\epsilon\), which specifies the direction of wave polarization, must lie in the x-y plane, since it has to be orthogonal to \(\mathbf{k}\). Thus, we can write
		   \(\mathbf{k}=(0,0,k)\), \(\mathbf{d}_{if}=(d_{if}\sin\theta,0,d_{if}\cos\theta)\), \(\boldsymbol{\epsilon}=(\cos\phi,\sin\phi,0)\), which implies that 
		   \(\left|\boldsymbol{\epsilon} \cdot \mathbf{d}_{i f}\right|^{2}=d_{i f}^{2} \sin ^{2} \theta \cos ^{2} \phi\). We must now average the above quantity over all possible values of \(\theta\) and \(\phi\). Thus,
		   \(\left\langle\left|\boldsymbol{\epsilon} \cdot \mathbf{d}_{i f}\right|^{2}\right\rangle_{a v}=d_{i f}^{2} \frac{\iint \sin ^{2} \theta \cos ^{2} \phi d \Omega}{4 \pi}=\frac{d_{if}^2}{3}\).
		   Here, \(d_{if}^2\) stands for \(d_{i f}^{2}=|\langle f|e x| i\rangle|^{2}+|\langle f|e y| i\rangle|^{2}+|\langle f|e z| i\rangle|^{2}\).
		   Hence, the transition rates for absorption and stimulated emission induced by unpolarized isotropic radiation are \(w_{i \rightarrow f}^{a b s}=\frac{\pi}{3\epsilon_{0} \hbar^{2}}d_{if}^2 \rho\left(\omega_{f i}\right)\)
		   and \(w_{i \rightarrow f}^{stm}=\frac{\pi}{3\epsilon_{0} \hbar^{2}}d_{if}^2 \rho\left(\omega_{if}\right)\) respectively.</p>
		<p>It is possible to derive the rate of spontaneous emission between two atomic states from a knowledge of the corresponding absorption and stimulated emission rates using a famous thermodynamic argument due to Einstein. 
		   Consider a very large ensemble of similar atoms placed inside a closed cavity whose walls (which are assumed to be perfect emitters and absorbers of radiation) are held at the constant temperature \(T\). 
		   Let the system have attained thermal equilibrium. According to statistical thermodynamics, the cavity is filled with so-called "black-body" electromagnetic radiation whose energy spectrum is
		   $$\rho(\omega)=\frac{\hbar}{\pi^{2} c^{3}} \frac{\omega^{3}}{\exp \left(\hbar \omega / k_{B} T\right)-1},$$
		   where \(k_B\) is the Boltzmann constant. This well-known result was first obtained by Max Planck in 1900.</p>
		<p>Consider two atomic states, labeled \(i\) and \(f\), with \(E_i>E_f\). One of the tenants of statistical thermodynamics is that in thermal equilibrium we have so-called <em>detailed balance</em>. 
		   This means that, irrespective of any other atomic states, the rate at which atoms in the ensemble leave state \(i\) due to transitions to state \(f\) is exactly balanced by the rate at which atoms enter state \(i\) due to transitions from state \(f\). 
		   The former rate (i.e., number of transitions per unit time in the ensemble) is written 
		   \(W_{i \rightarrow f}=N_{i}\left(w_{i \rightarrow f}^{s p n}+w_{i \rightarrow f}^{s t m}\right)\), where \(\omega_{i\rightarrow f}^{spn}\) is the rate of spontaneous emission (for a single atom) between states \(i\) and \(f\), 
		   and \(N_i\) is the number of atoms in the ensemble in state \(i\). Likewise, the latter rate takes the form \(W_{f \rightarrow i}=N_{f} w_{f \rightarrow i}^{a b s}\), 
		   where \(N_f\) is the number of atoms in the ensemble in state \(f\). The above expressions describe how atoms in the ensemble make transitions from state \(i\) to state \(f\) due to a combination of spontaneous and stimulated emission, 
		   and make the opposite transition as a consequence of absorption. In thermal equilibrium, we have \(W_{i\rightarrow f}=W_{f\rightarrow i}\), which gives
		   \(w_{i \rightarrow f}^{s p n}=\frac{N_{f}}{N_{i}} w_{f \rightarrow i}^{a b s}-w_{i \rightarrow f}^{s t m}\).
		   Now, another famous result in statistical thermodynamics is that in thermal equilibrium the number of atoms in an ensemble occupying a state of energy \(E\) is proportional to \(\exp(-E/k_B T)\). 
		   This implies that \(\frac{N_{f}}{N_{i}}=\frac{\exp \left(-E_{f} / k_{B} T\right)}{\exp \left(-E_{i} / k_{B} T\right)}=\exp \left(\hbar \omega_{i f} / k_{B} T\right)\).
		   Following from above equations, the rate of spontaneous emission between states \(i\) and \(f\) takes the form
		   $$w_{i \rightarrow f}^{s p n}=\frac{\omega_{i f}^{3} d_{i f}^{2}}{3 \pi \epsilon_{0} \hbar c^{3}}.\tag{7}$$
		   It can be rewrited as \(w_{i \rightarrow f}^{s p n}=\frac{4(2\pi)^3\alpha c a_0^2}{3\lambda^3}|\langle f|\mathbf{r}/a_0| i\rangle|^{2}=(\frac{126.538}{\lambda_{fi}(\text{nm})})^3|\langle f|\mathbf{r}/a_0| i\rangle|^{2}(\text{ns}^{-1})\),
		   where \(a_0=\frac{4\pi\epsilon_0\hbar^2}{e^2}\) is the Bohr radius.</p>
		<p>One can quickly check eq.(7) with the tansition between 1s and 2p of the hydrogen atom, whose wavelength is 121.567nm. 
		   The integral in eq.(7) has an exact sulotion: \(\langle 2p,m=0|\mathbf{r}| 1s\rangle=(0,0,\frac{128\sqrt{2}}{243}a_0)\), providing the wavefunction.
		   The calculated transition rate is 1/1.5979 per nanosecond, which is very close to the measured lifetime of 2p level 1.5962 ns.</p>	
		<p>For a more complicated atom, it's very hard to calculated the atomic dipole moment from <em>ab initio</em> solution of the Schrödinger equation.
		   However, we could obtained it with experimental measurement. For example, the rabi rate between \(S_{1/2}\) and \(P_{1/2}\) of \(^{171}Yb^+\) ion
		   \(|\gamma|^2=\frac{4}{\hbar^2}|\left\langle f\left|\hat{V}^{\dagger}\right| i\right\rangle|^2 \simeq \frac{1}{\hbar^2}|E_0|^2 |\boldsymbol{\epsilon}\cdot\mathbf{d}_{if}|^2=(8\pi\alpha I/\hbar)|\langle f|\mathbf{r}| i\rangle|^{2}\),
		   where \(\alpha\) is electromagnetic coupling constant and \(I=c\epsilon_0|E_0|^2/2\) is the light intensity.
		   Providing that the life time of \(P_{1/2}\) level is about 8.07 ns, the integral \(|\langle f|\mathbf{r}| i\rangle|^{2}\) can reach at a maxium \(201a_0^2\) with a proper polarization.
		   Thus for a 10uW light power's 369nm laser beam with 100um diameter beam size, it's rabi rate can reach to near 35.3 MHz.</p>	
		   
		<h3>Electric quadrupole transitions</h3>
		<p>Retaining the first two terms of eq. (5), we obtain 
		   $$\langle f| V^{\dagger} | i\rangle \simeq -\frac{e A_{0}  }{2 m_{\mathrm{e}}} (\langle f|\boldsymbol{\epsilon}\cdot\mathbf{p}| i\rangle+\langle f|(\mathbf{k}\cdot\mathbf{r})(\boldsymbol{\epsilon}\cdot\mathbf{p})| i\rangle),\tag{8}$$
		   Suppose, however, that the transition from state \(i\) to state \(f\) is forbidden according to the selection rules for electric dipole transitions. 
		   This implies that \(\langle f|\boldsymbol{\epsilon}\cdot\mathbf{p}| i\rangle = 0\). In this case, eq. (8) reduces to
		   $$\langle f| V^{\dagger} | i\rangle = -\frac{e A_{0}\omega_{if}}{2 m_{\mathrm{e}}c} \langle f|(\mathbf{n}\cdot\mathbf{r})(\boldsymbol{\epsilon}\cdot\mathbf{p})| i\rangle,$$
		   where \(\mathbf{k}=\frac{\omega}{c}\mathbf{n}\).</p>	
		<p>According to classical electromagnetic theory, the polarization direction of the magnetic component of an electromagnetic wave propagating in the direction \(\mathbf{n}\) is given by \(\mathbf{b}=\mathbf{n}\times\boldsymbol{\epsilon}\), 
		   where \(\boldsymbol{\epsilon}\) specifies the direction of the wave's electric component. Of course, \(\mathbf{L}=\mathbf{x}\times\mathbf{p}\) represents orbital angular momentum. However,
		   \(\mathbf{b} \cdot \mathbf{L}=(\mathbf{n} \times \boldsymbol{\epsilon}) \cdot(\mathbf{x} \times \mathbf{p})=(\mathbf{n} \cdot \mathbf{x})(\boldsymbol{\epsilon} \cdot \mathbf{p})-(\boldsymbol{\epsilon} \cdot \mathbf{x})(\mathbf{n} \cdot \mathbf{p})\).
		   Furthermore, if \(S=\frac{\mathrm{i} m_{e}}{\hbar}[H,(\boldsymbol{\epsilon} \cdot \mathbf{x})(\mathbf{n} \cdot \mathbf{x})]\), then
		   $$\begin{aligned}
           S &=\frac{\mathrm{i} m_{e}}{\hbar} \epsilon_{i} n_{j}\left[H, x_{i} x_{j}\right]=\frac{\mathrm{i} m_{e}}{\hbar} \epsilon_{i} n_{j}\left(x_{i}\left[H, x_{j}\right]+\left[H, x_{i}\right] x_{j}\right) \\
           &=\epsilon_{i} n_{j}\left(x_{i} p_{j}+p_{i} x_{j}\right)=\epsilon_{i} n_{j}\left(x_{i} p_{j}+x_{j} p_{i}-\mathrm{i} \hbar \delta_{i j}\right) \\
           &=(\boldsymbol{\epsilon} \cdot \mathbf{x})(\mathbf{n} \cdot \mathbf{p})+(\mathbf{n} \cdot \mathbf{x})(\boldsymbol{\epsilon} \cdot \mathbf{p})
           \end{aligned},$$
		   where we use the fact that \(\boldsymbol{\epsilon}\cdot\mathbf{n}=0\). It follows, from the previous three equations, that
		   \((\mathbf{n} \cdot \mathbf{x})(\boldsymbol{\epsilon} \cdot \mathbf{p})=\frac{1}{2} \mathbf{b} \cdot \mathbf{L}+\frac{i m_{e}}{2 \hbar}[H,(\boldsymbol{\epsilon} \cdot \mathbf{x})(\mathbf{n} \cdot \mathbf{x})]\). Hence, 
		   $$\langle f| V^{\dagger} |i\rangle=-\frac{eA_0\omega_{if}}{4 m_{e} c} \mathbf{b} \cdot\langle i|\mathbf{L}| f\rangle-\frac{ieA_0\omega^2_{if}}{4c} \boldsymbol{\epsilon} \cdot \mathbf{Q}_{i f} \cdot \mathbf{n},\tag{9}$$
		   where \(\left(\mathbf{Q}_{i f}\right)_{j k}=\left\langle i\left|x_{j} x_{k}\right| f\right\rangle\).
		   We shall treat the two terms on the right-hand side of Equation (9) separately, because they give rise to completely different selection rules. 
		   The first term governs so-called <em>magnetic dipole transitions</em>, whereas the second governs so-called <em>electric quadrupole transitions</em>.</p>	
		<p>For electric quadrupole transitions, eq. (6) should now rewrite as
		   $$\begin{aligned}
           w_{i \rightarrow f}^{a b s} &= \frac{\pi e^2\omega^2_{if}}{4\epsilon_{0}c^2\hbar^{2}}\left|\boldsymbol{\epsilon} \cdot \mathbf{Q}_{i f} \cdot \mathbf{n}\right|^{2} \rho\left(\omega_{f i}\right), \\
           w_{i \rightarrow f}^{s t m} &= \frac{\pi e^2\omega^2_{if}}{4\epsilon_{0}c^2\hbar^{2}}\left|\boldsymbol{\epsilon} \cdot \mathbf{Q}_{i f} \cdot \mathbf{n}\right|^{2} \rho\left(\omega_{i f}\right).
           \end{aligned}$$ 
		   Suppose a set of Cartesian coordinates has been chosen when we calculated \(\mathbf{Q}_{if}\), 
		   we can write \(\mathbf{n}=(\sin\theta\cos\psi,\sin\theta\sin\psi,\cos\theta)\) to represent all propagation directions of the wave, 
		   and \(\boldsymbol{\epsilon}=(\cos\theta\cos\phi\cos\psi-\sin\phi\sin\psi,\cos\theta\cos\phi\sin\psi+\sin\phi\cos\psi,-\sin\theta\cos\phi)\) to represent all possible polarizations.
		   Now we can average the above quantity over all possible values of \(\theta\), \(\psi\) and \(\phi\). Thus, 
		   \(\left\langle\left|\boldsymbol{\epsilon} \cdot \mathbf{Q}_{i f} \cdot \mathbf{n}\right|^{2}\right\rangle_{av}= \frac{1}{8 \pi^2}\iiint |\boldsymbol{\epsilon} \cdot \mathbf{Q}_{i f} \cdot \mathbf{n}|^2 \sin\theta d\theta d\psi d\phi=\frac{1}{15}||Q||^2\),
		   where \(||Q||^2=|Q_{xx}|^2+|Q_{yy}|^2+|Q_{zz}|^2+3(|Q_{xy}|^2+|Q_{xz}|^2+|Q_{yz}|^2)-\frac{1}{2}(Q_{xx}Q^*_{yy}+Q_{yy}Q^*_{xx}+Q_{xx}Q^*_{zz}+Q_{zz}Q^*_{xx}+Q_{yy}Q^*_{zz}+Q_{zz}Q^*_{yy})\).
		   It follows, by analogy with with eq. (7), that the spontaneous emission rate associated with an electric quarrupole transition is
		   $$w_{i \rightarrow f}^{spn}=\frac{e^2\omega_{if}^{5} ||Q||^2}{60 \pi \epsilon_{0} \hbar c^{5}}.\tag{10}$$
		   It can be rewrited as \(w_{i \rightarrow f}^{s p n}=\frac{(2\pi)^5\alpha c a_0^4}{\lambda^5}|\langle f|\mathbf{rr}/a^2_0| i\rangle|^{2}=(\frac{175.816}{\lambda_{fi}(\text{nm})})^5|\langle f|\mathbf{rr}/a^2_0| i\rangle|^{2}(\text{ms}^{-1})\),
		   where \(a_0=\frac{4\pi\epsilon_0\hbar^2}{e^2}\) is the Bohr radius.</p>	
		<p>One can quickly check eq.(10) with the tansition between 1s and 3d of the hydrogen atom, whose wavelength is 102.572nm. 
		   Providing the wavefunction of the hydrogen atom, \(||Q||^2\) is calculated to be \(\frac{3^9}{2^{15}}a_0^4\) which is independent on m of 3d level.
		   The calculated transition rate is 1/1.688 per millisecond, which is very close to the measured lifetime of 2p level 1.684 ms.</p>	
		
		<h3>435 nm line as an example</h3>
        <p>Now, let's calculate the rabi rate between \(S_{1/2}\) and \(D_{3/2}\) of \(^{171}Yb^+\) ion whose lifetime is about 52.7 ms.
		   The leakage to \(F_{7/2}\) level can be safely ignored since it's an octave transition. Substituting the lifetime into the eq.(10),
		   we can quickly get \(||Q||^2\) for this transition is about \(73736a_0^4\).</p>
		<p>Suppose we want to calculate \(F=0, m=0\) to \(F=2, m=0\) transition with a laser with linear polarization,
		   whose non-zero components of \(||Q||\) are \(Q_{xx}=Q_{yy}=-90.5a_0^2\) and \(Q_{zz}=181a_0^2\). 
		   We should first decouple the angular momentum of the orbit, the electron spin and the nuclear spin.
		   For \(F=0, m=0\) of \(S_{1/2}\) state, it can be expressed under \(|m_L,s_e,s_n\rangle\) basis: 
		   \(\sqrt{\frac{1}{2}}(|0,\uparrow,\downarrow\rangle-|0,\downarrow,\uparrow\rangle)\) while \(F=2, m=0\) of \(D_{3/2}\) state can be expressed as
		   \(\sqrt{\frac{3}{10}}(|1,\downarrow,\downarrow\rangle-|-1,\uparrow,\uparrow\rangle)-\sqrt{\frac{1}{5}}(|0,\uparrow,\downarrow\rangle-|0,\downarrow,\uparrow\rangle)\).
		   Since the position operator is independent of the electron spin and the nuclear spin, we can trace out them first which gives
		   \(|\gamma|^2=\frac{4}{\hbar^2}|\left\langle f\left|\hat{V}^{\dagger}\right| i\right\rangle|^2 \simeq \frac{e^2A_0^2\omega_{if}^4}{10c^2\hbar^2}|\boldsymbol{\epsilon} \cdot \mathbf{Q}_{02} \cdot \mathbf{n}|^2=\frac{4\pi\alpha I\omega_{if}^2}{5\hbar c^2}|\boldsymbol{\epsilon} \cdot \mathbf{Q}_{02} \cdot \mathbf{n}|^2\),
		   where \(\left(\mathbf{Q}_{02}\right)_{j k}=\left\langle L=0, m_L=0\left|x_{j} x_{k}\right| L=2, m_L=0\right\rangle\).</p>
		<p>If we keep the notation of propagation directions of the wave and polarizations as the previous section, the coupling term is estimated to be
		   \(|\boldsymbol{\epsilon} \cdot \mathbf{Q}_{02} \cdot \mathbf{n}|^2=73736a_0^4\cos^2\theta\sin^2\theta\cos^2\phi\), 
		   where \(\theta\) is the angle between \(\mathbf{n}\) and \(\mathbf{B}\), \(\phi\) is the angle between \((\mathbf{n},\mathbf{B})\)-plane and \(\boldsymbol{\epsilon}\).</p>
		<p>For a 400uW light power's 435nm laser beam with 80um diameter beam size, it's rabi rate can reach to near \(2\pi\times 517\text{ kHz}\),
		   corresponding to about 1 us \(\pi\)-time.</p>
		
		<h3>External links</h3>
		<ul>
		  <li>The main part of this article is revised from Richard Fitzpatrick's lecture notes
		      <a href="http://farside.ph.utexas.edu/teaching/qmech/Quantum/node117.html"> Electromagnetic Radiation </a> and
			  <a href="https://farside.ph.utexas.edu/teaching/qm/Quantum/node89.html"> Electric Quadrupole Transitions </a>.
		  </li>
		  <li>First two sections are revised from Fa Wang's lecture notes about perturbation theory.</li>
        </ul>
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
</style>