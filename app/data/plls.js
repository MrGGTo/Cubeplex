export default [
	{
		id: 1,
		name: "Z Permutation",
		algorithm: 1,
		algorithmId: 1,
		image: require("../assets/pll/Z.png"),
		algs: [
			{
				id: 1,
				algorithm: "M2 U M2 U M' U2 M2 U2 M'",
			},
			{
				id: 2,
				algorithm: "y M2 U' M2 U' M' U2 M2 U2 M'",
			},
			{
				id: 3,
				algorithm: "M' U' M2 U' M2 U' M' U2 M2",
			},
			{
				id: 4,
				algorithm: "y R' U' R U' R U R U' R' U R U R2 U' R'",
			},
		],
	},
	{
		id: 2,
		name: "H Permutation",
		algorithm: "M2' U M2' U2 M2' U M2'",
		image: require("../assets/pll/H.png"),
		algs: [
			{
				id: 1,
				algorithm: "M2 U M2 U2 M2 U M2",
			},
			{
				id: 2,
				algorithm: "M2 U' M2 U2 M2 U' M2",
			},
			{
				id: 3,
				algorithm: "R2 U2 R U2 R2 U2 R2 U2 R U2 R2",
			},
			{
				id: 4,
				algorithm: "M2 U' M2 U2 M2 U' M2",
			},
		],
	},
	{
		id: 3,
		name: "U Permutation : a",
		algorithm: "R2 U' R' U' R U R U R U' R",
		image: require("../assets/pll/Ua.png"),
		algs: [
			{
				id: 1,
				algorithm: "y2 R U' R U R U R U' R' U' R2",
			},
			{
				id: 2,
				algorithm: "R2 U' R' U' R U R U R U' R",
			},
			{
				id: 3,
				algorithm: "y2 M2 U M U2 M' U M2",
			},
			{
				id: 4,
				algorithm: "M2 U M' U2 M U M2",
			},
		],
	},
	{
		id: 4,
		name: "U Permutation : b",
		algorithm: "R' U R' U' R' U' R' U R U R2",
		image: require("../assets/pll/Ub.png"),
		algs: [
			{
				id: 1,
				algorithm: "y2 R2 U R U R' U' R' U' R' U R'",
			},
			{
				id: 2,
				algorithm: "R' U R' U' R' U' R' U R U R2",
			},
			{
				id: 3,
				algorithm: "y2 M2 U' M U2 M' U' M2",
			},
			{
				id: 4,
				algorithm: "M2 U' M' U2 M U' M2",
			},
		],
	},
	{
		id: 5,
		name: "A Permutation : a",
		algorithm: "R' F R' B2 R F' R' B2 R2",
		image: require("../assets/pll/Aa.png"),
		algs: [
			{
				id: 1,
				algorithm: "l' U R' D2 R U' R' D2 R2",
			},
			{
				id: 2,
				algorithm: "x R' U R' D2 R U' R' D2 R2",
			},
			{
				id: 3,
				algorithm: "R' F R' B2 R F' R' B2 R2",
			},
			{
				id: 4,
				algorithm: "y x' R2 D2 R' U' R D2 R' U R' x",
			},
		],
	},
	{
		id: 6,
		name: "A Permutation : b",
		algorithm: "R B' R F2 R' B R F2 R2",
		image: require("../assets/pll/Ab.png"),
		algs: [
			{
				id: 1,
				algorithm: "l' R' D2 R U R' D2 R U' R x'",
			},
			{
				id: 2,
				algorithm: "x R2 D2 R U R' D2 R U' R x'",
			},
			{
				id: 3,
				algorithm: "y x' R U' R D2 R' U R D2 R2 x",
			},
			{
				id: 4,
				algorithm: "y' x L U' L D2 L' U L D2 L2",
			},
		],
	},
	{
		id: 7,
		name: "E Permutation",
		algorithm: "(y x') (R U' R' D) (R U R' D') (R U R' D) (R U' R' D') (x)",
		image: require("../assets/pll/E.png"),
		algs: [
			{
				id: 1,
				algorithm: "y x' R U' R' D R U R' D' R U R' D R U' R' D' x",
			},
			{
				id: 2,
				algorithm: "R2 U R' U' y R U R' U' R U R' U' R U R' y' R U' R2",
			},
			{
				id: 3,
				algorithm:
					"z U2 R2 F R U R' U' R U R' U' R U R' U' F' R2 U2 z'",
			},
			{
				id: 4,
				algorithm: "R2 U R2 U D R2 U' R2 U R2 U' D' R2 U R2 U2 R2",
			},
		],
	},
	{
		id: 8,
		name: "F Permutation",
		algorithm: "(y) R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
		image: require("../assets/pll/F.png"),
		algs: [
			{
				id: 1,
				algorithm: "y R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
			},
			{
				id: 2,
				algorithm: "y2 R' U2 R' d' R' F' R2 U' R' U R' F R U' F",
			},
			{
				id: 3,
				algorithm: "R' U R U' R2 F' U' F U R F R' F' R2",
			},
			{
				id: 4,
				algorithm: "M' U2 L F' R U2 r' U r' R2 U2 R2",
			},
		],
	},
	{
		id: 9,
		name: "G Permutation : a",
		algorithm: "(y) R2 U (R' U R' U') R U' R2 (D U' R' U) R D'",
		image: require("../assets/pll/Ga.png"),
		algs: [
			{
				id: 1,
				algorithm: "R2 u R' U R' U' R u' R2 y' R' U R",
			},
			{
				id: 2,
				algorithm: "R2 U R' U R' U' R U' R2 D U' R' U R D'",
			},
			{
				id: 3,
				algorithm: "R2 u R' U R' U' R u' R2 F' U F",
			},
			{
				id: 4,
				algorithm: "D' R2 U R' U R' U' R U' R2 U' D R' U R",
			},
		],
	},
	{
		id: 10,
		name: "G Permutation : b",
		algorithm: "R' U' R U D' R2 U R' U R U' R U' R2 D",
		image: require("../assets/pll/Gb.png"),
		algs: [
			{
				id: 1,
				algorithm: "R' U' R y R2 u R' U R U' R u' R2",
			},
			{
				id: 2,
				algorithm: "R' U' R U D' R2 U R' U R U' R U' R2 D",
			},
			{
				id: 3,
				algorithm: "y F' U' F R2 u R' U R U' R u' R2",
			},
			{
				id: 4,
				algorithm: "R' d' F R2 u R' U R U' R u' R2",
			},
		],
	},
	{
		id: 11,
		name: "G Permutation : c",
		algorithm: "(y) R2 U' R U' R U R' U R2 D' U R U' R' D",
		image: require("../assets/pll/Gc.png"),
		algs: [
			{
				id: 1,
				algorithm: "R2 u' R U' R U R' u R2 y R U' R'",
			},
			{
				id: 2,
				algorithm: "y2 R2 F2 R U2 R U2 R' F R U R' U' R' F R2",
			},
			{
				id: 3,
				algorithm: "R2 U' R U' R U R' U R2 D' U R U' R' D",
			},
			{
				id: 4,
				algorithm: "R2 u' R U' R U R' u R2 f R' f'",
			},
		],
	},
	{
		id: 12,
		name: "G Permutation : d",
		algorithm: "(y2) R U R' U' D R2 U' R U' R' U R' U R2 D'",
		image: require("../assets/pll/Gd.png"),
		algs: [
			{
				id: 1,
				algorithm: "R U R' y' R2 u' R U' R' U R' u R2",
			},
			{
				id: 2,
				algorithm: "R U R' U' D R2 U' R U' R' U R' U R2 D'",
			},
			{
				id: 3,
				algorithm: "D' R U R' U' D R2 U' R U' R' U R' U R2",
			},
			{
				id: 4,
				algorithm: "f R f' R2 u' R U' R' U R' u R2",
			},
		],
	},
	{
		id: 13,
		name: "J Permutation : a",
		algorithm: "(y2) L U' R' U L' U2 R U' R' U2 R",
		image: require("../assets/pll/Ja.png"),
		algs: [
			{
				id: 1,
				algorithm: "y R' U L' U2 R U' R' U2 R L",
			},
			{
				id: 2,
				algorithm: "L' U' L F L' U' L U L F' L2 U L",
			},
			{
				id: 3,
				algorithm: "y2 x R2 F R F' R U2 r' U r U2 x'",
			},
			{
				id: 4,
				algorithm: "y2 R' U2 R U R' U2 L U' R U L'",
			},
		],
	},
	{
		id: 14,
		name: "J Permutation : b",
		algorithm: "(y2) R' U L U' R U2' L' U L U2 L'",
		image: require("../assets/pll/Jb.png"),
		algs: [
			{
				id: 1,
				algorithm: "R U R' F' R U R' U' R' F R2 U' R'",
			},
			{
				id: 2,
				algorithm: "R U2 R' U' R U2 L' U R' U' r x",
			},
			{
				id: 3,
				algorithm: "R U2 R' U' R U2 L' U R' U' L",
			},
			{
				id: 4,
				algorithm: "L' U R U' L U2 R' U R U2 R'",
			},
		],
	},
	{
		id: 15,
		name: "N Permutation : a",
		algorithm: "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
		image: require("../assets/pll/Na.png"),
		algs: [
			{
				id: 1,
				algorithm:
					"R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
			},
			{
				id: 2,
				algorithm: "L U' R U2 L' U R' L U' R U2 L' U R'",
			},
			{
				id: 3,
				algorithm: "z U R' D R2 U' R D' U R' D R2 U' R D' z'",
			},
			{
				id: 4,
				algorithm: "r' D r U2 r' D r U2 r' D r U2 r' D r U2 r' D r",
			},
		],
	},
	{
		id: 16,
		name: "N Permutation : b",
		algorithm: "(R' U L' U2 R U' L)2 U",
		image: require("../assets/pll/Nb.png"),
		algs: [
			{
				id: 1,
				algorithm: "R' U R U' R' F' U' F R U R' F R' F' R U' R",
			},
			{
				id: 2,
				algorithm: "R' U L' U2 R U' L R' U L' U2 R U' L",
			},
			{
				id: 3,
				algorithm: "z D' R U' R2 D R' U D' R U' R2 D R' U z'",
			},
			{
				id: 4,
				algorithm: "z U' R D' R2 U R' D U' R D' R2 U R' D z'",
			},
		],
	},
	{
		id: 17,
		name: "R Permutation : a",
		algorithm: "R U2 R' U2 R B' R' U' R U R B R2 U",
		image: require("../assets/pll/Ra.png"),
		algs: [
			{
				id: 1,
				algorithm: "y R U R' F' R U2 R' U2 R' F R U R U2 R'",
			},
			{
				id: 2,
				algorithm: "L U2 L' U2 L F' L' U' L U L F L2",
			},
			{
				id: 3,
				algorithm: "y R U' R' U' R U R D R' U' R D' R' U2 R'",
			},
			{
				id: 4,
				algorithm: "y2 R U2 R' U2 R B' R' U' R U R B R2",
			},
		],
	},
	{
		id: 18,
		name: "R Permutation : b",
		algorithm: "R' U2 R U2 R' F R U R' U' R' F' R2",
		image: require("../assets/pll/Rb.png"),
		algs: [
			{
				id: 1,
				algorithm: "R' U2 R U2 R' F R U R' U' R' F' R2",
			},
			{
				id: 2,
				algorithm: "R' U2 R' D' R U' R' D R U R U' R' U' R",
			},
			{
				id: 3,
				algorithm: "y R2 F R U R U' R' F' R U2 R' U2 R",
			},
			{
				id: 4,
				algorithm:
					"y' R U2 R' U2 R' F R2 U' R' U' R U R' F' R U R' U R U2 R'",
			},
		],
	},
	{
		id: 19,
		name: "T Permutation",
		algorithm: "R U R' U' R' F R2 U' R' U' R U R' F'",
		image: require("../assets/pll/T.png"),
		algs: [
			{
				id: 1,
				algorithm: "R U R' U' R' F R2 U' R' U' R U R' F'",
			},
			{
				id: 2,
				algorithm: "R U R' U' R' F R2 U' R' U F' L' U L",
			},
			{
				id: 3,
				algorithm: "R2 U R2 U' R2 U' D R2 U' R2 U R2 D'",
			},
			{
				id: 4,
				algorithm: "y2 L' U' L U L F' L2 U L U L' U' L F",
			},
		],
	},
	{
		id: 20,
		name: "V Permutation",
		algorithm: "R' U R' U' B' R' B2 U' B' U B' R B R	",
		image: require("../assets/pll/V.png"),
		algs: [
			{
				id: 1,
				algorithm: "R' U R' d' R' F' R2 U' R' U R' F R F",
			},
			{
				id: 2,
				algorithm: "R' U R' U' y R' F' R2 U' R' U R' F R F",
			},
			{
				id: 3,
				algorithm: "z D' R2 D R2 U R' D' R U' R U R' D R U'",
			},
			{
				id: 4,
				algorithm: "R U2 R' D R U' R U' R U R2 D R' U' R D2",
			},
		],
	},
	{
		id: 21,
		name: "Y Permutation",
		algorithm: "R' U' R U' L R U2 R' U' R U2 L' U R2 U R",
		image: require("../assets/pll/Y.png"),
		algs: [
			{
				id: 1,
				algorithm: "F R U' R' U' R U R' F' R U R' U' R' F R F'",
			},
			{
				id: 2,
				algorithm: "F R' F R2 U' R' U' R U R' F' R U R' U' F'",
			},
			{
				id: 3,
				algorithm: "R2 U' R2 U' R2 U R' F' R U R2 U' R' F R",
			},
			{
				id: 4,
				algorithm: "F R U' R' U' R U y' R U R' B' R U' R2",
			},
		],
	},
];
