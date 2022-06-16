import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  text: {
    color: 'white',
    marginRight: 5,
  },
  coinContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#242424',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  rank: {
    backgroundColor: '#585858',

    color: 'white',
  },
  rankContainer: {
    backgroundColor: '#585858',
    paddingHorizontal: 1,
    borderRadius: 5,
    marginRight: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    width: 20,
  },
});

export default styles;
