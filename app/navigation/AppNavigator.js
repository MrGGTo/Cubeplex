import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../redux/themeActions";

import router from "./router";
import TimerScreen from "../screens/TimerScreen";
import { theme } from "../config/themes";
import SettingsNavigator from "./SettingsNavigator";
import AlgorithmNavigator from "./AlgorithmNavigator";
import RecordsScreen from "../screens/RecordsScreen";
import RecordNavigator from "./RecordNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
	return (
		<Tab.Navigator
			lazy={true}
			tabBarOptions={{
				activeTintColor: theme.color,
				activeBackgroundColor: theme.backgroundSecondary,
				inactiveBackgroundColor: theme.backgroundPrimary,
			}}
		>
			<Tab.Screen
				name={router.TIMER}
				component={TimerScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="timer-sand"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name={router.STATISTICS}
				component={RecordNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="chart-areaspline"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name={router.ALGORITHM}
				component={AlgorithmNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="format-float-none"
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
