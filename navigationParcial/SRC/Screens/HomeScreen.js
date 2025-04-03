import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function HomeScreen() {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>¡Bienvenido a la App de Dragon Ball!</Text>
        <Text style={styles.text}>Navega para conocer los personajes.</Text>
        <View style={styles.imagecont}>
            <Image source={require('../../assets/02.png')} style={styles.image} />
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: 'black',
    fontStyle: 'normal'
},
text: { 
    fontSize: 20, 
    textAlign: "center", 
    marginHorizontal: 20, 
    color: 'white'
},
image: {
    width: 200, 
    height: 200,
    resizeMode: 'contain',
    shadowColor: "white",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 10,
},
})