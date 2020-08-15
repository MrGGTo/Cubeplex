import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { theme } from "../config/themes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import router from "../navigation/router";

function StatisticsScreen({ navigation }) {
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

			<View style={styles.statsContainer}>
				{/* Number of Solves */}
				<View style={styles.statisticsItem}>
					<AppText style={styles.name}>Number of Solves:</AppText>
					<AppText style={styles.result}>456</AppText>
				</View>
				<View style={styles.line}></View>
				{/* Best Time */}
				<TouchableOpacity style={styles.statisticsItem}>
					<AppText style={styles.name}>Best Time:</AppText>
					<AppText style={styles.result}>4.37s</AppText>
					<MaterialCommunityIcons
						name="chevron-right"
						size={24}
						color={theme.fontSecondary}
					/>
				</TouchableOpacity>
				<View style={styles.line}></View>

				{/* Worst Time */}
				<TouchableOpacity style={styles.statisticsItem}>
					<AppText style={styles.name}>Worst Time:</AppText>
					<AppText style={styles.result}>4.37s</AppText>
					<MaterialCommunityIcons
						name="chevron-right"
						size={24}
						color={theme.fontSecondary}
					/>
				</TouchableOpacity>
				<View style={styles.line}></View>

				{/* Average Time */}
				<TouchableOpacity style={styles.statisticsItem}>
					<AppText style={styles.name}>Average Time:</AppText>
					<AppText style={styles.result}>4.37s</AppText>
					<MaterialCommunityIcons
						name="chevron-right"
						size={24}
						color={theme.fontSecondary}
					/>
				</TouchableOpacity>
				<View style={styles.line}></View>

				{/* Average of 5 */}
				<TouchableOpacity style={styles.statisticsItem}>
					<AppText style={styles.name}>Average of 5</AppText>
					<AppText style={styles.result}>4.37s</AppText>
					<MaterialCommunityIcons
						name="chevron-right"
						size={24}
						color={theme.fontSecondary}
					/>
				</TouchableOpacity>
				<View style={styles.line}></View>

				{/* Average of 12 */}
				<TouchableOpacity style={styles.statisticsItem}>
					<AppText style={styles.name}>Average of 12</AppText>
					<AppText style={styles.result}>4.37s</AppText>
					<MaterialCommunityIcons
						name="chevron-right"
						size={24}
						color={theme.fontSecondary}
					/>
				</TouchableOpacity>
				<View style={styles.line}></View>
			</View>

			{/* <TouchableOpacity
				style={[styles.statisticsItem, styles.viewRecords]}
			>
				<AppText style={styles.name}>View Records</AppText>
				<MaterialCommunityIcons
					name="chevron-right"
					size={24}
					color={theme.fontSecondary}
				/>
			</TouchableOpacity> */}
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
