import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity,TextInput } from 'react-native';

import { CheckBox } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';

import { AppConsumer } from '../components/Context';

class TaskItemsList extends Component {

    render() {
        let taskKey = this.props.taskKey;
        let taskItems = this.props.appContext.tasks[taskKey].items;

        let toggleCheckbox = this.props.appContext.actions.toggleCheckBox;
        let deleteTaskItem = this.props.appContext.actions.deleteTaskItem;

        return (
            <React.Fragment>
                {taskItems.map((item, itemKey) =>
                    <View key={itemKey} style={{padding: 15, flexDirection: 'row', alignItems: 'center'}}>
                        <CheckBox
                            containerStyle={{padding: 0}}
                            checked={item.checked}
                            onPress={() => toggleCheckbox(taskKey, itemKey)}
                        />
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: 'transparent',
                                flex: 1,
                                marginRight: 15
                            }}
                            placeholder="Add label here"
                        />
                        <TouchableOpacity onPress={() => deleteTaskItem(taskKey, itemKey)}>
                            <Ionicons
                                name="ios-trash"
                                style={{color: 'black', alignSelf: 'flex-end'}}
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>
                )}
            </React.Fragment>
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

export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <TaskItemsList
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));