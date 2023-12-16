import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    content:{
        width: "100%",
        flexDirection: "row",
        marginLeft: 10,
        paddingVertical: 15,
        justifyContent: "space-evenly",
    },
    buttonQuery: {
        alignItems: "center",
        width: 85,
        height: "auto",
    },
    textButtonQuery: {
        color: "yellow",
        backgroundColor: "grey",
        margin: 5,
        padding: 2,
        borderColor: "yellow",
        borderWidth: 1,
        borderRadius: 5,
        fontWeight: "bold",
    },
});

export default styles;