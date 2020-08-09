import { DefaultTheme } from "@react-navigation/native";
import { selectedTheme } from "../config/themes";

export default {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: selectedTheme.color,
		background: selectedTheme.backgroundPrimary,
	},
};
