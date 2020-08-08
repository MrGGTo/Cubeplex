// export const themesData = [
// 	{
// 		id: 1,
// 		name: "Light Theme",
// 		themes: [
// 			{
// 				id: 1,
// 				name: "Dodger Blue",
// 				color: "#53A2FF",
// 				backgroundPrimary: "#ffffff",
// 				backgroundSecondary: "#f0f0f0",
// 				fontPrimary: "#0f0f0f",
// 				fontSecondary: "#585858",
// 			},
// 			{
// 				id: 2,
// 				name: "Pink",
// 				color: "#FD93FF",
// 				backgroundPrimary: "#ffffff",
// 				backgroundSecondary: "#f0f0f0",
// 				fontPrimary: "#0f0f0f",
// 				fontSecondary: "#585858",
// 			},
// 			{
// 				id: 3,
// 				name: "Green",
// 				color: "#68FF92",
// 				backgroundPrimary: "#ffffff",
// 				backgroundSecondary: "#f0f0f0",
// 				fontPrimary: "#0f0f0f",
// 				fontSecondary: "#585858",
// 			},
// 			{
// 				id: 4,
// 				name: "Purple",
// 				color: "#CDA1CE",
// 				backgroundPrimary: "#ffffff",
// 				backgroundSecondary: "#f0f0f0",
// 				fontPrimary: "#0f0f0f",
// 				fontSecondary: "#585858",
// 			},
// 		],
// 	},
// 	{
// 		id: 2,
// 		name: "Dark Theme",
// 		themes: [
// 			{
// 				id: 1,
// 				name: "Dodger Blue",
// 				color: "#53A2FF",
// 				backgroundPrimary: "#202020",
// 				backgroundSecondary: "#303030",
// 				fontPrimary: "#e8e8e8",
// 				fontSecondary: "#aaaaaa",
// 			},
// 			{
// 				id: 2,
// 				name: "Pink",
// 				color: "#FD93FF",
// 				backgroundPrimary: "#202020",
// 				backgroundSecondary: "#303030",
// 				fontPrimary: "#e8e8e8",
// 				fontSecondary: "#aaaaaa",
// 			},
// 			{
// 				id: 3,
// 				name: "Green",
// 				color: "#68FF92",
// 				backgroundPrimary: "#202020",
// 				backgroundSecondary: "#303030",
// 				fontPrimary: "#e8e8e8",
// 				fontSecondary: "#aaaaaa",
// 			},
// 			{
// 				id: 4,
// 				name: "Purple",
// 				color: "#CDA1CE",
// 				backgroundPrimary: "#202020",
// 				backgroundSecondary: "#303030",
// 				fontPrimary: "#e8e8e8",
// 				fontSecondary: "#aaaaaa",
// 			},
// 		],
// 	},
// ];

export const themesData = [
	{
		id: 1,
		name: "Dodger Blue",
		color: "#53A2FF",
		backgroundPrimary: "#ffffff",
		backgroundSecondary: "#f0f0f0",
		fontPrimary: "#0f0f0f",
		fontSecondary: "#585858",
	},
	{
		id: 2,
		name: "Pink",
		color: "#FD93FF",
		backgroundPrimary: "#ffffff",
		backgroundSecondary: "#f0f0f0",
		fontPrimary: "#0f0f0f",
		fontSecondary: "#585858",
	},
	{
		id: 3,
		name: "Green",
		color: "#68FF92",
		backgroundPrimary: "#ffffff",
		backgroundSecondary: "#f0f0f0",
		fontPrimary: "#0f0f0f",
		fontSecondary: "#585858",
	},
	{
		id: 4,
		name: "Purple",
		color: "#CDA1CE",
		backgroundPrimary: "#ffffff",
		backgroundSecondary: "#f0f0f0",
		fontPrimary: "#0f0f0f",
		fontSecondary: "#585858",
	},
	{
		id: 5,
		name: "Dodger Blue",
		color: "#53A2FF",
		backgroundPrimary: "#202020",
		backgroundSecondary: "#303030",
		fontPrimary: "#e8e8e8",
		fontSecondary: "#aaaaaa",
	},
	{
		id: 6,
		name: "Pink",
		color: "#FD93FF",
		backgroundPrimary: "#202020",
		backgroundSecondary: "#303030",
		fontPrimary: "#e8e8e8",
		fontSecondary: "#aaaaaa",
	},
	{
		id: 7,
		name: "Green",
		color: "#68FF92",
		backgroundPrimary: "#202020",
		backgroundSecondary: "#303030",
		fontPrimary: "#e8e8e8",
		fontSecondary: "#aaaaaa",
	},
	{
		id: 8,
		name: "Purple",
		color: "#CDA1CE",
		backgroundPrimary: "#202020",
		backgroundSecondary: "#303030",
		fontPrimary: "#e8e8e8",
		fontSecondary: "#aaaaaa",
	},
];

const themeid = 1;
const colorid = 1;

// export const theme = themesData
// 	.find((theme) => theme.id === themeid)
// 	.find((color) => color.id === colorid);

export const selectedTheme = themesData.find((theme) => theme.id === themeid);

// export const selectedTheme = {
// 	id: 3,
// 	name: "Green",
// 	color: "#1EC843",
// 	backgroundPrimary: "#ffffff",
// 	backgroundSecondary: "#f0f0f0",
// 	fontPrimary: "#0f0f0f",
// 	fontSecondary: "#585858",
// };
