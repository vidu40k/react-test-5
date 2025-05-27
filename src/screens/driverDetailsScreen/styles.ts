import { COLORS } from "@/config";
import { StyleSheet } from "react-native";

export const getStyle = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: 10,
            backgroundColor: COLORS.white
        },
        text: {
            fontSize: 16,
            marginBottom: 6,
            color: COLORS.lightDark
        },
        image: {
            marginTop: 20,
            width: "100%",
            aspectRatio: 1.2
        }
    });
};
