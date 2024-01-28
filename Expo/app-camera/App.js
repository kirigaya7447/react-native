import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Modal, Image } from "react-native";
import stylesImport from "./style";
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
    return <View><Text style={stylesImport.siFudeu}>Acesso negado!</Text></View>;
  }

  async function pegaFoto() {
    if (camera) {

      const data = await camera.current.takePictureAsync();
      setFotoTirada(data.uri);
      setAbre(true);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera type={tipo} style={stylesImport.camera} ref={camera}>
        <View style={stylesImport.viewButton}>
          <TouchableOpacity style={stylesImport.buttonTroca} title="Câmera" onPress={() => { setTipo(tipo === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back) }}>
            <FontAwesome name="exchange" size={24} color="red" />
          </TouchableOpacity>
          <TouchableOpacity style={stylesImport.buttonTiraFoto} title="Tirar foto" onPress={pegaFoto} >
            <FontAwesome name="camera" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </Camera>
      {
        fotoTirada && (<Modal animationType="slide" transparent={true} visible={abreFoto}>
          <TouchableOpacity style={stylesImport.botaoFecharFoto} onPress={() => { setAbre(false) }}>
            <FontAwesome name="close" size={50} color="blue" />
          </TouchableOpacity>
          <View style={stylesImport.contentModal}>
            <Image style={stylesImport.imagemFoto} source={{ uri: fotoTirada }} />
          </View>
        </Modal>)
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
  }
});