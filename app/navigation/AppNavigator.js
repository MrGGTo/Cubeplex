import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../redux/themeActions";

import router from "./router";
import TimerScreen from "../screens/TimerScreen";
import { selectedTheme, getSelectedTheme } from "../config/themes";
import SettingsNavigator from "./SettingsNavigator";
import AlgorithmNavigator from "./AlgorithmNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
	// const theme = useSelector((state) => state.themeReducer.theme);
	// const dispatch = useDispatch();

	const theme = getSelectedTheme();

	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: theme.color,
				activeBackgroundColor: theme.backgroundSecondary,
				inactiveBackgroundColor: theme.backgroundPrimary,
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
				component={AlgorithmNavigator}
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
