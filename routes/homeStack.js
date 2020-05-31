import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import HeaderBackground from '../shared/headerBackground';

const HomeStack = createStackNavigator();

export default function() {
    return (
        <HomeStack.Navigator
            screenOptions={{
                    headerStyle: { backgroundColor: "#eee" },
                    headerTintColor: '#444'
            }}
        >
            <HomeStack.Screen 
                name="Home" 
                component={Home}
                options={({ navigation }) => ({
                    headerTitle: props => <Header navigation={navigation} title='GameZone' />,
                    headerBackground: HeaderBackground
                })}
            />
            <HomeStack.Screen 
                name="Details" 
                component={ReviewDetails}
                options={{ title:"Review Details" }}
            />
        </HomeStack.Navigator>
    );
}

