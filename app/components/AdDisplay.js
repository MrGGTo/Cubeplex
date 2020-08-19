import React, { useEffect } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { AdMobBanner } from "expo-ads-admob";

function AdDisplay({ bannerSize = "banner" }) {
	return (
		<View style={styles.container}>
			<AdMobBanner
				bannerSize={bannerSize}
				adUnitID={
					Platform.OS === "android"
						? "ca-app-pub-6427265675170344/8250500935"
						: "ca-app-pub-6427265675170344/5652257755"
				}
				servePersonalizedAds={false} // true or false
				onDidFailToReceiveAdWithError={(value) => {
					console.log("ad showcase failed: " + value);
				}}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		marginVertical: 5,
	},
});
export default AdDisplay;

export const getBannerUnitID =
	Platform.OS === "android"
		? "ca-app-pub-6427265675170344/8250500935"
		: "ca-app-pub-6427265675170344/5652257755";

// admob
// iOS Banner: ca-app-pub-6427265675170344/5652257755

// Android Banner: ca-app-pub-6427265675170344/8250500935
