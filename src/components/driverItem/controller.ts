import { RootStackParamList, ScreenNames } from "@/navigation";
import { useNavigation } from "@react-navigation/native";
import { TDriverItemControllerParams } from "./types";
import { StackNavigationProp } from "@react-navigation/stack";
import { useAppDispatch } from "@/hooks";

export const useDriverItemController = ({ item }: TDriverItemControllerParams) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { _setDriverInfo } = useAppDispatch()

    const onPressName = () => {
        // Только для примера: Вместо передачи параметра через навигацию, используется dispatch. По этому driverInfo опциональный
        navigation.navigate(ScreenNames.DriverDetails, {})
        _setDriverInfo(item)
    }

    const onPressRaces = () => {
        navigation.navigate(ScreenNames.RacesList, { driverId: item.driverId, driverName: [item.givenName, item.familyName].join(" ") })
    }

    return {
        onPressName,
        onPressRaces
    }
};
