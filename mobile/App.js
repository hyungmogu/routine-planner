import React, { Component } from 'react';

import { AppProvider } from './components/Context';
import AppNavigator from './navigation/AppNavigator';

export default class App extends Component {

    state = {
        tasks: []
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
                    toggleTimePicker: this.handleToggleTimePicker
                }
            }}>
                <AppNavigator/>
            </AppProvider>
        );
    }
}
