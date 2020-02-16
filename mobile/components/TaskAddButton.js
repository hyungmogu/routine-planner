import React, { Component } from 'react';
import { StyleSheet , TouchableOpacity} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

class TaskAddButton extends Component {
    render() {
        const {
            onPress
        } = this.props;

        return (
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Ionicons name="ios-add" size={50} style={{color: 'white'}}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        zIndex: 1,
        backgroundColor: '#FF971D',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#F9F6F7',
        borderRadius: 200,
        alignSelf: 'flex-end',
        bottom: 0,
        right: 0,
        margin: 20,
        width: 60,
        height: 60
    }
});

export default TaskAddButton;