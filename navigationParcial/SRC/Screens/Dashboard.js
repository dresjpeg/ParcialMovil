import React, { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { Image, Card, Icon } from 'react-native-elements';

export default function HomeScreen() {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?limit=58")
    .then(response => response.json())
    .then(data => setCharacters(data.items))
    .catch(error => console.error(error));
}, []);

    return (
    <View style={styles.container}>
        <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
        <view style={styles.cardcont}>
            <View style={styles.card}>
            <Text style={styles.name}>Nombre: {item.name}</Text>
            <Text style={styles.desc}>Descripción: {item.description}</Text>
            </View>
        </view>
        )}
        />
    </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1, 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
},
cardcont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    margin: '0',
    padding: '0',
},
card: { 
    width: '80%',
    backgroundColor: 'orange',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
},
name: { 
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
    textAlign: "center",
},
desc: { 
    fontSize: 16,
    textAlign: "center",
    color: 'pure-black'
},

});