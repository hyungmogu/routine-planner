import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class TaskList extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Text style={{fontSize: 20, color: 'white', padding: 15}}>Title</Text>
                    </View>
                    <View>
                    </View>
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