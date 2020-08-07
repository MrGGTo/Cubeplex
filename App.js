import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import TimerScreen from "./app/screens/TimerScreen";
import Scramble from "./app/components/Scramble";
import Timer from "./app/components/Timer";
import PllAlgorithmScreen from "./app/screens/PllAlgorithmScreen";
import AlogorithmDetailsScreen from "./app/screens/AlogorithmDetailsScreen";
import AlogorithmDetailsList from "./app/components/AlgorithmDetailsList";
import SettingScreen from "./app/screens/SettingScreen";
import OllAlgorithmScreen from "./app/screens/OllAlgorithmScreen";
import Screen from "./app/components/Screen";
import SettingsItem from "./app/components/SettingsItem";
import ThemeScreen from "./app/screens/ThemeScreen";
import ThemeItem from "./app/components/ThemeItem";
import AlgorithmDetailsList from "./app/components/AlgorithmDetailsList";

export default function App() {
	return <SettingScreen />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
