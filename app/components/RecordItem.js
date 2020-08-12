import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

function RecordItem({ id, time, scramble }) {
	return (
		<TouchableOpacity key={id} style={styles.recordItem}>
			<AppText>
				Time: {time}, Scramble: {scramble}
			</AppText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {},
});

export default RecordItem;
