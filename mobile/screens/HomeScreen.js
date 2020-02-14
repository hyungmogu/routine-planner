import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';

import { AppConsumer } from '../components/Context';
import TaskAddButton from '../components/TaskAddButton';

import TaskList from '../components/TaskList';

class HomeScreen extends Component {

    render() {
        return (
            <SafeAreaView style={styles.safeViewContainer}>
                <TaskAddButton onPress={() => navigate('AddNewChat')}/>
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
        flex: 1,
        margin: 15
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