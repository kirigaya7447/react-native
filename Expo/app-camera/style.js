import { StyleSheet } from "react-native";

const stylesImport = StyleSheet.create({
    camera: {
        width: "100%",
        height: "100%",
    },
    siFudeu: {
        color: "red",
        fontSize: 45,
    },
    viewButton: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
    },
    buttonTroca: {
        height: 50,
        width: 50,
        backgroundColor: "#fff",
        position: "absolute",
        bottom: 50,
        left: 30,
        alignItems: "center",
        margin: 20,
        padding: 10,
        borderRadius: 50,
    },
    buttonTiraFoto: {
        height: 50,
        width: 50,
        backgroundColor: "red",
        position: "absolute",
        bottom: 50,
        right: 30,
        alignItems: "center",
        margin: 20,
        padding: 10,
        borderRadius: 50,
    },
    contentModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        margin: 20,

    },
    botaoFecharFoto: {
        position: "absolute",
        top: 10,
        left: 2,
        margin: 10,
    },
    imagemFoto: {
        width: "100%",
        height: 400,
    },
});

export default stylesImport;