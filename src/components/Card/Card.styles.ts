import{ StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        borderRadius: 8,
        padding: 10,
        elevation: 10,
        shadowColor: 'rgba(0, 0, 0, .6)',
        backgroundColor: '#fff',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 4
    }
})