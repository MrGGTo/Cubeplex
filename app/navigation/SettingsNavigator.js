import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingScreen from "../screens/SettingScreen";
import ThemeScreen from "../screens/ThemeScreen";

const Stack = createStackNavigator();

const SettingsNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Settings"
			component={SettingScreen}
			options={{ headerShown: false }}
		/>
		<Stack.Screen name="Theme" component={ThemeScreen} />
	</Stack.Navigator>
);

export default SettingsNavigator;
