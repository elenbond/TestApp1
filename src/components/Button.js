import {TouchableOpacity, Text, StyleSheet} from "react-native"

export const Button = ({ text, onPress, style }) => {
    return (
        <TouchableOpacity style={[styles.button, style]}
            onPress={onPress}
        >
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 40,
        backgroundColor: "#d5dbf5",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
    }
})