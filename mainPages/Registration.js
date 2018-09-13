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
export class Registration extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return {
          title: '注册新账号',
          headerStyle: themeing.pageHeader,
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          },
          headerLeft: (
          <Icon name="arrow-left" color="white" size={25} onPress={() => navigation.goBack() }/>
          )
      }
    };
  constructor(props) {
    super(props);
    this.verifyPassword = this.verifyPassword.bind(this);
    this.processRegist = this.processRegist.bind(this);
    this.verifyMandatoryField = this.verifyMandatoryField.bind(this);
    this.formValidation = this.formValidation.bind(this);
    
    
    this.state = { mobileNumber: '', password: '', confirmPassword: '' };
    this.errorTextStyle = {borderColor: 'red', borderWidth: 2};
    this.normalTextStyle = {borderColor: 'white', borderWidth: 0};
    this.state.currentPwdStyle = {};
    this.state.currentMobileStyle = {};
    this.state.showPassword = false;
  }
  render() {
    return (
      <View style={themeing.pageContainer}>
        <View style={[themeing.pageBody, styles.pageBody]}>
          <Text style={{width: '90%', color: 'white', textAlign: 'left'}}>欢迎注册</Text>
          <TextInput
            style={[{marginTop: 20, width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white'}, this.state.currentMobileStyle]}
            placeholder = "  请输入手机号码"
            placeholderTextColor = "grey"
            value = {this.state.mobileNumber}
            onChangeText={(mobileNumber) => this.setState({mobileNumber})}
            textContentType="username"
            keyboardType="number-pad"
          />
          <TextInput
            style={[{marginTop: 20, width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white'}, this.state.currentPwdStyle]}
            placeholder="  请输入密码"
            placeholderTextColor="grey"
            value = {this.state.password}
            onChangeText={(password) => {this.setState({password});}}
            textContentType="password"
            autoCapitalize='none'
            secureTextEntry={!this.state.showPassword}
          />
          <TextInput
            style={[{marginTop: 20, width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white'}, this.state.currentPwdStyle]}
            placeholder="  请再次输入密码"
            placeholderTextColor="grey"
            value = {this.state.confirmPassword}
            onChangeText={(confirmPassword) => {this.setState({confirmPassword});}}
            textContentType="password"
            autoCapitalize='none'
            secureTextEntry={this.state.showPassword}
          />
          <View style={{display: 'flex', flexDirection: 'row', width: '90%', alignItems: 'baseline', marginTop: 20, marginBottom: 20}}>
            <Text style={[{height: 35, lineHeight: 35}, themeing.fontColor]}>显示密码：</Text>
            <View>
              <Switch value={this.state.showPassword} onValueChange={(isShow) => this.showPassword(isShow)}>
              </Switch>
            </View>
          </View>
          <Text style={{color: 'red'}}></Text>
          <Icon.Button name="plus-square" backgroundColor="#ac66d5" onPress={() => { this.formValidation()? this.processRegist(): null; }}>
            <Text style={{fontFamily: 'Arial', fontSize: 15, width: '80%', color: 'white', textAlign: 'center'}}>注    册</Text>
          </Icon.Button>
        </View>
      </View>
    );
  }
  showPassword(isShowPassword) {
      this.setState({showPassword: isShowPassword});
  }
  verifyPassword() {
      var pwd = this.state.password;
      var pwdAgain = this.state.confirmPassword;
      console.log("pwd:" + pwd + ":again:" + pwdAgain);
      if (pwd == pwdAgain) {
        this.setState({currentPwdStyle: this.normalTextStyle});
      } else {
        this.setState({currentPwdStyle: this.errorTextStyle});
      }
  }
  verifyMandatoryField() {
      var validation = true;
      if (this.state.mobileNumber == "") {
        this.setState({currentMobileStyle: this.errorTextStyle});
        validation = false;
      } else {
        this.setState({currentMobileStyle: this.normalTextStyle});
      }
      if (this.state.password == "" || this.state.confirmPassword == "") {
        this.setState({currentPwdStyle: this.errorTextStyle});
        validation = false;
      } else {
        this.setState({currentPwdStyle: this.normalTextStyle});
      }
      return validation;
  }
  formValidation() {
      return this.verifyMandatoryField() && this.verifyPassword();
  }
  processRegist() {

  }
  
}

const styles = StyleSheet.create({
  pageHeader: {
    fontSize: 16,
    paddingTop: 25,
    paddingBottom: 10,
    color: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    height: 55
  },
  pageBody: {
      flex: 1,
      marginTop: 20
  },
  formText: {
      marginTop: 20
  }
});
