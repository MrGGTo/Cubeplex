import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import SettingsItem from "../components/SettingsItem";
import { theme } from "../config/themes";

function SettingsItemList({ dataRow, onPress }) {
	return (
		<View
			style={{
				// marginBottom: spacing.m,
				backgroundColor: theme.backgroundSecondary,
			}}
		>
			<FlatList
				scrollEnabled={false}
				data={dataRow}
				keyExtractor={(data) => data.id.toString()}
				renderItem={({ item }) => (
					<SettingsItem
						title={item.title}
						iconName={item.iconName}
						backgroundColor={item.backgroundColor}
						noIcon={item.noIcon}
						titleColor={item.titleColor}
						noChevron={item.noChevron}
						onPress={onPress}
					/>
				)}
				ItemSeparatorComponent={() => {
					return (
						<View
							style={{
								height: 1,
								width: "75%",
								backgroundColor: theme.backgroundPrimary,
								marginLeft: "15%",
							}}
						/>
					);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// marginVertical: 25,
	},
});

export default SettingsItemList;
