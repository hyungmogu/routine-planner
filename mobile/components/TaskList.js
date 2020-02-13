import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class TaskList extends Component {

    render() {
        return (
            <View style={styles.container}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: 'red'
    }
});

export default TaskList;