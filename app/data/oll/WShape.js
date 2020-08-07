export default [
	{
		id: 1,
		name: "W Shape: 1",
		algorithmId: 1,
		image: require("../../assets/oll/W_shape/36.png"),
		algs: [
			{
				id: 1,
				algorithm: "y2 L' U' L U' L' U L U L F' L' F",
			},
			{
				id: 2,
				algorithm: "R' U' R U' R' U R U l U' R' U x",
			},
			{
				id: 3,
				algorithm: "y2 R U R' F' R U R' U' R' F R U' R' F R F'",
			},
			{
				id: 4,
				algorithm: "R' U' R U' R' U R U R y R' F' R",
			},
		],
	},
	{
		id: 2,
		name: "W Shape: 2",
		algorithmId: 1,
		image: require("../../assets/oll/W_shape/38.png"),
		algs: [
			{
				id: 1,
				algorithm: "R U R' U R U' R' U' R' F R F'",
			},
			{
				id: 2,
				algorithm: "R' U2 r' D' r U2 r' D R r",
			},
			{
				id: 3,
				algorithm: "r U R' U R U' R' U' r' F R F'",
			},
			{
				id: 4,
				algorithm: "L' U' L F L' U' L U L F' L' U L F' L' F",
			},
		],
	},
];
