import React, { Component } from 'react';

import { AppProvider } from './components/Context';
import AppNavigator from './navigation/AppNavigator';

export default class App extends Component {

    state = {
        tasks: []
    }

    handleAddNewTask = () => {
        let newTask = {
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
        let newTaskItem = {};

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

    render() {
        return (
            <AppProvider value={{
                tasks: this.state.tasks,
                actions: {
                    addNewTask: this.handleAddNewTask,
                    deleteTask: this.handleDeleteTask,
                    addNewTaskItem: this.handleAddNewTaskItem,
                    deleteTaskItem: this.handleDeleteTaskItem
                }
            }}>
                <AppNavigator/>
            </AppProvider>
        );
    }
}
