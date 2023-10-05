import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { width } from "../constants/dimentions"

const ImageListScreen = ({ images }) => {
    const navigation = useNavigation()

    return (
        <View style={styles.imageList}>
            {images.length > 0 ? (
                images.map((image) => {
                return (
                    <TouchableOpacity
                        key={image.id}
                        onPress={() => {
                            navigation.navigate("ImageScreen", {
                                uri: image.urls.full,
                                id: image.id,
                            })
                        }}
                        style={styles.imageCardContainer}
                    >
                        <View style={styles.imageCard}>
                            <Image source={{uri: image.urls.small}}
                                style={{ height: 160, width: 160, resizeMode: "cover" }}
                            />
                        </View>
                        <View style={styles.imageDetailsContainer}>
                            <Text style={styles.imageName}>"{image.alt_description}"</Text>
                            <Text style={styles.imageAuthor}>{image.user.username}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })
                ) : (
                <Text>No images available.</Text>
            )}
           
        </View>
    )
}

const styles = StyleSheet.create({
    imageList: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: "#f1f1f1",
        display: "flex",
        width: width,
    },
    imageCardContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#f1f1f1",
        width: width*0.5,
        height: 160,
    },
    imageCard: {
        height: 150,
        width: 150,
        backgroundColor: "#f1f1f1",
        overflow: "hidden",
    },
    imageDetailsContainer: {
        marginLeft: 20,
    },
    imageName: {
        fontStyle: "italic",
    },
    imageAuthor: {
        marginTop: 15
    }
})

export default ImageListScreen