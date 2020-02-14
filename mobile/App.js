import React, { Component } from 'react';

import { AppProvider } from './components/Context';
import AppNavigator from './navigation/AppNavigator';

export default class App extends Component {

    state = {
        tasks: []
    }

    handleAddNewTask = () => {
        this.setState(prevState => {
            return {
                tasks: [...prevState.tasks, {}]
            }
        })
    }

    handleDeleteTask = (key) => {
        console.log('I am here');
        console.log(key);
        this.setState(prevState => {
            let filteredItems = prevState.tasks.filter((item, index) => {
                return index !== key;
            });

            return {
                tasks: filteredItems
            }
        })
    }

    render() {
        return (
            <AppProvider value={{
                tasks: this.state.tasks,
                actions: {
                    addNewTask: this.handleAddNewTask,
                    deleteTask: this.handleDeleteTask
                }
            }}>
                <AppNavigator/>
            </AppProvider>
        );
    }
}
