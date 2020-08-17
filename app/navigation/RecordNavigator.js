import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { EvilIcons } from "@expo/vector-icons";

import { theme } from "../config/themes";
import router from "./router";
import RecordScreen from "../screens/RecordsScreen";
import RecordDetailsScreen from "../screens/RecordDetailsScreen";
import IconButton from "../components/IconButton";
import { TouchableOpacity, Share } from "react-native";
import StatisticsScreen from "../screens/StatisticsScreen";
import RecordAverageScreen from "../screens/RecordAverageScreen";
import RecordAO5Screen from "../screens/RecordAO5Screen";
import RecordAO12Screen from "../screens/RecordAO12Screen";

const Stack = createStackNavigator();

const RecordNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={router.STATISTICS}
				component={StatisticsScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={router.RECORDS}
				component={RecordScreen}
				options={{
					headerStyle: {
						backgroundColor: theme.backgroundSecondary,
					},
					headerTintColor: theme.fontPrimary,
					headerTitleStyle: {
						fontSize: 20,
						// fontWeight: "bold",
					},
				}}
			/>
			<Stack.Screen
				name={router.RECORD_DETAILS}
				component={RecordDetailsScreen}
				options={{
					headerStyle: {
						backgroundColor: theme.backgroundSecondary,
					},
					headerTintColor: theme.fontPrimary,
					headerTitleStyle: {
						fontSize: 20,
						// fontWeight: "bold",
					},
				}}
			/>
			<Stack.Screen
				name={router.RECORDS_AVG}
				component={RecordAverageScreen}
				options={{
					headerStyle: {
						backgroundColor: theme.backgroundSecondary,
					},
					headerTintColor: theme.fontPrimary,
					headerTitleStyle: {
						fontSize: 20,
						// fontWeight: "bold",
					},
				}}
			/>
			<Stack.Screen
				name={router.RECORDS_AO5}
				component={RecordAO5Screen}
				options={{
					headerStyle: {
						backgroundColor: theme.backgroundSecondary,
					},
					headerTintColor: theme.fontPrimary,
					headerTitleStyle: {
						fontSize: 20,
						// fontWeight: "bold",
					},
				}}
			/>
			<Stack.Screen
				name={router.RECORDS_AO12}
				component={RecordAO12Screen}
				options={{
					headerStyle: {
						backgroundColor: theme.backgroundSecondary,
					},
					headerTintColor: theme.fontPrimary,
					headerTitleStyle: {
						fontSize: 20,
						// fontWeight: "bold",
					},
				}}
			/>
		</Stack.Navigator>
	);
};

export default RecordNavigator;
