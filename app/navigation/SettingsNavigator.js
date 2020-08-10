import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingScreen from "../screens/SettingScreen";
import ThemeScreen from "../screens/ThemeScreen";
import ThemeTabs from "./ThemeTabs";
import { selectedTheme, getSelectedTheme } from "../config/themes";
import { Button } from "react-native";
import router from "./router";

const Stack = createStackNavigator();

const SettingsNavigator = () => {
	const theme = getSelectedTheme();
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
		</Stack.Navigator>
	);
};

export default SettingsNavigator;
