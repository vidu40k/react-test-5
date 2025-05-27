import React, { FC } from "react";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigation } from "@/navigation";
import { StyleSheet } from "react-native";
import store from "@/redux/store";

const App: FC = () => {
    return (
        <SafeAreaProvider style={styles.fit}>
            <Provider {...{ store }}>
                <RootNavigation />
            </Provider>
        </SafeAreaProvider>
    );
};

export default App;

const styles = StyleSheet.create({
    fit: {
        flex: 1
    }
});
