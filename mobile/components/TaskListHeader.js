import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

import { AppConsumer } from '../components/Context';
import { Ionicons } from '@expo/vector-icons';

class TaskListHeader extends Component {

    render() {
        let deleteTask = this.props.appContext.actions.deleteTask;
        let updateTaskLabel = this.props.appContext.actions.updateTaskLabel;
        let taskKey = this.props.taskKey;
        let tasks = this.props.appContext.tasks;

        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <TextInput
                        value={tasks[taskKey].label}
                        style={{fontSize: 20, color: 'white'}}
                        placeholder="Routine Group Name"
                        placeholderTextColor="white"
                        onChangeText={(text) => updateTaskLabel(taskKey, text)}
                    ></TextInput>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => deleteTask(taskKey)}
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