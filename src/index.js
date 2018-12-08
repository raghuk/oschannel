import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  note: {
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center'
  }
});


class Main extends Component {
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

    return (
      <View style={styles.container}>
        <Text style={styles.note}>{isReady ? 'Hello World!' : 'getting ready...'}</Text>
      </View>
    );
  }
}

export default Main;
