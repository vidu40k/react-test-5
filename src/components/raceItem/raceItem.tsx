import React, { FC, memo } from "react";
import { Text, View } from "react-native";
import { getStyle } from "./styles";
import { IRaceItemProps } from "./types";

export const RaceItem: FC<IRaceItemProps> = memo(({ item }: IRaceItemProps) => {
    const styles = getStyle();

    return (
        <View style={styles.container}>
            <Text style={styles.name}>Country: {item.Circuit.Location.country}</Text>
            <Text style={styles.name}>Circuit name: {item.Circuit?.circuitName}</Text>
            <Text style={styles.name}>Race name: {item.raceName}</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.info}>Round: {item.round}</Text>
                <Text style={styles.info}>Date: {item.date}</Text>
            </View>
        </View>
    );
});
