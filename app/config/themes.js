// import React from "react";
// import { AsyncStorage } from "react-native";
// import { useSelector, useDispatch } from "react-redux";
// import { switchTheme } from "../redux/themeActions";

// export const themesData = [
// 	{
// 		id: 1,
// 		name: "Dodger Blue",
// 		color: "#53A2FF",
// 		backgroundPrimary: "#ffffff",
// 		backgroundSecondary: "#f0f0f0",
// 		fontPrimary: "#0f0f0f",
// 		fontSecondary: "#585858",
// 		statusBarStyle: "dark-content",
// 	},
// 	{
// 		id: 2,
// 		name: "Wing Wing",
// 		color: "#7e57c2",
// 		backgroundPrimary: "#292d3e",
// 		backgroundSecondary: "#292d3e",
// 		fontPrimary: "#e8e8e8",
// 		fontSecondary: "#aaaaaa",
// 		statusBarStyle: "light-content",
// 	},
// ];

export const theme = {
	id: 1,
	name: "Midnight Purple",
	color: "#7e57c2",
	backgroundPrimary: "#292d3e",
	backgroundSecondary: "#2e3345",
	fontPrimary: "#e8e8e8",
	fontSecondary: "#aaaaaa",
	statusBarStyle: "light-content",
};

// export const theme = {
//     id: 1,
//     name: "Dodger Blue",
//     color: "#53A2FF",
//     backgroundPrimary: "#ffffff",
//     backgroundSecondary: "#f0f0f0",
//     fontPrimary: "#0f0f0f",
//     fontSecondary: "#585858",
//     statusBarStyle: "dark-content",
// },

// export const getSelectedTheme = () => {
// 	const theme = useSelector((state) => state.themeReducer.theme);
// 	return theme;
// };

// // Save themeID to AsyncStorage
// export const saveTheme = (num) => {
// 	let themeID = num.toString();
// 	AsyncStorage.setItem("ThemeID", themeID);
// };

// // Load themeID from AsyncStorage
// export const loadTheme = async () => {
// 	try {
// 		let themeID = await AsyncStorage.getItem("ThemeID");
// 		if (themeID !== null) {
// 			const dispatch = useDispatch();
// 			dispatch(
// 				switchTheme(themesData.find((theme) => theme.id === themeID))
// 			);
// 		}
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// export const selectedTheme = themesData.find((theme) => theme.id === 1);
// export const selectedThemeAlter = themesData.find((theme) => theme.id === 8);
