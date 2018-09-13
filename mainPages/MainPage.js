/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {themeing} from '../themeingStyle/themeing';

import {AccountSelection} from './AccountSelection'
import Icon from "react-native-vector-icons/Feather"

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export class MainPage extends Component<Props> {
  render() {
    let navigation = this.props.navigation;
    return (
      <View style={themeing.pageContainer}>
        <Text style={[themeing.pageHeader, styles.pageHeader]}>Welcome to React Native!</Text>
        <View style={[themeing.pageBody, styles.pageBody]}>
          <AccountSelection navigation={navigation}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    pageHeader: {
      fontSize: 30,
      height: 120,
      lineHeight: 100
    },
    pageBody: {
      fontSize: 20,
      margin: 10,
    }
});