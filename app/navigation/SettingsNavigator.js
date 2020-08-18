import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingScreen from "../screens/SettingScreen";
import ThemeScreen from "../screens/ThemeScreen";
import { theme } from "../config/themes";
import { Button } from "react-native";
import router from "./router";
import ManageRecordsScreen from "../screens/ManageRecordsScreen";
import StarredRecordScreen from "../screens/StarredRecordScreen";
import TimerSettings from "../components/TimerSettings";

const Stack = createStackNavigator();

const SettingsNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={router.SETTINGS}
				component={SettingScreen}
				options={{
					headerShown: false,
					headerStyle: {
						backgroundColor: theme.backgroundPrimary,
					},
					headerTintColor: theme.fontPrimary,
				}}
			/>
			<Stack.Screen
				name={router.STARRED_RECORDS}
				component={StarredRecordScreen}
				options={{
					headerStyle: {
						backgroundColor: theme.backgroundSecondary,
					},
					headerTintColor: theme.fontPrimary,
					headerTitleStyle: {
						fontSize: 20,
						// fontWeight: "bold",
					},
					headerRight: () => (
						<Button
							onPress={() => alert("This is a button!")}
							title="Info"
							color={theme.color}
						/>
					),
				}}
			/>
			<Stack.Screen
				name={router.TIMER_SETTINGS}
				component={TimerSettings}
				options={{
					headerStyle: {
						backgroundColor: theme.backgroundSecondary,
					},
					headerTintColor: theme.fontPrimary,
					headerTitleStyle: {
						fontSize: 20,
						// fontWeight: "bold",
					},
					headerRight: () => (
						<Button
							onPress={() => alert("This is a button!")}
							title="Info"
							color={theme.color}
						/>
					),
				}}
			/>
			<Stack.Screen
				name={router.THEME}
				component={ThemeScreen}
				options={{
					headerStyle: {
						backgroundColor: theme.backgroundSecondary,
					},
					headerTintColor: theme.fontPrimary,
					headerTitleStyle: {
						fontSize: 20,
						// fontWeight: "bold",
					},
					headerRight: () => (
						<Button
							onPress={() => alert("This is a button!")}
							title="Info"
							color={theme.color}
						/>
					),
				}}
			/>
			<Stack.Screen
				name={router.MANAGE_RECORDS}
				component={ManageRecordsScreen}
				options={{
					headerStyle: {
						backgroundColor: theme.backgroundSecondary,
					},
					headerTintColor: theme.fontPrimary,
					headerTitleStyle: {
						fontSize: 20,
						// fontWeight: "bold",
					},
					headerRight: () => (
						<Button
							onPress={() => alert("This is a button!")}
							title="Info"
							color={theme.color}
						/>
					),
				}}
			/>
		</Stack.Navigator>
	);
};

export default SettingsNavigator;
