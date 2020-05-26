<template>
  <div v-katex:auto class="container-fluid">
    <div class="row">
	  <div class="col-12">
	    <h1>Planar code</h1>
        <p>Let us briefly recall the definition and the properties of the 
		   <router-link to="/blade-trap/ions/toric_code">toric codes</router-link>.</p>
		<p>In a toric code, qubits are associated with edges of an \(n \times n\) square lattice on the torus \(T^2\).
           To each vertex s and each face p we assign a stabilizer operator of the form:
		   $$A_{s}=\prod_{j \in \text { star } (s)} \sigma_{j}^{x}, \quad B_{p}=\prod_{j \in \text { boundary }(p)} \sigma_{j}^{z}.\tag{1}$$
		   (Note the dependencies between the stabilizer operators: \(\prod_sA_S=\prod_pB_p=1\)). A codeword is
           a vector \(|\xi\rangle\) which satisfies the following conditions
		   $$A_{s}|\xi\rangle=|\xi\rangle, \quad B_{p}|\xi\rangle=|\xi\rangle \quad \text { for all } s, p.\tag{2}$$</p>
		<p>The <strong>codeword subspace \(C\)</strong> is 4-dimensional, so it can be identified with the Hilbert space of
           two <em>logical qubits</em>. This identification goes through the algebra \(\mathbf{L}(C)\) of operators acting on \(C\)
           which we call <strong>logical operators</strong>. Any logical operator can be extended to the large Hilbert space 
		   \(\left(\mathbf{C}^{2}\right)^{\otimes 2 n^{2}}\) of the physical qubits (which are
           associated to the edges of the lattice). Such an extension is not unique but it can be chosen
           so that to commute with all \(A_s\) and \(B_p\). Operators with this property form an <strong>algebra \(\mathcal{G}\)</strong>. 
		   In order to get the algebra \(\mathbf{L}(C)\), we take into account that <em>\(A_s\) and \(B_p\) act on \(C\) as the identity
           operator and thus should be identified with the identity</em>.</p>
		<p>To be more particular, consider an operator of the form
		   <div class="anchor" id="eq3"></div>
		   $$Y\left(c, c^{*}\right) \stackrel{\text { def }}{=} \prod_{i \in c} \sigma_{i}^{z} \prod_{j \in c^{*}} \sigma_{j}^{x}\tag{3}$$
		   where \(c\) is a 1-cycle with \(\mathbf{Z}_2\) coefficients, \(c^*\) is a 1-cycle on the dual lattice. 
		   The operator \(Y\left(c, c^{*}\right)\) commutes with every stabilizer operator and thus maps the
           codeword subspace \(C\) to itself. This map depends only upon the homology classes of the
           cycles \(c\) and \(c^*\), so we can denote it by \(Y\left([c], [c^{*}]\right)\). 
           The operators \(Y\left(c, c^{*}\right)\) form a linear basis of the algebra \(\mathcal{G}\) whereas 
		   \(Y\left([c], [c^{*}]\right)\) form a linear basis of \(\mathbf{L}(C)\). 
		   (Note that operators form linear spaces over \(C\) while the cycles and homology classes have a \(\mathbf{Z}_2\) additive
           structure. There is nothing wrong here because addition of cycles corresponds to operator multiplication.) 
           Let \([c_1]\), \([c_2]\) be some basis elements of the group \(H_1(T^2,\mathbf{Z}_2)\), and \([c_1^*]\), \([c_2^*]\) 
		   form the dual basis of \(H^1(T^2,\mathbf{Z}_2)\). We can represent
           these homology and cohomology classes by cycles \(c_1\), \(c_2\), \(c_1^*\), \(c_2^*\) on the original and the dual
           lattice, respectively. The corresponding logical operators \(Y_1^x=Y\left(0, [c^*_1]\right)\), \(Y_2^x=Y\left(0, [c^*_2]\right)\), 
		   \(Y_1^z=Y\left([c_1], 0\right)\), \(Y_2^z=Y\left([c_2], 0\right)\) are <strong>generators</strong> of the algebra \(\mathbf{L}(C)\). 
		   They have the same commutation relations as \(\sigma_1^x\), \(\sigma_2^x\), \(\sigma_1^z\), \(\sigma_2^z\), 
		   so we can map ones to the others. This way we establish an isomorphism between the algebra \(\mathbf{L}(C)\)and the algebra 
		   \(\mathbf{L}(\mathbf{C}^2\otimes\mathbf{C}^2)\), whence the correspondence between the codewords and quantum states of two qubits.</p>
        <p>This construction will be our starting point.</p>
		<h3>A \(2\times3\) lattice example</h3>
		<p>Instead of dealing with toric lattices, we consider a finite square lattice on the plane. 
		   A new feature arising here is a boundary. Generally, the boundary can be of two types, see <a href="#fig1">Fig. 1</a>. 
		   We will call them an x-boundary and a z-boundary.</p>
	  </div>
	  <div class="col-center-block">  
        <embed src="planar_code/two_types_of_boundary.svg" width="300" height="200" id="fig1">
	  </div>
      <div class="col-12">
        <figcaption class="figure-caption text-center"><strong>Figure 1:</strong> Square lattices with (a) z-boundary and (b) x-boundary.</figcaption>
	    <br>
	  </div>
      <div class="col-12">
		<p>The simplest example of a boundary code can be built on the lattice having two pieces of
           x-boundary and two pieces of z-boundary, in alternating order (see <a href="#fig2">Fig. 2</a>). Under a suitable
           convention, an \(n\times m\) lattice has nm vertical edges and \((n+1)(m+1)\) horizontal edges, so the
           code has \(2nm+n+m+1\) qubits. The stabilizer operators are very similar to ones in the toric
           code. The definitions (1), (2) remain essentially the same, but we must specify what are the
           faces and the vertices. If a face p is such that all its boundary edges are present (e. g. the face
           \(p_2\) in the <a href="#fig2">Fig. 2</a>) then the operator \(B_p\) is well defined by (1). There are also incomplete faces
           lacking one edge, e. g. the face \(p_1\) in <a href="#fig2">Fig. 2</a>. We still assign a stabilizer operator to such a face
           according to (1), with boundary(p) containing all existing boundary edges of the face p. Thus
           there are \(n(m + 1)\) face stabilizer operators. Similarly, we assign \((n + 1)m\) stabilizer operators
           to all vertices with 4 or 3 incoming edges. (Free ends of edges do not bear stabilizer operators).
           All the stabilizer operators are independent.</p>
	  </div>
	  <div class="col-center-block">  
        <embed src="planar_code/2x3_lattice_example.svg" width="450" height="315" id="fig2">
	  </div>
      <div class="col-12">
        <figcaption class="figure-caption"><strong>Figure 2:</strong> A \(2\times3\) lattice with two pieces of x-boundary 
		    and two pieces of z-boundary. The free ends labeled by the same letter could be identified.</figcaption>
	    <br>
	  </div>
      <div class="col-12">
		<p>Here is a complete list of stabilizer operators for the lattice shown in <a href="#fig2">Fig. 2</a>: 
		   \(A_{s_{1}}=\sigma_{v_{1} s_{1}}^{x} \sigma_{s_{1} s_{4}}^{x} \sigma_{s_{1} s_{2}}^{x}\), 
		   \(A_{s_{2}}=\sigma_{s_{1} s_{2}}^{x} \sigma_{s_{2} s_{5}}^{x} \sigma_{s_{2} s_{3}}^{x}\), 
		   \(A_{s_{3}}=\sigma_{s_{2} s_{3}}^{x} \sigma_{s_{3} s_{6}}^{x} \sigma_{s_{3} v_{2}}^{x}\), 
		   \(A_{s_{4}}=\sigma_{v_{1} s_{4}}^{x} \sigma_{s_{1} s_{4}}^{x} \sigma_{s_{4} s_{5}}^{x} \sigma_{s_{4} v_{7}}^{x}\), 
		   \(A_{s_{5}}=\sigma_{s_{4} s_{5}}^{x} \sigma_{s_{2} s_{5}}^{x} \sigma_{s_{5} s_{6}}^{x} \sigma_{s_{5} v_{8}}^{x}\), 
		   \(A_{s_{6}}=\sigma_{s_{5} s_{6}}^{x} \sigma_{s_{3} s_{6}}^{x} \sigma_{s_{6} v_{2}}^{x} \sigma_{s_{6} v_{9}}^{x}\), 
		   \(A_{s_{7}}=\sigma_{v_{1} s_{7}}^{x} \sigma_{s_{4} s_{7}}^{x} \sigma_{s_{7} s_{8}}^{x}\), 
		   \(A_{s_{8}}=\sigma_{s_{7} s_{8}}^{x} \sigma_{s_{5} s_{8}}^{x} \sigma_{s_{8} s_{9}}^{x}\), 
		   \(A_{s_{9}}=\sigma_{s_{8} s_{9}}^{x} \sigma_{s_{6} s_{9}}^{x} \sigma_{s_{9} v_{2}}^{x}\) and 
		   \(B_{p_{1}}=\sigma_{v_{1} s_{1}}^{z} \sigma_{s_{1} s_{4}}^{z} \sigma_{v_{1} s_{4}}^{z}\), 
		   \(B_{p_{2}}=\sigma_{s_{1} s_{2}}^{z} \sigma_{s_{2} s_{5}}^{z} \sigma_{s_{4} s_{5}}^{z} \sigma_{s_{1} s_{4}}^{z}\), 
		   \(B_{p_{3}}=\sigma_{s_{2} s_{3}}^{z} \sigma_{s_{3} s_{6}}^{z} \sigma_{s_{5} s_{6}}^{z} \sigma_{s_{2} s_{5}}^{z}\), 
		   \(B_{p_{4}}=\sigma_{s_{3} v_{2}}^{z} \sigma_{s_{3} s_{6}}^{z} \sigma_{s_{6} v_{2}}^{z}\), 
		   \(B_{p_{5}}=\sigma_{v_{1} s_{4}}^{z} \sigma_{s_{4} s_{7}}^{z} \sigma_{s_{7} v_{1}}^{z}\), 
		   \(B_{p_{6}}=\sigma_{s_{4} s_{5}}^{z} \sigma_{s_{5} s_{8}}^{z} \sigma_{s_{7} s_{8}}^{z} \sigma_{s_{4} s_{7}}^{z}\), 
		   \(B_{p_{7}}=\sigma_{s_{5} s_{6}}^{z} \sigma_{s_{6} s_{9}}^{z} \sigma_{s_{8} s_{9}}^{z} \sigma_{s_{5} s_{8}}^{z}\), 
		   \(B_{p_{8}}=\sigma_{s_{6} v_{2}}^{z} \sigma_{s_{6} s_{9}}^{z} \sigma_{s_{9} v_{2}}^{z}\).</p>
		<p>The dimensionality of the codeword subspace can be found by a simple counting argument.
           There are \(2nm + n + m + 1\) qubits and \(2nm + n + m\) independent stabilizer operators which
           leave us with \((2nm+n+m+1)−(2nm+n+m) = 1\) degrees of freedom, i. e. only one logical
           qubit can be encoded. Thus the codeword subspace \(C\) is 2-dimensional. Let us find the logical operators acting on it.
		   Firstly, we are to characterize the algebra \(\mathcal{G}\) of operators commuting
           with all the stabilizer operators. Then we will find \(\mathbf{L}(C)\) by taking a quotient.</p>
		<h3>Logical operators for the planar code</h3>
		<p>Let us denote the lattice and the dual lattice by \(L\) and \(L^*\), respectively. Both lattices have
           boundaries which are, by definition, formed, by free ends of edges. (Recall that the free ends
           are exactly the vertices which do not bear stabilizer operators). Note that the x-boundary
           belongs to the lattice \(L\) while the z-boundary belongs to \(L^*\). From now on, we denote these
           two boundaries by \(V\) and \(V^*\), correspondingly. In <a href="#fig2">Fig. 2</a>, \(V\) includes the free ends denoted by
           \(V_1\) and \(V_2\), whereas \(V^*\) is represented by \(V^*_1\) and \(V^*_2\). (It does not matter whether we identify
           the free ends or consider them as distinct vertices).</p>
		<p>A linear basis of \(\mathcal{G}\) is given by <a href="#eq3">eq. (3)</a>, where \(c\) is a relative 1-cycle (with \(\mathbf{Z}_2\) coefficients)
           on the lattice \(L\), and \(c^*\) is a relative 1-cycle on the lattice \(L^*\). By definition, a <em>relative</em> 1-cycle
           on a lattice is a 1-chain \(c\) whose boundary \(\partial c\) is contained in the boundary of the lattice.
           Equivalently, a relative 1-cycle is an ordinary (or absolute) 1-cycle on a lattice obtained from
           the original one by gluing all the free ends together. (To prove that the operators \(Y\left(c, c^{*}\right)\)
           actually make up a linear basis of \(\mathcal{G}\), expand a generic linear operator into products of Pauli
           matrices and try to commute with \(A_s\) and \(B_p\)).</p>
		<p>The action of \(Y\left(c, c^{*}\right)\) on the codeword subspace \(C\) depends only upon the relative homology
           classes \([c] \in H_1(L, V,\mathbf{Z}_2)\) and \([c^*] \in H_1(L^*, V^*,\mathbf{Z}_2)=H^1(L,V,\mathbf{Z}_2)\). 
		   Thus we arrive to the group \(E = H_1(L, V,\mathbf{Z}_2) \oplus H^1(L, V,\mathbf{Z}_2)\). The operators \(Y\left([c], [c^{*}]\right)\) 
		   (where \(([c], [c^*]) \in E\)) form a linear basis of the algebra \(\mathbf{L}(C)\).</p>
		<p>Consider some relative cycle \(c_{12}\) starting at \(V_1\) and ending at \(V_2\), and some relative cycle \(c_{12}^*\)
           starting at \(V^*_1\) and ending at \(V^*_2\), see <a href="#fig3">Fig. 3</a>. The operators \(Y^z=Y([c_{12}],0)\) and \(Y^x=Y(0,[c^*_{12}])\) 
           generate the algebra of logical operators. Since these two generators anti-commute, we can
           interpret them as the action of \(\sigma_z\) and \(\sigma_x\) on the logical qubit.</p>	
	    <p>Let us find the distance of the code we have constructed. By definition, the <strong>distance of a
           code</strong> is the minimal size of an error which can not be detected by syndrome measurement but
           still affects the codeword subspace C. A general error is just an operator on the Hilbert space
           of physical qubits. An error X is undetectable if it commutes with the stabilizer operators, i.e.
           belongs to \(\mathcal{G}\). As we know, such operators X are linear combinations of \(Y\left(c, c^{*}\right)\). 
		   An operator \(Y\left(c, c^{*}\right)\) affects the codeword subspace if at least one of the relative cycles 
		   \(c\) and \(c^*\) is nontrivial. Thus, the code distance is the length of a shortest path which connects two pieces of boundary
           of the same type. For an \(n \times m\) lattice, this number equals \(d = \text{min}\{n + 1, m + 1\}\). The code
           protects against \(\left[\frac{d-1}{2}\right]\) errors.</p>
	  </div>
	  <div class="col-center-block">  
        <embed src="planar_code/homology_class.svg" width="240" height="240" id="fig3">
	  </div>
      <div class="col-12">
        <figcaption class="figure-caption text-left"><strong>Figure 3:</strong> The nontrivial relative homology class \([c_{12}] \in H_1(L, V,\mathbf{Z}_2)\)
		    is shown by a solid line. The nontrivial element \([c_{12}^*] \in H_1(L^*, V^*,\mathbf{Z}_2)\) is shown by a dashed line.</figcaption>
	    <br />
	  </div>
      <div class="col-12">
		<h3>Beyond square lattices</h3>
        <p>A similar code can be defined for any pair of mutually dual lattices with boundary. They
           need not be square lattices; each vertex can have any number of neighbors, and each face
           can be of arbitrary size. We omit formal definition here. Topologically, the pair of lattices
           corresponds to a surface Q with boundary split into pieces of two types, x and z. The two
           parts of the boundary will be denoted by \(V\) and \(V^*\), respectively. If we draw the lattices on
           this surface, the free ends of the first lattice should be attached to \(V\) whereas the free ends
           of the dual lattice should be attached to the \(V^*\). The above arguments work perfectly in this
           general case. The basis logical operators \(Y\left([c], [c^{*}]\right)\) correspond to relative homology classes
           \([c] \in H_1(Q, V,\mathbf{Z}_2)\) and \([c^*] \in H_1(Q, V^*,\mathbf{Z}_2)=H^1(Q,V,\mathbf{Z}_2)\). 
		   Hence the number of logical qubits is \(m = \text{dim}H_1(Q, V,\mathbf{Z}_2) = \text{dim}H_1(Q, V^*,\mathbf{Z}_2) \).</p>
        <p>Let us consider the case where the surface Q is a disk with k pieces of x-boundary (labeled as
           \(V_i\)) and k pieces of z-boundary (labeled as \(V_i^*\)), see <a href="#fig4">Fig. 4</a>. Obviously, \(\text{dim}H_1(Q, V,\mathbf{Z}_2)=k-1\),
           hence k−1 qubits can be encoded. A particular encoding can be specified if we select a basis of
           \(H_1(Q, V,\mathbf{Z}_2)\) and the dual basis of \(H^1(Q, V,\mathbf{Z}_2)\). For example, we can choose the operators
		   $$Y_{i}^{z}=Y\left(\left[c_{i}\right], 0\right), Y_{i}^{x}=Y\left(0,\left[c_{i}^{*}\right]\right), i=1 \ldots k-1\tag{5}$$
           to represent the action of \(\sigma_i^z\) and \(\sigma_i^x\) on the logical qubits. (Here \(c_i\) is a path which 
		   connects \(V_i\) with \(V_{i+1}\), whereas \(c^*_i\) connects \(V_i^*\) with \(V_k^*\)).</p>
	  </div>
	  <div class="col-center-block">  
        <embed src="planar_code/non-square-lattice.svg" width="300" height="300" id="fig4">
	  </div>
      <div class="col-12">
        <figcaption class="figure-caption text-left"><strong>Figure 4:</strong> A lattice with 4+4 pieces of boundary. 
		    Solid and dashed lines represent the relative cycles \(c_i\) and \(c^*_i\) which correspond to the logical 
			operators \(Y^z_i\) and \(Y^x_i\), respectively.</figcaption>
	    <br />
	  </div>
      <div class="col-12">
        <p>Finally, we try to explain the physical meaning of the two types of boundary in terms of
           the topological quantum order (TQO, nontrivial topological properties of the ground state, nothing
           more specific) and anyonic excitations in the bulk system. (Now we replace a code by a Hamiltonian). 
		   Why only two types of boundary conditions? Can one invent a combination of them? The answer is “No”, 
		   provided the boundary is rigid, i.e. does not carry gapless excitations. Here is the idea.</p>
		<p>The TQO in the bulk system is characterized by braiding and fusion properties of anyons.
           There are four sectors (i.e. fundamental particle types): the vacuum sector (no particle), an
           “electric charge” (which lives on vertices), a “magnetic charge” (which lives on the faces), and
           a combination of both. These sectors are stable with respect to weak generic perturbations
           of the Hamiltonian. The stability can be explained by the the nontrivial braiding properties
           of anyons. Indeed, an “electric” or “magnetic” charge can not simply disappear because that
           would change the Berry phase of another particle moving around the charge at large distance.
           (Note that that there is no non-topological long-range interaction between the particles because
           all excitations in the system have energy gap). However, an “electric charge” can disappear at
           the x-boundary, and a “magnetic charge” can disappear at the z-boundary. So, the bulk TQO
           is unstable near the boundary. The two types of rigid boundary are just two possible ways to
           resolve this instability. That is, there are two types of stable boundary TQO consistent with
           the bulk TQO. One can prove that these two types are the only possible ones. In particular,
           the combination of an “electric charge” and a “magnetic charge” can not disappear at a rigid
           boundary because this particle is a fermion. Note that a single “electric” or “magnetic” charge
           is a boson (with respect to itself).</p>
		<h3>External links</h3>
		<ul>
		  <li>This article is revised from S. B. Bravyi & A. Yu. Kitaev's article
		      <a href="https://arxiv.org/pdf/quant-ph/9811052.pdf">"Quantum codes on a lattice with boundary"</a>.
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