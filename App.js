import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import Main from './src';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f5f8'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false
    };
  }

  componentDidMount = () => {
    setTimeout(() => this.setState({ isReady: true }), 2000);
  };

  render() {
    const { isReady } = this.state;

    if (!isReady) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Setting up app...</Text>
          <ActivityIndicator size="large" color="#05c3f9" />
        </View>
      );
    }

    return <Main />;
  }
}
