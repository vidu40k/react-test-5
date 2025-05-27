import React, { FC, memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { getStyle } from "./styles";
import { IDriverItemProps } from "./types";
import { useDriverItemController } from "./controller";

export const DriverItem: FC<IDriverItemProps> = memo(({ item }: IDriverItemProps) => {
    const styles = getStyle();
    const { onPressName, onPressRaces } = useDriverItemController({ item });

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.5} style={styles.nameButton} onPress={onPressName}>
                <Text style={styles.name}>Name: {[item.givenName, item.familyName].join(" ")}</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.nameButton} onPress={onPressRaces}>
                <Text numberOfLines={2} style={styles.name}>
                    Races list
                </Text>
            </TouchableOpacity>
        </View>
    );
});
