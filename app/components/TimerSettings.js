import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, AsyncStorage } from "react-native";
import Screen from "./Screen";
import AppText from "./AppText";
import Slider from "@react-native-community/slider";
import { Switch } from "react-native-gesture-handler";
import { theme } from "../config/themes";
import AdDisplay from "./AdDisplay";

const initialValue = {
	scrambleLength: 20,
	inspection: false,
};

function TimerSettings({ backgroundColor, onPressClose }) {
	const [scrambleLength, setScrambleLength] = useState(
		initialValue.scrambleLength
	);
	const [inspection, setInspection] = useState(initialValue.inspection);
	const toggleSwitch = () => setInspection((previousState) => !previousState);

	useEffect(() => {
		retrieveSettingsData();
	}, []);

	const handleSave = () => {
		storeSettingsData();
		if (onPressClose != null) {
			onPressClose();
		}
	};

	const handleReset = () => {
		setScrambleLength(initialValue.scrambleLength);
		setInspection(initialValue.inspection);
		// storeSettingsData();
		// retrieveSettingsData();
	};

	const storeSettingsData = async () => {
		try {
			await AsyncStorage.setItem(
				"settingsData",
				JSON.stringify({
					scrambleLength: scrambleLength,
					inspection: inspection,
				})
			);
		} catch (error) {
			// Error saving data
		}
	};

	const retrieveSettingsData = async () => {
		try {
			const value = await AsyncStorage.getItem("settingsData");
			if (value !== null) {
				// We have data!!
				console.log(value);
				const valueObj = JSON.parse(value);
				setScrambleLength(valueObj.scrambleLength);
				setInspection(valueObj.inspection);
			} else {
				storeSettingsData();
			}
		} catch (error) {
			// Error retrieving data
		}
	};

	return (
		<Screen
			style={{
				backgroundColor: backgroundColor,
				justifyContent: "space-evenly",
				// marginVertical: 15,
			}}
		>
			<View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-evenly",
						alignItems: "center",
						marginVertical: 15,
					}}
				>
					<AppText>Scramble Length</AppText>
					<AppText>{scrambleLength}</AppText>
				</View>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-evenly",
						alignItems: "center",
						marginVertical: 15,
					}}
				>
					<Slider
						style={{ width: 200, height: 40 }}
						minimumValue={5}
						maximumValue={30}
						minimumTrackTintColor={theme.color}
						maximumTrackTintColor="#767577"
						value={scrambleLength}
						onValueChange={(value) => {
							setScrambleLength(Math.round(value));
						}}
					/>
				</View>

				{/* <View
					style={{
						flexDirection: "row",
						justifyContent: "space-evenly",
						alignItems: "center",
						marginVertical: 15,
					}}
				>
					<AppText>WCA Inspection</AppText>
					<Switch
						style={{
							transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
						}}
						trackColor={{
							false: "#767577",
							true: theme.color,
						}}
						onValueChange={toggleSwitch}
						value={inspection}
					/>
				</View> */}
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.resetButton}
					onPress={handleReset}
				>
					<View>
						<AppText>Set To Default</AppText>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.saveButton}
					onPress={handleSave}
				>
					<View>
						<AppText>Save Settings</AppText>
					</View>
				</TouchableOpacity>
			</View>
			<AdDisplay bannerSize="banner" />
		</Screen>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		marginVertical: 15,
		// bottom: 0,
	},
	resetButton: {
		borderWidth: 1,
		borderColor: theme.color,
		borderRadius: 10,
		padding: 10,
	},
	saveButton: {
		borderRadius: 10,
		padding: 10,
		backgroundColor: theme.color,
	},
});

export default TimerSettings;
