import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeNavigator from './homeStack';
import AboutNavigator from './aboutStack';

const Drawer = createDrawerNavigator();

export default function() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeNavigator} />
                <Drawer.Screen name="About" component={AboutNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}