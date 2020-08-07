export default [
	{
		id: 1,
		name: "Z Permutation",
		algorithm: 1,
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
			{
				id: 5,
				algorithm: "R' U' R2 U R U R' U' R U R U' R U' R'",
			},
			{
				id: 6,
				algorithm: "y M' U M2 U M2 U M' U2 M2",
			},
		],
	},
	{
		id: 2,
		name: "H Permutation",
		algorithm: "M2' U M2' U2 M2' U M2'",
		image: require("../assets/pll/H.png"),
	},
	{
		id: 3,
		name: "U Permutation : a",
		algorithm: "R2 U' R' U' R U R U R U' R",
		image: require("../assets/pll/Ua.png"),
	},
	{
		id: 4,
		name: "U Permutation : b",
		algorithm: "R' U R' U' R' U' R' U R U R2",
		image: require("../assets/pll/Ub.png"),
	},
	{
		id: 5,
		name: "A Permutation : a",
		algorithm: "R' F R' B2 R F' R' B2 R2",
		image: require("../assets/pll/Aa.png"),
	},
	{
		id: 6,
		name: "A Permutation : b",
		algorithm: "R B' R F2 R' B R F2 R2",
		image: require("../assets/pll/Ab.png"),
	},
	{
		id: 7,
		name: "E Permutation",
		algorithm: "(y x') (R U' R' D) (R U R' D') (R U R' D) (R U' R' D') (x)",
		image: require("../assets/pll/E.png"),
	},
	{
		id: 8,
		name: "F Permutation",
		algorithm: "(y) R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
		image: require("../assets/pll/F.png"),
	},
	{
		id: 9,
		name: "G Permutation : a",
		algorithm: "(y) R2 U (R' U R' U') R U' R2 (D U' R' U) R D'",
		image: require("../assets/pll/Ga.png"),
	},
	{
		id: 10,
		name: "G Permutation : b",
		algorithm: "R' U' R U D' R2 U R' U R U' R U' R2 D",
		image: require("../assets/pll/Gb.png"),
	},
	{
		id: 11,
		name: "G Permutation : c",
		algorithm: "(y) R2 U' R U' R U R' U R2 D' U R U' R' D",
		image: require("../assets/pll/Gc.png"),
	},
	{
		id: 12,
		name: "G Permutation : d",
		algorithm: "(y2) R U R' U' D R2 U' R U' R' U R' U R2 D'",
		image: require("../assets/pll/Gd.png"),
	},
	{
		id: 13,
		name: "J Permutation : a",
		algorithm: "(y2) L U' R' U L' U2 R U' R' U2 R",
		image: require("../assets/pll/Ja.png"),
	},
	{
		id: 14,
		name: "J Permutation : b",
		algorithm: "(y2) R' U L U' R U2' L' U L U2 L'",
		image: require("../assets/pll/Jb.png"),
	},
	{
		id: 15,
		name: "N Permutation : a",
		algorithm: "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
		image: require("../assets/pll/Na.png"),
	},
	{
		id: 16,
		name: "N Permutation : b",
		algorithm: "(R' U L' U2 R U' L)2 U",
		image: require("../assets/pll/Nb.png"),
	},
	{
		id: 17,
		name: "R Permutation : a",
		algorithm: "R U2 R' U2 R B' R' U' R U R B R2 U",
		image: require("../assets/pll/Ra.png"),
	},
	{
		id: 18,
		name: "R Permutation : b",
		algorithm: "R' U2 R U2 R' F R U R' U' R' F' R2",
		image: require("../assets/pll/Rb.png"),
	},
	{
		id: 19,
		name: "T Permutation",
		algorithm: "R U R' U' R' F R2 U' R' U' R U R' F'",
		image: require("../assets/pll/T.png"),
	},
	{
		id: 20,
		name: "V Permutation",
		algorithm: "R' U R' U' B' R' B2 U' B' U B' R B R	",
		image: require("../assets/pll/V.png"),
	},
	{
		id: 21,
		name: "Y Permutation",
		algorithm: "R' U' R U' L R U2 R' U' R U2 L' U R2 U R",
		image: require("../assets/pll/Y.png"),
	},
];
