import { Platform, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default {
  view: {
    flex: 1
  },
  listView: {
    backgroundColor: '#f1f5f8'
  },
  drawerCover: {
    alignSelf: 'stretch',
    // resizeMode: 'cover',
    height: deviceHeight / 3.5,
    width: null,
    position: 'relative',
    marginBottom: 10
  },
  drawerImage: {
    position: 'absolute',
    left: Platform.OS === 'android' ? deviceWidth / 18 : deviceWidth / 16,
    top: Platform.OS === 'android' ? deviceHeight / 22 : deviceHeight / 16,
    width: deviceWidth * 0.7,
    height: 135,
    resizeMode: 'cover'
  },
  list: {
    marginVertical: 10
  },
  label: {
    color: '#323c46',
    fontSize: 16,
    fontFamily: 'Opensans',
    fontWeight: 'normal',
    marginLeft: 5
  }
};
