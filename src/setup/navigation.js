import React from 'react';
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';

import { Dimensions, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import Sidebar from '../components/sidebar';
import { About, LiveTv } from '../modules/info';

const deviceWidth = Dimensions.get('window').width;

const AboutTab = createStackNavigator({
  About: {
    screen: About,
    path: '/about',
    navigationOptions: ({ navigation }) => ({
      title: 'About Us',
      headerTintColor: '#f9f9f9',
      headerLeft: (
        <Button
          title=""
          buttonStyle={{ backgroundColor: '#372737', padding: 3 }}
          icon={{ name: 'md-menu', type: 'ionicon', color: '#fdfdfd' }}
          onPress={() => navigation.openDrawer()}
        />
      ),
      headerStyle: {
        backgroundColor: '#372737'
      },
      headerTitleStyle: {
        color: '#fdfdfd', fontSize: 20, fontWeight: 'normal', fontFamily: 'Titillium', marginHorizontal: 5
      }
    })
  }
});

const LiveTab = createStackNavigator({
  LiveTv: {
    screen: LiveTv,
    path: '/live',
    navigationOptions: ({ navigation }) => ({
      title: 'Godlywood Studio - Live',
      headerTintColor: '#f9f9f9',
      headerLeft: (
        <Button
          title=""
          buttonStyle={{ backgroundColor: '#372737', padding: 3 }}
          icon={{ name: 'md-menu', type: 'ionicon', color: '#fdfdfd' }}
          onPress={() => navigation.openDrawer()}
        />
      ),
      headerStyle: {
        backgroundColor: '#372737'
      },
      headerTitleStyle: {
        color: '#fdfdfd', fontSize: 20, fontWeight: 'normal', fontFamily: 'Titillium', marginHorizontal: 5
      }
    })
  }
});


const MainNavigator = createDrawerNavigator(
  {
    LiveTab: {
      screen: LiveTab,
      path: '/live',
      navigationOptions: () => ({
        drawerLabel: 'Live TV',
        drawerIcon: <Icon name="ios-videocam" type="ionicon" color="#372737" size={28} />
      })
    },
    AboutTab: {
      screen: AboutTab,
      path: '/about',
      navigationOptions: () => ({
        drawerLabel: 'About Us',
        drawerIcon: <Icon name="md-ribbon" type="ionicon" color="#372737" size={28} />
      })
    }
  },
  {
    drawerWidth: deviceWidth * 0.82,
    drawerPosition: 'left',
    initialRouteName: 'AboutTab',
    contentComponent: (props) => <View style={{ flex: 1 }}><Sidebar {...props} /></View>,
    drawerBackgroundColor: '#fdfdfd'
  }
);

export default createAppContainer(MainNavigator);
