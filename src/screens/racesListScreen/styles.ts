import { COLORS } from "@/config";
import { StyleSheet } from "react-native";

export const getStyle = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 10,
            backgroundColor: COLORS.white
        },
        racerName: {
            fontSize: 20,
            alignSelf: "center"
        },
        emptyStateContainer: {
            padding: 20,
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        contentContainer: {
            gap: 12,
            flexGrow: 1,
            paddingHorizontal: 10,
            paddingTop: 20,
            paddingBottom: 0
        }
    });
};
