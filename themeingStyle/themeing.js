import {StyleSheet} from 'react-native';
export const themeing = StyleSheet.create({
    pageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#5E2580'
    },
    pageBody: {
      backgroundColor: '#5E2580',
      width: "100%",
      flex: 1,
      alignItems: 'center',
      alignContent: 'flex-start',
      flexDirection: 'column',
      textAlign: 'center',
    },
    pageHeader: {
      textAlign: 'center',
      backgroundColor: '#47036F',
      paddingTop: 20,
      width: '100%',
      color: 'white'
    },
    fontColor: {
      color: 'white'
    },
    primaryLinkFontColor: {
      color: '#A2EF00'
    },
    cardColor: {
      // backgroundColor: 'rgba(94, 37, 128, 0.9)'
      backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    cardColorEven: {
      // backgroundColor: 'rgba(94, 37, 128, 0.9)'
      backgroundColor: 'rgba(255, 255, 255, 0.3)'
    },
    cardColorOdd: {
      // backgroundColor: 'rgba(94, 37, 128, 0.9)'
      backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    bodyCardColor: {
      // backgroundColor: 'rgba(94, 37, 128, 0.9)'
      backgroundColor: 'rgba(229, 103, 177, 0.5)'
    },
    functionContainerBackground: {
      backgroundColor: '#47036F'
    },
    standardOnelineListRow: {
      flexDirection: 'row',
      height: 50,
      alignContent: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 3,
      backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    errorFont: {
      color: '#e567b1'
    }
  });