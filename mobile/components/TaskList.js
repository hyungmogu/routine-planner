import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,TextInput } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

class TaskList extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
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
                <View>
                    <View style={{padding: 15, flexDirection: 'row'}}>
                        <TouchableOpacity>
                          <Ionicons
                              name="ios-trash"
                              style={{color: 'black', alignSelf: 'flex-end'}}
                              size={30}
                          />
                        </TouchableOpacity>
                    </View>
                </View>
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

export default TaskList;