import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mainscreen from './Views/Mainscreen';
import IntroScreen from './Views/IntroScreen';

export default function App() {
  const[isloaded, setIsLoaded]=useState(false);

  setTimeout(() => {
    setIsLoaded(true)
  }, 1000);
  return (
    <View style={styles.container}>
      {isloaded ? <Mainscreen />:<IntroScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
