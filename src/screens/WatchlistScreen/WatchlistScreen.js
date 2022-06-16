import React, {useState, useEffect} from 'react';
import {
  Text,
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {useWatchlist} from '../../Contexts/WatchlistProvider';
import CoinItem from '../../components/CoinItem/CoinItem';
import {getWatchlistedCoins} from '../../services/requests';

const WatchlistScreen = () => {
  const {watchlistCoinIds} = useWatchlist();

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const transformCoinIds = () => watchlistCoinIds.join('%2C');

  const fetchWatchlistedCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const watchlistedCoinsData = await getWatchlistedCoins(
      1,
      transformCoinIds(),
    );
    setCoins(watchlistedCoinsData);
    setLoading(false);
  };

  useEffect(() => {
    if (watchlistCoinIds.length > 0) {
      fetchWatchlistedCoins();
    }
  }, [watchlistCoinIds]);

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Text
        style={{
          fontFamily: 'Poppins',
          color: 'white',
          fontSize: 25,
          paddingHorizontal: 10,
        }}>
        Watchlist
      </Text>

      <FlatList
        data={coins}
        renderItem={({item}) =>
          item.length === 0 ? (
            <Text style={{color: 'white'}}>No data</Text>
          ) : (
            <CoinItem marketCoin={item} />
          )
        }
        refreshControl={
          <RefreshControl
            refreshing={loading}
            tintColor="white"
            onRefresh={
              watchlistCoinIds.length > 0 ? fetchWatchlistedCoins : null
            }
          />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#131313',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
export default WatchlistScreen;
