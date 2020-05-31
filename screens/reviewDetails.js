import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';

import Card from '../shared/card';

export default function ReviewDetails({ route, navigation }) {
    const { title, body, rating } = route.params;
    const imageName = `../assets/rating-${rating}.png`;

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{ title }</Text>
                <Text>{ body }</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating:</Text>
                    <Image source={images.ratings[rating]}/>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        marginTop: 16,
        borderWidth: 1,
        borderColor: '#eee',
    }
});
