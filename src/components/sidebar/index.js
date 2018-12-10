import React from 'react';
import { DrawerItems, SafeAreaView } from 'react-navigation';

import { View, ScrollView, Image } from 'react-native';

import styles from './styles';

const logoImage = require('../../../assets/images/logo-cover.png');
const coverImage = require('../../../assets/images/drawer-cover.png');

const Sidebar = (props) => (
  <View style={styles.view}>
    <SafeAreaView style={styles.view} forceInset={{ top: 'always', horizontal: 'never' }}>
      <Image square style={styles.drawerImage} source={logoImage} />
      <Image style={styles.drawerCover} source={coverImage} />

      <ScrollView style={styles.listView}>
        <DrawerItems {...props} activeTintColor="#b5342b" activeBackgroundColor="#ede5dc" style={styles.list} labelStyle={styles.label} />
      </ScrollView>
    </SafeAreaView>
  </View>
);

export default Sidebar;
