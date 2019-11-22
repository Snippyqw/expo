import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import SomeScreen from './screens/SomeScreen';
import RegScreen from './screens/RegScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import React from 'react';
import i18n from './i18n';
//import db from './db'

const StackNavigator = createStackNavigator({
  Home: {
        screen: HomeScreen, 
        navigationOptions: {header: null},
    },
  /*Some: {
    screen: SomeScreen, 
    navigationOptions: {header: null},
    },*/
  Reg: {
      screen: RegScreen,
      navigationOptions:{title: 'Regisztráció',
                        headerStyle: {
                            backgroundColor: '#rgb(66, 65, 96)',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {fontWeight: 'bold',},
        },
    }
  }
);

const TabNavigator = createBottomTabNavigator({
  Some: {
    screen: SomeScreen, 
    navigationOptions:{
      tabBarLabel:i18n.t('menu'),
      tabBarIcon: ({tintcolor}) => (<Icon name={'menu'} color={tintcolor} size={24}/>)
    }
    },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: i18n.t('settin'),
      tabBarIcon: ({tintcolor}) => (<Icon name={'cog'} color={tintcolor} size={24}/>)
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: i18n.t('prof'),
      tabBarIcon: ({tintcolor}) => (<Icon name={'user'} color={tintcolor} size={24}/>)
    },
  }
},
{
  order: ['Some', 'Settings', 'Profile',],
  tabBarOptions:{
    activeTintColor: '#rgb(66, 65, 96)',
    inactiveTintColor: 'lightgray',
    showIcon: true,
    
    
  }
}
);

const AppNavigator = createSwitchNavigator({
  Stack: StackNavigator,
  Tab: TabNavigator,
}, {
  initialRouteName: 'Stack',
})

export default createAppContainer(AppNavigator);




