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
		color: "#CDA1CE",
		backgroundPrimary: "#202020",
		backgroundSecondary: "#303030",
		fontPrimary: "#e8e8e8",
		fontSecondary: "#aaaaaa",
		statusBarStyle: "light-content",
	},
];

export function getSelectedTheme() {
	const theme = useSelector((state) => state.themeReducer.theme);
	return theme;
}

const loadTheme = async () => {
	try {
		let id = await AsyncStorage.getItem("ThemeID");
		if (id !== null) {
			console.log("Good");
			return parseInt(id);
		}
	} catch (error) {
		console.log("Bad");
		alert(error);
	}
};

const themeid = loadTheme();

export const selectedTheme = themesData.find((theme) => theme.id === themeid);
export const selectedThemeAlter = themesData.find((theme) => theme.id === 8);
