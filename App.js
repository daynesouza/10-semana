import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useFonts, DotGothic16_400Regular } from '@expo-google-fonts/dotgothic16';
import React from 'react';

import mock from './src/mocks/store';

import AppLoading from 'expo-app-loading';
import Home from './src/pages/Home';

export default function App() {
  const [fontCarregada] = useFonts({
    'dotGothic': DotGothic16_400Regular,
  });

  if (!fontCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={style.body} >
      <StatusBar />
      <Home {...mock} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#9FABA8',
  }
})

