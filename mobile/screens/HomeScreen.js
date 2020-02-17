import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, KeyboardAvoidingView, View } from 'react-native';

import { AppConsumer } from '../components/Context';
import TaskAddButton from '../components/TaskAddButton';

import TaskList from '../components/TaskList';
import TimePickerModal from '../components/TimePickerModal';

class HomeScreen extends Component {

    scrollViewRef = React.createRef();

    render() {
        let addNewTask = this.props.appContext.actions.addNewTask;
        let showTimePicker = this.props.appContext.timePicker.show;
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.safeViewContainer}>
                    <KeyboardAvoidingView
                        style={styles.contentContainer}
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        enabled
                    >
                        <ScrollView
                            style={styles.scrollViewContainer}
                            ref={this.scrollViewRef}
                        >
                            <TaskList/>
                        </ScrollView>
                        <TaskAddButton onPress={() => addNewTask(this.scrollViewRef)}/>
                    </KeyboardAvoidingView>
                </SafeAreaView>
                { showTimePicker ? <TimePickerModal/> : <View></View> }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    safeViewContainer: {
        flex: 1,
        backgroundColor: '#F9F6F7'
    },
    contentContainer: {
        flex: 1
    },
    scrollViewContainer: {
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