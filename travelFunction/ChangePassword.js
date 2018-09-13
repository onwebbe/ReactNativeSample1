/**
 * User Info Page
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Switch} from 'react-native';
import {themeing} from '../themeingStyle/themeing';
import Icon from "react-native-vector-icons/Feather"
import topMenuConfig from '../FunctionTopMenu';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export class ChangePassword extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return topMenuConfig(navigation, '修改密码', true, false)
    };
  constructor(props) {
    super(props);
    this.showPassword = this.showPassword.bind(this);
    this.confirmChange = this.confirmChange.bind(this);
    this.state = {
        userInfo: {
            mobileNo: '13901958937',
            userName: 'Tai',
            nationality: 'China',
            age: 31,
            gender: 'M',
            headImage: '../images/IMG_20180224_094324.jpg'
        },
        password: '',
        confirmPassword: '',
        oldPassword: '',
        showPassword: false,
        validationErrorMsg: '',
        validationErrorStyle: {},
        oldPwdStyle: {},
        newPwdStyle: {},
    }
  }
  render() {
    return (
      <View style={themeing.pageContainer}>
        <View style={[themeing.pageBody, styles.pageBody]}>
          <TextInput
            style={[this.state.oldPwdStyle, {marginTop: 20, width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white'}]}
            placeholder="  请输入旧的密码"
            placeholderTextColor="grey"
            textContentType="password"
                autoCapitalize='none'
                secureTextEntry={!this.state.showPassword}
                onChangeText={(oldPassword) => this.setState({oldPassword})}
          />
          <TextInput
            style={[this.state.newPwdStyle, {marginTop: 20, width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white'}]}
            placeholder="  请输入新的密码"
            placeholderTextColor="grey"
            textContentType="password"
                autoCapitalize='none'
                secureTextEntry={!this.state.showPassword}
                onChangeText={(password) => this.setState({password})}
          />
          <TextInput
            style={[this.state.newPwdStyle, {marginTop: 20, width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white'}]}
            placeholder="  请再次输入新的密码"
            placeholderTextColor="grey"
            textContentType="password"
                autoCapitalize='none'
                secureTextEntry={!this.state.showPassword}
                onChangeText={(confirmPassword) => this.setState({confirmPassword})}
          />
          <Text size="12" style={[this.state.validationErrorStyle, {width: '90%', textAlign: 'left', height: 35, lineHeight: 35}, themeing.errorFont]}>{this.state.validationErrorMsg}</Text>
          <View style={{width: '90%', flexDirection: 'row', alignItems: 'flex-start', textAlign: 'left', marginBottom: 20}}>
            <Text style={[{height: 35, lineHeight: 35}, themeing.fontColor]}>显示密码：</Text>
            <View>
              <Switch value={this.state.showPassword} onValueChange={(isShow) => this.showPassword(isShow)}>
              </Switch>
            </View>
          </View>
          <Icon.Button name="check" backgroundColor="#ac66d5" onPress={() => this.confirmChange()}>
            <Text style={{fontFamily: 'Arial', fontSize: 15, width: '80%', color: 'white', textAlign: 'center'}}>确 认 修 改</Text>
          </Icon.Button>
        </View>
      </View>
    );
  }
  showPassword(isShow) {
    this.setState({showPassword: isShow});
  }
  confirmChange() {
    // this.setState({password : this.state.password.trim()});
    // this.setState({confirmPassword : this.state.confirmPassword.trim()});
    // this.setState({oldPassword : this.state.oldPassword.trim()});
    if (this.state.password == '' || this.state.confirmPassword == '') {
      this.setState({
        validationErrorMsg: '请输入新密码',
        newPwdStyle : { 'borderColor': 'red', 'borderWidth': 1 },
        validationErrorStyle: { marginTop: 15, marginBottom: 15 }
      });
      return;
    }
    if (this.state.password != this.state.confirmPassword) {
      this.setState({
        validationErrorMsg: '新密码和再次输入的新密码不一致',
        newPwdStyle : { 'borderColor': 'red', 'borderWidth': 1 },
        validationErrorStyle: { marginTop: 15, marginBottom: 15 }
      });
      return;
    }
    this.setState({
      oldPwdStyle: {'borderColor': 'red', 'borderWidth': 0 },
      newPwdStyle : {'borderColor': 'red', 'borderWidth': 0 },
      validationErrorStyle: { marginTop: 0, marginBottom: 0 },
      validationErrorMsg: ''
    });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: 20
  },
  userInfoText: {
    paddingTop: 5,
    paddingBottom: 5
  },
  pageBody: {
    flex: 1,
    marginTop: 10
  },
  formText: {
      marginTop: 20
  }
});
