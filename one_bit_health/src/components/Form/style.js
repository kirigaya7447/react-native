import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formBody: {
        width: "100%",
        height: "auto",
        flex: 1,
        backgroundColor: "grey",
        alignItems: "center",
        marginTop: 30,
        borderRadius: 30,
        paddingTop: 15,
        justifyContent: "space-around",
    },

    formText: {
        width: "100%",
        height: "auto",
        marginTop: 5,
        padding: 10,
    },

    formLabel: {
        color: "#000000",
        fontSize: 15,
        paddingLeft: 20,
    }, 

    formResult:{
        width: "100%",
        hwight: "50%",
        marginTop: 5,
        aliigntItems: "center",
        fontSize: 22,
    },

    input: {
        width: "100%",
        height: 35,
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 50,
        margin: 12,
        paddingLeft: 15,

    }, 
    button: {
        marginTop: 45,
        width: "90%",
        backgroundColor: "white",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,

    },
    textButton: {
        fontSize: 20,
        color: "black",

    },
    error: {
        color: "red",
        fontSize: 15,
        fontWeight: "bold",
        paddingLeft: 20, 
    },
    lista:{
        color: "white",
        fontSize: 18,
        marginTop: 5,
        width: "100%",
    },
});

export default styles;