import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
import moment, { duration } from "moment";
import AppText from "./AppText";
import { fontSize, spacing } from "../config/sizes";

const { width } = Dimensions.get("window");
const fontWithoutMinutes = width / 5;
const fontWithMinutes = width / 7;

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
					<View
						style={[
							styles.timerContainer,
							{
								width: duration.minutes() > 0 ? "75%" : "65%",
							},
						]}
					>
						{duration.minutes() > 0 && (
							<View style={styles.minuteContainer}>
								<AppText
									style={
										isLongPressed
											? {
													fontSize: fontWithMinutes,
													fontWeight: "200",
													color: "lime",
											  }
											: {
													fontSize: fontWithMinutes,
													fontWeight: "200",
											  }
									}
								>
									{duration.minutes()}
								</AppText>
							</View>
						)}

						{duration.minutes() > 0 && (
							<AppText
								style={
									isLongPressed
										? {
												fontSize:
													duration.minutes() > 0
														? fontWithMinutes
														: fontWithoutMinutes,
												fontWeight: "200",
												color: "lime",
										  }
										: {
												fontSize:
													duration.minutes() > 0
														? fontWithMinutes
														: fontWithoutMinutes,
												fontWeight: "200",
										  }
								}
							>
								:
							</AppText>
						)}
						<View style={styles.secondContainer}>
							<AppText
								style={
									isLongPressed
										? {
												fontSize:
													duration.minutes() > 0
														? fontWithMinutes
														: fontWithoutMinutes,
												fontWeight: "200",
												color: "lime",
										  }
										: {
												fontSize:
													duration.minutes() > 0
														? fontWithMinutes
														: fontWithoutMinutes,
												fontWeight: "200",
										  }
								}
								numberOfLines={1}
							>
								{pad2(duration.seconds())}
							</AppText>
						</View>
						<AppText
							style={
								isLongPressed
									? {
											fontSize:
												duration.minutes() > 0
													? fontWithMinutes
													: fontWithoutMinutes,
											fontWeight: "200",
											color: "lime",
									  }
									: {
											fontSize:
												duration.minutes() > 0
													? fontWithMinutes
													: fontWithoutMinutes,
											fontWeight: "200",
									  }
							}
						>
							.
						</AppText>
						<View style={styles.millContainer}>
							<AppText
								style={
									isLongPressed
										? {
												fontSize:
													duration.minutes() > 0
														? fontWithMinutes
														: fontWithoutMinutes,
												fontWeight: "200",
												color: "lime",
										  }
										: {
												fontSize:
													duration.minutes() > 0
														? fontWithMinutes
														: fontWithoutMinutes,
												fontWeight: "200",
										  }
								}
								numberOfLines={1}
							>
								{pad3(duration.milliseconds())}
							</AppText>
						</View>
					</View>
				)}
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: width,
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	ready: {
		fontSize: fontSize.xxxl,
		alignContent: "center",
		justifyContent: "center",
	},
	greenReady: {
		color: "lime",
		fontSize: fontSize.xxxl,
		alignContent: "center",
		justifyContent: "center",
	},
	timerContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	minuteContainer: {
		flex: 1,
		alignItems: "flex-end",
	},
	secondContainer: {
		flex: 1,
		alignItems: "center",
	},
	millContainer: {
		flex: 1.5,
		alignItems: "flex-start",
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
