import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const baseButtonStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    // aspectRatio: 1,
  };
  
  export const styles = StyleSheet.create({
    mainscroll:{
      // flex: 1,
      backgroundColor: '#1c1c1c',
    },
    page: {
      flex: 1,
      height: height,
      justifyContent: 'flex-end',
      paddingBottom: 60,
    },
    page1:{
      width: width*0.85,
      backgroundColor: '#1c1c1c',
    },
    page2:{
      width: width,
      backgroundColor: '#000',
      borderRadius: 30,
    },
    display:{
      zIndex: 1,
      flexDirection: 'row',
    },
    ScrollView: {
      // flexDirection: 'column',
      alignItems: 'flex-end',
      // justifyContent: 'center',
      width: width-32,
      textAlign: 'right',
      marginBottom: '1%', 
    },
    shadow1:{
      zIndex: 1,
      height: "100%",
      borderLeftWidth: 16,
      shadowOffset: { width:10, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 4,
    },
    shadow2:{
      zIndex: 1,
      height: "100%",
      borderLeftWidth: 16,
      shadowOffset: { width:-10, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 4,
    },
    result1: {
      fontSize: 72,
      color: 'white',
    },
    result2: {
      fontSize: 24,
      color: '#888',
      textAlign: 'right',
      marginRight: 20,
      marginBottom: 20,
    },
    box: {
      height: '58%',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '20%',
      marginLeft: 12,
      marginRight: 12,
    },
    btnbg: {
      flex:1,
      borderRadius: 100,
      margin: '1%',
    },
    btnbox1:{
      position:'absolute',
      height: '100%',
      width: '100%'
    },
    btnbox2: {
      position:'absolute',
      backgroundColor: 'white',
      left: 0.8,
      top: 0.7,
      height: '98%',
      width: '98%',
      borderRadius: 100,
    },
    button: {
      ...baseButtonStyle,
      backgroundColor: '#2a2a2c',
    },
    button_top: {
      ...baseButtonStyle,
      backgroundColor: '#5c5c5e',
    },
    buttonOperator: {
      ...baseButtonStyle,
      backgroundColor: '#ff9f0a',
    },
    buttonText: {
      color: 'white',
      fontSize: 36,
      // fontWeight: '300',
    },
    ObuttonText: {
      color: 'white',
      bottom: 4,
      fontSize: 54,
      fontWeight: '300',
    },
    back: {
      // right: 2,
      // width: 40,
      height:'44%',
      aspectRatio: 1, 
      resizeMode: 'contain',
    },
    calc: {
      height:'42%',
      aspectRatio: 1, 
      resizeMode: 'contain',
    },
    comple: {
      height:'33%',
      aspectRatio: 1, 
      resizeMode: 'contain',
    },
    listcont:{
      position: 'absolute',
      top: '8%',
      left: 0,
      marginLeft: 18,
    },
    list: {
      height:22,
      aspectRatio: 1, 
      resizeMode: 'contain',
    },
  });