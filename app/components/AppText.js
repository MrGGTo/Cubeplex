import React from "react";
import { Text } from "react-native";

import { selectedTheme } from "../config/themes";

function AppText({ children, style, secondary }) {
	return (
		<Text
			style={[
				{
					color: secondary
						? selectedTheme.fontSecondary
						: selectedTheme.fontPrimary,
				},
				style,
			]}
		>
			{children}
		</Text>
	);
}

export default AppText;
