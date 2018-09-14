/**
 * Travel list page
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image} from 'react-native';
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
    return topMenuConfig(navigation, '旅行内容', false, true)
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
    this.state = {};
  }
  render() {
    return (
      <View style={[styles.container, themeing.functionContainerBackground]}>
        <View style={[styles.travelDetailHead]}>
            <Text size="18">目的地：澳洲 - 澳大利亚</Text>
            <Text size="12">出发日期：2019-02-02  回程日期：2019-02-12  共 10 天</Text>
            <Text size="18">计划人数：6人 - 2大人 2老人 2儿童</Text>
        </View>
        <FlatList
          data={this.state.data}
          renderItem={this.renderListItem} style={{width: '100%', flex:1}}></FlatList>
      </View>
    );
  }
  renderListItem({item}) {
    return (
      <View style={[styles.listItemContainer, themeing.cardColor, {alignItems: 'center', alignContent: 'stretch', flexWrap: 'nowrap'}]}>
        <Image style={styles.accountSelectionImage} source={require('../images/IMG_20180224_094324.jpg')}/>
        <View style={[{flexDirection: 'column', marginLeft: 10, alignSelf: 'flex-start', flexShrink: 1, marginRight: 15}, themeing.fontColor]}>
            <View style={[{flex:1, flexDirection: 'row', marginTop: 5}]}>
              <Text style={[themeing.fontColor, {fontSize: 18}]}>澳洲 - 澳大利亚</Text>
              <Text style={[themeing.fontColor, {fontSize: 18}]}>（计划中）</Text>
            </View>
            <View style={[{flex:1, flexDirection: 'row', marginTop: 5}]}>
              <Text style={[themeing.fontColor]}>2019.02.02 - 2019.02.12</Text>
              <Text style={{color: '#fffe73'}}>（共10天）</Text>
            </View>
            <Text style={[themeing.fontColor, {marginTop: 5, flexWrap: 'wrap', lineHeight: 20, overflow: 'hidden'}]}>悉尼，布里斯班，墨尔本，大洋路，企鹅归巢，考拉，袋鼠悉尼，布里斯班，墨尔本，大洋路，企鹅归巢，考拉，袋鼠</Text>
        </View>
        <View style={{textAlign: 'right', position: 'absolute', right: 0}}>
            <Icon name="chevron-right" size={25} style={{alignSelf: 'flex-end'}} color="white"></Icon>
        </View>
        
      </View>
    );
  }
  addNewAccount() {
    const navigation  = this.props.navigation;
    navigation.navigate('AddNewAccount');
  }
}

const styles = StyleSheet.create({
  travelDetailHead: {

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
