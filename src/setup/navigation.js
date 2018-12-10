import React from 'react';
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';

import { Dimensions, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import Sidebar from '../components/sidebar';
import { About, LiveTv } from '../modules/info';
import { Shows, ShowList, ShowPlaylist, ShowPlayer } from '../modules/shows';

const deviceWidth = Dimensions.get('window').width;


const ShowsTab = createStackNavigator({
  Shows: {
    screen: Shows,
    path: '/shows',
    navigationOptions: ({ navigation }) => ({
      title: 'Shows',
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
        color: '#fdfdfd', fontSize: 20, fontWeight: 'normal', fontFamily: 'Opensans', marginHorizontal: 5
      }
    })
  },
  ShowList: {
    screen: ShowList,
    path: '/shows/list',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.show.title}`,
      headerTintColor: '#f9f9f9',
      headerStyle: {
        backgroundColor: '#372737'
      },
      headerTitleStyle: {
        color: '#fdfdfd', fontSize: 20, fontWeight: 'normal', fontFamily: 'Opensans', marginHorizontal: 5
      },
      headerBackTitleStyle: {
        color: '#fdfdfd'
      }
    })
  },
  ShowPlaylist: {
    screen: ShowPlaylist,
    path: '/shows/list/info',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.playlist.title}`,
      headerTintColor: '#f9f9f9',
      headerStyle: {
        backgroundColor: '#372737'
      },
      headerTitleStyle: {
        color: '#fdfdfd', fontSize: 20, fontWeight: 'normal', fontFamily: 'Opensans', marginHorizontal: 5
      },
      headerBackTitleStyle: {
        color: '#fdfdfd'
      }
    })
  },
  ShowPlayer: {
    screen: ShowPlayer,
    path: '/show/player',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.video.title}`,
      headerTintColor: '#f9f9f9',
      headerStyle: {
        backgroundColor: '#372737'
      },
      headerTitleStyle: {
        color: '#fdfdfd', fontSize: 20, fontWeight: 'normal', fontFamily: 'Opensans', marginHorizontal: 5
      },
      headerBackTitleStyle: {
        color: '#fdfdfd'
      }
    })
  }
});

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
        color: '#fdfdfd', fontSize: 20, fontWeight: 'normal', fontFamily: 'Opensans', marginHorizontal: 5
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
        color: '#fdfdfd', fontSize: 20, fontWeight: 'normal', fontFamily: 'Opensans', marginHorizontal: 5
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
    ShowsTab: {
      screen: ShowsTab,
      path: '/shows',
      navigationOptions: () => ({
        drawerLabel: 'Shows',
        drawerIcon: <Icon name="ios-film" type="ionicon" color="#372737" size={28} />
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
