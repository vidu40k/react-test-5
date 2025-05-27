import { StyleSheet } from "react-native";

export const getStyle = () => {
    return StyleSheet.create({
        container: {
            width: "100%",
            height: 100,
            justifyContent: "center",
            alignItems: "center",
        },
        image: {
            width: 40,
            height: 40
        }
    });
};
