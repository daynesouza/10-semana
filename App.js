
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useFonts, DotGothic16_400Regular } from '@expo-google-fonts/dotgothic16';
import React, { useEffect, useCallback } from 'react';

import mock from './src/mocks/store';

import * as SplashScreen from 'expo-splash-screen';

import Home from './src/pages/Home';

export default function App() {
  const [fontCarregada] = useFonts({
    'dotGothic': DotGothic16_400Regular,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontCarregada) {
      await SplashScreen.hideAsync();
    }
  }, [fontCarregada]);

  if (!fontCarregada) {
    return null;
  }


  return (
    <SafeAreaView style={style.body} onLayout={onLayoutRootView}>
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

