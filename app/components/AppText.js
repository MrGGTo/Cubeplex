import React from "react";
import { Text } from "react-native";

import { selectedTheme, getSelectedTheme } from "../config/themes";

function AppText({ children, style, secondary }) {
	const theme = getSelectedTheme();
	return (
		<Text
			style={[
				{
					color: secondary ? theme.fontSecondary : theme.fontPrimary,
				},
				style,
			]}
		>
			{children}
		</Text>
	);
}

export default AppText;
