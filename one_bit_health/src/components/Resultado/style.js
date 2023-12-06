import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    corpoResultado: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        borderWidth: 3,
        borderColor: "white",
    },
    resultado: {
        fontSize: 19,
        color: "white",
        fontWeight: "bold",
    },
    botaoCompartilha:{
        backgroundColor: "blue",
        borderColor: "red",
        borderWidth: 2,
        borderRadius: 50,
        marginTop: 5,
        marginBottom: 5,
    },
    textoBotao:{
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        padding: 4,
    },
});

export default styles;