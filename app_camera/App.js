import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, SafeAreaView, Button } from "react-native";
import { Camera } from "expo-camera";
import { CameraType } from "expo-camera/build/Camera.types";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {

    const [tipo, setTipo] = useState(Camera.Constants.Type.back);
    const [permissao, setPermissao] = useState(null);
    const camera = useRef(null);
    const [fotoTirada, setFotoTirada] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setPermissao(status === "granted");
        }
        )();
    }, []);

    if (permissao === null) {
        return <View />;
    }

    else if (permissao === false) {
        return <View><Text style={styles.siFudeu}>Acesso negado!</Text></View>;
    }

    async function pegaFoto() {
        if (camera) {

            const data = await camera.current.takePictureAsync();
            setFotoTirada(data.uri);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Camera type={tipo} style={styles.camera}></Camera>
            <View style={styles.viewButton}>
                <Button style={styles.buttonFlip} title="Câmera" onPress={() => { setTipo(tipo === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back) }}>
                    <FontAwesome name="exchange" size={24} color="red" />
                </Button>
                <Button style={styles.buttonTiraFoto} title="Tirar foto" onPress={pegaFoto()} >
                <FontAwesome name="camera" size={24} color="#fff" />
                </Button>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        paddingTop: 15,
    },
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
    buttonFlip: {
        height: 50,
        width: 50,
        backgroundColor: "#fff",
        position: "absolute",
        bottom: 50,
        left: 30,
        alignItems: "center",
        justifyContents: "center",
        margin: 20,
        borderRadius: 40,
    },
    buttonTiraFoto: {

    },
});