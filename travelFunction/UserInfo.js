/**
 * User Info Page
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image, TouchableHighlight} from 'react-native';
import Icon from "react-native-vector-icons/Feather"
import {themeing} from '../themeingStyle/themeing';
import topMenuConfig from '../FunctionTopMenu';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export class UserInfo extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return topMenuConfig(navigation, '用户信息', true, false)
    };
  constructor(props) {
    super(props);
    this.listItemClicked = this.listItemClicked.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
        userInfo: {
            mobileNo: '13901958937',
            userName: 'Tai',
            nationality: 'China',
            age: 31,
            gender: 'M',
            headImage: '../images/IMG_20180224_094324.jpg'
        },
        userFunctionInfo: [ {
            key: "changepass",
            label: '修改密码',
            action: 'ChangePassword'
          }, {
            key: "sms",
            label: '收到短信/新短信',
            value: '10 / 5',
            action: 'AddNewAccount'
          }
        ]
    }
  }
  render() {
    return (
      <View style={[styles.container, themeing.functionContainerBackground]}>
        <View style={{alignItems: 'center', flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 15, paddingLeft: 20, paddingRight: 20}}>
            <Image style={{height: 100, width: 100, borderRadius: 50}} source={require('../images/IMG_20180224_094324.jpg')}></Image>
            <View style={{flexDirection: 'column', paddingLeft: 20}}>
                <Text style={[themeing.fontColor, styles.userInfoText]}>手机: 13901958937</Text>
                <Text style={[themeing.fontColor, styles.userInfoText]}>姓名: tai</Text>
                <Text style={[themeing.fontColor, styles.userInfoText]}>国籍: tai</Text>
                <View style={[{flexDirection: 'row', alignItems: 'stretch'}, styles.userInfoText]}>
                  <Text style={[themeing.fontColor, {flex:1}]}>性别: M</Text>
                  <Text style={[themeing.fontColor, {flex:1}]}>年龄: tai</Text>
                </View>
            </View>
            <View style={{position: 'absolute', right: 20, top: 40}}>
              <Icon name="edit" color="white" size={20}/>
            </View>
        </View>
        <View style={[{flex: 1}]}>
          <FlatList
            data={this.state.userFunctionInfo}
            renderItem={this.renderListItem} style={{width: '100%'}}></FlatList>
          <View style={{marginBottom: 15}}>
            <Icon.Button name="log-out" backgroundColor="#e567b1" onPress={() => this.logout()}>
              <Text style={{fontFamily: 'Arial', fontSize: 15, width: '80%', color: 'white', textAlign: 'center'}}>注销登录</Text>
            </Icon.Button>
          </View>
        </View>
      </View>
    );
  }
  renderListItem({item}) {
    return (
      <TouchableHighlight onPress={() => { this.listItemClicked(this.props.navigation, item); }}>
        <View style={[themeing.standardOnelineListRow, {alignItems: 'stretch'}]}>
          <Text style={[themeing.fontColor, {flex: 1, alignSelf: 'center', fontSize: 16}]}>{item.label}</Text>
          <Text style={[themeing.fontColor, {flex: 1, alignSelf: 'center', fontSize: 16}]}>{item.value}</Text>
          {
            item.action ? 
              <View style={{position: 'absolute', right: 20, alignSelf: 'center'}}>
              <Icon name="chevron-right" color="white" size={20}/>
            </View>
            : <View></View>
          }
        </View>
      </TouchableHighlight>
    );
  }
  listItemClicked(navigation, item) {
    navigation.navigate(item.action);
  }
  logout() {
    this.props.navigation.popToTop();
    this.props.navigation.navigate('firstScreen');
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
  }
});

