import React, { Component } from 'react';
import { Vibration } from 'react-native';

import { Notifications } from 'expo';
import { AsyncStorage } from 'react-native';

import { AppProvider } from './components/Context';
import AppNavigator from './navigation/AppNavigator';

export default class App extends Component {

    vibrationDuration = 2000;

    state = {
        tasks: []
    }

    componentDidMount() {
        this.loadData();
        this.notificationListener = Notifications.addListener(() => {
            Vibration.vibrate(this.vibrationDuration, true);
        });
    }

    componentWillUnmount() {
        this.notificationListener.remove();
    }

    loadData = async () => {
        try {
            const value = await AsyncStorage.getItem('tasks');
            if(value !== null) {
                tasks = JSON.parse(value);

                this.setState({ tasks });
            }
        } catch(e) {
            return;
        }
    }

    handleAddNewTask = () => {
        let newTask = {
            name: '',
            items: []
        };

        this.setState(prevState => {
            return {
                tasks: [...prevState.tasks, newTask]
            }
        })
    }

    handleDeleteTask = (key) => {
        this.setState(prevState => {
            let filteredItems = prevState.tasks.filter((item, index) => {
                return index !== key;
            });

            return {
                tasks: filteredItems
            }
        })
    }

    handleAddNewTaskItem = (key) => {
        let unixTimestamp = parseInt(new Date().getTime() / 1000);
        let newTaskItem = {
            timestamp: unixTimestamp
        };

        let tasks = [...this.state.tasks];

        if (!Array.isArray(tasks[key].items)) {
            tasks[key].items = [];
        }

        tasks[key].items.push(newTaskItem);

        this.setState({tasks});
    }

    handleDeleteTaskItem = (taskKey, itemKey) => {
        let tasks = [...this.state.tasks];

        if (!Array.isArray(tasks[taskKey].items)) {
            return;
        }

        tasks[taskKey].items = tasks[taskKey].items.filter((item, index) => {
            return index !== itemKey;
        });

        this.setState({tasks});
        this.storeData();
    }

    handleToggleCheckBox = (taskKey, itemKey) => {
        let tasks = [...this.state.tasks];

        if (!Array.isArray(tasks[taskKey].items)) {
            return;
        }

        if (!tasks[taskKey].items[itemKey]) {
            return;
        }

        if (!tasks[taskKey].items[itemKey]['checked']) {
            tasks[taskKey].items[itemKey]['checked'] = false;
        }

        tasks[taskKey].items[itemKey]['checked'] = !tasks[taskKey].items[itemKey]['checked'];

        this.setState({tasks});
    }

    handleToggleTimePicker = (taskKey, itemKey) => {
        let tasks = [...this.state.tasks];

        if (!Array.isArray(tasks[taskKey].items)) {
            return;
        }

        if (!tasks[taskKey].items[itemKey]) {
            return;
        }

        if (!tasks[taskKey].items[itemKey]['showPicker']) {
            tasks[taskKey].items[itemKey]['showPicker'] = false;
        }

        tasks[taskKey].items[itemKey]['showPicker'] = !tasks[taskKey].items[itemKey]['showPicker'];

        this.setState({tasks});
    }

    handleUpdateAlarm = async (taskKey, itemKey, item, value) => {

        let tasks = [...this.state.tasks];
        let unixTimestamp = parseInt(value.nativeEvent.timestamp / 1000);

        if (!Array.isArray(tasks[taskKey].items)) {
            return;
        }

        if (!tasks[taskKey].items[itemKey]) {
            return;
        }

        let notificationId = tasks[taskKey].items[itemKey]['notificationId'];
        if (notificationId) {
            Notifications.cancelScheduledNotificationAsync(notificationId);
        }

        tasks[taskKey].items[itemKey]['showPicker'] = false;
        tasks[taskKey].items[itemKey]['timestamp'] = unixTimestamp;

        tasks[taskKey].items[itemKey]['notificationId'] = await Notifications.scheduleLocalNotificationAsync({
            title: 'Time Management',
            body: item.name || 'Scheduled event',
            ios: {
                sound: true,
                _displayInForeground: true
            }
        }, {
            time: unixTimestamp
        });

        this.storeData();
        this.setState({tasks});
    }

    storeData = async () => {
        try {
            let json = JSON.stringify(this.state.tasks);
            await AsyncStorage.setItem('tasks', json);
        } catch (e) {
            console.warn('Error occurred while saving data: ' + e);
        }
    }

    render() {
        return (
            <AppProvider value={{
                tasks: this.state.tasks,
                actions: {
                    addNewTask: this.handleAddNewTask,
                    deleteTask: this.handleDeleteTask,
                    addNewTaskItem: this.handleAddNewTaskItem,
                    deleteTaskItem: this.handleDeleteTaskItem,
                    toggleCheckBox: this.handleToggleCheckBox,
                    toggleTimePicker: this.handleToggleTimePicker,
                    updateAlarm: this.handleUpdateAlarm
                }
            }}>
                <AppNavigator/>
            </AppProvider>
        );
    }
}
