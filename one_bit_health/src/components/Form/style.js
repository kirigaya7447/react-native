import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formBody: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "grey",
        alignItems: "center",
        marginTop: 50,
        borderRadius: 30
    },

    formText: {
        width: "100%",
        height: "auto",
        marginTop: 20,
        padding: 10
    },

    formLabel: {
        color: "#000000",
        fontSize: 15,
        paddingLeft: 20
    }, 

    input: {
        width: "90%",
        height: 35,
        borderRadius: 50,
        backroundColor: "grey",
        margin: 12,
        paddingLeft: 15

    }, 
    button: {
        width: "90%",
        backgroundColor: "white",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 25,

    },
    textButton: {
        fontSize: 20,
        color: "black",

    }
});

export default styles;