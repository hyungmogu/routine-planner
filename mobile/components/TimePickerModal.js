import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, Modal, Text } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

class TimePickerModal extends Component {
    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={true}
                >
                    <SafeAreaView style={styles.safeViewContainer}>
                        <DateTimePicker
                            testID={"dateTimePicker-" + itemKey}
                            value={item.timestamp ? new Date(item.timestamp * 1000) : new Date()}
                            mode={'time'}
                            is24Hour={true}
                            display="default"
                            onChange={(val) => updateAlarm(taskKey, itemKey, item, val)}
                        />
                    </SafeAreaView>
                </Modal>
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
    }
});

export default TimePickerModal;