import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';

import { AppConsumer } from '../components/Context';
import TaskAddButton from '../components/TaskAddButton';

import TaskList from '../components/TaskList';

class HomeScreen extends Component {

    render() {
        let addNewTask = this.props.appContext.actions.addNewTask;

        return (
            <SafeAreaView style={styles.safeViewContainer}>
                <TaskAddButton onPress={addNewTask}/>
                <ScrollView style={styles.container}>
                    <TaskList/>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    safeViewContainer: {
        flex: 1,
        backgroundColor: '#F9F6F7'
    },
    container: {
        marginTop: 15,
        flex: 1
    }
});


export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <HomeScreen
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));