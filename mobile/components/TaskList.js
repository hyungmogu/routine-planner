import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { AppConsumer } from '../components/Context';
import TaskItemsList from './TaskItemsList';
import TaskListHeader from './TaskListHeader';
import TaskListItemAddButton from './TaskListItemAddButton';

class TaskList extends Component {

    render() {
        let tasks = this.props.appContext.tasks;
        let addNewTaskItem = this.props.appContext.actions.addNewTaskItem;
        return (
            <React.Fragment>
            { tasks.map((task, key) =>
                <View key={key} style={styles.container}>
                    <TaskListHeader taskKey={key}/>
                    <TaskItemsList taskKey={key}/>
                    <TaskListItemAddButton onPress={() => addNewTaskItem(key)}/>
                </View>
            )}
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15
    }
});

export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <TaskList
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));