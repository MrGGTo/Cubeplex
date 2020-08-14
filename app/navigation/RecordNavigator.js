import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { EvilIcons } from "@expo/vector-icons";

import { theme } from "../config/themes";
import router from "./router";
import RecordScreen from "../screens/RecordsScreen";
import RecordDetailsScreen from "../screens/RecordDetailsScreen";
import IconButton from "../components/IconButton";
import { TouchableOpacity, Share } from "react-native";

const Stack = createStackNavigator();

const RecordNavigator = () => {
	const onShare = async () => {
		try {
			const result = await Share.share({
				message:
					"I got 6.17s with this scramble on Cubeplex. I Love Wing Wing",
			});
			if (result.action === Share.sharedAction) {
				if (result.activityType) {
					// shared with activity type of result.activityType
				} else {
					// shared
				}
			} else if (result.action === Share.dismissedAction) {
				// dismissed
			}
		} catch (error) {
			alert(error.message);
		}
	};
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={router.RECORDS}
				component={RecordScreen}
				options={{ headerShown: false }}
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

					headerRight: () => (
						<TouchableOpacity
							onPress={() => {
								onShare();
							}}
						>
							<EvilIcons
								name="share-apple"
								size={35}
								color={theme.fontPrimary}
							/>
						</TouchableOpacity>
					),
				}}
			/>
		</Stack.Navigator>
	);
};

export default RecordNavigator;