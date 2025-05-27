import { COLORS } from "@/config";
import { StyleSheet } from "react-native";

export const getStyle = () => {
    return StyleSheet.create({
        container: {
            width: "100%",
            borderRadius: 6,
            paddingVertical: 10,
            paddingHorizontal: 10,
            minHeight: 100,
            justifyContent: "center",
            gap: 10,
            borderWidth: 1,
            borderColor: COLORS.white,
            backgroundColor: COLORS.main
        },
        nameButton: {
            flex: 1,
        },
        name: {
            fontSize: 24,
            color: COLORS.white
        },
    });
};
