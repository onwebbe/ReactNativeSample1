/**
 * Travel list page
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image, TouchableHighlight} from 'react-native';
import Icon from "react-native-vector-icons/Feather"
import {themeing} from '../themeingStyle/themeing';
import topMenuConfig from '../FunctionTopMenu'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export class TravelDetail extends Component<Props> {
  static navigationOptions = ({navigation}) => {
    return topMenuConfig(navigation, '旅行内容', true, true)
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
    this.renderListItem = this.renderListItem.bind(this);
    this.getListItemStyle = this.getListItemStyle.bind(this);
    this.viewTravelDay = this.viewTravelDay.bind(this);
    this.state = {
      data: [{
        key: '1',
        title: 'title1',
        content: 'a'
      },{
        key: '2',
          title: 'title2',
          content: 'b'
        },{
          key: '3',
          title: 'title3',
          content: 'c'
        },{
          key: '4',
          title: 'title4',
          content: 'd'
        }]
    };
  }
  render() {
    return (
      <View style={[styles.container, themeing.functionContainerBackground]}>
        <View style={[styles.travelDetailHead, themeing.bodyCardColor, {paddingLeft: 15, paddingRight: 15, paddingBottom: 10}]}>
            <Text style={[themeing.fontColor, {fontSize: 18, paddingTop: 10}]}>目的地：澳洲 - 澳大利亚</Text>
            <Text style={[themeing.fontColor, {fontSize: 14, paddingTop: 10}]}>出发日期：2019-02-02 至 2019-02-12 (共 10 天)</Text>
            <Text style={[themeing.fontColor, {fontSize: 14, paddingTop: 10}]}>计划人数：共6人 包括 2大人 2老人 2儿童</Text>
        </View>
        <FlatList
          data={this.state.data}
          renderItem={this.renderListItem} style={{width: '100%', flex:1, paddingTop: 5}}></FlatList>
      </View>
    );
  }
  getListItemStyle(item) {
    if (item.index % 2 == 0) {
      return themeing.cardColorEven;
    } else {
      return themeing.cardColorOdd;
    }
  }
  renderListItem(item) {
    return (
      <TouchableHighlight onPress={ () => this.viewTravelDay() }>
      <View style={[this.getListItemStyle(item), styles.listItemContainer, {alignItems: 'center', alignContent: 'stretch', flexWrap: 'nowrap'}]}>
        <Image style={styles.accountSelectionImage} source={require('../images/IMG_20180224_094324.jpg')}/>
        <View style={[{flexDirection: 'column', marginLeft: 10, alignSelf: 'flex-start', flexShrink: 1, marginRight: 15}, themeing.fontColor]}>
          <Text size="18" style={[themeing.fontColor, {marginTop: 15}]}>{item.index}第一天 - 2019.02.02</Text>
          <Text style={[themeing.fontColor, {marginTop: 5}]}>上海 - 悉尼</Text>
          <Text style={[themeing.fontColor, {marginTop: 5, flexWrap: 'wrap', lineHeight: 20, overflow: 'hidden'}]}>上海浦东机场 - 马尼拉机场 - 悉尼机场</Text>
        </View>
        <View style={{textAlign: 'right', position: 'absolute', right: 0}}>
            <Icon name="chevron-right" size={25} style={{alignSelf: 'flex-end'}} color="white"></Icon>
        </View>
        
      </View>
      </TouchableHighlight>
    );
  }
  viewTravelDay() {
    const navigation  = this.props.navigation;
    navigation.navigate('TravelDay');
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
  listItemContainer: {
      marginBottom: 3,
      borderColor: 'grey',
      borderWidth: 0,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      flex:1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      color: 'white',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
      paddingBottom: 5
  },
  accountSelectionImage: {
      height: 90,
      width: 90,
      borderRadius: 10
  }
});
