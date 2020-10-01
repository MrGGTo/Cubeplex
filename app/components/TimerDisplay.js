import React, { Component, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Button,
	TouchableHighlight,
	Dimensions,
} from "react-native";
import moment, { duration } from "moment";
import AppText from "./AppText";

const { width, height } = Dimensions.get("window");

function TimerDisplay({
	interval,
	onPressIn,
	onPressOut,
	ready = false,
	style,
}) {
	const [isLongPressed, setLongPressed] = useState(false);

	const duration = moment.duration(interval);

	const pad2 = (n) => {
		// (n < 10 ? "0" + n : n)
		if (n < 10 && duration.minutes() > 0) {
			return "0" + n;
		} else {
			return n;
		}
	};
	const pad3 = (n) => {
		if (n < 10) {
			return "00" + n;
		} else if (n < 99) {
			return "0" + n;
		} else {
			return n;
		}
	};

	return (
		<TouchableOpacity
			onPressIn={onPressIn}
			onPressOut={isLongPressed ? onPressOut : null}
			onLongPress={() => setLongPressed(true)}
			style={[styles.container, style]}
			activeOpacity={1}
		>
			<View>
				{ready && (
					<View>
						<AppText
							style={
								isLongPressed ? styles.greenReady : styles.ready
							}
						>
							Ready
						</AppText>
					</View>
				)}
				{!ready && (
					<View style={styles.timerContainer}>
						{duration.minutes() > 0 && (
							<View style={styles.textContainer}>
								<AppText
									style={
										isLongPressed
											? styles.greenText2
											: styles.text2
									}
								>
									{duration.minutes()}
								</AppText>
								<AppText style={[styles.dots]}>:</AppText>
							</View>
						)}
						<View style={styles.textContainer}>
							<AppText
								style={
									isLongPressed
										? styles.greenText2
										: styles.text2
								}
							>
								{pad2(duration.seconds())}
							</AppText>
						</View>
						<AppText style={[styles.dots]}>.</AppText>
						<AppText
							style={
								isLongPressed ? styles.greenText3 : styles.text3
							}
						>
							{pad3(duration.milliseconds())}
						</AppText>
					</View>
				)}
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: width,
		height: height,
		alignItems: "center",
		justifyContent: "center",
	},
	timerContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	ready: {
		fontSize: 50,
		alignContent: "center",
		justifyContent: "center",
	},
	textContainer: {
		width: 90,
		alignContent: "center",
		justifyContent: "center",
		alignSelf: "center",
		flexDirection: "row",
	},
	text2: {
		fontSize: 75,
		fontWeight: "200",
	},
	text3: {
		fontSize: 75,
		fontWeight: "200",
		width: 130,
		alignContent: "center",
		justifyContent: "center",
		alignSelf: "center",
	},
	dots: {
		fontSize: 65,
		fontWeight: "200",
		width: 10,
	},
	greenReady: {
		color: "lime",
		fontSize: 50,
		alignContent: "center",
		justifyContent: "center",
	},
	greenText2: {
		color: "lime",
		fontSize: 75,
		fontWeight: "200",
	},
	greenText3: {
		color: "lime",
		fontSize: 75,
		fontWeight: "200",
		width: 130,
		alignContent: "center",
		justifyContent: "center",
		alignSelf: "center",
	},
});

export default TimerDisplay;

export const formatTime = (time) => {
	const duration = moment.duration(Math.round(time));
	const minutes = duration.minutes();
	const seconds = duration.seconds();
	const milliseconds = duration.milliseconds();

	const formattedTime =
		(minutes > 0 ? minutes + ":" : "") +
		(seconds < 10 && minutes > 0 ? "0" + seconds : seconds) +
		"." +
		(milliseconds < 10
			? "00" + milliseconds
			: milliseconds < 99
			? "0" + milliseconds
			: milliseconds) +
		"s";

	return formattedTime;
};
