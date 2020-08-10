import React from "react";
import {
	View,
	StyleSheet,
	Image,
	TouchableWithoutFeedback,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AlgorithmStarAction from "./AlgorithmStarAction";
import AppText from "./AppText";

import { selectedTheme, getSelectedTheme } from "../config/themes";

function AlgorithmItem({ name, algorithm, image, onPress }) {
	const theme = getSelectedTheme();
	return (
		<Swipeable renderLeftActions={AlgorithmStarAction}>
			<TouchableWithoutFeedback onPress={onPress}>
				<View style={{ backgroundColor: theme.backgroundPrimary }}>
					<View
						style={[
							styles.container,
							{
								backgroundColor: theme.backgroundPrimary,
								borderColor: theme.fontPrimary,
							},
						]}
					>
						<Image
							// resizeMethod="resize"
							style={styles.image}
							source={image}
						/>
						<View style={styles.detailContainer}>
							<AppText style={styles.name}>{name}</AppText>
							<AppText style={styles.algorithm} secondary>
								{algorithm}
							</AppText>
						</View>
						<MaterialCommunityIcons
							color={theme.fontPrimary}
							name="chevron-right"
							size={25}
						/>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flexDirection: "row",
		padding: 10,
		borderWidth: 1,
		margin: 10,
		borderRadius: 15,
	},
	detailContainer: {
		flexDirection: "column",
		marginLeft: 15,
		justifyContent: "center",
		flex: 1,
	},
	image: {
		width: 75,
		height: 75,
		resizeMode: "contain",
		// borderRadius: 35,
	},
	name: {
		fontSize: 22,
		fontWeight: "500",
		// color: "black",
	},
	algorithm: {
		// color: "grey",
	},
});

export default AlgorithmItem;
