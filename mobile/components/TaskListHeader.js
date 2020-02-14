import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { AppConsumer } from '../components/Context';
import { Ionicons } from '@expo/vector-icons';

class TaskListHeader extends Component {

    render() {
        let deleteTask = this.props.appContext.actions.deleteTask;
        let key = this.props.itemKey;
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 20, color: 'white'}}>Title</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => deleteTask(key)}
                    >
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


export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <TaskListHeader
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));