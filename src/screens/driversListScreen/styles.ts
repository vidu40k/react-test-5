import { COLORS } from "@/config";
import { StyleSheet } from "react-native";

export const getStyle = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLORS.white
        },
        emptyStateContainer: {
            padding: 20,
            alignItems: "center"
        },
        contentContainer: {
            gap: 12,
            paddingHorizontal: 10,
            paddingTop: 20,
            paddingBottom: 0
        }
    });
};
