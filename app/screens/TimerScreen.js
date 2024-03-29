import React, { useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	Modal,
	AsyncStorage,
	StatusBar,
	Alert,
} from "react-native";
import GestureRecognizer, {
	swipeDirections,
} from "react-native-swipe-gestures";
import { useKeepAwake } from "expo-keep-awake";

import scrambleRotations from "../data/scrambleRotations";
import { deleteLastRecord } from "../database/RecordDatabase";
import Screen from "../components/Screen";
import IconButton from "../components/IconButton";
import Timer from "../components/Timer";
import AppText from "../components/AppText";
import { theme } from "../config/themes";
import { fontSize, spacing } from "../config/sizes";
import { useDispatch } from "react-redux";
import TimerSettings from "../components/TimerSettings";
import GestureHelpScreen from "./GestureHelpScreen";

function TimerScreen(props) {
	const [gestureVisible, setGestureVisible] = useState(false);
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
	useKeepAwake();

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
				setScrambleLength(20);
				setScramble(createScramble);
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

	const onSwipe = (gestureName, gestureState) => {
		const {
			SWIPE_UP,
			SWIPE_DOWN,
			SWIPE_LEFT,
			SWIPE_RIGHT,
		} = swipeDirections;
		switch (gestureName) {
			case SWIPE_UP:
				// this.setState({backgroundColor: 'red'});
				break;
			case SWIPE_DOWN:
				// this.setState({backgroundColor: 'green'});
				break;
			case SWIPE_LEFT:
				deleteLastRecord();
				break;
			case SWIPE_RIGHT:
				setScramble(createScramble);
				break;
		}
	};

	const swipeConfig = {
		velocityThreshold: 0.3,
		directionalOffsetThreshold: 80,
		gestureIsClickThreshold: 150,
	};

	return (
		<GestureRecognizer
			onSwipe={(direction, state) => onSwipe(direction, state)}
			config={swipeConfig}
			style={{
				flex: 1,
			}}
		>
			<Screen style={styles.container}>
				<StatusBar barStyle={theme.statusBarStyle} />
				<View style={styles.topBar}>
					<IconButton
						// style={styles.settingsContainer}
						onPress={() => setGestureVisible(true)}
						name="gesture"
						size={27}
						color="black"
					/>
					<AppText style={styles.appName}>Cubeplex</AppText>
					<IconButton
						// style={styles.settingsContainer}
						onPress={() => setSettingsVisible(true)}
						name="settings"
						size={27}
						color="black"
					/>
				</View>
				<View style={styles.scramble}>
					<AppText style={{ fontSize: 20 }}>{scramble}</AppText>
				</View>
				<View style={styles.timerContainer}>
					<Timer onPressStop={onPressStop} scramble={scramble} />
				</View>
				<Modal
					animationType="slide"
					transparent={true}
					visible={gestureVisible}
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
						<View
							style={{
								flexDirection: "row-reverse",
								alignItems: "center",
								// justifyContent: "center",
							}}
						>
							<IconButton
								name="close"
								size={35}
								onPress={() => setGestureVisible(false)}
								style={{ padding: spacing.s }}
							/>
							<AppText
								style={{
									fontWeight: "700",
									fontSize: fontSize.m,
								}}
							>
								Gestures Help
							</AppText>
						</View>
						<GestureHelpScreen />
					</View>
				</Modal>
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
						<View
							style={{
								flexDirection: "row-reverse",
								alignItems: "center",
								// justifyContent: "center",
							}}
						>
							<IconButton
								name="close"
								size={35}
								onPress={() => setSettingsVisible(false)}
								style={{ padding: spacing.s }}
							/>
							<AppText
								style={{
									fontWeight: "700",
									fontSize: fontSize.m,
								}}
							>
								Settings
							</AppText>
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
			</Screen>
		</GestureRecognizer>
	);
}

const styles = StyleSheet.create({
	topBar: {
		marginVertical: spacing.l,
		marginHorizontal: spacing.l,
		flexDirection: "row",
		justifyContent: "space-around",
		width: "100%",
	},
	appName: {
		fontSize: fontSize.xl,
	},
	container: {
		alignItems: "center",
		width: "100%",
	},
	scramble: {
		flexDirection: "row",
		marginHorizontal: spacing.l,
		marginVertical: spacing.l,
	},
	timerContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default TimerScreen;
