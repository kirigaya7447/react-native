import React, { useState, useEffect } from "react";
import {View, StyleSheet, SafeAreaView} from "react-native";
import {Camera} from "expo-camera";

export default function App(){
    
    const [tipo, setTipo] = useState(Camera.Constants.Type.back);
    const [permissao, setPermissao] = useState(null);
    
    useEffect(() => {
        (async  () =>  {
            const {status} =  await Camera.requestPermissionsAsync();
            setPermissao( status === "granted");
        }
        )();
        }, []);

        if(permissao === null){
            return <View/>;
        }

        else if(permissao === false){
            return <View><Text style={styles.siFudeu}>Acesso negado!</Text></View>;
        }

    return (
        <SafeAreaView style={styles.container}>
            <Camera type={tipo} style={styles.camera}></Camera>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        backgroundColor: "white",
        paddingTop: 15,
    },
    camera:{
        width: "100%",
        height: "100%",
    },
    siFudeu:{
        color: "red",
        fontSize: 45,
    },
});