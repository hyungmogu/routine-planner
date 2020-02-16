import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, Modal, Text } from 'react-native';

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
                        <View style={styles.container}>
                            <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: 15
                                }}
                            >
                                <Text style={{
                                        flex: 1,
                                        fontWeight: 'bold',
                                        textAlign: 'center'
                                    }}
                                >
                                    Date Time Picker Modal
                                </Text>
                            </View>
                        </View>
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