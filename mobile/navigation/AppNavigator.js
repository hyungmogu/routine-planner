import { Platform } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';

const MainAppNavigation = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
},
{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerShown: false,
        headerTitleAlign: 'center',
        headerStyle: {
            elevation: 0,
            borderBottomWidth: Platform.OS === 'ios' ? 0.5 : 1,
            borderBottomColor: '#E6E6E7'
        },
        headerTitleStyle: {
            fontSize: 15,
            fontWeight: 'bold'
        },
        headerBackTitleVisible: false
    }
});

const AppNavigator = createAppContainer(MainAppNavigation);

export default AppNavigator;