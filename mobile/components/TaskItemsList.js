import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text } from 'react-native';

import { CheckBox } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

import { AppConsumer } from '../components/Context';
import TimePickerModal from '../components/TimePickerModal';

class TaskItemsList extends Component {

    formatTime = (unixTimestamp) => {
        let dateTime = new Date(parseInt(unixTimestamp) * 1000);
        let hours = dateTime.getHours();
        let ampm = (hours >= 12) ? "PM" : "AM";
        let minutes = dateTime.getMinutes();

        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        if (hours > 12) {
            hours -= 12;
        } else if (hours === 0) {
            hours = 12;
        }

        return `${hours}:${minutes} ${ampm}`;
    }

    render() {
        let taskKey = this.props.taskKey;
        let taskItems = this.props.appContext.tasks[taskKey].items;

        let toggleTimePicker = this.props.appContext.actions.toggleTimePicker;
        let toggleCheckbox = this.props.appContext.actions.toggleCheckBox;
        let deleteTaskItem = this.props.appContext.actions.deleteTaskItem;
        let updateAlarm = this.props.appContext.actions.updateAlarm;
        let updateTaskItemLabel = this.props.appContext.actions.updateTaskItemLabel;

        return (
            <React.Fragment>
                {taskItems.map((item, itemKey) =>
                    <View key={itemKey}>
                        <View style={{padding: 15, flexDirection: 'row', alignItems: 'center'}}>
                            <CheckBox
                                containerStyle={{padding: 0}}
                                checked={item.checked}
                                checkedColor='black'
                                onPress={() => toggleCheckbox(taskKey, itemKey)}
                            />
                            <TextInput
                                style={{
                                    height: 40,
                                    borderColor: 'transparent',
                                    flex: 1,
                                    marginRight: 15
                                }}
                                value={item.label}
                                onChangeText={(text) => updateTaskItemLabel(taskKey, itemKey, text)}
                                placeholder="Add label here"
                            />

                            <TouchableOpacity
                                onPress={() => toggleTimePicker(taskKey, itemKey, item.timestamp)}
                                style={{
                                    marginRight:25
                                }}
                            >
                                <Text>{this.formatTime(item.timestamp)}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => deleteTaskItem(taskKey, itemKey)}>
                                <Ionicons
                                    name="ios-trash"
                                    style={{color: 'black', alignSelf: 'flex-end'}}
                                    size={30}
                                />
                            </TouchableOpacity>
                        </View>
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