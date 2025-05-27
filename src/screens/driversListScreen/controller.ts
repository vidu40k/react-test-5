import { useEffect, useCallback, useLayoutEffect } from "react";
import { IDriversResponse, useLazyGetDriversQuery } from "@/api/driversApiSlice";
import { useLoadData } from "@/hooks";
import { IDriver } from "@/types";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/navigation";
import { StackNavigationProp } from "@react-navigation/stack";

export const useDriversListScreenController = () => {
    const LIMIT = 30;
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [refetchDrivers] = useLazyGetDriversQuery();

    const {
        data: driverList,
        isLoading,
        hasMore,
        loadData,
    } = useLoadData<IDriver>({
        limit: LIMIT,
        refetchFn: refetchDrivers,
        getItems: (data: IDriversResponse) => data?.drivers ?? [],
    });

    const keyExtractor = useCallback((item: IDriver, index: number) => item.driverId ?? index.toString(), []);

    const onEndReached = useCallback(({ distanceFromEnd }: { distanceFromEnd: number }) => {
        if (distanceFromEnd < 0 || isLoading || !hasMore) return;
        loadData();
    }, [isLoading, hasMore, loadData]);

    useEffect(() => {
        loadData();
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: `Drivers count - ${driverList.length ?? 0}`,
        });
    }, [navigation, driverList.length]);

    return {
        driverList,
        hasMore,
        isLoading,
        onEndReached,
        keyExtractor,
    };
};

