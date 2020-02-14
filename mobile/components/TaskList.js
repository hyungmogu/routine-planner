import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import TaskListItem from './TaskListItem';
import TaskListHeader from './TaskListHeader';

class TaskList extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TaskListHeader/>
                <TaskListItem/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: 'white',
        borderRadius: 10
    }
});

export default TaskList;