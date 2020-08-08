import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import SettingsNavigator from "./app/navigation/SettingsNavigator";
import SettingScreen from "./app/screens/SettingScreen";

export default function App() {
	return (
		<NavigationContainer>
			<SettingsNavigator />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
