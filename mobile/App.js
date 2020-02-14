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

    render() {
        return (
            <AppProvider value={{
                tasks: this.state.tasks,
                actions: {
                    addNewTask: this.handleAddNewTask
                }
            }}>
                <AppNavigator/>
            </AppProvider>
        );
    }
}
