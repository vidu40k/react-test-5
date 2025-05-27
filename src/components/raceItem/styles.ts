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
            borderWidth: 1,
            borderColor: COLORS.white,
            backgroundColor: COLORS.main
        },
        name: {
            fontSize: 20,
            color: COLORS.white
        },
        info: {
            fontSize: 16,
            color: COLORS.white
        },
        infoContainer: {
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        }
    });
};
