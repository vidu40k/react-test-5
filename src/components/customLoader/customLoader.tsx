import React, { FC, memo } from "react";
import { Image, Text, View } from "react-native";
import { getStyle } from "./styles";
import { ICustomLoaderProps } from "./types";
import { IMAGES } from "@/assets";
import { useCustomLoaderController } from "./controller";
import Animated from "react-native-reanimated";

export const CustomLoader: FC<ICustomLoaderProps> = memo(({ isLoading, hasMore }: ICustomLoaderProps) => {
    const styles = getStyle();
    const { rLoaderView, infoTitle, enteringFade } = useCustomLoaderController({ isLoading });

    return (
        <View style={styles.container}>
            {!isLoading && !hasMore ? (
                <Animated.View entering={enteringFade}>
                    <Text>{infoTitle}</Text>
                </Animated.View>
            ) : (
                <Animated.View style={rLoaderView}>
                    <Image style={styles.image} source={IMAGES.TIRE} />
                </Animated.View>
            )}
        </View>
    );
});
