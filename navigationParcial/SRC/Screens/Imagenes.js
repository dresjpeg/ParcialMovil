import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet, Image, Button } from "react-native";

export default function ImagesScreen() {
    const [characters, setCharacters] = useState([]);

    const fetchData = () => {
    fetch("https://dragonball-api.com/api/characters?limit=58")
    .then((response) => response.json())
    .then((data) => setCharacters(data.items))
    .catch((error) => console.error(error));
    };

    return (
    <View style={styles.container}>
        <Button title="Cargar Imágenes" onPress={fetchData} />
        <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.race}>Raza: {item.race}</Text>
            <Text style={styles.ki}>KI: {item.ki}</Text>
            <Text style={styles.genero}>Genero: {item.gender}</Text>
            <Text style={styles.maxKi}>Maximo Ki: {item.maxKi}</Text>
            </View>
        )}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20, 
        backgroundColor: "orange" },
    card: { 
        backgroundColor: "white", 
        padding: 10, 
        margin: 10, 
        borderRadius: 10, 
        alignItems: "center",
        border: '2px solid black'
},
    image: { 
        width: 500, 
        height: 200, 
        marginBottom: 10, 
        borderRadius: 10, 
        resizeMode: "contain" },
    name: { 
        fontSize: 18, 
        fontWeight: "bold", 
        color: "gray", 
        textAlign: "center" },
});
