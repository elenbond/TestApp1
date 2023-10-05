import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import Home from "../screens/Home"
import ImageListScreen from '../screens/ImageListScreen'
import ImageScreen from '../screens/ImageScreen'

const Stack = createStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                animation: "none",
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ImageListScreen" component={ImageListScreen} />
            <Stack.Screen name="ImageScreen" component={ImageScreen} />
        </Stack.Navigator>
    )
}

export default AppStack