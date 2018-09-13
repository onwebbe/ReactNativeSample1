/**
 * Login account selection
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {AccountCard} from './AccontCard'
import Icon from "react-native-vector-icons/Feather"

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export class AccountSelection extends Component<Props> {
  
  constructor(props) {
    super(props);
    this.addNewAccount = this.addNewAccount.bind(this);
  }
  render() {
    return (
      <View style={[styles.container, {width: '100%', flex: 1, flexDirection: 'column'}]}>
        <Text style={[styles.selectAccountTitle, {fontSize: 17}]}>请选择账号</Text>
        <AccountCard navigation={this.props.navigation}/>
        <AccountCard navigation={this.props.navigation}/>
        <TouchableHighlight style={{position: 'absolute', bottom: 10}} onPress={() => {this.addNewAccount()}}>
          <View style={{alignItems: 'center'}}>
            <Icon name="plus" size={25} color="white"/>
            <Text style={styles.selectOtherAccount}>&lt;选择其他账号&gt;</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
  addNewAccount() {
    const navigation  = this.props.navigation;
    navigation.navigate('AddNewAccount');
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10
  },
  account: {
    paddingTop: 10,
    paddingBottom: 10
  },
  selectAccountTitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 20,
    marginBottom: 20
  },
  selectOtherAccount: {
    color: '#fff',
    fontSize: 14,
    marginTop: 10
  }
});
