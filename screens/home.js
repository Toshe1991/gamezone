import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, Modal, StyleSheet} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {
    const [count, setCount] = useState(3);
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        {title: 'Zelda, Breath of fresh air', rating: 5, body: 'lorem ipsum', key: '1'},
        {title: 'Gotta catch them All (again)', rating: 4, body: 'lorem ipsum', key: '2'},
        {title: 'Not so "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3'},
    ]);

    const addReview = (review) => {
        review.key = (count + 1).toString();
        setReviews((prevReviews) => [review, ...prevReviews]);
        setCount(prevCount => prevCount + 1);
        setModalOpen(false);
    }

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                    <MaterialIcons 
                        name='close'
                        size={24}
                        onPress={() => setModalOpen(false)}
                        style={{ ...styles.modalToggle, ...styles.modalClose }}
                    />
                    <ReviewForm addReview={addReview} />
                </View>
            </Modal>

            <MaterialIcons 
                name='add'
                size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />

            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    }
});
