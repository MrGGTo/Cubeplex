import React, { useState } from "react";
import { View, StyleSheet, Modal, Switch } from "react-native";

import Screen from "../components/Screen";
import Scramble from "../components/Scramble";
import IconButton from "../components/IconButton";
import Timer from "../components/Timer";
import AppText from "../components/AppText";
import { selectedTheme } from "../config/themes";

function TimerScreen(props) {
	const [settingsVisible, setSettingsVisible] = useState(false);
	const [scrambleLength, setScrambleLength] = useState(20);
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	return (
		<Screen style={styles.container}>
			<AppText style={styles.appName}>Cubeplex</AppText>
			<IconButton
				style={styles.settingsContainer}
				onPress={() => setSettingsVisible(true)}
				name="settings-outline"
				size={27}
				color="black"
			/>
			<Scramble
				style={styles.scramble}
				fontSize={20}
				scrambleLength={scrambleLength}
			/>
			<View style={styles.timerContainer}>
				<Timer />
			</View>

			<Modal
				animationType="fade"
				transparent={true}
				visible={settingsVisible}
			>
				<View style={{ backgroundColor: "#000000aa", flex: 1 }}>
					<Modal
						animationType="slide"
						transparent={true}
						visible={settingsVisible}
					>
						<View
							style={{
								backgroundColor:
									selectedTheme.backgroundSecondary,
								flex: 1,
								marginVertical: 75,
								marginHorizontal: 50,
								borderRadius: 15,
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
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-evenly",
									alignItems: "center",
									marginVertical: 15,
								}}
							>
								<AppText>Scramble Length</AppText>
								<IconButton
									name="less-than"
									size={17}
									onPress={() =>
										setScrambleLength(scrambleLength - 1)
									}
								/>
								<AppText>{scrambleLength}</AppText>
								<IconButton
									name="greater-than"
									size={17}
									onPress={() =>
										setScrambleLength(scrambleLength + 1)
									}
								/>
							</View>
							<View
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
										transform: [
											{ scaleX: 0.8 },
											{ scaleY: 0.8 },
										],
									}}
									trackColor={{
										false: "#767577",
										true: selectedTheme.color,
									}}
									onValueChange={toggleSwitch}
									value={isEnabled}
								/>
							</View>
						</View>
					</Modal>
				</View>
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
