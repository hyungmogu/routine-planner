import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,TextInput } from 'react-native';

import { CheckBox } from 'react-native-elements'

import { Ionicons } from '@expo/vector-icons';

class TaskListItem extends Component {

    render() {
        return (
            <View style={{padding: 15, flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox containerStyle={{padding: 0}}/>
                <TextInput
                    style={{
                        height: 40,
                        borderColor: 'transparent',
                        flex: 1,
                        marginRight: 15
                    }}
                    placeholder="Add label here"
                />
                <TouchableOpacity>
                    <Ionicons
                        name="ios-trash"
                        style={{color: 'black', alignSelf: 'flex-end'}}
                        size={30}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: 'white',
        borderRadius: 10
    },
    header: {
        backgroundColor: '#FF971D',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        flexDirection: 'row',
        padding: 15
    }
});

export default TaskListItem;