import { useEffect, useState } from "react";
import { useAppSelector } from "@/hooks";
import { IDriver } from "@/types";
import wtf from "wtf_wikipedia";

type TDriverData = { img: string, description: string }

export const useDriverDetailsScreenController = () => {
    // Только для примера: Вместо получения параметра через навигацию, используется useAppSelector
    //const { driverInfo } = useRoute<RouteProp<RootStackParamList, ScreenNames.DriverDetails>>().params; 
    const { driverInfo } = useAppSelector(state => state.DriversActionsSlice)
    const [driverData, setDriverData] = useState<TDriverData>({} as TDriverData)
    const [isDataLoading, setIsDataLoading] = useState(false)

    const getDriverInfo = async () => {
        if (!driverInfo) { return }
        setIsDataLoading(true)
        // wtf_wikipedia - не имеет типизации 
        // Только для примера.
        let doc: any = await wtf.fetch([driverInfo.givenName, driverInfo.familyName].join(" "));
        if (!doc) {
            return;
        }
        const img = doc?.images()[0].json()
        setDriverData({
            img: img?.url ?? "",
            description: doc?.description() ?? ""
        })
        setIsDataLoading(false)
    };

    useEffect(() => {
        getDriverInfo();
    }, []);

    return {
        isDataLoading,
        driverInfo: driverInfo ?? {} as IDriver,
        driverData
    }
};
