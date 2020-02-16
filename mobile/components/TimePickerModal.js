import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, Modal, TouchableOpacity, Text, Dimensions } from 'react-native';

import { AppConsumer } from '../components/Context';
import DateTimePicker from '@react-native-community/datetimepicker';

class TimePickerModal extends Component {

    timePickerRef = React.createRef();

    render() {

        let updateAlarm = this.props.appContext.actions.updateAlarm;
        let timestamp = this.props.appContext.timePicker.timestamp;
        let taskKey = this.props.appContext.timePicker.taskKey;
        let itemKey = this.props.appContext.timePicker.itemKey;
        let show = this.props.appContext.timePicker.show;

        let {SCREEN_HEIGHT, SCREEN_WIDTH} = Dimensions.get('window');

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={true}
            >
                <View
                    style={{
                    flex: 1,
                    height: SCREEN_HEIGHT,
                    backgroundColor: 'rgba(0,0,0,.2)',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    }}
                >
                    <View
                        style={{
                            backgroundColor: 'white',
                            margin: 25,
                            paddingBottom: 40,
                            borderRadius: 10
                        }}
                    >
                        <DateTimePicker
                            style={{width:'100%'}}
                            testID={"dateTimePicker-" + itemKey}
                            value={timestamp ? new Date(timestamp * 1000) : new Date()}
                            mode={'time'}
                            is24Hour={true}
                            display="default"
                            onChange={(val) => updateAlarm(taskKey, itemKey, item, val)}
                        />
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    safeViewContainer: {
        flex: 1,
        backgroundColor: '#F9F6F7',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainer: {
        flex: 1
    }
});

export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <TimePickerModal
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));