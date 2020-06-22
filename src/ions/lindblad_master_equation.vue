<template>
  <div v-katex:auto class="container-fluid">
    <div class="row">
	  <div class="col-12">
	    <h1>Lindblad Master Equation</h1>
        <p>This article provides a method to handle dynamics of <strong>open quantum systems</strong>.
		   We say a system is open if it is imperfectly isolated, and therefore
           exchanges energy and information with its unobserved environment. When we study open systems, 
		   that is, when we limit our attention to just part of a larger system, 
		   then (contrary to the close system which are perfectly isolated):
		   <ol>
             <li>States are <em>not</em> rays.</li>
             <li>Measurements are <em>not</em> orthogonal projections.</li>
             <li>Evolution is <em>not</em> unitary.</li>
           </ol>  
		</p>
		<p>To understand the behavior of an open system S, we will regard S combined
           with its environment E as a closed system (the whole “universe”), then
           ask how S behaves when we are able to observe S but not E.</p>
        
		<h3>The density operator</h3>
		<p>As a first step toward understanding the quantum description of an open system, consider a
           two-qubit world in which we observe only one of the qubits. Qubit A is
           here in the room with us, and we are free to observe or manipulate it any
           way we please. But qubit B is locked in a vault where we can’t get access to it.
		   We’ll use \(\{|0\rangle_{A},|1\rangle_{A}\}\) and \(\{|0\rangle_{B},|1\rangle_{B}\}\) to denote orthonormal bases for
           qubits A and B respectively. Consider a quantum state of the two-qubit world of the form
		   $$|\psi\rangle_{A B}=a|0\rangle_{A} \otimes|0\rangle_{B}+b|1\rangle_{A} \otimes|1\rangle_{B}.$$
		   In this state, qubits A and B are <em>correlated</em>. If we subsequently measure qubit B, then we are guaranteed 
		   to find \(|0\rangle_{B}\) if we had found \(|0\rangle_{A}\), and we are guaranteed
           to find \(|1\rangle_{B}\) if we had found \(|1\rangle_{A}\). In this sense, the outcomes of the
           \(\{|0\rangle_{A},|1\rangle_{A}\}\) and \(\{|0\rangle_{B},|1\rangle_{B}\}\) 
		   measurements are perfectly correlated in the state \(|\psi\rangle_{AB}\).</p>
		<p>Now we would like to consider more general observables acting on
           qubit A, and we would like to characterize the measurement outcomes for
           A alone. An observable acting on qubit A only can be expressed as \(M_A\otimes I_B,\)
		   where \(M_A\) is a self-adjoint operator acting on A, and \(I_B\) is the identity
           operator acting on B. The expectation value of the observable in the state \(|\psi\rangle\) is:
		   $$\begin{aligned}
           \left\langle M_{A}\right\rangle &=\left\langle\psi\left|M_{A} \otimes I_{B}\right| \psi\right\rangle \\
           &=\left(a^{*}\left\langle 00\left|+b^{*}\langle 11|\right)\left(M_{A} \otimes I_{B}\right)(a|00\rangle+b|11\rangle)\right.\right.\\
           &=|a|^{2}\left\langle 0\left|M_{A}\right| 0\right\rangle+|b|^{2}\left\langle 1\left|M_{A}\right| 1\right\rangle.
           \end{aligned}$$
		   This expression can be rewritten in the form 
		   <div class="anchor" id="eq1"></div>
		   $$\left\langle M_{A}\right\rangle=\text{tr}(M_A\rho_A),\tag{1}$$
		   where \(\rho_{\mathrm{A}}=|a|^{2}|0\rangle\langle0|+| b|^{2} | 1\rangle\langle 1|\) 
		   and \(\text{tr}(\cdot)\) denotes the <em>trace</em>. The operator \(\rho_A\) is called the <strong>density operator</strong>
           (or <strong>density matrix</strong>) for qubit A. It is self-adjoint, positive (its eigenvalues
           are nonnegative) and it has unit trace (because \(|\psi\rangle\) is a normalized state).</p>
		<p>Because \(\left\langle M_{A}\right\rangle\) has the form <a href="#eq1">eq.(1)</a> for any observable \(M_A\) acting
           on qubit A, it is consistent to interpret \(\rho_A\) as representing an <em>ensemble</em> of
           possible quantum states, each occurring with a specified probability. That
           is, we would obtain precisely the same result for \(\left\langle M_{A}\right\rangle\) if we stipulated
           that qubit A is in one of two quantum states. With probability \(p_0=|a|^2\)
           it is in the quantum state \(|0\rangle\), and with probability \(p_1=|b|^2\) it is in the state \(|1\rangle\).</p>
		<p>There is an essential difference between a coherent superposition of the states \(|0\rangle\) and \(|1\rangle\), 
		   and a probabilistic ensemble, in which \(|0\rangle\) and \(|1\rangle\) can each occur with specified probabilities.
           For example, for a spin-\(\frac{1}{2}\) object we have seen that if we measure \(\sigma_x\) in
           the state \(\frac{1}{\sqrt{2}}(\left|\uparrow_{z}\right\rangle+\left|\downarrow_{z}\right\rangle)\), 
		   we will obtain the result \(\left|\uparrow_{x}\right\rangle\) with probability one. But the ensemble in which 
		   \(\left|\uparrow_{z}\right\rangle\) and \(\left|\downarrow_{z}\right\rangle\) each occur with probability
           \(\frac{1}{2}\) is represented by the density operator
           $$\rho=\frac{1}{2}\left(\left|\uparrow_{z}\right\rangle\left\langle\uparrow_{z}\right|+\left| \downarrow_{z}\right\rangle\left\langle\downarrow_{z}\right|\right)=\frac{1}{2} I,$$
		   and the projection onto \(\left|\uparrow_{x}\right\rangle\) then has the expectation value
		   $$\operatorname{tr}\left(\left|\uparrow_{x}\right\rangle\left\langle\uparrow_{x}\right| \rho\right)=\left\langle\uparrow_{x}\right|\rho\left| \uparrow_{x}\right\rangle=\frac{1}{2}.$$
		   Futher more, if in the two-qubit world an equally weighted coherent superposition
           of \(|00\rangle\) and \(|11\rangle\) is prepared, the state of qubit A behaves
           <em>incoherently</em> – along any axis it is an equiprobable mixture of spin up and spin down.</p>
		<p>This discussion of the correlated two-qubit state \(|\psi\rangle_{AB}\) is easily generalized
           to an arbitrary state of any bipartite quantum system (a system divided
           into two parts). The Hilbert space of a bipartite system is \(\mathcal{H}_A\otimes\mathcal{H}_B\) 
		   where \(\mathcal{H}_{A,B}\) are the Hilbert spaces of the two parts. This means that if
           \(\{|i\rangle_A\}\) is an orthonormal basis for \(\mathcal{H}_A\) and \(\{|\mu\rangle_B\}\) is an orthonormal basis
           for \(\mathcal{H}_B\), then \(\{|i\rangle_A\otimes|\mu\rangle_B\}\) is an orthonormal basis for 
		   \(\mathcal{H}_A\otimes\mathcal{H}_B\). Thus an arbitrary pure state of \(\mathcal{H}_A\otimes\mathcal{H}_B\) 
		   can be expanded as $$|\psi\rangle_{A B}=\sum_{i, \mu} a_{i \mu}|i\rangle_{A} \otimes|\mu\rangle_{B},$$
		   where \(\sum_{i,\mu}|a_{i \mu}|^2=1\). The expectation value of an observable \(M_A\otimes I_B\) 
		   that acts only on subsystem A is
		   $$\begin{aligned}
           \left\langle M_{A}\right\rangle &=_{A B}\left\langle\psi\left|M_{A} \otimes I_{B}\right| \psi\right\rangle_{A B} \\
           &=\sum_{j, \nu} a_{j \nu}^{*}(_{A}\langle j|\otimes _{B}\langle\nu|)\left(M_{A} \otimes I_{B}\right) \sum_{i, \mu} a_{i \mu}\left(|i\rangle_{A} \otimes|\mu\rangle_{B}\right)\\
           &=\sum_{i, j, \mu} a_{j \mu}^{*} a_{i \mu}\left\langle j\left|M_{A}\right| i\right\rangle \\
		   &=\sum_{k}\sum_{i, j, \mu} a_{j \mu}^{*} a_{i \mu}\left\langle j\left|k\rangle\langle k|M_{A}\right| i\right\rangle \\
		   &=\sum_{k}\sum_{i, j, \mu} a_{j \mu}^{*} a_{i \mu}\langle k|M_{A}| i \rangle \langle j |k\rangle=\operatorname{tr}\left(M_{A} \rho_{A}\right),
           \end{aligned}$$ where 
		   <div class="anchor" id="eq1"></div>
		   $$\rho_{A}=\operatorname{tr}_{B}(|\psi\rangle\langle\psi|) \equiv \sum_{i, j, \mu} a_{i \mu} a_{j \mu}^{*}|i\rangle\langle j|\tag{2}$$
		   is the density operator of subsystem A.</p>
		<p>We may say that the density operator \(\rho_A\) for subsystem A is obtained
           by performing a <em>partial trace</em> over subsystem B of the density operator
          (in this case a pure state) for the combined system AB.</p>
		<p>From the definition <a href="#eq2">eq.(2)</a>, we can immediately infer that \(\rho_A\) has the following properties:
		   <ol>
             <li>\(\rho_A\) is self-adjoint: \(\rho_A=\rho_A^\dagger\).</li>
             <li>\(\rho_A\) is positive: For any \(|\psi\rangle\), \(\langle\varphi|\rho_{A}| \varphi\rangle=\sum_{\mu}|\sum_{i} a_{i \mu}\langle\varphi | i\rangle|^{2} \geq 0\).</li>
             <li>\(\text{tr}(\rho_A)=1\): we have \(\text{tr}(\rho_A)=\sum_{i,\mu}|a_{i \mu}|^2=1\), 
			     since \(|\psi_{AB}\rangle\) is normalized.</li>
           </ol>  
		   It follows that \(\rho_A\) can be diagonalized in an orthonormal basis, that the
           eigenvalues are all real and nonnegative, and that the eigenvalues sum to one.</p>
		<p>If we are looking at a subsystem of a larger quantum system, then, even
           if the state of the larger system is a ray, the state of the subsystem need
           not be; in general, the state is represented by a density operator. In the
           case where the state of the subsystem <em>is</em> a ray, and we say that the state is
           <em>pure</em>. Otherwise the state is <em>mixed</em>. If the state is a pure state \(|\psi_{A}\rangle\), then
           the density matrix \(\rho_A=|\psi\rangle\langle\psi|\) is the <em>projection</em> onto the one-dimensional
           space spanned by \(|\psi_{A}\rangle\). Hence a pure density matrix has the property
           \(\rho_A^2=\rho_A\). A general density matrix, expressed in the basis \(\{|a\rangle\}\) in which it is diagonal, has the form
		   $$\rho_A=\sum_{a}p_a|a\rangle\langle a|,$$
		   where  \(0 < p_a\leq1\). If the state is not pure, there are two
           or more terms in this sum, and \(\rho^2\neq\rho\); in fact, \(\text{tr} \rho^2=\sum p_a^2<\sum p_a=1\).
		   We say that \(\rho\) is an <em>incoherent</em> mixture of the states \(\{|a\rangle\}\); “incoherent”
           means that the relative phases of the \(|a\rangle\)’s are experimentally inaccessible.</p>
		<p>Since the expectation value of <em>any</em> observable M acting on the subsystem can be expressed as
		   $$\langle M\rangle=\operatorname{tr} M \rho=\sum_{a} p_{a}\langle a|M| a\rangle,$$
		   we see as before that we may interpret \(\rho\) as describing an <em>ensemble</em> of pure
           quantum states, in which the state \(|a\rangle\) occurs with probability \(p_a\). We
           have, therefore, come a long part of the way to understanding how probabilities
           arise in quantum mechanics when a quantum system A interacts
           with another system B. A and B become <em>entangled</em>, that is, correlated.
           The entanglement <em>destroys the coherence</em> of a superposition of states of
           A, so that some of the phases in the superposition become inaccessible if
           we look at A alone. We may describe this situation by saying that the
           state of system A <em>collapses</em> — it is in one of a set of alternative states,
           each of which can be assigned a probability.</p>
		
		<h3>Generalized measurements</h3>
		<p>To measure an observable \(M\), we will modify the Hamiltonian of the
           world by turning on a coupling between that observable and another variable
           that represents the apparatus. Depending on the context, we will
           refer to the auxiliary system used in the measurement as the "pointer,"
           the "meter," or the "ancilla". The coupling establishes a
           correlation between the eigenstates of the observable and the distinguishable
           states of the pointer, so that we can prepare an eigenstate of the
           observable by "observing" the pointer.</p>
		<p>This may not seem like a fully satisfying model of measurement because
		   we have not explained how to measure the pointer. Von Neumann's attitude
           was that it is possible in principle to correlate the state of a microscopic
           quantum system with the value of a macroscopic classical variable,
           and we may take it for granted that we can perceive the value of the
           classical variable. A quantum measurement, then, is a procedure for amplifying
           a property of the microscopic world, making it manifest in the macroscopic world.</p>
		<p>The axiom of quantum theory asserts that a measurement may be described
           as an orthogonal projection operator. But if a measurement of
           system S is realized by performing an orthogonal measurement on a larger
           system that contains S, the resulting operation performed on S alone need
           not be an orthogonal projection. We would like to find a mathematical
           description of such "generalized measurements" on system S.</p>
		<p>Suppose, to be concrete, that the system A is a single qubit, and so is
           the pointer B. They interact, resulting in the unitary map
		   <div class="anchor" id="eq3"></div>
		   $$U:(\alpha|0\rangle+\beta|1\rangle)_{A} \otimes|0\rangle_{B} \mapsto \alpha|0\rangle_{A} \otimes|0\rangle_{B}+\beta|1\rangle_{A} \otimes|1\rangle_{B}.\tag{3}$$
		   Measuring the pointer by projecting onto the basis \(\{|0\rangle,|1\rangle\}\) would induce
           an orthogonal measurement of the system, also in the \(\{|0\rangle,|1\rangle\}\) basis. But
           suppose that we measure the pointer in a different basis instead, such as
		   \(\left\{|\pm\rangle=\frac{1}{\sqrt{2}}(|0\rangle \pm|1\rangle)\right\}\).
		   Then the measurement postulate dictates that the
           two outcomes \(+\) and \(-\) occur equiprobably, and that the corresponding
           post-measurement states of the system are \(\alpha|0\rangle\pm\beta|1\rangle\).
		   In contrast to an orthogonal measurement of the system, these two postmeasurement
           states are not orthogonal, unless \(|\alpha|=|\beta|\). 
           We use the term <strong>generalized measurement</strong> to mean a measurement, like
           this one, which is not necessarily an orthogonal projection acting on the system.</p>
		<p>It is convenient to describe this measurement procedure by expanding
           the entangled state of system and pointer in the basis in which the pointer
           is measured; hence we rewrite <a href="#eq3">eq.(3)</a> as
		   $$U:|\psi\rangle_{A} \otimes|0\rangle_{B} \mapsto M_{+}|\psi\rangle_{A} \otimes|+\rangle_{B}+M_{-}|\psi\rangle_{A} \otimes|-\rangle_{B},$$
		   where \(M_{+}=\frac{1}{\sqrt{2}}\left(\begin{array}{cc}
           1 & 0 \\
           0 & 1
           \end{array}\right)=\frac{1}{\sqrt{2}} I\), \( M_{-}=\frac{1}{\sqrt{2}}\left(\begin{array}{cc}
           1 & 0 \\
           0 & -1
           \end{array}\right)=\frac{1}{\sqrt{2}} \sigma_{z}\).
		   Evidently, by measuring B in the basis \(\{|\pm\rangle\}\), we prepare A in one of the
           states \(M_{\pm}|\psi\rangle\), up to a normalization factor.</p>
		<p>Now let's generalize this idea to the case where the pointer system
           B is N-dimensional, and the measurement of the pointer projects onto
           an orthonormal basis \(\{|a\rangle, a=0,1,2, \ldots, N-1\}\). Again we'll assume
           that the system A and pointer B are initially in a product state, then
           an entangling unitary transformation \(U\) correlates the system with the
           pointer. By expanding the action of \(U\) in the basis for B we obtain
		   <div class="anchor" id="eq4"></div>
		   $$U:|\psi\rangle_{A} \otimes|0\rangle_{B} \mapsto \sum_{a} M_{a}|\psi\rangle_{A} \otimes|a\rangle_{B}.\tag{4}$$
		   Since \(U\) is unitary, it preserves the norm of any input, which means that
		   \(1=\| \sum_{a} M_{a}|\psi\rangle \otimes|a\rangle \|^{2}=\sum_{a, b}\left\langle\psi\left|M_{a}^{\dagger} M_{b}\right| \psi\right\rangle\langle a | b\rangle=\sum_{a}\left\langle\psi\left|M_{a}^{\dagger} M_{a}\right| \psi\right\rangle\) 
		   for any \(|\psi\rangle\); hence
		   <div class="anchor" id="eq5"></div>
		   $$\sum_{a} M_{a}^{\dagger} M_{a}=I.\tag{5}$$</p>
		<p>The complete orthogonal measurement projecting onto the pointer basis
           \(\{|a\rangle_B\}\) is equivalent to the incomplete orthogonal measurement on
           AB with projectors \(\{\boldsymbol{I} \otimes|a\rangle\langle a|\}\); the measurement postulate asserts that
           outcome a occurs with probability
		   <div class="anchor" id="eq6"></div>
		   $$\operatorname{Prob}(a)=\| M_{a}|\psi\rangle \|^{2},\tag{6}$$
		   and that if outcome a occurs the post-measurement state of the system is
		   <div class="anchor" id="eq7"></div>
		   $$\frac{M_{a}|\psi\rangle}{\| M_{a}|\psi\rangle \|}.\tag{7}$$</p>
		<p>We see that if the initial state of the system is the density operator
           \(\rho\) (realized as an ensemble of pure states), there is an operator \(E_a=M_a^\dagger M_a\) 
		   associated with each possible measurement outcome a, such that
           the probability of outcome a is
		   $$\operatorname{Prob}(a)=\operatorname{tr}\left(\rho E_{a}\right).$$
		   The measurement operators \(\{E_a\}\) form a complete set of Hermitian nonnegative
           operators; that is, they satisfy the properties:
		   <ol>
             <li><em>Hermiticity.</em> \(E_a=E_a^\dagger\).</li>
             <li><em>Positivity.</em> \(\left\langle\psi\left|\boldsymbol{E}_{a}\right| \psi\right\rangle \geq 0\) for any vector 
		         \(|\psi\rangle\); we abbreviate this property by simply writing \(E_a\geq 0\).</li>
             <li><em>Completeness.</em> \(\sum_{a} E_a=I\).</li>
           </ol>   
		   Such a partition of unity by nonnegative operators is called a <strong>positive
           operator-valued measure</strong>, or POVM.</p>
		<h3>Quantum channels</h3>
		<p>We have seen that a pure state of the bipartite system AB may behave like a mixed state
           when we observe subsystem A alone, and that an orthogonal measurement
           of the bipartite system can realize a (nonorthogonal) POVM on A alone.
           Next we ask, if a state of the bipartite system undergoes unitary evolution,
           how do we describe the evolution of A alone?</p>
		<p>In effect, we have already answered this question in our discussion of
           generalized measurements. If system A starts out in a pure state \(|\psi\rangle\)
           (<em>unentangled</em> with B), and then interacts with B, the joint state of AB has
           the form <a href="#eq4">eq.(4)</a>, the resulting density operator for A is found by tracing
           out B. Equivalently, we may imagine measuring system B in the basis
           \(\{|a\rangle\}\), but failing to record the measurement outcome, so we are forced to
           average over all the possible post-measurement states <a href="#eq7">(7)</a>, weighted by their
           probabilities <a href="#eq6">(6)</a>. The result is that the initial density operator \(\rho=|\psi\rangle\langle\psi|\) is
           subjected to a linear map \(\mathcal{E}\), which acts as
		   <div class="anchor" id="eq8"></div>
		   $$\mathcal{E}(\rho)=\sum_{a} M_{a} \rho M_{a}^{\dagger},\tag{8}$$
		   where the operators \(\{M_a\}\) obey the completeness relation <a href="#eq5">eq.(5)</a>. Being
           linear, \(\mathcal{E}\) acts as in <a href="#eq8">eq.(8)</a> not just on pure states, but on any density operator.</p>
		<p>A linear map of the form <a href="#eq8">eq.(8)</a>, where the \(\{M_a\}\) obey <a href="#eq5">eq.(5)</a>, is
           called a <strong>quantum channel</strong>. The word "channel" is drawn from communication
           theory —— we are to imagine a sender who transmits the state \(\rho\)
           though a communication link to another party who receives the modified
           state \(\mathcal{E}(\rho)\). Sometimes the word <em>superoperator</em> is used as a synonym for
           quantum channel, where "super" conveys that the map takes operators
           to operators rather than vectors to vectors. Yet another name for the
           same object is <strong>trace-preserving completely positive map</strong>, or <strong>TPCP</strong> map
           for short. The justification for this name will emerge shortly. <a href="#eq8">Eq.(8)</a>
           is said to be an <strong>operator-sum representation</strong> of the quantum channel, and
           the operators \(\{M_a\}\) are called the <strong>Kraus operators</strong> or <em>operation elements</em> of the channel.</p>
		<p>A quantum channel maps density operators to density operators; that
           is, has the following easily verified properties:
		   <ol>
             <li><em>Linearity.</em> \(\mathcal{E}\left(\alpha \rho_{1}+\beta \rho_{2}\right)=\alpha \mathcal{E}\left(\rho_{1}\right)+\beta \mathcal{E}\left(\rho_{2}\right)\).</li>
             <li><em>Preserves Hermiticity.</em> \(\mathcal{E}\left(\alpha \rho_{1}+\beta \rho_{2}\right)=\alpha \mathcal{E}\left(\rho_{1}\right)+\beta \mathcal{E}\left(\rho_{2}\right)\).</li>
             <li><em>Preserves positivity.</em> \(\rho>0\) implies \(\mathcal{E}\left(\rho\right)>0\).</li>
			 <li><em>Preserves trace.</em> \(\text{tr}(\mathcal{E}\left(\rho\right))=\text{tr}(\rho)\).</li>
           </ol>  
		   These properties partially explain the locution "trace-preserving completely
           positive map", except that we are still missing the reason for the
           modifier "completely". That's coming now.</p>
		<p>A quantum channel is a linear map taking density operators to density
           operators. In particular, if its input is a nonnegative operator than so is
           its output. We therefore say that a channel is a <em>positive map</em>.
		   But a channel has a stronger property than mere positivity; it is <em>completely
           positive</em>. This means that the channel remains positive even when
           we consider it to be acting on just part of a larger system.
		   If a channel \(\mathcal{E}\) maps linear operators on Hilbert space \(\mathcal{H}_A\) to linear
           operators on Hilbert space \(\mathcal{H}_{A'}\), we will usually express this more economically
           by saying \(\mathcal{E}\) maps A to A'. We may extend the input Hilbert
           space to \(\mathcal{H}_A\otimes\mathcal{H}_B\), and consider the extended channel \(\mathcal{E}\otimes I\) mapping AB
           to A'B. We say that \(\mathcal{E}\) is completely positive if any such extension of \(\mathcal{E}\) is positive.
		   Clearly, quantum channels are completely positive, because if \(\mathcal{E}\) has
           an operator-sum representation with Kraus operators \(\{M_a\}\), then \(\mathcal{E}\otimes I\) has 
		   an operator-sum representation with Kraus operators \(\{M_a\otimes I\}\).</p>
		<p>Quantum channels are important because they provide us with a formalism
           for discussing <em>decoherence</em>, the evolution of pure states into mixed
           states. <em>Unitary</em> evolution of \(\rho_A\) is the special case in which there is only
           one term in the operator sum, since no information is leaking into the environment. 
		   If there are two or more terms, then there
           are pure initial states of A which become entangled with B under evolution
           governed by the joint unitary transformation \(U_{AB}\), and therefore the
           state of A becomes mixed when we trace out B.</p>
		
		<h3>Amplitude-damping channel</h3>
		<p>Let's study an example to help us familiarize with the concept of a quantum channel.
		   The <em>amplitude-damping channel</em> is a schematic model of the decay of an
           excited state of a (two-level) atom due to spontaneous emission of a photon.
           By detecting the emitted photon ("observing the environment") we
           can perform a POVM that gives us information about the initial preparation of the atom.</p>
		<p>We've seen how a quantum channel acting on system A arises from
           a unitary transformation acting on A and B followed by a partial trace
           on B. As in our discussion of generalized measurements, we can also
           run this argument backwards to see that any quantum channel may be
           realized this way. Given a quantum channel \(\mathcal{E}\) acting on A with Kraus
           operators \(\{M_a\}\), we may introduce the auxiliary system B with Hilbert
           space dimension matching the number of Kraus operators. A unitary
           transformation may then be constructed whose action on \(|\psi\rangle_A\otimes|0\rangle_B\) is as in <a href="#eq4">eq.(4)</a>, 
		   from which the quantum channel \(\mathcal{E}\) is obtained by tracing out B.</p>
		<p>If we wish we may imagine that the channel \(\mathcal{E}\) describes the fate of quantum
           information that is transmitted with some loss of fidelity from a sender
           to a receiver due to the quantum system interacting with its environment.
		   Therefore, by listing all the possible ways the environment might acquire the information from the two-level atom,
		   we can "guess" the unitary transformation for the amplitude-damping channel.</p>
		<p><strong>Unitary representation.</strong> We denote the atomic ground state by \(|0\rangle_A\) and
           the excited state of interest by \(|1\rangle_A\). The "environment" is the electromagnetic
           field, assumed initially to be in its vacuum state \(|0\rangle_E\). After we
           wait a while, there is a probability p that the excited state has decayed to
           the ground state and a photon has been emitted, so that the environment
           has made a transition from the state \(|0\rangle_E\) ("no photon") to the state \(|1\rangle_E\)
           ("one photon"). This evolution is described by a unitary transformation
           that acts on atom and environment according to
		   $$\begin{array}{l}
             |0\rangle_{A} \otimes|0\rangle_{E} \mapsto|0\rangle_{A} \otimes|0\rangle_{E}, \\
             |1\rangle_{A} \otimes|0\rangle_{E} \mapsto \sqrt{1-p}|1\rangle_{A} \otimes|0\rangle_{E}+\sqrt{p}|0\rangle_{A} \otimes|1\rangle_{E}.
           \end{array}$$
		   (Of course, if the atom starts out in its ground state, and the environment
           in its vacuum state, then no transition occurs.)</p>
		<p><strong>Kraus operators.</strong> By evaluating the partial trace over the environment in
           the basis \(\{|0\rangle_{E},|1\rangle_{E}\}\), we find the Kraus operators
		   <div class="anchor" id="eq9"></div>
		   $$M_{0}=\left(\begin{array}{cc}
           1 & 0 \\
           0 & \sqrt{1-p}
           \end{array}\right), \quad M_{1}=\left(\begin{array}{cc}
           0 & \sqrt{p} \\
           0 & 0
           \end{array}\right)\tag{9}$$ and we can check that
		   \(M_{0}^{\dagger} M_{0}+M_{1}^{\dagger} M_{1}=\left(\begin{array}{cc}
           1 & 0 \\
           0 & 1-p
           \end{array}\right)+\left(\begin{array}{cc}
           0 & 0 \\
           0 & p
           \end{array}\right)=I\).
		   The operator \(M_1\) induces a "quantum jump," the decay from \(|1\rangle_{A}\) to
           \(|0\rangle_{A}\), and \(M_0\) describes how the state changes if no jump occurs. The
           density matrix evolves as
		   $$\begin{aligned}
           \rho & \mapsto \mathcal{E}(\rho)=M_{0} \rho M_{0}^{\dagger}+M_{1} \rho M_{1}^{\dagger} \\
           &=\left(\begin{array}{cc}
           \rho_{00} & \sqrt{1-p} \rho_{01} \\
           \sqrt{1-p} \rho_{10} & (1-p) \rho_{11}
           \end{array}\right)+\left(\begin{array}{cc}
           p \rho_{11} & 0 \\
           0 & 0
           \end{array}\right) \\
           &=\left(\begin{array}{cc}
           \rho_{00}+p \rho_{11} & \sqrt{1-p} \rho_{01} \\
           \sqrt{1-p} \rho_{10} & (1-p) \rho_{11}
           \end{array}\right).
           \end{aligned}$$</p>
		<h3>Markovian evolution</h3>
		<p>Quantum channels provide a general description of the evolution of density
           operators, including the evolution of pure states to mixed states (decoherence).
           In the same sense, unitary transformations provide a general
           description of coherent quantum evolution. But in the case of coherent
           evolution, we often find it very convenient to characterize the dynamics
           of a quantum system with a Hamiltonian, which describes the evolution
           over an infinitesimal time interval. The dynamics is then encoded in a
           differential equation, the <strong>Schrödinger equation</strong>, and we may calculate the
           evolution over a finite time interval by integrating the equation, that is, by
           piecing together the evolution over many infinitesimal intervals. Likewise,
           it is often possible to describe the (not necessarily coherent) evolution of
           a density operator, at least to a good approximation, by a differential
           equation which is called the <strong>master equation</strong>.</p>
		<p>It is not obvious that there should be a differential equation that describes
           the decoherence of an open system. Such a description is possible
           only if the evolution of the quantum system is Markovian, that is, local
           in time. For the evolution of the density operator \(\rho(t)\) to be governed
           by a (first-order) differential equation in t, \(\rho(t+dt)\) must be completely
           determined by \(\rho(t)\).</p>
		<p>In the case of an open system A, we are to imagine that its evolution is
           actually unitary on the extended system AE, where E is the environment.
           But though the evolution of AE may be governed by a Schrödinger equation,
           that's not enough to ensure that the time evolution is Markovian
           for A by itself. The trouble is that information can flow from A to E and
           then return at a later time. In that case the density operator \(\rho_A(t+dt)\)
           is not fully determined by \(\rho_A(t)\); we need to know \(\rho_A\) at earlier times as well.</p>
		<p>This quandary arises because information flow is a two-way street. An
           open system (whether classical or quantum) is dissipative because information
           and energy can flow from the system to the environment. But that
           means that information can also flow back from environment to system,
           resulting in non-Markovian <em>fluctuations</em> of the system. This inescapable
           connection underlies the fluctuation-dissipation theorem, a widely applicable tool of statistical physics.</p>
		<p>For any open system these fluctuations are inevitable, and an exact
		   Markovian description of quantum dynamics is impossible. Nevertheless,
           a Markovian description can be a very good approximation if there is a
           clean separation between the typical correlation time of the fluctuations
           and the time scale of the evolution that we want to follow. Crudely
           speaking, we may denote by \((\Delta t)_\text{env}\) the time it takes for the environment
           to <em>"forget" information</em> it acquired from the system —— after time \((\Delta t)_\text{env}\)
           we can regard that information as lost forever, and neglect the possibility
           that the information may return to influence the subsequent evolution of the system.</p>
		<p>To describe the evolution we <em>"coarse-grain"</em> in time, perceiving the dynamics
           through a filter that screens out the high frequency components
           of the motion with \(\omega\gg(\Delta t_\text{coarse})^{-1}\). An approximately Markovian description
           should be possible for \(\Delta t_\text{env}\ll\Delta t_\text{coarse}\); we may neglect
           the memory of the reservoir if we are unable to resolve its effects. This
           Markovian approximation is <em>useful</em> if the time scale of the dynamics that
           we want to observe is long compared to \(\Delta t_\text{coarse}\), for example if the
           damping time scale \(\Delta t_\text{damp}\) satisfies
		   $$(\Delta t)_{\text {damp }} \gg(\Delta t)_{\text {coarse }} \gg(\Delta t)_{\text {env }}.$$
		   This is a good approximation in some physical settings, like an atom
           interacting with the radiation field, but more dubious in other cases, like
           an electron spin interacting with nuclear spins in a semiconductor.</p>
		<h3>Master equation in Lindblad form</h3>
		<p>For a closed quantum system, time evolution is governed by a self-adjoint Hamiltonian H according to
		   $$|\psi(t+d t)\rangle=(I-i d t H)|\psi(t)\rangle$$
		   and correspondingly the density operator evolves as
		   $$\rho(t+d t)=\rho(t)-i d t[\boldsymbol{H}, \boldsymbol{\rho}(t)].$$
		   In the case of an open quantum system, Markovian evolution for the
           infinitesimal time interval dt may be expressed as
		   $$\rho(t+d t)=\mathcal{E}_{d t}(\rho(t)),$$
		   where \(\mathcal{E}_{d t}\) is a quantum channel. By adopting this Markovian form, we
           take the view that, after each infinitesimal time increment in the joint
           evolution of the system and its environment, the state of the environment
           is discarded and replaced by a fresh state of the environment unentangled
           with the system. We already made this assumption implicitly when the discussing spontaneous decay before.</p>
	    <p>Expanding \(\mathcal{E}_{d t}\) to linear order \(\mathcal{E}_{d t}=I+dt\mathcal{L}\), we find
		   $$\dot{\rho}=\mathcal{L}(\rho),$$
		   where the linear map \(\mathcal{L}\) generating time evolution is called the <em>Liouvillian</em>
           or <em>Lindbladian</em>.</p>
		<p>The channel has an operator-sum representation
		   <div class="anchor" id="eq10"></div>
		   $$\rho(t+d t)=\mathcal{E}_{d t}(\rho(t))=\sum_{a} M_{a} \rho(t) M_{a}^{\dagger}=\rho(t)+O(d t),\tag{10}$$ 
		   where, if we retain only terms up to linear order in \(dt\), we may assume
           without loss of generality that \(M_0=I+O(dt)\), and that \(M_a\) is of
           order \(\sqrt{dt}\) for \(a>0\). Each of the Kraus operators \(M_{1,2,\cdots}\) describes a
           possible "quantum jump" that the system might undergo, which occurs
           during time interval \(dt\) with probability \(O(dt)\), and \(M_0\) describes how the
           system evolves when no jump occurs. We may write
		   <div class="anchor" id="eq11"></div>
		   $$\begin{array}{l}
           M_{0}=I+(-i H+K) d t, \\
           M_{a}=\sqrt{d t} L_{a}, \quad a=1,2,\cdots,
           \end{array}\tag{11}$$
		   where \(H\) and \(K\) are both hermitian and \(L_a\), \(H\), and \(K\) are all zeroth
           order in \(dt\). In fact, we can determine \(K\) by invoking the Kraus-operator
           completeness relation; keeping terms up to linear order in \(O(dt)\), we find
		   $$I=\sum_{\mu} M_{a}^{\dagger} M_{a}=I+d t\left(2 K+\sum_{\mu>0} L_{a}^{\dagger} L_{a}\right)+\cdots,$$
		   or $$K=-\frac{1}{2} \sum_{a>0} L_{a}^{\dagger} L_{a}.$$</p>
		<p>Substituting into <a href="#eq10">eq.(10)</a>, we obtain the <strong>Lindblad master equation</strong>:
		   $$\dot{\rho}=\mathcal{L}(\rho)=-i[H, \rho]+\sum_{a>0}\left(L_{a} \rho L_{a}^{\dagger}-\frac{1}{2} L_{a}^{\dagger} L_{a} \rho-\frac{1}{2} \rho L_{a}^{\dagger} L_{a}\right).$$
		   This is the general Markovian evolution law for quantum states in the
           Schrödinger picture, assuming time evolution is a trace-preserving completely
           positive linear map. The first term in \(\mathcal{L}(\rho)\) is the familiar Hamiltonian
           term generating unitary evolution. The other terms describe the possible
           transitions that the system may undergo due to interactions with the
           environment. The operators \(L_a\) are called <em>Lindblad operators</em> or <em>quantum
           jump operators</em>. Each \(L_a\rho L_a^\dagger\) term induces one of the possible quantum
           jumps, while the terms \(-\frac{1}{2} L_{a}^{\dagger} L_{a} \rho-\frac{1}{2} \rho L_{a}^{\dagger} L_{a}\) 
		   are needed to normalize properly the case in which no jumps occur.</p>
		
		<h3>Spontaneous emission of a two-level atom</h3>
        <p>If we are able to identify which quantum jumps may affect the state of A, we can
           infer the jump operators \(L_a\) (within numerical factors) by <a href="#eq11">eq.(11)</a> and hence guess the structure
           of the Lindblad master equation. Let's revisit the amplitude-damping channel and find time dependence 
		   of the spontaneous decay by the aid of the master equation.</p>
        <p>From <a href="#eq9">eq.(9)</a> we can find there is only one jump operator, proportional to the lowering operator 
		   \(\sigma_-=|0\rangle\langle1|\): \(L_1=\sqrt{\Gamma}\sigma_-\) and the master equation is:
		   $$\frac{d \rho_{A}}{d t}=-i \frac{\omega}{2}\left[\sigma_{z}, \rho_{A}\right]-\frac{\Gamma}{2}\left(\sigma_{+} \sigma_{-} \rho_{A}+\rho_{A} \sigma_{+} \sigma_{-}-2 \sigma_{-} \rho_{A} \sigma_{+}\right).$$
		   To make it more expicit, let us express it in terms of the atomic populations (\(\rho_{00}\), \(\rho_{11}\)) and 
		   coherences (\(\rho_{01}=\rho_{10}^{*}\)):
		   $$\frac{d \rho_{11}}{d t}=-\Gamma \rho_{11} ; \quad \frac{d \rho_{00}}{d t}=\Gamma \rho_{11} ; \quad \frac{d \rho_{01}}{d t}=-i \omega \rho_{01}-\frac{\Gamma}{2} \rho_{01};$$
		   hence we find the well-known statistical features of the spontaneous emission:
		   $$\rho(t)=\left(\begin{array}{cc}
           \rho_{00}+\left(1-e^{-\Gamma t}\right) \rho_{11} & e^{-i\omega t}e^{-\Gamma t / 2} \rho_{01} \\
           e^{i\omega t}e^{-\Gamma t / 2} \rho_{10} & e^{-\Gamma t} \rho_{11}
           \end{array}\right).$$
		   It is customary to use "\(T_1\)" to denote the exponential decay time for the
           excited population, and to use "\(T_2\)" to denote the exponential decay time
           for the off-diagonal terms in the density operator. In some systems where
           dephasing is very rapid \(T_2\) is much shorter than \(T_1\), but we see that for the
           amplitude-damping channel these two times are related and comparable:
		   $$T_2=2\Gamma^{-1}=2T_1.$$
		   By the time that \(t \gg T_1\), the atom is in its ground state with high probability (\(\rho_{00}(t)\approx1\)).</p>
		<h3>External links</h3>
		<ul>
		  <li>This article is revised from Chapter 2 & 3 of 
		      <a href="http://www.theory.caltech.edu/people/preskill/ph229/">
			     John Preskill's Ph219/CS219 lecture notes</a>.
		  </li>
		  <li>Chapter 4 of <em>Exploring the Quantum: Atoms, Cavities, and Photons</em> 
		      (<a href="https://www.amazon.com/s?k=9780198509141">ISBN 978-0-19-850914-1</a>) 
			  by Serge Haroche and Jean-Michel Raimond is also a good reference.
		  </li>
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