import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import MovieScreenNavigation from './Navigation/MovieScreenNavigation';

export default function Root(){
    return(
        <NavigationContainer>
            <MovieScreenNavigation/>
        </NavigationContainer>
    )
}