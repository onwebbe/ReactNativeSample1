/**
 * Add New account
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Switch} from 'react-native';
import {themeing} from '../themeingStyle/themeing';
import Icon from "react-native-vector-icons/Feather"

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export class AddNewAccount extends Component<Props> {
  static navigationOptions = ({navigation}) => {
      return {
        title: '添加账号',
        headerStyle: themeing.pageHeader,
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
        headerLeft: (
        <Icon name="arrow-left" color="white" size={25} onPress={() => navigation.navigate("firstScreen") }/>
        )
    }
  };
  constructor(props) {
    super(props);
    this.showPassword = this.showPassword.bind(this);
    this.registAccount = this.registAccount.bind(this);
    
    this.state = {
        showPassword: false
    }
  }
  render() {
    return (
      <View style={themeing.pageContainer}>
        <View style={[themeing.pageBody, styles.pageBody]}>
          <TextInput
            style={{marginTop: 20, width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white'}}
            placeholder="  请输入手机号码"
            placeholderTextColor="grey"
            textContentType="username"
          />
          <View style={{display: 'flex', flexDirection: 'row', width: '90%', alignItems: 'baseline', marginBottom: 20}}>
            <View style={{flex:1}}>
              <TextInput
                style={{marginTop: 20, width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white'}}
                placeholder="  请输入密码"
                placeholderTextColor="grey"
                textContentType="password"
                password={true}
                autoCapitalize='none'
                secureTextEntry={!this.state.showPassword}
              />
            </View>
            <Text style={[{height: 35, lineHeight: 35}, themeing.fontColor]}>显示密码：</Text>
            <View>
              <Switch value={this.state.showPassword} onValueChange={(isShow) => this.showPassword(isShow)}>
              </Switch>
            </View>
          </View>
          <Icon.Button name="user-plus" backgroundColor="#ac66d5">
            <Text style={{fontFamily: 'Arial', fontSize: 15, width: '80%', color: 'white', textAlign: 'center'}}>确 认 添 加</Text>
          </Icon.Button>
          <Text style={[{marginTop: 40, textDecorationLine: 'underline'}, themeing.primaryLinkFontColor]} onPress={() => this.registAccount()}>还没有账号？注册新账号</Text>
        </View>
      </View>
    );
  }
  showPassword(isShow) {
    this.setState({showPassword: isShow});
  }
  registAccount() {
      this.props.navigation.push('Registration');
  }
}

const styles = StyleSheet.create({
  pageBody: {
      flex: 1,
      marginTop: 10
  },
  formText: {
      marginTop: 20
  }
});
