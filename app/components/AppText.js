import React from "react";
import { Text } from "react-native";

import { theme } from "../config/themes";

function AppText({ children, style, secondary }) {
	return (
		<Text
			style={[
				{
					color: secondary ? theme.fontSecondary : theme.fontPrimary,
					fontSize: 15,
				},
				style,
			]}
		>
			{children}
		</Text>
	);
}

export default AppText;
