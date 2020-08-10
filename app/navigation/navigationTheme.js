import { DefaultTheme } from "@react-navigation/native";
import { selectedTheme, getSelectedTheme } from "../config/themes";

export default {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: getSelectedTheme.color,
		background: getSelectedTheme.backgroundPrimary,
	},
};
