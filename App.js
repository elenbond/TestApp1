import { useState, useEffect } from "react"
import { View, Text } from "react-native"
import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { Provider } from "react-redux"
import store from "./src/redux/store"
import * as Font from "expo-font"

import AppStack from "./src/stack/AppStack"

const fontsLoaded = {
    Roboto: require("./src/assets/fonts/Roboto-Regular.ttf"),
    RobotoItalic: require("./src/assets/fonts/Roboto-Italic.ttf"),
    Montserrat: require("./src/assets/fonts/Montserrat-Regular.ttf"),
}

const App = () => {
    const [appIsReady, setAppIsReady] = useState(false)

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync(fontsLoaded)
                await new Promise((resolve) => setTimeout(resolve, 1000))
            } catch (e) {
                console.warn(e)
            } finally {
                setAppIsReady(true)
            }
        }
        prepare()
    }, [])

    if (!appIsReady) {
        return (<View>
            <Text>Loading...</Text>
        </View>)
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <AppStack />
                <StatusBar style="auto" />
            </NavigationContainer>
        </Provider>
    )
}

export default App
