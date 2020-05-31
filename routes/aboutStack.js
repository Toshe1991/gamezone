import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import About from '../screens/about';
import Header from '../shared/header';
import HeaderBackground from '../shared/headerBackground';

const AboutStack = createStackNavigator();

export default function() {
    return (
        <AboutStack.Navigator
            screenOptions={{
                    headerStyle: { backgroundColor: "#eee" } ,
                    headerTintColor: '#444'
            }}
        >
            <AboutStack.Screen 
                name="About" 
                component={About}
                options={({ route, navigation }) => ({
                    headerTitle: props => <Header navigation={navigation} title='About GameZone'/>,
                    headerBackground: HeaderBackground
                })}
            />
        </AboutStack.Navigator>
    );
}

