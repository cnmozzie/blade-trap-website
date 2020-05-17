<template>
  <div v-katex:auto class="container-fluid">
    <div class="row">
	  <div class="col-12">
	    <h1>Toric code</h1>
        <p>To understand the Toric code, it is instructive to first understand the idea behind
           error correcting codes and their generalization to stabilizer codes, since the Toric code is an
           example of each of these objects.</p>
        <h3>Error correcting codes</h3>
		<p>Suppose we have some quantum state \(|\psi\rangle\). We would like to preserve our information through
           time or space. What we mean by this is that if we transport \(|\psi\rangle\) across space or if we leave
           \(|\psi\rangle\) fixed in place but wait a long time, we would like \(|\psi\rangle\) to be in the exact same state as
           when we started. The reason \(|\psi\rangle\) may not be in the exact same state is due to an effect
           called “noise”. Noise is basically any physical perturbation affecting our state over the course
           of time or space and can be classical or quantum (such as decoherence). To model it, we use
           a quantum channel \(\mathcal{T}\) applied to \(|\psi\rangle\). In basic cases, we can think of \(\mathcal{T}\) as a simple tensor
           product of unitary operations applied independently to input qubits.</p>
		<p>To protect our state, that is, to make sure that \(\mathcal{T}\left|\psi\right\rangle=\left|\psi\right\rangle\), we employ the use 
		   of an error correcting code. The idea behind such a code is to add enough redundancy to our state
           so that when it passes through the channel, the output state is unequivocally close to the
           original state. In more detail, we encode our original state \(|\psi\rangle\) into some pre-channel state \(|\psi^\prime\rangle\) 
		   using some unitary encoding operating \(\mathcal{E}\) that makes \(|\psi^\prime\rangle\) significantly more redundant.
           Then, \(|\psi^\prime\rangle\) passes through the channel \(\mathcal{T}\) to make an output state 
		   \(\mathcal{T}\left|\psi^{\prime}\right\rangle=\left|\psi^{\prime \prime}\right\rangle\). Lastly, we
           decode \(\left|\psi^{\prime \prime}\right\rangle\) into an estimate \(\left|\psi^{\prime\prime\prime}\right\rangle\) of \(|\psi\rangle\) 
		   by suitable measurements and unitary operations. Assuming we added enough redundancy in the encoding step, 
		   \(\left|\psi^{\prime\prime\prime}\right\rangle\) will equal \(|\psi\rangle\) and we will have protected our information.</p>
		<h3>Stabilizer codes</h3>
		<p>Let \(X\), \(Y\) and \(Z\) be the familiar Pauli operators (matrices) and \(I\) be the identity operator
           (matrix). Let \( \Pi = \{I,X,Y,Z\}\) and define the Pauli group as
		   $$G_{n}=\left\{e^{i \frac{\pi}{2} m} M_{1} \otimes \cdots \otimes M_{n} | M_{j} \in \Pi, m=0,1,2,3\right\}.$$
		   Basically the n-th Pauli group \(G_n\) is the n-fold tensor product of Pauli operators with
           the addition of the factors ±1 and ±i so that it is indeed a group with respect to matrix multiplication.</p>
		<p>Given n, consider a composite system of n qubits represented by a state vector \(|\psi\rangle\), and let
           S be a subgroup of \(G_n\). Define
		   $$V_{S}=\{|\psi\rangle: g|\psi\rangle=|\psi\rangle, \forall g \in S\}$$
		   that is, \(V_S\) is the space of simultaneous +1 eigenvectors of \(S\). More intuitively, if \(|\psi\rangle\) is in
           \(V_S\), then if we apply any operator from \(S\) to \(|\psi\rangle\), the effect is as if nothing was applied to \(|\psi\rangle\).</p>
		<p>It is clear that the zero vector is in \(V_S\) and that \(V_S\) is closed under linear combinations,
           thus, \(V_S\) is a vector subspace. We call \(V_S\) the <strong>vector space stabilized by \(S\)</strong> and we call \(S\)
           the <strong>stabilizer</strong> of \(V_S\). To ensure that \(V_S\) is not a trivial vector space, it turns out that it is
           necessary and sufficient that \(S\) is <em>abelian</em> (everything in \(S\) commutes with everything else in
           \(S\)) and that \(−I \notin S\).</p>
		<p>To talk about \(S\) more succinctly, we can express \(S\) in terms of its generators. If \(g_1,...,g_m\in S\)
           and any element \(g \in S\) can be written as a finite product of elements from \(g_1,...,g_m\), then
           we call \(g_1,...,g_m\) the <strong>generators</strong> of \(S\); in this case we will write \(S=\langle g_1,...,g_m\rangle\). We say
           that generators \(g_1,...,g_m\) are <em>independent</em> if removing any of them makes the group they generator smaller.</p>
		<p>With the previous in mind we have the following important theorem:</p>
		<p><strong>Theorem 1</strong> Let n be the number of qubits in our composite system. If \(g_1,...,g_{n-k}\) are independent 
		   and commuting elements of \(G_n\) such that \(S=\langle g_1,...,g_{n-k}\rangle\) and \(−I \notin S\), then \(V_S\) has 
		   dimension \(2^k\) as a vector space.</p>
		<p>Now we finally come to stabilizer codes. Fix n and consider a subgroup of \(G_n\) given as
           \(S=\langle g_1,...,g_{n-k}\rangle\) such that the generators are commuting and independent and \(−I \notin S\).
           Then an [n, k] <strong>stabilizer code</strong> is defined to be the vector space \(V_S\) (that is, the vector space
           stabilized by \(S\)). We denote such a code by C(S) since the code is completely determined
           by the choice of \(S\). Thus by the previous paragraph, the code C(S) is just a specific \(2^k\)
           vector subspace of the \(2^n\) qubit vector space; it is noteworthy that this is a direct analog to
           linear codes from classical error correction coding theory. Intuitively, a [n, k] stabilizer code
           encodes k information qubits to n physical qubits.</p>
		<h3>Toric code motivation</h3>
		<p>Recall that elements of the Pauli group \(G_n\) take the form
		   \(e^{i \frac{\pi}{2} m} M_{1} \otimes \cdots \otimes M_{n}\)
		   for \(m = 1, 2, 3, 4\) and all the \(M_i \in \{I,X, Y,Z\}\). We say an element of \(G_n\) has <strong>length k</strong> 
		   if k of the \(M_i\) are non-identity Pauli matrices and the rest of the \(M_i\) are the identity. For example, the element
		   \(+i X \otimes Z \otimes I \otimes I \otimes I \otimes I \otimes I \otimes I\)
		   of \(G_8\) has length 2. We call a subgroup \(S\subset G_n\) a <strong>k-local stabilizer code</strong> if \(S\) 
		   is generated by operators of length k. This is worth defining because the Toric code turns out to be a 4-local
           code. That is, the stabilizer group for the Toric code is generated by length 4 elements of
           the Pauli Group \(G_n\). To motivate the Toric code we can first consider three other natural
           4-local codes on n qubits.</p>
		<p>One 4-local code is the “A” code that has the stabilizer group \(S\) generated by all the
		   \(e^{i \frac{\pi}{2} m} M_{1} \otimes \cdots \otimes M_{n}\)
		   such that exactly 4 of the \(M_i\) are the Pauli X matrix, and the rest of the \(M_i\) are the identity.</p>
		<p>Another obvious 4 local code is the “B” code, which has a stabilizer group \(S\) generated by all the
		   \(e^{i \frac{\pi}{2} m} M_{1} \otimes \cdots \otimes M_{n}\)
		   such that exactly 4 of the \(M_i\) are the Pauli Z matrix, and the rest of the \(M_i\) are the identity.</p>
		<p>We could try to form a third 4 local stabilizer code (“AB” code) with stabilizer group \(S\)
           generated by all finite products of the elements of the A code with elements of the B code.
           However, <em>such an \(S\) is not commutative</em>, since \(XZ = −ZX\). The codespace would be empty!
           It turns out, fortunately, that this code can be salvaged, however. The toric code sits inside
           the “AB” code as an abelian subgroup which has a natural topological interpretation.</p>
		<h3>Toric code definition</h3>
		<p>We create the toric code as follows. We embed a square lattice as an n edge graph \(\Gamma\) on 
		   a torus \(\mathbb{T}^{2}\) as in Figure 1. We then <em>assign a qubit to each of the n edges of the graph</em> 
		   so that we have a <em>2n dimensional Hilbert space</em> \(L=\otimes_{\text {edges }} \mathbb{C}^{2}\).</p>
	  </div>
	  <div class="col-center-block">  
        <img src="toric_code/torus-wire.png" width="460" height="254">
	  </div>
      <div class="col-12">
        <figcaption class="figure-caption text-center"><strong>Figure 1:</strong> Mapping from a square lattice to a torus. </figcaption>
	    <br />
	  </div>
	  <div class="col-12">
	    <p>Consider Figure 2. For each vertex v of the graph \(\Gamma\) (i.e. a point on the original square lattice) 
		   define an operator \(A_v\) on \(L=\otimes_{\text {edges }} \mathbb{C}^{2}\) as a tensor product of 
		   Pauli \(X\) matrices and identities such that \(A_v\) acts as \(X\) on the each of the four qubits corresponding to 
		   the four edges adjacent to v and otherwise \(A_v\) acts as the identity. Similarly, define a face operator 
		   \(B_f\) for each face f as an operator acting on L as a tensor product of Pauli \(Z\) and identities such that 
		   \(B_f\) acts as \(Z\) on each of the 4 qubits corresponding to the edges enclosing the face f, 
		   and otherwise acts as the identity.</p>
	  </div>
	  <div class="col-center-block">  
        <embed src="toric_code/operator.svg">
	  </div>
      <div class="col-12">
        <figcaption class="figure-caption text-center"><strong>Figure 2:</strong> A example of vertex operator (A)
			and face operator (B) for toric code.</figcaption>
	    <br>
	  </div>
      <div class="col-12">
		<p>Now let \(S\) be generated by every vertex operator, \(A_v\), and every face operator, \(B_f\), that is,
		   $$S=\left\langle A_{v_{1}}, A_{v_{2}}, \cdots, B_{f_{1}}, B_{f_{2}}, \cdots\right\rangle$$
		   Then \(S\) is definitely a subgroup of \(G_n\). Furthermore, note that for any v, v' we have
           \(A_vA_{v'}=A_{v'}A_v\) and for any f, f' we have \(B_fB_{f'}=B_{f'}B_f\) since \(X\) and \(Z\) operators each
           commute with themselves respectively. But also note that if v is not a vertex adjacent to
           the face f then \(B_f\) and \(A_v\) act on completely different qubits, so they naturally commute.
           Otherwise, if v is a vertex adjacent to the face f, the operators overlap on exactly two
           edges. But since \(X\) and \(Z\) anti-commute, we have \((−1)^2 = 1\) so we still have that \(A_v\) and
           \(B_f\) commute. Hence, \(S\) is a subgroup generated by <em>commuting</em> generators.</p>
		<p>The toric code places qubits at every edge on our lattice, hence n = |edges|. But for the
           torus, it is easy to check using the Euler characteristic that |faces| = |vertices| = n/2 so that
           there is actually n/2 \(A_v\) operators and n/2 \(B_f\) operators. Hence, S is a subgroup generated by n/2 + n/2 = n 
		   commuting generators. However, they are not independent generators since we clearly have the relations
		   $$\prod_{v \in\{\text { vertices }\}} A_{v}=\prod_{f \in\{\text { faces }\}} B_{f}=I \tag{1}$$
		   But two relations means we lose two degrees of freedom from the previous n commuting
           generators and we are left with some n-2 commuting independent generators.</p>
		<p>Furthermore, it is clear that \(−I \notin S\). Thus by Theorem 1, the Toric code must have a code space \(V_S\) of size 2 
		   and we can conclude that the toric code is a [n, 2] stabilizer code. Hence, we can encode
           2 information qubits using the Toric code using n physical qubits placed on each of the n
           edges of the lattice embedded on the torus.</p>
		
		<h3>Essential equations of the Toric code</h3>
		<p>The Hamiltonian (the operator roughly corresponding to the total energy in the system) for the toric code is given by
		   $$H=-\sum_{v \in\{\text { vertices }\}} A_{v}-\sum_{f \in\{\text { faces }\}} B_{f}$$.</p>
		<p>The ground state of the Hamiltonian is the eigenstate of H corresponding to the smallest
           eigenvalue. Since there are −1 factors in front of each sum in the Hamiltonian and the
           eigenvalues of each \(A_v\) and \(B_f\) are ±1, the ground state is simply the state that is the
           simultaneous +1 eigenstate of each \(A_v\) and \(B_f\).</p>
		<p>A ground state of the Hamiltonian is given by
		   $$|\zeta\rangle=\prod_{v} \frac{1}{\sqrt{2}}\left(I+A_{v}\right)|00 \cdots 0\rangle$$
		   We note that the ground state \(|\zeta\rangle\) lies in the code space since again it is a simultaneous +1
           eigenvector for all the A(v) and all the B(f). For this reason, it is only natural to let \(|\zeta\rangle\) be
           one of the four basis states of our Toric code vector space as the “resting” state of our n
           physical qubits is \(|\zeta\rangle\). What is surprising now is that this actually isn’t the only ground state!</p>
		<p>Suppose the qubits on the lattice embedded on the torus are in the ground state \(|\zeta\rangle\). Then
           suppose we apply a \(Z\) operator to the qubit on edge \(\alpha\). This raises the energy of the system
           to \(E_0+2\) and thus is referred to as an <em>excitation</em>. Measuring the two \(A_v\) operators on the
           two vertices adjacent to \(\alpha\) yields a −1 measurement each. When this happens we say an
           <strong>e-anyon</strong> has been created at each of these two vertices. Note that the e-anyons’ must come
           in pairs. Now suppose we apply a \(Z\) operator to consecutive qubits on the lattice in the form
           of a path such that the path is non-closed. This again raises the energy of the system to
           \(E_0+2\) and creates an e-anyon pair at the boundary of such a path (See Figure 3(a)). However, if we consider
           a closed path, it turns out that the energy of the system is not raised and no e-anyon pairs
           are created. For this reason, we would suspect that such a scenario corresponds to a new
           ground state. However, careful analysis reveals that this is not able to change the ground
           state since \(Z\) operators are not able to flip \(|0\rangle\)’s and \(|1\rangle\)’s.</p>
		<p>Now what if we do the exact same analysis except with the \(X\) operator in place of the \(Z\)
           operator on the lattice? Since some \(X\) loops fail to commute with some \(B_f\) , this will take
           \(|\zeta\rangle\) out of the code space entirely. However, we can define a dual-lattice \(\Gamma^*\). 
		   We define the dual lattice as a new lattice that has lattice vertices as faces and lattice faces as vertices.
           Here, if we apply the \(X\) operator on a path as before we really will get a new ground state!</p>
	  </div>
	  <div class="col-center-block">  
        <embed src="toric_code/lattice.svg">
		<embed src="toric_code/dual-lattice.svg">
	  </div>
      <div class="col-12">
        <figcaption class="figure-caption text-left"><strong>Figure 3:</strong> A example of a lattice (a) and its dual-lattice (b).
          \(Z\) operator on a qubit (blue color) will excite a pair of e-anyon while \(X\) operator on a qubit (red color) will excite a pair of m-anyon.</figcaption>
	    <br />
	  </div>
      <div class="col-12">
		<h3>Path and loop operators: storing information in the Toric code</h3>
		<p>What is perhaps surprising is that each of the basis vectors of \(V_S\) corresponds to a certain distinct
           loop of the torus. In this way, the loops are what are storing the logical information. Since we
           have designed the toric code in such a fashion, the basis vectors are actually the degenerate
           ground states of the quantum system so these basis states are incredibly stable.</p>
		<p>The Toric code can store 4 different logical quantum states: \(|00\rangle\), \(|01\rangle\), \(|10\rangle\), \(|11\rangle\).
		   Starting from a Torus with a spin lattice in the state \(|00...0\rangle\), we can apply the operator 
		   \(\prod_{v \in \text { vertices }} \frac{1}{\sqrt{2}}\left(I+A_{v}\right)\) to store the state \(|00\rangle\). Let 
           \(\gamma\) be a set of qubits that a closed loop around the Torus on the dual lattice. Then let \(O^x_\gamma\) be the
           element of the Pauli group that acts as the \(X\) operator on every qubit in \(\gamma\)
           and acts as the identity on every other qubit. We call such an operator a <strong>path operator</strong>.
		   <em>Noted that \(A_v\) commute with \(O^x_\gamma\) and it does not change 
		   the ground state \(|\zeta\rangle\). Thus we can use it freely to change the path of \(O^x_\gamma\).</em> It turns out that
           for any paths \(\gamma\), \(\gamma'\) that wrap around the Torus vertically we have 
		   \(O_{\gamma}^{x}|\zeta\rangle=O_{\gamma^{\prime}}^{x}|\zeta\rangle\). 
		   Similarly, if \(\beta\) and \(\beta'\) are any two paths that wrap around the torus horizontally we have
		   \(O_{\beta}^{x}|\zeta\rangle=O_{\beta^{\prime}}^{x}|\zeta\rangle\). </p>
		<p>To summarize, in the Toric code we store logical qubits by
		   $$\begin{aligned}
           &|00\rangle \equiv|\zeta\rangle\\
           &|01\rangle \equiv O_{\gamma}^{x}|\zeta\rangle\\
           &|10\rangle \equiv O_{\beta}^{x}|\zeta\rangle\\
           &|11\rangle \equiv O_{\beta}^{x} O_{\gamma}^{x}|\zeta\rangle
           \end{aligned}$$
		   where on the left hand side the kets represent logical quantum states and on the right hand
           side the states are of the noisy, physical, quantum spin lattice.</p>
		<h3>Broken loops and anyons: detecting and correcting errors in the Toric code</h3>
		<p>A bit flip will excite a pair of m-anyons, which can be detected by a face operator \(B_f\).
		   While a sign flip will excite a pair of e-anyons, which can be detected by a vertex operator \(A_v\).
		   As long as the error is localized, we can find the error path and use a path operator to correct it.</p>	
		<h3>Toric code 2\(\times\)2 example</h3>
	  </div>
	  <div class="col-center-block">  
        <embed src="toric_code/example.svg">
	  </div>
      <div class="col-12">
        <figcaption class="figure-caption text-left"><strong>Figure 4:</strong> Toric code 2\(\times\)2 example. Qubits are denoted by number 1 to 8. 
			Vertex operators are denoted by lower case letters while face operators are denoted by capital letters.
			The dual lattice are drawed by dash line.</figcaption>
	    <br />
	  </div>
      <div class="col-12">
        <p>For Figure 4, the ground state is (up to a suitable normalization):
		   $$|\zeta\rangle=\left(I+A_{k}\right)\left(I+A_{\ell}\right)\left(I+A_{m}\right)\left(I+A_{n}\right)|00000000\rangle.$$
		   According to eq 1, we have \(A_kA_lA_mA_n=I\). Combined with the relation \(A_v^2=I\), we will have many other relations.
		   For example, \(A_lA_mA_n=A_kA_kA_lA_mA_n=A_k\), \(A_mA_n=A_kA_lA_kA_lA_mA_n=A_kA_l\). 
		   Now the initial expansion of the operator product can be simplify to
		   $$2(1+A_k+A_l+A_m+A_n+A_kA_l+A_kA_m+A_kA_n).$$
		   So this ground state is proportional to 
		   $$\begin{aligned}
             |\zeta\rangle &:=|00000000\rangle+|10101010\rangle+|10011001\rangle+|01010101\rangle \\
             &+|01100110\rangle+|00110011\rangle+|11111111\rangle+|11001100\rangle
           \end{aligned}$$
        </p>
        <p>It is crucial to note that there are other ground states as previously mentioned.
		   Some examples of loops on the dual lattice, for our 2 × 2 example, are \(X_3X_4\),
		   \(X_7X_8\),\(X_4X_4X_7X_5\). They are all \(X\) type operators that just act on the qubits sitting on the edges 
		   corresponding to a path on the dual lattice and are in fact all vertical paths. Moreover, 
		   \(X_{3} X_{4}|\zeta\rangle=X_{7} X_{8}|\zeta\rangle=X_{4} X_{1} X_{7} X_{5}|\zeta\rangle\).
		   This a particular case of the general fact that for any \(X\) type vertical path operator on the
           dual lattice we get the same element of code space. Namely,
		   $$\begin{aligned}
             |\zeta_1\rangle &:=|00110000\rangle+|10011010\rangle+|10101001\rangle+|01100101\rangle \\
             &+|01010110\rangle+|00000011\rangle+|11001111\rangle+|11111100\rangle
           \end{aligned}$$</p>
        <p>By a similar logic, the path operator for a closed horizontal loop of \(X\)s also commutes with
           all the \(A_v\). This operator can be acted on \(|\zeta\rangle\) to obtain a new element of the code space:
		   $$\begin{aligned}
             |\zeta_2\rangle &:=|11000000\rangle+|01101010\rangle+|01011001\rangle+|10010101\rangle \\
             &+|10100110\rangle+|11110011\rangle+|00111111\rangle+|00001100\rangle
           \end{aligned}$$</p>
        <p>The fourth and final element of the code space in our example can be obtained by acting
           with both the the \(X\) path operator for both a horizontal loop and a vertical loop, yielding
		   $$\begin{aligned}
             |\zeta_3\rangle &:=|11110000\rangle+|01011010\rangle+|01101001\rangle+|10100101\rangle \\
             &+|10010110\rangle+|11000011\rangle+|00001111\rangle+|00111100\rangle
           \end{aligned}$$</p>
        <p>The bottom line is that open paths create anyons. That is, acting with an open path operator
           will take \(|\zeta\rangle\) out of the code space, so that is useless. So we want to act with closed path
           (loop) operators. It turns out:</p>
		<ol>
          <li>The path operator for any \(Z\) loop on the lattice just maps \(|\zeta\rangle\) to itself - 
		      it does not create a new element of codespace.</li>
          <li>The path operator for any \(Z\) loop on the dual lattice will fail to commute with some
		      \(A_v\) - thus the operator take \(|\zeta\rangle\) out of the codespace.</li>
          <li>The path operator for any \(X\) loop on the lattice will fail to commute with some \(B_f\) - 
		      thus the operator takes \(|\zeta\rangle\) out of the codespace.</li>
          <li>The path operator for any \(X\) loop on the dual lattice is just right and will give us
		      the three other states in the code space that we are looking for.</li>
        </ol>    
		<h3>External links</h3>
		<ul>
		  <li>This article is revised from 
		      <a href="https://www.cs.umd.edu/class/fall2018/cmsc657/projects/group_12.pdf">
			     Eric Kubischta & Ian Teixeira's CMSC 657 Final Report</a>.
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