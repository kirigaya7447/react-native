import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Modal, Image } from "react-native";
import { Camera } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {

  const [tipo, setTipo] = useState(Camera.Constants.Type.back);
  const [permissao, setPermissao] = useState(null);
  const camera = useRef(null);
  const [fotoTirada, setFotoTirada] = useState(null);
  const [abreFoto, setAbre] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
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
      console.log(data);
      setAbre(true);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera type={tipo} style={styles.camera} ref={camera}>
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.buttonTroca} title="Câmera" onPress={() => { setTipo(tipo === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back) }}>
            <FontAwesome name="exchange" size={24} color="red" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonTiraFoto} title="Tirar foto" onPress={pegaFoto} >
            <FontAwesome name="camera" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </Camera>
      {
        fotoTirada && abreFoto ? <Modal animate="slide" transparent={true} visible={abreFoto}>
          <View style={styles.contentModal}>
            <Image></Image>
          </View>
        </Modal>
          : <Text>Error #*$&$&$&%&45654654#$$%%$</Text>
      }
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

  },
});