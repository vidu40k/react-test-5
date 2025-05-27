import React, { FC, memo, useCallback } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { getStyle } from "./styles";
import { IRace } from "@/types";
import { useRacesListScreenController } from "./controller";
import { RaceItem } from "@/components/raceItem";
import { CustomLoader } from "@/components/customLoader";

export const RacesListScreen: FC = memo(() => {
    const styles = getStyle();
    const { driverRacesList, driverName, hasMore, isLoading, onEndReached, keyExtractor } = useRacesListScreenController();

    const renderItem = useCallback(({ item }: { item: IRace }) => {
        return <RaceItem item={item} />;
    }, []);

    const renderFooter = useCallback(() => {
        return <CustomLoader isLoading={isLoading} hasMore={hasMore} />;
    }, [isLoading, hasMore]);

    const renderEmpty = useCallback(() => {
        if (isLoading) return null;
        return (
            <View style={styles.emptyStateContainer}>
                <Text>No race found.</Text>
            </View>
        );
    }, [isLoading]);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.racerName}>Racer: {driverName}</Text>
            <FlatList
                data={driverRacesList}
                onEndReachedThreshold={0.1}
                contentContainerStyle={styles.contentContainer}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                onEndReached={onEndReached}
                ListFooterComponent={renderFooter}
                ListEmptyComponent={renderEmpty}
            />
        </SafeAreaView>
    );
});
