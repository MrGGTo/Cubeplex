import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingScreen from "../screens/SettingScreen";
import ThemeScreen from "../screens/ThemeScreen";
import ThemeTabs from "./ThemeTabs";
import { selectedTheme } from "../config/themes";
import { Button } from "react-native";
import router from "./router";

const Stack = createStackNavigator();

const SettingsNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name={router.SETTINGS}
			component={SettingScreen}
			options={{
				headerShown: false,
				headerStyle: {
					backgroundColor: selectedTheme.backgroundPrimary,
				},
				headerTintColor: selectedTheme.fontPrimary,
			}}
		/>
		<Stack.Screen
			name={router.THEME}
			component={ThemeScreen}
			options={{
				headerStyle: {
					backgroundColor: selectedTheme.backgroundPrimary,
				},
				headerTintColor: selectedTheme.fontPrimary,
				headerTitleStyle: {
					fontSize: 28,
					// fontWeight: "bold",
				},
				headerRight: () => (
					<Button
						onPress={() => alert("This is a button!")}
						title="Info"
						color={selectedTheme.color}
					/>
				),
			}}
		/>
	</Stack.Navigator>
);

export default SettingsNavigator;
