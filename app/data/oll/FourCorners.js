export default [
	{
		id: 1,
		name: "4 Corners Case: 1",
		algorithmId: 1,
		image: require("../../assets/oll/4_corners/20.png"),
		algs: [
			{
				id: 1,
				algorithm: "M U R U R' U' M2 U R U' r'",
			},
			{
				id: 2,
				algorithm: "r U R' U' M2 U R U' R' U' M'",
			},
			{
				id: 3,
				algorithm: "M' U M' U M' U M' U' M' U M' U M' U M'",
			},
			{
				id: 4,
				algorithm: "r' R U R U R' U' r2 R2 U R U' r'",
			},
		],
	},
	{
		id: 2,
		name: "4 Corners Case: 2",
		algorithmId: 1,
		image: require("../../assets/oll/4_corners/28.png"),
		algs: [
			{
				id: 1,
				algorithm: "r U R' U' M U R U' R'",
			},
			{
				id: 2,
				algorithm: "y2 M' U M U2 M' U M",
			},
			{
				id: 3,
				algorithm: "y' M' U' M U2 M' U' M",
			},
			{
				id: 4,
				algorithm: "M U M' U2 M U M'",
			},
		],
	},
	{
		id: 3,
		name: "4 Corners Case: 3",
		algorithmId: 1,
		image: require("../../assets/oll/4_corners/57.png"),
		algs: [
			{
				id: 1,
				algorithm: "R U R' U' M' U R U' r'",
			},
			{
				id: 2,
				algorithm: "M' U M' U M' U2 M U M U M",
			},
			{
				id: 3,
				algorithm: "R U R' U' r R' U R U' r'",
			},
			{
				id: 4,
				algorithm: "M' U M' U M' U M' U2 M' U M' U M' U M'",
			},
		],
	},
];
