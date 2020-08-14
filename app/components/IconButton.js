import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { theme } from "../config/themes";

function IconButton({ name, style, size = 35, onPress }) {
	return (
		<TouchableOpacity style={[styles.container, style]} onPress={onPress}>
			<MaterialCommunityIcons
				name={name}
				size={size}
				color={theme.fontPrimary}
			/>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 5,
	},
});

export default IconButton;
