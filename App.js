/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  Platform,
  SafeAreaView, 
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Barang from "./Component/Barang";

export default class App extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="grey" />
        <Text>TUGAS 2 REACT NATIVE</Text>
        <Barang namabelanja="===============Total Belanja===============" />
      </View>
    );
  }
}