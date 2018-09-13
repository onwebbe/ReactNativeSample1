/**
 * Account Card
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Image, View, Text, TouchableHighlight} from 'react-native';
import {themeing} from '../themeingStyle/themeing';

type Props = {};
export class AccountCard extends Component<Props> {
  constructor(props) {
    super(props);
    this.goTravelList = this.goTravelList.bind(this);
  }
  render() {
    return (
      <TouchableHighlight onPress={() => this.goTravelList()}>
        <View style={styles.accountCardContainer}>
          <Image style={styles.accountSelectionImage} source={require('../images/IMG_20180224_094324.jpg')}/>
          <Text style={styles.accountCardName}>Tai</Text>
          <Text style={styles.accountNumber}>13910192837</Text>
        </View>
      </TouchableHighlight>
    );
  }
  goTravelList() {
    const navigation  = this.props.navigation;
    navigation.navigate('TravelList');
  }
}

const styles = StyleSheet.create({
    accountCardContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10
    },
    accountSelectionImage: {
      width: 90,
      height: 90,
      borderRadius: 45,
      borderWidth: 1,
      borderColor: '#808080'
    },
    accountCardName: {
      color: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 14,
      paddingTop: 13
    },
    accountNumber: {
      color: '#808080',
      fontSize: 12,
      paddingTop: 5
    }
  });
  
