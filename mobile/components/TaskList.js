import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { AppConsumer } from '../components/Context';
import TaskListItem from './TaskListItem';
import TaskListHeader from './TaskListHeader';
import TaskListItemAddButton from './TaskListItemAddButton';

class TaskList extends Component {

    render() {
        let tasks = this.props.appContext.tasks;

        return (
            <React.Fragment>
            { tasks.map((item, index) =>
                    <View style={styles.container}>
                        <TaskListHeader/>
                        <TaskListItem/>
                        <TaskListItemAddButton/>
                    </View>
                )
            }
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 15,
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