import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "../config/themes";
import router from "./router";
import PllAlgorithmScreen from "../screens/PllAlgorithmScreen";
import AlgorithmDetailsScreen from "../screens/AlgorithmDetailsScreen";
import TrainingTimerScreen from "../screens/TrainingTimerScreen";
import { Button, Alert } from "react-native";

const Stack = createStackNavigator();

const PllAlgorithmDetailsNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={router.PLL_ALGORITHMS}
				component={PllAlgorithmScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={router.ALGORITHM_DETAILS}
				component={AlgorithmDetailsScreen}
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
				name={router.TRAIN_TIMER}
				component={TrainingTimerScreen}
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

export default PllAlgorithmDetailsNavigator;
