import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class TaskList extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: 'red',
        borderRadius: 10
    },
    header: {
        backgroundColor: 'black'
    }
});

export default TaskList;