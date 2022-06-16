import React, {Suspense} from 'react';
import {Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import PortfolioAssetsList from './components/PortfolioAssetsList/PortfolioAssetsList';

const PortfolioScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Text
        style={{
          fontFamily: 'Poppins',
          color: 'white',
          fontSize: 25,
          paddingHorizontal: 10,
        }}>
        Portfolio
      </Text>
      <Suspense
        fallback={<Text style={{color: 'white'}}>Loading Please Wait!</Text>}>
        <PortfolioAssetsList />
      </Suspense>
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

export default PortfolioScreen;
