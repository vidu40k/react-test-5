import React, { FC, memo, useCallback } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { getStyle } from "./styles";
import { useDriversListScreenController } from "./controller";
import { DriverItem } from "@/components/driverItem";
import { IDriver } from "@/types";
import { CustomLoader } from "@/components/customLoader";

export const DriversListScreen: FC = memo(() => {
    const styles = getStyle();
    const { driverList, hasMore, isLoading, onEndReached, keyExtractor } = useDriversListScreenController();

    const renderItem = useCallback(({ item }: { item: IDriver }) => {
        return <DriverItem item={item} />;
    }, []);

    const renderFooter = useCallback(() => {
        return <CustomLoader isLoading={isLoading} hasMore={hasMore} />;
    }, [isLoading, hasMore]);

    const renderEmpty = useCallback(() => {
        if (isLoading) return null;
        return (
            <View style={styles.emptyStateContainer}>
                <Text>No drivers found.</Text>
            </View>
        );
    }, [isLoading]);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={driverList}
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
