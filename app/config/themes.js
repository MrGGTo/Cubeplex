// import React from "react";
import { AsyncStorage } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../redux/themeActions";

export const lightThemes = [
	{
		globalId: 1,
		id: 1,
		name: "Dodger Blue",
		color: "#53A2FF",
		backgroundPrimary: "#ffffff",
		backgroundSecondary: "#f0f0f0",
		fontPrimary: "#0f0f0f",
		fontSecondary: "#585858",
	},
	{
		globalId: 2,
		id: 2,
		name: "Pink",
		color: "#FD93FF",
		backgroundPrimary: "#ffffff",
		backgroundSecondary: "#f0f0f0",
		fontPrimary: "#0f0f0f",
		fontSecondary: "#585858",
	},
	{
		globalId: 3,
		id: 3,
		name: "Green",
		color: "#68FF92",
		backgroundPrimary: "#ffffff",
		backgroundSecondary: "#f0f0f0",
		fontPrimary: "#0f0f0f",
		fontSecondary: "#585858",
	},
	{
		globalId: 4,
		id: 4,
		name: "Purple",
		color: "#CDA1CE",
		backgroundPrimary: "#ffffff",
		backgroundSecondary: "#f0f0f0",
		fontPrimary: "#0f0f0f",
		fontSecondary: "#585858",
	},
];

export const darkThemes = [
	{
		globalId: 5,
		id: 1,
		name: "Dodger Blue",
		color: "#53A2FF",
		backgroundPrimary: "#202020",
		backgroundSecondary: "#303030",
		fontPrimary: "#e8e8e8",
		fontSecondary: "#aaaaaa",
	},
	{
		globalId: 6,
		id: 2,
		name: "Pink",
		color: "#FD93FF",
		backgroundPrimary: "#202020",
		backgroundSecondary: "#303030",
		fontPrimary: "#e8e8e8",
		fontSecondary: "#aaaaaa",
	},
	{
		globalId: 7,
		id: 3,
		name: "Green",
		color: "#68FF92",
		backgroundPrimary: "#202020",
		backgroundSecondary: "#303030",
		fontPrimary: "#e8e8e8",
		fontSecondary: "#aaaaaa",
	},
	{
		globalId: 8,
		id: 4,
		name: "Purple",
		color: "#CDA1CE",
		backgroundPrimary: "#202020",
		backgroundSecondary: "#303030",
		fontPrimary: "#e8e8e8",
		fontSecondary: "#aaaaaa",
	},
];

export const themesData = [
	{
		id: 1,
		name: "Dodger Blue",
		color: "#53A2FF",
		backgroundPrimary: "#ffffff",
		backgroundSecondary: "#f0f0f0",
		fontPrimary: "#0f0f0f",
		fontSecondary: "#585858",
		statusBarStyle: "dark-content",
	},
	{
		id: 2,
		name: "Pink",
		color: "#FD93FF",
		backgroundPrimary: "#ffffff",
		backgroundSecondary: "#f0f0f0",
		fontPrimary: "#0f0f0f",
		fontSecondary: "#585858",
		statusBarStyle: "dark-content",
	},
	{
		id: 3,
		name: "Green",
		color: "#68FF92",
		backgroundPrimary: "#ffffff",
		backgroundSecondary: "#f0f0f0",
		fontPrimary: "#0f0f0f",
		fontSecondary: "#585858",
		statusBarStyle: "dark-content",
	},
	{
		id: 4,
		name: "Purple",
		color: "#CDA1CE",
		backgroundPrimary: "#ffffff",
		backgroundSecondary: "#f0f0f0",
		fontPrimary: "#0f0f0f",
		fontSecondary: "#585858",
		statusBarStyle: "dark-content",
	},
	{
		id: 5,
		name: "Dodger Blue",
		color: "#53A2FF",
		backgroundPrimary: "#202020",
		backgroundSecondary: "#303030",
		fontPrimary: "#e8e8e8",
		fontSecondary: "#aaaaaa",
		statusBarStyle: "light-content",
	},
	{
		id: 6,
		name: "Pink",
		color: "#FD93FF",
		backgroundPrimary: "#202020",
		backgroundSecondary: "#303030",
		fontPrimary: "#e8e8e8",
		fontSecondary: "#aaaaaa",
		statusBarStyle: "light-content",
	},
	{
		id: 7,
		name: "Green",
		color: "#68FF92",
		backgroundPrimary: "#202020",
		backgroundSecondary: "#303030",
		fontPrimary: "#e8e8e8",
		fontSecondary: "#aaaaaa",
		statusBarStyle: "light-content",
	},
	{
		id: 8,
		name: "Purple",
		color: "#CDA1CE",
		backgroundPrimary: "#202020",
		backgroundSecondary: "#303030",
		fontPrimary: "#e8e8e8",
		fontSecondary: "#aaaaaa",
		statusBarStyle: "light-content",
	},
	{
		id: 9,
		name: "Wing Wing",
		color: "#7e57c2",
		backgroundPrimary: "#292d3e",
		backgroundSecondary: "#292d3e",
		fontPrimary: "#e8e8e8",
		fontSecondary: "#aaaaaa",
		statusBarStyle: "light-content",
	},
];

export const getSelectedTheme = () => {
	const theme = useSelector((state) => state.themeReducer.theme);
	// theme = themesData.find((theme) => theme.id === loadTheme());
	return theme;
};

// Save themeID to AsyncStorage
export const saveTheme = (num) => {
	let themeID = num.toString();
	AsyncStorage.setItem("ThemeID", themeID);
};

// Load themeID from AsyncStorage
export const loadTheme = async () => {
	try {
		let themeID = await AsyncStorage.getItem("ThemeID");
		if (themeID !== null) {
			const dispatch = useDispatch();
			dispatch(
				switchTheme(themesData.find((theme) => theme.id === themeID))
			);
		}
	} catch (error) {
		console.log(error);
	}
};

export const setTheme = () => {};

export const selectedTheme = themesData.find((theme) => theme.id === 1);
export const selectedThemeAlter = themesData.find((theme) => theme.id === 8);
