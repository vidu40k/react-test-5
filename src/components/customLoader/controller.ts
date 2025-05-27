import { useEffect } from "react";
import { Easing, interpolate, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from "react-native-reanimated";
import { TCustomLoaderControllerParams } from "./types";

export const useCustomLoaderController = ({ isLoading }: TCustomLoaderControllerParams) => {
    const progress = useSharedValue(0)

    const funStatusMessages = [
        "You're up to date 🔥",
        "Все данные загружены. Теперь можно и отдохнуть 🏖️",
        "Обновление прошло успешно 🎉",
        "Данные на борту. Пристегнись! 🚀",
        "Больше загружать нечего. Мы стянули все что смогли 😎",
        "Данные свежие, как булочки из печи 🥐",
        "Миссия выполнена. Агент JSON завершил загрузку 🕶️📦"
    ];

    const getRandomMessage = (messages: string[]): string => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    };

    const rLoaderView = useAnimatedStyle(() => {
        const rotate = interpolate(progress.value, [0, 1], [0, 360])
        return {
            transform: [{ rotate: `${rotate}deg` }]
        }
    })

    const enteringFade = () => {
        "worklet";
        const animations = {
            opacity: withDelay(2700, withTiming(0, { duration: 600 })),
            transform: [{ translateY: withDelay(3000, withTiming(100, { duration: 600 })) }]
        };
        const initialValues = {
            opacity: 1,
            transform: [{ translateY: 0 }]
        };
        return {
            initialValues,
            animations
        };
    };


    useEffect(() => {
        progress.value = withRepeat(withTiming(isLoading ? 1 : 0, { duration: 500, easing: Easing.linear }), -1)
    }, [isLoading, progress])


    return {
        rLoaderView,
        infoTitle: getRandomMessage(funStatusMessages),
        enteringFade,
    }
};
