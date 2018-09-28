/**
 * Travel list page
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5"
import IconFeather from "react-native-vector-icons/Feather"
import {themeing} from '../themeingStyle/themeing';
import topMenuConfig from '../FunctionTopMenu'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export class TravelItemTrafficBus extends Component<Props> {
  static navigationOptions = ({navigation}) => {
    return topMenuConfig(navigation, '旅行项目 - 公交', true, true)
    //   return {
    //     title: '旅行列表',
    //     headerStyle: themeing.pageHeader,
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //       fontWeight: 'bold',
    //     },
    //     headerLeft: (
    //       <View style={{marginLeft: 5}}><Icon name="menu" color="white" size={20} onPress={() => navigation.navigate("firstScreen") }/></View>
    //     ),
    //     headerRight: (
    //       <View style={{marginRight: 5}}><Icon name="settings" color="white" size={20} onPress={() => navigation.navigate("firstScreen") }/></View>
    //     )
    // }
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={[styles.container, themeing.functionContainerBackground, themeing.pageContainerSecond]}>
        <View style={[styles.travelDetailHead, themeing.bodyCardColorSecond, {paddingLeft: 15, paddingRight: 15, paddingBottom: 10}]}>
            <Text style={[themeing.fontColor, {fontSize: 18, paddingTop: 10}]}>项目内容：乘坐大巴去浦东机场</Text>
            <Text style={[themeing.fontColor, {fontSize: 18, paddingTop: 10}]}>日期：2019-02-02</Text>
            <Text style={[themeing.fontColor, {fontSize: 18, paddingTop: 10}]}>项目时间：上午 10:00-11:00</Text>
            <Text style={[themeing.fontColor, {fontSize: 14, paddingTop: 10}]}>澳洲 - 澳大利亚</Text>
            <Text style={[themeing.fontColor, {fontSize: 14, paddingTop: 10}]}>主要项目：上海浦东机场 - 马尼拉机场 - 悉尼机场</Text>
        </View>
        <View style={[styles.travelDetailHead, themeing.bodyCardColorSecond, styles.cardPaddingSize, {marginTop: 8}]}>
            <Text style={[themeing.fontColor, {fontSize: 18}]}>交通：上海机场5线</Text>
            <Text style={[themeing.fontColor, {fontSize: 18}]}>计划出发时间：上午 10：00</Text>
        </View>
        <View style={[themeing.cardColorOdd, styles.cardPaddingSize, {marginTop: 8}]}>
            <Text style={[themeing.fontColor, {fontSize: 18}]}>出发时间列表:</Text>
            <Text style={[themeing.fontColor]}>10：00</Text>
            <Text style={[themeing.fontColor]}>11：00</Text>
            <Text style={[themeing.fontColor]}>12：00</Text>
            <Text style={[themeing.fontColor]}>13：00</Text>
        </View>
        <View style={[themeing.cardColorOdd, styles.cardPaddingSize, {marginTop: 8}]}>
            <Text style={[themeing.fontColor, {fontSize: 18}]}>地图:</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  travelDetailHead: {
    borderColor: 'grey',
    borderBottomWidth: 1
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: 3
  },
  cardPaddingSize: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10
  }
});
