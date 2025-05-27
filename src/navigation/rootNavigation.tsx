import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DriverDetailsScreen } from "@/screens/driverDetailsScreen";
import { DriversListScreen } from "@/screens/driversListScreen";
import { RacesListScreen } from "@/screens/racesListScreen";
import { RootStackParamList } from "./types";
import { ScreenNames } from "./screenNames";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={ScreenNames.DriversList}>
            <Stack.Screen name={ScreenNames.DriversList} component={DriversListScreen} />
            <Stack.Screen name={ScreenNames.DriverDetails} component={DriverDetailsScreen} />
            <Stack.Screen name={ScreenNames.RacesList} component={RacesListScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);
