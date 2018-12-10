import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StatusBar, SafeAreaView, ImageBackground, NetInfo } from 'react-native';

import MainNavigator from './navigation';
import { actions as appActions } from '../modules/app';

const splashImage = require('../../assets/images/splash.png');

class Setup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false
    };
  }

  componentDidMount() {
    NetInfo.addEventListener('connectionChange', this.handleConnectionChange);

    setTimeout(() => this.setState({ isReady: true }), 4000);
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this.handleConnectionChange);
  }

  handleConnectionChange = (connectionInfo) => {
    const { appActions } = this.props;
    appActions.connectionState(connectionInfo);
  }

  render() {
    const { isReady } = this.state;

    const loadingInfo = (
      <ImageBackground
        imageStyle={{ resizeMode: 'cover' }}
        style={{ flex: 1, justifyContent: 'center' }}
        source={splashImage}
      />
    );

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#372737' }}>
        <StatusBar translucent barStyle="light-content" backgroundColor="rgba(0, 0, 0, 0.20)" />
        { isReady ? <MainNavigator uriPrefix="/oschannel" /> : loadingInfo }
      </SafeAreaView>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  appActions: bindActionCreators(appActions, dispatch)
});

export default connect(null, mapDispatchToProps)(Setup);
