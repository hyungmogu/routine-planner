import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, Modal, TouchableOpacity, Text, Dimensions } from 'react-native';

import { AppConsumer } from '../components/Context';
import DateTimePicker from '@react-native-community/datetimepicker';

class TimePickerModal extends Component {

    state = {
        timestamp: null
    }

    componentDidMount() {
        this.setState({
            timestamp: this.props.appContext.timePicker.timestamp
        })
    }

    handleUpdateTimePicker = (timestamp) => {
        let unixTimestamp = parseInt(timestamp / 1000);
        this.setState({
            timestamp: unixTimestamp
        })
    }

    render() {

        let updateAlarm = this.props.appContext.actions.updateAlarm;
        let taskKey = this.props.appContext.timePicker.taskKey;
        let itemKey = this.props.appContext.timePicker.itemKey;
        let closeModal = this.props.appContext.actions.closeTimePickerModal;


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
                            borderRadius: 10
                        }}
                    >
                        <DateTimePicker
                            ref={this.timePickerRef}
                            style={{width:'100%'}}
                            testID={"dateTimePicker-" + itemKey}
                            value={this.state.timestamp ? new Date(this.state.timestamp * 1000) : new Date()}
                            mode={'time'}
                            is24Hour={true}
                            display="default"
                            onChange={(value) => this.handleUpdateTimePicker(value.nativeEvent.timestamp)}
                        />
                        <View style={{margin: 15, flexDirection: 'row'}}>
                            <TouchableOpacity
                                style={{
                                    borderRadius: 10,
                                    flex:1,
                                    marginRight: 5,
                                    borderColor: '#FF971D',
                                    borderWidth: 1,
                                    padding: 15
                                }}
                                onPress={() => closeModal()}
                            >
                                <Text style={{color: '#FF971D', textAlign: 'center'}} >Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    borderRadius: 10,
                                    flex:1,
                                    marginLeft: 5,
                                    backgroundColor: '#FF971D',
                                    padding: 15
                                }}
                                onPress={() => updateAlarm(taskKey, itemKey, this.state.timestamp)}
                            >
                                <Text style={{color: 'white', textAlign: 'center'}}>Select</Text>
                            </TouchableOpacity>
                        </View>
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