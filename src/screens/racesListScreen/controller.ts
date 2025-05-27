import { IRacesResponse, useLazyGetRacesQuery } from "@/api/driversApiSlice";
import { useLoadData } from "@/hooks";
import { RootStackParamList, ScreenNames } from "@/navigation";
import { IRace } from "@/types";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCallback, useEffect, useLayoutEffect } from "react";

export const useRacesListScreenController = () => {
    const LIMIT = 30;
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [refetchRaces] = useLazyGetRacesQuery();
    const { driverId, driverName } = useRoute<RouteProp<RootStackParamList, ScreenNames.RacesList>>().params

    const {
        data: driverRacesList,
        isLoading,
        hasMore,
        loadData,
    } = useLoadData<IRace>({
        limit: LIMIT,
        refetchFn: refetchRaces,
        getItems: (data: IRacesResponse) => data.races ?? [],
        getRequestParams: (offset, limit) => ({
            offset,
            limit,
            driverId,
        }),
    });

    const keyExtractor = useCallback((item: IRace, index: number) => `${item.raceName}_${item.season}_${item.date}_${index}`, []);

    const onEndReached = useCallback(({ distanceFromEnd }: { distanceFromEnd: number }) => {
        if (distanceFromEnd < 0 || isLoading || !hasMore) return;
        loadData();
    }, [isLoading, hasMore, loadData]);

    useEffect(() => {
        loadData();
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: `Driver races - ${driverRacesList.length ?? 0}`,
        });
    }, [navigation, driverRacesList.length]);

    return {
        driverRacesList,
        driverName,
        hasMore,
        isLoading,
        onEndReached,
        keyExtractor,
    };
};
