
import Icon from "react-native-vector-icons/Feather"
import {themeing} from './themeingStyle/themeing';
import React from 'react';
import {View} from 'react-native';

export default navigationOptions = function(navigation, title, backaction, requireSetting) {
    return {
      title: title,
      headerStyle: themeing.pageHeader,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: (
        backaction == true || backaction == null 
                            ? <View style={{marginLeft: 10}}><Icon name="arrow-left" color="white" size={25} onPress={() => navigation.goBack() }/></View>
                            : <View style={{marginLeft: 10}}></View>
      ),
      headerRight: (
        requireSetting == true || backaction == null
                            ? <View style={{marginRight: 10}}><Icon name="settings" color="white" size={20} onPress={() => navigation.navigate("UserInfo") }/></View>
                            : <View style={{marginLeft: 10}}></View>
      )
  }
};