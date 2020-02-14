import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

class TaskListHeader extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 20, color: 'white'}}>Title</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Ionicons
                            name="ios-trash"
                            style={{color: 'white', alignSelf: 'flex-end'}}
                            size={30}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF971D',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        flexDirection: 'row',
        padding: 15
    }
});

export default TaskListHeader;