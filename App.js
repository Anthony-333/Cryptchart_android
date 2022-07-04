// import { StatusBar } from "expo-status-bar";
import React, {useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';
import WatchlistProvider from './src/Contexts';
import {RecoilRoot} from 'recoil';
import {useFonts, Inter_900Black} from '@expo-google-fonts/inter';
import {LogBox} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <NavigationContainer
      theme={{
        colors: {
          background: '#121212',
        },
      }}>
      <RecoilRoot>
        <WatchlistProvider>
          <GestureHandlerRootView style={styles.container}>
            <Navigation />
            <StatusBar style="light" />
          </GestureHandlerRootView>
        </WatchlistProvider>
      </RecoilRoot>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
