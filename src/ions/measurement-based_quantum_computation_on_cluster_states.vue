<template>
  <div v-katex:auto class="container-fluid">
    <div class="row">
	  <div class="col-12">
	    <h1>Measurement-based Quantum Computation on Cluster States</h1>
        <p>This article gives a detailed account of the one-way quantum computer (\(\text{QC}_\mathcal{C}\)), a scheme of quantum computation
           that consists entirely of one-qubit measurements on a particular class of entangled states, the cluster
           states.</p>
        <h3>Cluster states and their quantum correlations</h3>
		<p>Cluster states are pure quantum states of two-level systems
           (qubits) located on a cluster \(\mathcal{C}\). This cluster is a
           connected subset of a simple cubic lattice \(\mathbb{Z}^{d}\) in \(d \geq 1\)
           dimensions. The cluster states \(\left|\phi_{\{\kappa\}}\right\rangle_{\mathcal{C}}\) obey the set of eigenvalue equations
		   $$K^{(a)}\left|\phi_{\{\kappa\}}\right\rangle_{\mathcal{C}}=(-1)^{\kappa_a}\left|\phi_{\{\kappa\}}\right\rangle_{\mathcal{C}},\tag{1}$$
		   with the correlation operators
		   $$K^{(a)}=\sigma_{x}^{(a)} \bigotimes_{b \in \mathrm{nbgh}(a)} \sigma_{z}^{(b)}.\tag{2}$$
		   Therein, \(\left\{\kappa_{a} \in\{0,1\} | a \in \mathcal{C}\right\}\) is a set of binary parameters
           which specify the cluster state and nbgh(a) is the set of all neighboring lattice sites of a. 
		   A cluster state is completely specified by the eigenvalue equations (1).
		   There are \(2^{|\mathcal{C}|}\) orthogonal eigenstate on a cluster \(\mathcal{C}\). 
		   for illustration we give a few examples of cluster states
           with a small number of qubits. The cluster states on a
           chain of 2, 3 and 4 qubits, fulfilling the eigenvalue equations (1) with all \(\kappa_a=0\), are
		   $$\begin{aligned}
           |\phi\rangle_{\mathcal{C}_{2}}=& \frac{1}{\sqrt{2}}\left(|0\rangle_{1}|+\rangle_{2}+|1\rangle_{1}|-\rangle_{2}\right), \\
           |\phi\rangle_{\mathcal{C}_{3}}=& \frac{1}{\sqrt{2}}\left(|+\rangle_{1}|0\rangle_{2}|+\rangle_{3}+|-\rangle_{1}|1\rangle_{2}|-\rangle_{3}\right), \\
           |\phi\rangle_{\mathcal{C}_{4}}=& \frac{1}{2}|+\rangle_{1}|0\rangle_{2}|+\rangle_{3}|0\rangle_{4}+\frac{1}{2}|+\rangle_{1}|0\rangle_{2}|-\rangle_{3}|1\rangle_{4} \\
           &+\frac{1}{2}|-\rangle_{1}|1\rangle_{2}|-\rangle_{3}|0\rangle_{4}+\frac{1}{2}|-\rangle_{1}|1\rangle_{2}|+\rangle_{3}|1\rangle_{4},
           \end{aligned}\tag{3}$$
		   with the notations
		   $$\begin{aligned}
           |0\rangle_{a} &:=|0\rangle_{a, z}=\sigma_{z}^{(a)}|0\rangle_{a, z}, \\
           |1\rangle_{a} &:=|1\rangle_{a, z}=-\sigma_{z}^{(a)}|1\rangle_{a, z}, \\
           |\pm\rangle_{a} &:=\frac{1}{\sqrt{2}}\left(|0\rangle_{a} \pm|1\rangle_{a}\right).
           \end{aligned}\tag{4}$$</p>
		<p>A suitable way to create a cluster state in the lab is as follows. First, a product state
           \(|+\rangle_\mathcal{C}=\bigotimes_{a \in \mathcal{C}}|+\rangle_{a}\) is prepared. Second, the unitary
           transformation \(S^{(\mathcal{C})}\),
		   $$S^{(\mathcal{C})}=\prod_{a, b \in \mathcal{C} | b-a \in \gamma_{d}} S^{a b}\tag{5}$$
		   is applied to the state \(|+\rangle\). Often we will write \(S\)
           in short for \(S^{(\mathcal{C})}\). In (5), for the cases of dimension
           d = 1, 2, 3, we have \(\gamma_{1}=\left\{1\right\}\), \(\gamma_{2}=\left\{(1,0)^{T},(0,1)^{T}\right\}\) and
           \(\gamma_{3}=\left\{(1,0,0)^{T},(0,1,0)^{T},(0,0,1)^{T}\right\}\), and the two-qubit controlled phase flip (CPF)
           gate \(S^{ab}\) is such that the state \(|1\rangle_a\otimes|1\rangle_b\) acquires
           a phase of π under its action while the remaining
           states \(|0\rangle_a\otimes|0\rangle_b\), \(|0\rangle_a\otimes|1\rangle_b\) and \(|1\rangle_a\otimes|0\rangle_b\) acquire no
           phase. Thus, \(S^{ab}\) has the form
		   $$S^{a b}=\frac{1}{2}\left(1+\sigma_{z}^{(a)}+\sigma_{z}^{(b)}-\sigma_{z}^{(a)} \otimes \sigma_{z}^{(b)}\right).\tag{6}$$
		   It's not hard to prove [1] that the state \(|\phi\rangle_\mathcal{C}\) generated from \(|+\rangle_\mathcal{C}\) via the transformation
           \(S\) as defined in (5) obeys eigenvalue equations of form (1), with
		   $$\kappa_a=0, \forall a\in\mathcal{C}.\tag{7}$$</p>
		<p>If one realizes a certain quantum circuit on this cluster state, there will always
           be qubits on the cluster which are not needed for its realization.
           Such cluster qubits we call redundant for this particular circuit.
		   Noted that \(\sigma_{z}^{(a)}S^{a b}=1\), it suffices to measure each of them in the
           \(\sigma_z\)-eigenbasis to make them ineffective to the realized circuit.
		   If some how we destroy the state of an end qubit of an n-qubit cluster chain, for instance,
           through an unsuccessful attempt of the CPF gate, we can also remove this bad qubit by performing a Z measurement on
           its neighboring qubit, and recover a cluster state of \(n - 2\) qubits.</p>
		<p>If we perform X measurements on all the connecting qubits, we can shrink a cluster state.
		   This is simple to show in the case of a linear cluster. Consider six qubits, labelled
           a to f, which are part of a longer line of qubits, prepared
           in a cluster state. Four of the eigenvalue equations which define the state are
		   $$\begin{aligned}
           \sigma_{z}^{(a)} \sigma_{x}^{(b)} \sigma_{z}^{(c)}|\psi\rangle_{\mathcal{C}} &=|\psi\rangle_{\mathcal{C}}, \\
           \sigma_{z}^{(b)} \sigma_{x}^{(c)} \sigma_{z}^{(d)}|\psi\rangle_{\mathcal{C}} &=|\psi\rangle_{\mathcal{C}}, \\
           \sigma_{z}^{(c)} \sigma_{x}^{(d)} \sigma_{z}^{(e)}|\psi\rangle_{\mathcal{C}} &=|\psi\rangle_{\mathcal{C}}, \\
           \sigma_{z}^{(d)} \sigma_{x}^{(e)} \sigma_{z}^{(f)}|\psi\rangle_{\mathcal{C}} &=|\psi\rangle_{\mathcal{C}}.
           \end{aligned}\tag{8}$$
		   Suppose, a measurement pattern \(\mathcal{M}\) on these qubits
           contains measurements of the observable \(\sigma_x\) on qubits c
           and d. Measurements in the \(\sigma_x\) basis can be made before any other measurements in \(\mathcal{M}\). 
		   We can use an operator \(P_{x, s_{c}}^{(c)}=\frac{1+(-1)^{s_{c}} \sigma_{x}^{(c)}}{2}\) to represents
		   such measurement, where \(s_c\in\{0,1\}\). It follows that
		   $$P_{x, s_{c}}^{(c)} \sigma_{x}^{(c)}=(-1)^{s_{c}} P_{x, s_{c}}^{(c)}. \tag{9}$$
		   Therefore, if these two measurements alone are carried out, the new state fulfills the following
           eigenvalue equations, derived from equation (8) in the usual way,
		   $$\begin{aligned}
           \sigma_{z}^{(a)} \sigma_{x}^{(b)} \sigma_{z}^{(e)}|\psi\rangle_{\mathcal{C}} &=(-1)^{s_d}|\psi\rangle_{\mathcal{C}}, \\
           \sigma_{z}^{(b)} \sigma_{x}^{(e)} \sigma_{z}^{(f)}|\psi\rangle_{\mathcal{C}} &=(-1)^{s_c}|\psi\rangle_{\mathcal{C}}.
           \end{aligned}\tag{10}$$
		   The resulting state is therefore a cluster state from which
           qubits c and d have been removed, and b and e play the
           role of adjacent qubits. Thus, the two measurements have
           mapped a cluster state onto a cluster state and thus do
           not contribute to the logical operation realized by \(\mathcal{M}\),
           which, in the case where both \(s_c\) and \(s_d\) equal 0, is completely
           equivalent to the reduced measurement pattern
           \(\mathcal{M}'\), from which these adjacent \(\sigma_x\) measurements have been removed.</p>

		<h3>Using quantum correlations for quantum computation</h3>
		<p>To realize a gate g on the \(\text{QC}_\mathcal{C}\) consider a cluster \(\mathcal{C}(g)\). This
           cluster has an input section \(\mathcal{C}_I(g)\), a body \(\mathcal{C}_M(g)\) and an output section \(\mathcal{C}_O(g)\), with
		   $$\begin{aligned}
           \mathcal{C}_{I}(g) \cup \mathcal{C}_{M}(g) \cup \mathcal{C}_{O}(g) &=\mathcal{C}(g), \\
           \mathcal{C}_{I}(g) \cap \mathcal{C}_{M}(g) &=\emptyset, \\
           \mathcal{C}_{I}(g) \cap \mathcal{C}_{O}(g) &=\emptyset, \\
           \mathcal{C}_{M}(g) \cap \mathcal{C}_{O}(g) &=\emptyset.
           \end{aligned}\tag{11}$$
		   The measurement bases of the qubits in \(\mathcal{C}_M(g)\) (the body
           of the gate g) encode g. The general scheme for procedures
           to realize a gate g on a cluster \(\mathcal{C}(g)\) is</p>
		<p><strong>Scheme 1</strong> Simulation of the gate g on \(\mathcal{C}(g)\), acting on the input state \(|\psi_\text{in}\rangle\).
		   <ol>
             <li>Prepare the input state \(|\psi_\text{in}\rangle\) on \(\mathcal{C}_I(g)\) and the
                 qubits in \(\mathcal{C}_{M}(g) \cup \mathcal{C}_{O}(g)\) individually in the state
                 \(|+\rangle=|0\rangle_x\) such that the quantum state of all qubits in \(\mathcal{C}(g)\) becomes
				 $$\left|\Psi_{\mathrm{in}}\right\rangle_{\mathcal{C}(g)}=\left|\psi_{\mathrm{in}}\right\rangle_{\mathcal{C}_{I}(g)} \bigotimes_{k \in \mathcal{C}_{M}(g) \cup \mathcal{C}_{O}(g)}|+\rangle_{k}.\tag{12}$$</li>
             <li>Entangle \(\left|\Psi_{\mathrm{in}}\right\rangle_{\mathcal{C}(g)}\) by the interaction
			     $$S^{(\mathcal{C}(g))}=\prod_{a, b \in \mathcal{C}(g) | b-a \in \gamma_{d}} S^{a b},\tag{13}$$
				 such that the resulting quantum state is \(\left|\Psi_{\epsilon}\right\rangle_{\mathcal{C}_N}=S^{(\mathcal{C}(g))}\left|\Psi_{\mathrm{in}}\right\rangle_{\mathcal{C}(g)}\).</li>
             <li>Measure the cluster qubits in \(\mathcal{C}_{I}(g) \cup \mathcal{C}_{M}(g)\),
                 i.e. choose measurement bases specified by \(\vec{r}_k\in S^2\), \(k\in\mathcal{C}_{I}(g) \cup \mathcal{C}_{M}(g)\) 
				 and obtain the random measurement results \(s_k\) such that the projector
				 $$P^{\left(\mathcal{C}_{I}(g) \cup \mathcal{C}_{M}(g)\right)}=\bigotimes_{k \in \mathcal{C}_{I}(g) \cup \mathcal{C}_{M}(g)} \frac{1+(-1)^{s_{k}} \vec{r}_{k} \cdot \vec{\sigma}^{(k)}}{2}\tag{14}$$
				 is applied. The resulting state is \(\left|\Psi_{\mathrm{out}}\right\rangle_{\mathcal{C}_N}=P^{\left(\mathcal{C}_{I}(g) \cup \mathcal{C}_{M}(g)\right)}\left|\Psi_{\epsilon}\right\rangle_{\mathcal{C}_N}\).</li>
           </ol>
		</p>
        <p>Putting all three steps of Scheme 1 together, the relation between \(\left|\Psi_{\mathrm{in}}\right\rangle_{\mathcal{C}_N}\) 
		   and \(\left|\Psi_{\mathrm{out}}\right\rangle_{\mathcal{C}_N}\) is
		   $$\left|\Psi_{\mathrm{out}}\right\rangle_{\mathcal{C}_N}=P^{\left(\mathcal{C}_{I}(g) \cup \mathcal{C}_{M}(g)\right)}S^{(\mathcal{C}(g))}\left|\Psi_{\mathrm{in}}\right\rangle_{\mathcal{C}_N}.\tag{15}$$
		   As we will show later, the state \(\left|\Psi_{\mathrm{out}}\right\rangle_{\mathcal{C}_N}\) has the form
		   $$\left|\Psi_{\mathrm{out}}\right\rangle_{\mathcal{C}_{N}}=\left(\bigotimes_{k \in \mathcal{C}_{I}(g) \cup \mathcal{C}_{M}(g)}\left|s_{k}\right\rangle_{k, \vec{r}_{k}}\right) \otimes\left|\psi_{\mathrm{out}}\right\rangle_{\mathcal{C}_{O}(g)},\tag{16}$$
		   where \(\left|s_{k}\right\rangle_{k, \vec{r}_{k}}\) denotes the state of the qubit k after the
           observable \(\vec{r}_k\cdot\vec{\sigma}^{(k)}\) has been measured and the measurement outcome was \(s_k\), and
		   $$|\psi_\text{out}\rangle=U_{\Sigma,g}U_g|\psi_\text{in}\rangle.\tag{17}$$
		   Therein, \(U_g\) is the desired unitary operation and \(U_{\Sigma,g}\)
           an extra multi-local rotation that depends on the measurement results
           \(\{s_k|k\in\mathcal{C}_{I}(g) \cup \mathcal{C}_{M}(g)\}\). The extra rotations \(U_{\Sigma,g}\) 
		   are always in the Pauli group, i.e.
		   $$U_{\Sigma,g}=\bigotimes_{i=1}^{n}\left(\sigma_{x}^{[i]}\right)^{x_i}\left(\sigma_{z}^{[i]}\right)^{z_i}\tag{18}$$
		   modulo a possible global phase, and \(n = |I| = |O|\). In (18) the \(\sigma^{[i]}\) denote Pauli operators 
		   acting on the logical qubit i, not cluster qubit. The values \(x_i, z_i \in \{0, 1\}\) are computed from 
		   the measurement outcomes \(\{s_k|k\in\mathcal{C}_{I}(g) \cup \mathcal{C}_{M}(g)\}\).</p>
		<p>Let us introduce some conventions for labeling.
           Be \(\mathcal{C}_I(g)\) and \(\mathcal{C}_O(g)\) such that \(|\mathcal{C}_I(g)|=|\mathcal{C}_O(g)|=n\) where
           n is the number of logical qubits processed by g. Operators
           acting on qubits \(p\in\mathcal{C}_I(g)\) and \(q\in\mathcal{C}_O(g)\) are labeled
           by upper indices \((\mathcal{C}_I(g),i)\) and \((\mathcal{C}_O(g),i')\), \(1\leq i,i'\leq n\),
           respectively. The qubits \(p\in\mathcal{C}_I(g)\) and \(q\in\mathcal{C}_O(g)\) are
           ordered from 1 to n in the same way as the logical qubits that they represent.</p>
		<p>After these definitions and conventions we can now state the following theorem:</p>
		<div class="anchor" id="theorem1"></div>
		<p><strong>Theorem 1</strong> <em>Be \(\mathcal{C}(g)=\mathcal{C}_{I}(g) \cup \mathcal{C}_{M}(g) \cup \mathcal{C}_{O}(g)\)
		   with \(\mathcal{C}_{I}(g) \cap \mathcal{C}_{M}(g)=\mathcal{C}_{I}(g) \cap \mathcal{C}_{O}(g)=\mathcal{C}_{M}(g) \cap \mathcal{C}_{O}(g)=\emptyset\)
		   a cluster for the simulation of a gate g, realizing the unitary transformation U, and \(\phi_{\mathcal{C}(g)}\) 
		   the cluster state on the cluster \(\mathcal{C}(g)\).</em></p>
		<p><em>Suppose, the state \(|\psi\rangle_{\mathcal{C}(g)}=P_{\{s\}}^{\left(\mathcal{C}_{M}(g)\right)}(\mathcal{M})|\phi\rangle_{\mathcal{C}(g)}\)
		   obeys the 2n eigenvalue equations
		   $$\begin{array}{l}
           \sigma_{x}^{\left(\mathcal{C}_{I}(g), i\right)}\left(U \sigma_{x}^{(i)} U^{\dagger}\right)^{\left(\mathcal{C}_{O}(g)\right)}|\psi\rangle_{\mathcal{C}(g)}=(-1)^{\lambda_{x, i}}|\psi\rangle_{\mathcal{C}(g)}, \\
           \sigma_{z}^{\left(\mathcal{C}_{I}(g), i\right)}\left(U \sigma_{z}^{(i)} U^{\dagger}\right)^{\left(\mathcal{C}_{O}(g)\right)}|\psi\rangle_{\mathcal{C}(g)}=(-1)^{\lambda_{z, i}}|\psi\rangle_{\mathcal{C}(g)},
           \end{array}\tag{19}$$
		   with \(\lambda_{x, i},\lambda_{z, i}\in\{0,1\}\) and \(1\leq i\leq n\).</em></p>
		<p><em>Then, on the cluster \(\mathcal{C}(g)\) the gate g acting on an arbitrary
           quantum input state \(|\psi_\text{in}\rangle\) can be realized according
           to Scheme 1 with the measurement directions in \(\mathcal{C}_M(g)\)
           described by \(\mathcal{M}^{(\mathcal{C}_M(g))}\) and the measurements of the qubits
           in \(\mathcal{C}_I(g)\) being \(\sigma_x\)-measurements. Thereby, the input- and
           output state in the simulation of g are related via
		   $$|\psi_\text{out}\rangle=UU_{\Sigma}|\psi_\text{in}\rangle,\tag{20}$$
		   where \(U_\Sigma\) is a byproduct operator given by
		   $$U_{\Sigma}=\bigotimes_{\left(\mathcal{C}_{I}(g) \ni i\right)=1}^{n}\left(\sigma_{z}^{[i]}\right)^{s_{i}+\lambda_{x, i}}\left(\sigma_{x}^{[i]}\right)^{\lambda_{z, i}}.\tag{21}$$</em></p>
		<p><strong>Proof of Theorem 1</strong> The input \(|\psi_\text{in}\rangle\) can be expanded in the computational basis,
		   i.e. \(|\psi_\text{in}\rangle=\sum_\mathbf{z}a_\mathbf{z}|\mathbf{z}\rangle\), where 
		   \(|\mathbf{z}\rangle:=\bigotimes_{i=1}^{n}|z_i\rangle_{z,i}\).
		   The basis \(|\mathbf{z}\rangle\) above satisfies the equation
		   $$n_{I}(\mathbf{z})|\mathbf{z}\rangle=P_{Z, \mathbf{z}}^{\left(\mathcal{C}_{I}(g)\right)} \bigotimes_{i=1}^{n}|+\rangle_{i},\tag{22}$$
		   with \(P_{Z, \mathbf{z}}^{\left(\mathcal{C}_{I}(g)\right)}=\bigotimes_{i=1}^{n} \frac{1+(-1)^{z_{i}} \sigma_{z}^{[i]}}{2}\), 
		   and norm factor \(n_{I}(\mathbf{z})=1 / 2^{n / 2}\) for all \(\mathbf{z}\).</p>
		<p>Note that \(P_{Z, \mathbf{z}}^{\left(\mathcal{C}_{I}(g)\right)}\) commutes with \(S^{(\mathcal{C}(g))}\).
		   According to Scheme 1, the resulting quantum state by entangling \(\left|\Psi_{\mathrm{in}}\right\rangle_{\mathcal{C}(g)}\) by the interaction (13)
		   will become \(\sum_\mathbf{z}a_\mathbf{z}P_{Z, \mathbf{z}}^{\left(\mathcal{C}_{I}(g)\right)}|\phi\rangle_{\mathcal{C}(g)}\).</p>
		<p>Note that \(P_{Z, \mathbf{z}}^{\left(\mathcal{C}_{I}(g)\right)}\) also commutes with \(P_{\{s\}}^{\left(\mathcal{C}_{M}(g)\right)}(\mathcal{M})\).
		   Thus after performing a measurement pattern \(\mathcal{M}^{\left(\mathcal{C}_{M}(g)\right)}\) on the body \(\mathcal{C}_{M}(g)\) of the gate g,
		   the state become \(\sum_\mathbf{z}a_\mathbf{z}P_{Z, \mathbf{z}}^{\left(\mathcal{C}_{I}(g)\right)}|\psi\rangle_{\mathcal{C}(g)}\).
		   According to (19), all the terms \(P_{Z, \mathbf{z}}^{\left(\mathcal{C}_{I}(g)\right)}|\psi\rangle_{\mathcal{C}(g)}\) should satisfies the following equations
		   $$\left(U \sigma_{z}^{[i]} U^{\dagger}\right)^{\left(\mathcal{C}_{O}\right)}P_{Z, \mathbf{z}}^{\left(\mathcal{C}_{I}(g)\right)}|\psi\rangle_{\mathcal{C}(g)} = (-1)^{\lambda_{z, i}+z_{i}}P_{Z, \mathbf{z}}^{\left(\mathcal{C}_{I}(g)\right)}|\psi\rangle_{\mathcal{C}(g)}.\tag{23}$$</p>
		<p>Lastly we apply \(\sigma_x\)-measurements on \(\mathcal{C}_{I}(g)\) and get the final state 
		   \(\sum_\mathbf{z}a_\mathbf{z}P_{\{s\}}^{\left(\mathcal{C}_{I}(g)\right)}(X) P_{Z, z}^{\left(\mathcal{C}_{I}(g)\right)}|\psi\rangle_{\mathcal{C}(g)}=\sum_\mathbf{z}a_\mathbf{z}n_{O}^{\prime}(\mathbf{z})|\mathbf{s}\rangle_{x, \mathcal{C}_{I}(g)} \otimes|m\rangle_{\mathcal{C}_{M}(g)} \otimes\left|\psi_{\text {out }}(\mathbf{z})\right\rangle_{\mathcal{C}_{O}(g)}\),
		   with nonzero norm factors \(n_{O}^{\prime}(\mathbf{z})\). Then the following eigenvalue equations hold
		   $$\begin{aligned}
           \left(U \sigma_{z}^{[i]} U^{\dagger}\right)^{\left(\mathcal{C}_{O}\right)}\left[P_{\{s\}}^{\left(\mathcal{C}_{I}(g)\right)}(X) P_{Z, \mathbf{z}}^{\left(\mathcal{C}_{I}(g)\right)}|\psi\rangle_{\mathcal{C}(g)}\right] =\\
           (-1)^{\lambda_{z, i}+z_{i}}\left[P_{\{s\}}^{\left(\mathcal{C}_{I}(g)\right)}(X) P_{Z, \mathbf{z}}^{\left(\mathcal{C}_{I}(g)\right)}|\psi\rangle_{\mathcal{C}(g)}\right].
           \end{aligned}\tag{24}$$
		   Defferent from equations (23), each term \(P_{\{s\}}^{\left(\mathcal{C}_{I}(g)\right)}(X) P_{Z, z}^{\left(\mathcal{C}_{I}(g)\right)}|\psi\rangle_{\mathcal{C}(g)}\) corresponds a unique eigenvalue \(\{(-1)^{\lambda_{z, i}+z_{i}}\}\) of equations (24),
		   which associates a eigenstate:
		   $$\left|\psi_{\text {out }}(\mathbf{z})\right\rangle=e^{i \eta(\mathbf{z})} U U_{\Sigma}|\mathbf{z}\rangle,\tag{25}$$
		   where where \(U_{\Sigma}\) is given by (21). 
		   Therefore, \(|\psi_\text{out}\rangle=\sum_\mathbf{z}a_\mathbf{z}e^{i \eta(\mathbf{z})}UU_\Sigma|z\rangle\).</p>
		<p>Let's use the other constraint conditions in (19) to determine \(2^n\) relative open phases \(e^{i \eta(\mathbf{z})}\).
		   Consider the input state \(\left|\psi_{\text {in }}\right\rangle=|+\rangle:=\bigotimes_{i=1}^{n}|+\rangle_{i}\) appllied by the same procedure.
		   The state \(\left|\Psi_{\mathrm{out}}(+)\right\rangle_{\mathcal{C}(g)}\) that results from the gate simulation is
		   $$n_{O}(+)\left|\Psi_{\mathrm{out}}(+)\right\rangle_{\mathcal{C}(g)}=P_{\{s\}}^{\left(\mathcal{C}_{I}(g)\right)}(X) P_{\{s\}}^{\left(\mathcal{C}_{M}(g)\right)}(\mathcal{M})|\phi\rangle_{\mathcal{C}(g)},\tag{26}$$
		   with a nonzero norm factor \(n_{O}(+)\). Using the upper line of eigenvalue equations (19), the state 
		   \(\left|\Psi_{\mathrm{out}}(+)\right\rangle_{\mathcal{C}(g)}\) is found to obey the eigenvalue equations
		   $$\left(U \sigma_{x}^{[i]} U^{\dagger}\right)^{\left(\mathcal{C}_{O}(g)\right)}\left|\Psi_{\text {out }}(+)\right\rangle_{\mathcal{C}(g)}=(-1)^{\lambda_{x, i}+s_{i}}\left|\Psi_{\text {out }}(+)\right\rangle_{\mathcal{C}(g)}.\tag{27}$$
		   The eigenvalue equations (27) in combination with (26) imply that
		   $$\left|\Psi_{\text {out }}(+)\right\rangle_{\mathcal{C}(g)}=e^{i \chi}|\mathbf{s}\rangle_{x, \mathcal{C}_{I}(g)} \otimes|m\rangle_{\mathcal{C}_{M}(g)} \otimes\left[U U_{\Sigma}|+\rangle\right]_{\mathcal{C}_{O}(g)},\tag{28}$$
		   with \(\chi\) being a free parameter. Since \(\left|+\right\rangle=1 / 2^{n / 2} \sum_{\mathbf{z} \in\{0,1\}^{n}}\left|\mathbf{z}\right\rangle\) and,
		   by linearity, \(\left|\Psi_{\mathrm{out}}(+)\right\rangle=1 / 2^{n / 2} \sum_{\mathbf{z} \in\{0,1\}^{n}}\left|\Psi_{\mathrm{out}}(\mathbf{z})\right\rangle\).
		   By evaluating the scalar product
		   $$c_{\chi}=_{c(g)}\left\langle\Psi_{\mathrm{out}}(+)\left|U U_{\Sigma}\right| \mathbf{s}\right\rangle_{x, C_{I}(g)} \otimes|m\rangle_{C_{M}(g)} \otimes|+\rangle_{C_{O}(g)},\tag{29}$$
		   we have
		   $$e^{-i\chi}=\frac{1}{2^{n}} \sum_{\mathbf{z} \in\{0,1\}^{n}} e^{-i \eta(\mathbf{z})}.\tag{30}$$
		   The sum in (30) runs over \(2^n\) terms. Thus, with
           \(|e^{-i \eta(\mathbf{z})}|=1\) for all \(\mathbf{z}\), it follows from the triangle inequality
           that \(|c_\chi|\leq1\). The modulus of \(c_\chi\) can be unity
           only if all \(e^{-i \eta(\mathbf{z})}\) are equal. Therefore, the phase factors \(e^{i \eta(\mathbf{z})}\) must all be the same:
		   $$e^{i \eta(\mathbf{z})}=e^{i \chi}, \forall \mathbf{z}.\tag{31}$$</p>
		<p>We now find that the gate simulation acts upon every input state as \(|\psi_\text{out}\rangle=e^{i \chi}UU_\Sigma|\psi_\text{in}\rangle\).
           Therein, the global phase factor \(e^{i\chi}\) has no effect. Thus we find that the gate simulation indeed acts as stated in (20) and (21).</p>
		
		<h3>Examples of some quantum gates</h3>
	  </div>
	  <div class="col-center-block">  
        <embed src="measurement-based_quantum_computation_on_cluster_states/gates.svg" width="360" height="320" id="fig1">
	  </div>
      <div class="col-12">
        <figcaption class="figure-caption text-left"><strong>Figure 1:</strong> Realization of elementary quantum gates on the \(\text{QC}_\mathcal{C}\).
          Each square represents a lattice qubit. The squares in the extreme left column marked with white circles denote the input
          qubits, those in the right-most column denote the output qubits.</figcaption>
	    <br />
	  </div>
      <div class="col-12">
		<p>As a simple example, let us first consider a gate which realizes the <strong>identity operation</strong> \(\mathbb{1}\) on a single logical qubit.</p>
		<p>For the identity gate \(\mathcal{C}_I\), \(\mathcal{C}_M\) and \(\mathcal{C}_O\) each consist of a
           single qubit, so labeling the qubits 1, 2 and 3, \(1\in\mathcal{C}_I\),
           \(2\in\mathcal{C}_M\) and \(3\in\mathcal{C}_O\). The pattern \(\mathcal{M}(\mathbb{1})\) corresponds to a
           measurement of qubit 2 in the \(\sigma_x\) basis.</p>
		<p>Let \(|\phi\rangle_{\mathcal{C}_{\mathbb{1}}}\) be the cluster state on these three qubits.
           The state is defined by the following set of eigenvalue equations.
		   $$\begin{aligned}
           \sigma_{x}^{(1)} \sigma_{z}^{(2)} &|\phi\rangle_{\mathcal{C}(\mathbb{1})}=|\phi\rangle_{\mathcal{C}(\mathbb{1})}, \\
           \sigma_{z}^{(1)} \sigma_{x}^{(2)} \sigma_{z}^{(3)} &|\phi\rangle_{\mathcal{C}(\mathbb{1})}=|\phi\rangle_{\mathcal{C}(\mathbb{1})}, \\
           \sigma_{z}^{(2)} \sigma_{x}^{(3)} &|\phi\rangle_{\mathcal{C}(\mathbb{1})}=|\phi\rangle_{\mathcal{C}(\mathbb{1})}.
           \end{aligned}\tag{32}$$</p>
		<p>After the measurement of qubit 2, the resulting state of the cluster is
		   $$|\psi\rangle_{\mathcal{C}(\mathbb{1})}=P_{x, s_{2}}^{(2)}|\psi\rangle_{\mathcal{C}(\mathbb{1})},\tag{33}$$
		   where \(s_2\in\{0,1\}\) and \(P_{x, s_{2}}^{(2)}=\frac{1+(-1)^{s_{2}} \sigma_{x}^{(2)}}{2}\).</p>
		<p>Applying \(P_{x, s_{2}}^{(2)}\) to both sides of the second equation of (32), and using
           equation (9), one obtains for \(|\psi\rangle_{\mathcal{C}(\mathbb{1})}\), defined in equation (33),
		   $$\sigma_{z}^{(1)} \sigma_{z}^{(3)} |\psi\rangle_{\mathcal{C}(\mathbb{1})}=(-1)^{s_2}|\psi\rangle_{\mathcal{C}(\mathbb{1})}.\tag{34}$$
		   Also applying \(P_{x, s_{2}}^{(2)}\) to both sides the first and last equation of (32) gives
		   $$\sigma_{x}^{(1)} \sigma_{x}^{(3)} |\psi\rangle_{\mathcal{C}(\mathbb{1})}=|\psi\rangle_{\mathcal{C}(\mathbb{1})}.\tag{35}$$</p>
		<p>Now, since qubits 1 and 3 represent the input and output
           qubits respectively, the assumption of Theorem 1,
           equation (19), is satisfied for \(U=\mathbb{1}\). The byproduct operator
           \(U_\Sigma\) is obtained from equation (21), and we find
           that the full unitary operation realized by the gate is
           \(\tilde{U}=\mathbb{1} \sigma_{x}^{s_{2}} \sigma_{z}^{s_{1}}=\sigma_{x}^{s_{2}} \sigma_{z}^{s_{1}} \mathbb{1}\).
		   You can check this result by construct an input \(\alpha|0\rangle+\beta|1\rangle\) and look at different output
		   states with different measurement results.</p>
		<p>The <strong>Hadamard-gate</strong> have the property that under conjugation with these gates Pauli operators
           are mapped onto Pauli operators,
		   $$\begin{array}{l}
           H \sigma_{x} H^{\dagger}=\sigma_{z}, \\
           H \sigma_{z} H^{\dagger}=\sigma_{x}.
           \end{array}\tag{36}$$</p>
		<p>To realize Hadamard-gate we use a cluster state of 5 qubits in a chain \(\mathcal{C}_H\). Let the labeling of the
           qubits be as in Fig. 1b, i.e. qubit 1 is the inputand qubit 5 the output qubit.</p>
		<p>A cluster state \(|\phi\rangle_{\mathcal{C}_H}\) obeys the two eigenvalue equations
		   $$\begin{aligned}
           |\phi\rangle_{\mathcal{C}(H)} &=K^{(1)} K^{(3)} K^{(4)}|\phi\rangle_{\mathcal{C}(H)} \\
           &=\sigma_{x}^{(1)} \sigma_{y}^{(3)} \sigma_{y}^{(4)} \sigma_{z}^{(5)}|\phi\rangle_{\mathcal{C}(H)}, \\
           |\phi\rangle_{\mathcal{C}(H)} &=K^{(2)} K^{(3)} K^{(5)}|\phi\rangle_{\mathcal{C}(H)} \\
           &=\sigma_{z}^{(1)} \sigma_{y}^{(2)} \sigma_{y}^{(3)} \sigma_{x}^{(5)}|\phi\rangle_{\mathcal{C}(H)}.
           \end{aligned}\tag{37}$$
		   When the qubits 2, 3 and 4 of this state are measured
           in the \(\sigma_y\)-eigenbasis and thereby the measurement outcomes
           \(s_2,s_3,s_4\in\{0,1\}\) are obtained, the resulting state
           \(|\psi\rangle_{\mathcal{C}_H}\) obeys the eigenvalue equations
		   $$\begin{array}{l}
           \sigma_{x}^{(1)} \sigma_{z}^{(5)}|\phi\rangle_{\mathcal{C}(H)}=(-1)^{s_{3}+s_{4}}|\phi\rangle_{\mathcal{C}(H)}, \\
           \sigma_{z}^{(1)} \sigma_{x}^{(5)}|\phi\rangle_{\mathcal{C}(H)}=(-1)^{s_{2}+s_{3}}|\phi\rangle_{\mathcal{C}(H)}.
           \end{array}\tag{38}$$
		   From equation (36) we see that the correlations (38) are precisely those we need to explain the realization of
           the Hadamard gate. Using Theorem 1 we find that with measurement of the operators \(\sigma_x^{(1)}\),
		   \(\sigma_y^{(2)}\), \(\sigma_y^{(3)}\) and \(\sigma_y^{(4)}\) a Hadamard gate with a byproduct operator
		   \(U_{\Sigma,H}=\sigma_x^{s_1+s_3+s_4}\sigma_z^{s_2+s_3}\) is realized.</p>
		<p>A measurement pattern which realizes a <strong>CNOT gate</strong>
           is illustrated in Fig. 1c. Labeling the qubits as in Fig. 1c,
           we use the same analysis as above to show that this measurement
           pattern does indeed realize a CNOT gate in the \(\text{QC}_\mathcal{C}\).</p>
		<p>Of the cluster \(\mathcal{C}(\text{CNOT})\) on which the gate is realized,
           qubits 1 and 9 belong to \(\mathcal{C}_I\) , qubits 7 and 15 belong
           to \(\mathcal{C}_O\) and the remaining qubits belong to \(\mathcal{C}_M\). 
		   Let \(|\phi\rangle\) be a cluster state on \(\mathcal{C}(\text{CNOT})\), which obeys the set of eigenvalue equations (1).</p>
		<p>From these basic eigenvalue equations there follow the equations
		   $$\begin{aligned}
           |\phi\rangle &=K^{(1)} K^{(3)} K^{(4)} K^{(5)} K^{(7)} K^{(8)} K^{(13)} K^{(15)}|\phi\rangle \\
           &=-\sigma_{x}^{(1)} \sigma_{y}^{(3)} \sigma_{y}^{(4)} \sigma_{y}^{(5)} \sigma_{x}^{(7)} \sigma_{y}^{(8)} \sigma_{x}^{(13)} \sigma_{x}^{(15)}|\phi\rangle, \\
           |\phi\rangle &=K^{(2)} K^{(3)} K^{(5)} K^{(6)}|\phi\rangle \\
           &=\sigma_{z}^{(1)} \sigma_{y}^{(2)} \sigma_{y}^{(3)} \sigma_{y}^{(5)} \sigma_{y}^{(6)} \sigma_{z}^{(7)}|\phi\rangle, \\
           |\phi\rangle &=K^{(9)} K^{(11)} K^{(13)} K^{(15)}|\phi\rangle \\
           &=\sigma_{x}^{(9)} \sigma_{x}^{(11)} \sigma_{x}^{(13)} \sigma_{x}^{(15)}|\phi\rangle, \\
           |\phi\rangle &=K^{(5)} K^{(6)} K^{(8)} K^{(10)} K^{(12)} K^{(14)}|\phi\rangle \\
           &=\sigma_{y}^{(5)} \sigma_{y}^{(6)} \sigma_{z}^{(7)} \sigma_{y}^{(8)} \sigma_{z}^{(9)} \sigma_{x}^{(10)} \sigma_{y}^{(12)} \sigma_{x}^{(14)} \sigma_{z}^{(15)}|\phi\rangle.
           \end{aligned}\tag{39}$$</p>
		<p>If the qubits 10, 11, 13 and 14 are measured in the
           \(\sigma_x\)- and the qubits 2, 3, 4, 5, 6, 8 and 12 are measured
           in the  \(\sigma_y\)-eigenbasis, whereby the measurement results
           \(s_2\) - \(s_6\), \(s_8\), \(s_{10}\) - \(s_{12}\) are obtained, then the cluster state
           eigenvalue equations (39) induce the following eigenvalue equations for the projected state \(|\psi\rangle\)
		   $$\begin{aligned}
           \sigma_{x}^{(1)} \sigma_{x}^{(7)} \sigma_{x}^{(15)}|\psi\rangle &=(-1)^{1+s_{3}+s_{4}+s_{5}+s_{8}+s_{13}}|\psi\rangle, \\
           \sigma_{z}^{(1)} \sigma_{z}^{(7)}|\psi\rangle &=(-1)^{s_{2}+s_{3}+s_{5}+s_{6}}|\psi\rangle, \\
           \sigma_{x}^{(9)} \sigma_{x}^{(15)}|\psi\rangle &=(-1)^{s_{11}+s_{13}}|\psi\rangle, \\
           \sigma_{z}^{(9)} \sigma_{z}^{(7)} \sigma_{z}^{(15)}|\psi\rangle &=(-1)^{s_{5}+s_{6}+s_{8}+s_{10}+s_{12}+s_{14}}|\psi\rangle.
           \end{aligned}\tag{40}$$
		   Therein, qubits 1 and 7 represent the input and output
           for the control qubit and qubits 9 and 15 represent
           the input and output for the target qubit. Writing the
           CNOT unitary operation on control and target qubits \(CNOT(c, t)\), we find
		   $$\begin{array}{l}
           C N O T(c, t) \sigma_{x}^{(c)} C N O T(c, t)=\sigma_{x}^{(c)} \sigma_{x}^{(t)}, \\
           C N O T(c, t) \sigma_{z}^{(c)} C N O T(c, t)=\sigma_{z}^{(c)}, \\
           C N O T(c, t) \sigma_{x}^{(t)} C N O T(c, t)=\sigma_{x}^{(t)}, \\
           C N O T(c, t) \sigma_{z}^{(t)} C N O T(c, t)=\sigma_{z}^{(c)} \sigma_{z}^{(t)}.
           \end{array}\tag{41}$$
		   Comparing these equations to the eigenvalue equations (40), one sees that \(\mathcal{M}\) does indeed realize a
           CNOT gate. Furthermore, after reading off the operator \(U_\Sigma\) using equations (19) and (21 ) and propagating the
           byproduct operators through to the output side of the CNOT gate, one finds the expressions for the byproduct
           operators \(U_{\Sigma, C N O T}=\sigma_{x}^{(c) \gamma_{x}^{(c)}}\sigma_{x}^{(t) \gamma_{x}^{(t)}}\sigma_{z}^{(c) \gamma_{z}^{(c)}}\sigma_{z}^{(t) \gamma_{z}^{(t)}}\), with
		   $$\begin{aligned}
           \gamma_{x}^{(c)} &=s_{2}+s_{3}+s_{5}+s_{6}, \\
           \gamma_{x}^{(t)} &=s_{2}+s_{3}+s_{8}+s_{10}+s_{12}+s_{14}, \\
           \gamma_{z}^{(c)} &=s_{1}+s_{3}+s_{4}+s_{5}+s_{8}+s_{9}+s_{11}+1, \\
           \gamma_{z}^{(t)} &=s_{9}+s_{11}+s_{13}.
           \end{aligned}\tag{42}$$</p>
  
		<h3>External links</h3>
		<ul>
		  <li>This article is revised from Robert Raussendorf, Daniel E. Browne & Hans J. Briegel's article
		      <a href="https://journals.aps.org/pra/abstract/10.1103/PhysRevA.68.022312">"Measurement-based quantum computation on cluster states"</a>.
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