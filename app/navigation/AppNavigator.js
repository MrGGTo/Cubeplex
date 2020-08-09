import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import router from "./router";
import TimerScreen from "../screens/TimerScreen";
import PllAlgorithmScreen from "../screens/PllAlgorithmScreen";
import SettingScreen from "../screens/SettingScreen";
import { selectedTheme } from "../config/themes";
import SettingsNavigator from "./SettingsNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: selectedTheme.color,
				activeBackgroundColor: selectedTheme.backgroundSecondary,
				inactiveBackgroundColor: selectedTheme.backgroundPrimary,
				// tabStyle: { backgroundColor: "red" },
			}}
			tabStyle={
				{
					// backgroundColor: "red",
				}
			}
		>
			<Tab.Screen
				name={router.TIMER}
				component={TimerScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="timer"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name={router.ALGORITHM}
				component={PllAlgorithmScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="format-float-left"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name={router.SETTINGS}
				component={SettingsNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="settings"
							color={color}
							size={size}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
