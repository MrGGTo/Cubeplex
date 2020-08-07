export default [
	{
		id: 1,
		name: "T Shape: 1",
		algorithmId: 1,
		image: require("../../assets/oll/T_shape/33.png"),
		algs: [
			{
				id: 1,
				algorithm: "R U R' U' R' F R F'",
			},
			{
				id: 2,
				algorithm: "F R U' R' U R U R' F'",
			},
			{
				id: 3,
				algorithm: "y2 L' U' L U L F' L' F",
			},
			{
				id: 4,
				algorithm: "y' r' U' r' D' r U r' D r2",
			},
		],
	},
	{
		id: 2,
		name: "T Shape: 2",
		algorithmId: 1,
		image: require("../../assets/oll/T_shape/45.png"),
		algs: [
			{
				id: 1,
				algorithm: "F R U R' U' F'",
			},
			{
				id: 2,
				algorithm: "y2 f U R U' R' f'",
			},
			{
				id: 3,
				algorithm: "y2 F' L' U' L U F",
			},
			{
				id: 4,
				algorithm: "y R' F' U' F U R",
			},
		],
	},
];
