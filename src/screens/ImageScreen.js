import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"

import { width, height } from "../constants/dimentions"

import { Button } from "../components/Button"

const ImageScreen = ({ navigation, route }) => {
    return (
        <View style={styles.imageCardContainer}>
            <Text>Image</Text>
            <View style={styles.imageCard}>
                <Image source={{ uri: route.params.uri, id: route.params.id }}
                    style={{ height: "100%", width: "100%", resizeMode: "contain" }}
                />
            </View>
            <TouchableOpacity style={styles.closeButton}
                onPress={() => navigation.goBack()}
            >
                <Text>Close</Text>
            </TouchableOpacity>
            <Button style={styles.closeButton} text="Close"
                onPress={() => navigation.goBack()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    imageCardContainer: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: "#f1f1f1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    imageCard: {
        height: height,
        width: width,
        backgroundColor: "#f1f1f1",
        overflow: "hidden",
    },
    closeButton: {
        right: 10,
        top: 40
    }
})

export default ImageScreen