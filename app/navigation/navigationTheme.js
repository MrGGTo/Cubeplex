import { DefaultTheme } from "@react-navigation/native";
import { theme } from "../config/themes";

export default {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: theme.color,
		background: theme.backgroundPrimary,
	},
};
