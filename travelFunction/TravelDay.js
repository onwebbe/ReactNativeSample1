/**
 * Travel list page
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, TouchableHighlight} from 'react-native';
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

export class TravelDay extends Component<Props> {
  static navigationOptions = ({navigation}) => {
    return topMenuConfig(navigation, '旅行每日安排', true, true)
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
    this.getListItemTextColor = this.getListItemTextColor.bind(this);
    this.getListItemTextColorText = this.getListItemTextColorText.bind(this);
    this.navigateToItemDetail = this.navigateToItemDetail.bind(this);
    this.state = {
      data: [{
        key: '1',
        title: 'title1',
        content: 'a'
      },{
        key: '2',
          title: 'title2',
          content: 'b',
          type: 'seperateNow'
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
            <Text style={[themeing.fontColor, {fontSize: 18, paddingTop: 10}]}>澳洲 - 澳大利亚</Text>
            <Text style={[themeing.fontColor, {fontSize: 14, paddingTop: 10}]}>日期：2019-02-02</Text>
            <Text style={[themeing.fontColor, {fontSize: 14, paddingTop: 10}]}>主要项目：上海浦东机场 - 马尼拉机场 - 悉尼机场</Text>
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
  getListItemTextColor(item) {
    if (item.index % 2 == 0) {
      return {color: 'white'};
    } else {
      return {};
    }
  }
  getListItemTextColorText(item) {
    if (item.index % 2 == 0) {
      return 'white';
    } else {
      return 'white';
    }
  }
  navigateToItemDetail(item) {
    const navigation  = this.props.navigation;
    switch (item.index) {
      case 0: {
        navigation.navigate('TravelItemTrafficBus');
        break;
      }
      case 2: {
        navigation.navigate('TravelItemAttraction');
        break;
      }
    }
  }
  renderListItem(item) {
    var itemType = item.item.type;
    if (itemType == 'seperateNow') {
      return (
        <View style={[{flexDirection: 'row', flexWrap: 'nowrap', alignContent: 'stretch', alignItems: 'stretch'}]}>
          <Text style={[themeing.fontColor, {flex: 1, textAlign: 'center', paddingTop: 10, paddingBottom: 10, alignSelf: 'center'}]}>------------- 2019-02-02 上午11：11 -------------</Text>
        </View>
      );
    }
    else {
      return (
        <TouchableHighlight onPress={ () => this.navigateToItemDetail(item) }>
        <View style={[this.getListItemStyle(item), styles.listItemContainer, {flexDirection: 'row', flexWrap: 'nowrap'}]}>
          <View style={{flexDirection: 'column', flex:6}}>
            <View style={[{flexDirection: 'column'}]}>
              <View style={[{flexDirection: 'row'}]}>
                <Text style={[themeing.fontColor, styles.contentFontSize, this.getListItemTextColor(item), {fontSize: 18}]}>{item.index + 1}.&nbsp;&nbsp;</Text>
                <Text style={[themeing.fontColor, styles.contentFontSize, this.getListItemTextColor(item), {fontSize: 18}]}>乘坐大巴去浦东机场</Text>
              </View>
              
              <View style={{flexDirection: 'row', marginLeft: 15}}>
                <Icon style={[{alignSelf: 'center'}, this.getListItemTextColor(item)]} name="plane" color={this.getListItemTextColorText(item)} size={35}/>
                {/* <Icon name="utensils" color="white" size={40}/>
                <Icon name="bus" color="white" size={40}/>
                <Icon name="subway" color="white" size={40}/>
                <Icon name="train" color="white" size={40}/>
                <Icon name="hotel" color="white" size={40}/>
                <Icon name="camera-retro" color="white" size={40}/> */}
                <View style={[{flexDirection: 'column', marginLeft: 10, alignSelf: 'flex-start', flexShrink: 1, marginRight: 15}, themeing.fontColor]}>
                  <Text style={[themeing.fontColor, styles.contentFontSize, {marginTop: 3}, this.getListItemTextColor(item)]}>上午 10:00 - 11:30</Text>
                  <Text style={[themeing.fontColor, styles.contentFontSize, {marginTop: 3}, this.getListItemTextColor(item)]}>出发：静安寺</Text>
                  <Text style={[themeing.fontColor, styles.contentFontSize, {marginTop: 3}, this.getListItemTextColor(item)]}>到达：浦东机场</Text>
                </View>
              </View>
              <Text style={[themeing.fontColor, styles.contentFontSize, {marginTop: 5, marginLeft: 15}, this.getListItemTextColor(item)]}>静安寺乘坐机场大巴3线</Text>
            </View>
          </View>
          <View style={{textAlign: 'right', alignSelf: 'center', flex: 1}}>
              <Icon name="chevron-right" size={25} style={{alignSelf: 'flex-end'}} color="white"></Icon>
          </View>
        </View>
        </TouchableHighlight>
      );
    }
    
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
  },
  contentFontSize: {
    fontSize: 16
  }
});
