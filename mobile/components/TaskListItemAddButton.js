import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

class TaskListItemAddButton extends Component {

    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Ionicons
                    name="ios-add"
                    style={{marginRight: 15}}
                    size={30}
                />
                <Text>Add New Item</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    }
});

export default TaskListItemAddButton;