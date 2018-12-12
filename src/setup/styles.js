import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#f1f5f8',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
});
