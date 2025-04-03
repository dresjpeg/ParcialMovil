import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>¡Bienvenido a la App de Dragon Ball!</Text>
        <Text style={styles.text}>Toca el botón de imágenes abajo para ver los personajes.</Text>
    {/* <image source = {require('/img/Dragon_Ball_Z_logo.svg.png')} style={styles.image}/> */}
    </View>
    );
}

const styles = StyleSheet.create({
container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: 'black'
},
text: { 
    fontSize: 20, 
    textAlign: "center", 
    marginHorizontal: 20, 
    color: 'white'
    
},
image:{

}
});
