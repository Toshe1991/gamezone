import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

export default function HeaderBackground() {
    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={StyleSheet.absoluteFill} /> 
    )
}