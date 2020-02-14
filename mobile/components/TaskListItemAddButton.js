import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

class TaskListItemAddButton extends Component {

    render() {
        const {
            onPress
        } = this.props;

        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
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