import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, ScrollView, ActivityIndicator, ImageBackground, Text, TouchableOpacity, Alert, NetInfo } from 'react-native';
import { Card } from 'react-native-elements';

import { isEmpty } from 'lodash';
import { getTime } from '../../../helpers';

import { loadShows } from '../store/actions';
import { getUpdatedAt, getShows } from '../store/selectors';

import styles from './styles';

const loaderImage = require('../../../../assets/images/loader.png');


class Shows extends Component {
    static propTypes = {
      shows: PropTypes.arrayOf(PropTypes.object),
      updatedAt: PropTypes.number,
      loadShows: PropTypes.func.isRequired
    }

    static defaultProps = {
      shows: [],
      updatedAt: 0
    }

    constructor(props) {
      super(props);

      this.state = {
        isReady: false,
        isConnected: true
      };
    }

    componentDidMount() {
      const { shows, updatedAt, loadShows } = this.props;

      NetInfo.isConnected.fetch().then((isConnected) => {
        if (isConnected) {
          const diff = getTime(new Date(updatedAt), new Date());

          if (isEmpty(shows) || (diff > 2)) {
            loadShows();
          } else {
            console.log('shows already loaded, loading from props');
            this.setState({ isReady: true, isConnected: true });
          }
        } else {
          this.setState({ isReady: true, isConnected: false });
        }

        return isConnected;
      }).catch((e) => { console.log(e); });
    }

    componentWillReceiveProps() {
      this.setState({ isReady: true, isConnected: true });
    }

    onCardPress = (item) => {
      const { navigation } = this.props;
      navigation.navigate('ShowList', { show: item });
    }

    renderList = (items) => {
      return (
        <View style={styles.listView}>
          {items.map((i) => this.renderItem(i))}
        </View>
      );
    }

    renderItem = (item) => {
      const count = item.playlists.length;

      return (
        <TouchableOpacity key={item.title} onPress={() => this.onCardPress(item)}>
          <Card
            image={{ uri: item.thumbnailUrl }}
            imageStyle={styles.cardImage}
            containerStyle={styles.cardContainer}
          >
            <Text numberOfLines={1} style={styles.cardTitle}>{item.title}</Text>
            <Text numberOfLines={1} style={styles.cardSubtitle}>{count} Shows</Text>
          </Card>
        </TouchableOpacity>
      );
    }

    showAlert = () => {
      Alert.alert(
        'Internet Error',
        'Please check your internet connection and try again later.',
        [{ text: 'OK', onPress: () => console.log('OK') }],
        { cancelable: false }
      );
    }

    render() {
      const { isReady, isConnected } = this.state;
      const { shows } = this.props;

      const loadingInfo = (
        <ImageBackground
          imageStyle={{ resizeMode: 'cover' }}
          style={styles.loader}
          source={loaderImage}
        >
          <ActivityIndicator size="large" color="#5C5679" />
        </ImageBackground>
      );

      const loadContent = isConnected ? this.renderList(shows) : this.showAlert();

      return (
        <ScrollView style={styles.content}>
          {isReady ? loadContent : loadingInfo}
        </ScrollView>
      );
    }
}


const mapStateToProps = (state) => ({
  shows: getShows(state),
  updatedAt: getUpdatedAt(state)
});

function mapDispatchToProps(dispatch) {
  return {
    loadShows: () => dispatch(loadShows())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Shows);
