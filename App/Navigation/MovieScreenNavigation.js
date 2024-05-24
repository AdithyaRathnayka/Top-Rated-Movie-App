import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../Screen/HomeScreen";
import MovieScreen from "../Screen/MovieScreen";

const Stack = createNativeStackNavigator();
export default function MovieScreenNavigation(){
    return(
        <Stack.Navigator initialRouteName="Popular Movies">
            <Stack.Screen name="Home" component={HomeScreen}
            options={{ headerShown:false,
            }} />
            <Stack.Screen name="Movie Details" component={MovieScreen} />
        </Stack.Navigator>
    );
}