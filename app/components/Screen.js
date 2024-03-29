import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";

import { theme } from "../config/themes";

function Screen({ children, style }) {
	return (
		<SafeAreaView
			style={[
				styles.screen,
				style,
				// { backgroundColor: theme.backgroundPrimary },
			]}
		>
			<View style={[styles.view, style]}>{children}</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		paddingTop: Constants.statusBarHeight,
		flex: 1,
		backgroundColor: theme.backgroundPrimary,
	},
	view: {
		flex: 1,
	},
});

export default Screen;
