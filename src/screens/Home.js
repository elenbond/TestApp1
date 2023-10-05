import React, {useState, useEffect} from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { fetchImages } from "../redux/actions"

import { width } from "../constants/dimentions"

import ImageListScreen from "./ImageListScreen"

import { Button } from "../components/Button"

const Home = () => {
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const images = useSelector((state) => state.images)
    const loading = useSelector((state) => state.loading)
    const error = useSelector((state) => state.error)

    useEffect(() => {
        dispatch(fetchImages(page))
    }, [page, dispatch])

    const loadMore = () => {
        setPage(prevPage => prevPage + 1)
    }
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.heading}>Image Gallery</Text>
            </View>
            
            <ScrollView>
                {loading && <Text>Loading...</Text>}
                {error && <Text>{error}</Text>}
                <ImageListScreen images={images} />
                {images.length !== 0 &&
                    <Button text="Load More" onPress={loadMore}
                    style={styles.loadMoreButton} />}
                
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingVertical: 40,
    },
    heading: {
        textAlign: "center",
    },
    loadMoreButton: {
        width: 100,
        height: 40,
        right: width*0.35,
        bottom: 40,
    }
})

export default Home