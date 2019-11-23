import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    backgroundColor: Colors.white
  },
  engine: {
    position: 'absolute',
    right: 0
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  },
  highlight: {
    fontWeight: '700'
  },
  scrollView: {
    backgroundColor: Colors.lighter
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionDescription: {
    color: Colors.dark,
    fontSize: 18,
    fontWeight: '400',
    marginTop: 8
  },
  sectionTitle: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: '600'
  }
});
