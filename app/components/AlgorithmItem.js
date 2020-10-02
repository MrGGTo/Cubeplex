import React from "react";
import {
	View,
	StyleSheet,
	Image,
	TouchableWithoutFeedback,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";

import { theme } from "../config/themes";
import { fontSize, spacing } from "../config/sizes";

function AlgorithmItem({ name, algorithm, image, onPress, renderLeftActions }) {
	return (
		<Swipeable renderLeftActions={renderLeftActions}>
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
						<Image style={styles.image} source={image} />
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
		padding: spacing.s,
		borderWidth: 1,
		margin: spacing.s,
		borderRadius: 15,
	},
	detailContainer: {
		flexDirection: "column",
		marginLeft: spacing.m,
		justifyContent: "center",
		flex: 1,
	},
	image: {
		width: spacing.xl,
		height: spacing.xl,
		resizeMode: "contain",
	},
	name: {
		fontSize: fontSize.l,
		fontWeight: "500",
	},
	algorithm: {
		fontSize: fontSize.s,
	},
});

export default AlgorithmItem;
