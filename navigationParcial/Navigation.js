import React from 'react'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { NavigationContainer } from '@react-navigation/native';  

import HomeScreen from './SRC/Screens/HomeScreen';
import Dashboard from './SRC/Screens/Dashboard'; 
import Imagenes from './SRC/Screens/Imagenes'

const Tab = createBottomTabNavigator();

//configuracion del componente Button tab
function MyTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="infomarción" component={Imagenes}/>
        </Tab.Navigator>
    );
}

//configuracion del componente Navigation
export default function Navigation(){
    return (
        <NavigationContainer>
            <MyTab />
        </NavigationContainer>


    );
}