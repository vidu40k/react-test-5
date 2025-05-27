import React, { FC, memo } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { getStyle } from "./styles";
import { useDriverDetailsScreenController } from "./controller";

export const DriverDetailsScreen: FC = memo(() => {
    const styles = getStyle();
    const { driverInfo, driverData, isDataLoading } = useDriverDetailsScreenController();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Driver id: {driverInfo?.driverId}</Text>
            <Text style={styles.text}>Name: {[driverInfo?.givenName, driverInfo?.familyName].join(" ")}</Text>
            <Text style={styles.text}>Date of birthday: {driverInfo?.dateOfBirth}</Text>
            <Text style={styles.text}>Wiki url: {driverInfo?.url}</Text>
            {isDataLoading ? (
                <ActivityIndicator />
            ) : (
                <>
                    <Text style={styles.text}>Wiki description: {driverData.description}</Text>
                    {driverData?.img ? <Image style={styles.image} source={{ uri: driverData.img }} resizeMode="contain" /> : null}
                </>
            )}
        </View>
    );
});
