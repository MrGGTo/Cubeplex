import React, { useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	Modal,
	Switch,
	Image,
	Button,
	AsyncStorage,
	StatusBar,
} from "react-native";

import scrambleRotations from "../data/scrambleRotations";
import Screen from "../components/Screen";
import Scramble from "../components/Scramble";
import IconButton from "../components/IconButton";
import Timer from "../components/Timer";
import AppText from "../components/AppText";
import { theme } from "../config/themes";
import { useDispatch } from "react-redux";
import { switchTheme } from "../redux/themeActions";
import TimerSettings from "../components/TimerSettings";
import { useFocusEffect } from "@react-navigation/native";

function TimerScreen(props) {
	const [settingsVisible, setSettingsVisible] = useState(false);
	const [scrambleLength, setScrambleLength] = useState(20);
	const [scramble, setScramble] = useState(createScramble);

	const dispatch = useDispatch();
	const [themeID, setThemeID] = useState(1);
	const toggleThemeSwitch = () =>
		setThemeID((previousState) => (previousState === 1 ? 0 : 1));

	const createScramble = () => {
		var scramble = [scrambleLength];
		for (var i = 0; i < scrambleLength; i++) {
			scramble[i] =
				scrambleRotations[
					Math.floor(Math.random() * scrambleRotations.length)
				] + " ";
			if (
				(i > 0 && scramble[i].charAt(0) == scramble[i - 1].charAt(0)) ||
				(i > 1 && scramble[i].charAt(0) == scramble[i - 2].charAt(0))
			) {
				i--;
			}
		}

		var scrambleString = "";
		for (var i = 0; i < scrambleLength; i++) {
			scrambleString += scramble[i] + "";
		}

		return scrambleString;
	};

	// useFocusEffect;
	useEffect(() => {
		retrieveSettingsData();
	}, []);

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
				setScramble(createScramble);
				// setInspection(valueObj.inspection);
			} else {
				storeSettingsData();
			}
		} catch (error) {
			// Error retrieving data
		}
	};

	onPressStop = () => {
		setScramble(createScramble);
		// retrieveSettingsData();
	};

	return (
		<Screen style={styles.container}>
			<StatusBar barStyle={theme.statusBarStyle} />

			<AppText style={styles.appName}>Cubeplex</AppText>
			<IconButton
				style={styles.settingsContainer}
				onPress={() => setSettingsVisible(true)}
				name="settings"
				size={27}
				color="black"
			/>
			<View style={styles.scramble}>
				<AppText style={{ fontSize: 20 }}>{scramble}</AppText>
				<IconButton
					name="reload"
					size={24}
					style={{ paddingHorizontal: 5 }}
					onPress={() => {
						retrieveSettingsData();
					}}
				/>
			</View>
			<View style={styles.timerContainer}>
				<Timer onPressStop={onPressStop} scramble={scramble} />
			</View>

			<Modal
				animationType="fade"
				transparent={true}
				visible={settingsVisible}
			>
				{/* <View style={{ backgroundColor: "#000000aa", flex: 1 }}> */}
				<Modal
					animationType="slide"
					transparent={true}
					visible={settingsVisible}
				>
					<View
						style={{
							backgroundColor: theme.backgroundSecondary,
							flex: 1,
							marginVertical: "45%",
							marginHorizontal: "15%",
							borderRadius: 15,
							overflow: "hidden",
						}}
					>
						<View style={{ flexDirection: "row-reverse" }}>
							<IconButton
								name="close"
								size={35}
								onPress={() => setSettingsVisible(false)}
								style={{ padding: 15 }}
							/>
						</View>
						<TimerSettings
							backgroundColor={theme.backgroundSecondary}
							onPressClose={() => {
								setSettingsVisible(false);
								retrieveSettingsData();
							}}
						/>
					</View>
				</Modal>
				{/* </View> */}
			</Modal>
		</Screen>
	);
}

const styles = StyleSheet.create({
	appName: {
		position: "absolute",
		top: 25,
		fontSize: 25,
	},
	container: {
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
	},
	timer: {
		fontSize: 100,
		padding: 75,
		paddingVertical: 125,
	},
	scramble: {
		position: "absolute",
		flexDirection: "row",
		top: 75,
		padding: 50,
	},
	settingsContainer: {
		position: "absolute",
		top: 15,
		right: 15,
		flexDirection: "row-reverse",
	},
	startLButton: {
		borderRadius: 125 / 2,
		width: 125,
		height: 125,
		backgroundColor: "dodgerblue",
		position: "absolute",
		left: 25,
		bottom: 125,
	},
});

export default TimerScreen;
