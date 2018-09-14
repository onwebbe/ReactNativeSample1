/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, StatusBar, Button} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createDrawerNavigator, SafeAreaView } from 'react-navigation';

import {MainPage} from './mainPages/MainPage';
import {AddNewAccount} from './mainPages/AddNewAccount';
import {Registration} from './mainPages/Registration';
import {TravelList} from './travelFunction/TravelList';
import {UserInfo} from './travelFunction/UserInfo';
import {ChangePassword} from './travelFunction/ChangePassword';
import {TravelDetail} from './travelFunction/TravelDetail'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const functionRoute = createStackNavigator(
  {
    AddNewAccount,
    Registration,
    TravelList,
    UserInfo,
    ChangePassword,
    TravelDetail
  }, {
    initialRouteName: 'AddNewAccount',
  });



// const MyNavScreen = ({ navigation, banner }) => (
//   <ScrollView>
//     <SafeAreaView forceInset={{ top: 'always' }}>
//       <Text>{banner}xxx</Text>
//       <Button onPress={() => navigation.openDrawer()} title="Open drawer" />
//       <Button
//         onPress={() => navigation.navigate('Email')}
//         title="Open other screen"
//       />
//       <Button onPress={() => navigation.goBack(null)} title="Go back" />
//     </SafeAreaView>
//     <StatusBar barStyle="default" />
//   </ScrollView>
// );
// const InboxScreen = ({ navigation }) => (
//   <MyNavScreen banner={'Inbox Screen'} navigation={navigation} />
// );
// InboxScreen.navigationOptions = {
//   headerTitle: 'Inbox',
// };
// const OutScreen = ({ navigation }) => (
//   <MyNavScreen banner={'Out Screen'} navigation={navigation} />
// );
// InboxScreen.navigationOptions = {
//   headerTitle: 'Out Box',
// };
// const DrawerExample = createDrawerNavigator(
//   {
//     Inbox: InboxScreen,
//     OutBox: OutScreen
//   }, {
//     initialRouteName: 'Inbox'
//   }
// );


type Props = {};
export class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {};
    this.firstClick = 0;
    this.handleBack = this.handleBack.bind(this);
  }
  handleBack() {
    
  }
  render() {
    return (
      <MainPage navigation={this.props.navigation}/>
    );
  }
}

const styles = StyleSheet.create({
    pageHeader: {
      fontSize: 30,
      height: 120,
      lineHeight: 100
    },
    pageBody: {
      fontSize: 20,
      margin: 10
    }
});

export default createSwitchNavigator(
  {
    firstScreen: App,
    App: functionRoute
  },
  {
    initialRouteName: 'firstScreen',
  }
);