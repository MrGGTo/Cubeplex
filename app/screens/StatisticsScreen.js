import React, { useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	RefreshControl,
} from "react-native";
import * as SQLite from "expo-sqlite";
import { useFocusEffect } from "@react-navigation/native";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { theme } from "../config/themes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import router from "../navigation/router";
import { openOrCreateDatabase } from "../database/RecordDatabase";
import { formatTime } from "../components/TimerDisplay";
import AdDisplay from "../components/AdDisplay";

const db = SQLite.openDatabase("db.db");

function StatisticsScreen({ navigation }) {
	const [refreshing, setRefreshing] = React.useState(false);

	const [numberOfSolves, setNumberOfSolves] = useState(0);
	const [bestTime, setBestTime] = useState(0);
	const [worstTime, setWorstTime] = useState(0);
	const [average, setAverage] = useState(0);
	const [ao5, setAo5] = useState(0);
	const [ao12, setAo12] = useState(0);

	const [bestTimeRecord, setBestTimeRecord] = useState([]);
	const [worstTimeRecord, setWorstTimeRecord] = useState();
	const [averageRecord, setAverageRecord] = useState();
	const [ao5Record, setAo5Record] = useState();
	const [ao12Record, setAo12Record] = useState();

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		fetchStatistics();
		setRefreshing(false);
	}, []);

	useFocusEffect(() => {
		openOrCreateDatabase();
		fetchStatistics();
	}, []);

	const fetchStatistics = () => {
		db.transaction((tx) => {
			// number of solves
			tx.executeSql(
				"SELECT COUNT(*) FROM recordsData",
				null,
				// success
				(txObj, { rows: { _array } }) => {
					setNumberOfSolves(_array[0]["COUNT(*)"]);
				},
				// failed
				(txObj, error) => {
					console.log(error);
				}
			);

			// best time
			tx.executeSql(
				"SELECT MIN(time) FROM recordsData",
				null,
				// success
				(txObj, { rows: { _array } }) => {
					setBestTime(formatTime(_array[0]["MIN(time)"]));
				},
				// failed
				(txObj, error) => {
					console.log(error);
				}
			);

			// Worst time
			tx.executeSql(
				"SELECT MAX(time) FROM recordsData",
				null,
				// success
				(txObj, { rows: { _array } }) => {
					setWorstTime(formatTime(_array[0]["MAX(time)"]));
				},
				// failed
				(txObj, error) => {
					console.log(error);
				}
			);

			// Average time
			tx.executeSql(
				"SELECT AVG(time) FROM recordsData",
				null,
				// success
				(txObj, { rows: { _array } }) => {
					setAverage(formatTime(_array[0]["AVG(time)"]));
				},
				// failed
				(txObj, error) => {
					console.log(error);
				}
			);

			// AO5
			tx.executeSql(
				"SELECT AVG(time) FROM (SELECT * FROM recordsData ORDER BY id DESC LIMIT 5)",
				null,
				// success
				(txObj, { rows: { _array } }) => {
					setAo5(formatTime(_array[0]["AVG(time)"]));
				},
				// failed
				(txObj, error) => {
					console.log(error);
				}
			);

			// AO12
			tx.executeSql(
				"SELECT AVG(time) FROM (SELECT * FROM recordsData ORDER BY id DESC LIMIT 12)",
				null,
				// success
				(txObj, { rows: { _array } }) => {
					setAo12(formatTime(_array[0]["AVG(time)"]));
				},
				// failed
				(txObj, error) => {
					console.log(error);
				}
			);
		});
	};

	return (
		<Screen style={styles.container}>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<AppText style={styles.title}>Statistics</AppText>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate(router.RECORDS);
					}}
				>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: theme.backgroundSecondary,
							paddingVertical: 10,
							paddingHorizontal: 20,
							borderRadius: 25,
							marginRight: 15,
						}}
					>
						<AppText>View Records</AppText>
						<MaterialCommunityIcons
							name="chevron-right"
							size={24}
							color={theme.fontSecondary}
						/>
					</View>
				</TouchableOpacity>
			</View>
			<ScrollView
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}
			>
				<View style={styles.statsContainer}>
					{/* Number of Solves */}
					<View style={styles.statisticsItem}>
						<AppText style={styles.name}>Number of Solves:</AppText>
						<AppText style={styles.result}>
							{numberOfSolves}
						</AppText>
					</View>
					<View style={styles.line}></View>

					{/* Best Time */}
					<TouchableOpacity
						style={styles.statisticsItem}
						onPress={() => {
							db.transaction((tx) => {
								tx.executeSql(
									"SELECT MIN(time), * FROM recordsData",
									null,
									// success
									(txObj, { rows: { _array } }) => {
										console.log(
											"Navigated to Details with : " +
												JSON.stringify(_array[0])
										);
										navigation.navigate(
											router.RECORD_DETAILS,
											_array[0]
										);
									},
									// failed
									(txObj, error) => {
										console.log(error);
									}
								);
							});
						}}
					>
						<AppText style={styles.name}>Best Time:</AppText>
						<AppText style={styles.result}>{bestTime}</AppText>
						<MaterialCommunityIcons
							name="chevron-right"
							size={24}
							color={theme.fontSecondary}
						/>
					</TouchableOpacity>
					<View style={styles.line}></View>

					{/* Worst Time */}
					<TouchableOpacity
						style={styles.statisticsItem}
						onPress={() => {
							db.transaction((tx) => {
								tx.executeSql(
									"SELECT MAX(time), * FROM recordsData",
									null,
									// success
									(txObj, { rows: { _array } }) => {
										console.log(
											"Navigated to Details with : " +
												JSON.stringify(_array[0])
										);
										navigation.navigate(
											router.RECORD_DETAILS,
											_array[0]
										);
									},
									// failed
									(txObj, error) => {
										console.log(error);
									}
								);
							});
						}}
					>
						<AppText style={styles.name}>Worst Time:</AppText>
						<AppText style={styles.result}>{worstTime}</AppText>
						<MaterialCommunityIcons
							name="chevron-right"
							size={24}
							color={theme.fontSecondary}
						/>
					</TouchableOpacity>
					<View style={styles.line}></View>

					{/* Average Time */}
					<TouchableOpacity
						style={styles.statisticsItem}
						onPress={() => {
							db.transaction((tx) => {
								tx.executeSql(
									"SELECT AVG(time), COUNT(*) FROM recordsData",
									null,
									// success
									(txObj, { rows: { _array } }) => {
										console.log(
											"Navigated to Details with : " +
												JSON.stringify(_array[0])
										);
										console.log(_array[0]["AVG(time)"]);
										navigation.navigate(
											router.RECORDS_AVG,
											{
												average: _array[0]["AVG(time)"],
												total: _array[0]["COUNT(*)"],
											}
										);
									},
									// failed
									(txObj, error) => {
										console.log(error);
									}
								);
							});
						}}
					>
						<AppText style={styles.name}>Average Time:</AppText>
						<AppText style={styles.result}>{average}</AppText>
						<MaterialCommunityIcons
							name="chevron-right"
							size={24}
							color={theme.fontSecondary}
						/>
					</TouchableOpacity>
					<View style={styles.line}></View>

					{/* Average of 5 */}
					<TouchableOpacity
						style={styles.statisticsItem}
						onPress={() => {
							db.transaction((tx) => {
								tx.executeSql(
									"SELECT * FROM (SELECT * FROM recordsData ORDER BY id DESC LIMIT 5)",
									null,
									// success
									(txObj, { rows: { _array } }) => {
										console.log(
											"Navigated to Details with : " +
												JSON.stringify(_array)
										);
										// console.log(_array[0]["AVG(time)"]);
										navigation.navigate(
											router.RECORDS_AO5,
											{
												ao5: ao5,
												records: _array,
											}
										);
									},
									// failed
									(txObj, error) => {
										console.log(error);
									}
								);
							});
						}}
					>
						<AppText style={styles.name}>Average of 5</AppText>
						<AppText style={styles.result}>{ao5}</AppText>
						<MaterialCommunityIcons
							name="chevron-right"
							size={24}
							color={theme.fontSecondary}
						/>
					</TouchableOpacity>
					<View style={styles.line}></View>

					{/* Average of 12 */}
					<TouchableOpacity
						style={styles.statisticsItem}
						onPress={() => {
							db.transaction((tx) => {
								tx.executeSql(
									"SELECT * FROM (SELECT * FROM recordsData ORDER BY id DESC LIMIT 12)",
									null,
									// success
									(txObj, { rows: { _array } }) => {
										console.log(
											"Navigated to Details with : " +
												JSON.stringify(_array)
										);
										// console.log(_array[0]["AVG(time)"]);
										navigation.navigate(
											router.RECORDS_AO12,
											{
												ao12: ao12,
												records: _array,
											}
										);
									},
									// failed
									(txObj, error) => {
										console.log(error);
									}
								);
							});
						}}
					>
						<AppText style={styles.name}>Average of 12</AppText>
						<AppText style={styles.result}>{ao12}</AppText>
						<MaterialCommunityIcons
							name="chevron-right"
							size={24}
							color={theme.fontSecondary}
						/>
					</TouchableOpacity>
					<View style={styles.line}></View>
				</View>
			</ScrollView>
			<AdDisplay bannerSize="banner" />
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {},
	statsContainer: {
		alignItems: "center",
		backgroundColor: theme.backgroundSecondary,
		marginTop: 20,
	},
	title: {
		fontSize: 35,
		margin: 20,
		fontWeight: "700",
		flex: 1,
	},
	statisticsItem: {
		backgroundColor: theme.backgroundSecondary,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 15,
		paddingHorizontal: 15,
	},
	name: {
		flex: 1,
		fontSize: 20,
	},
	result: {
		fontSize: 20,
	},
	line: {
		height: 1,
		width: "85%",
		backgroundColor: theme.backgroundPrimary,
	},
	viewRecords: {
		marginVertical: 50,
	},
});

export default StatisticsScreen;
