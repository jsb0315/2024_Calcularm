import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-web';

const baseButtonStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    // aspectRatio: 1,
  };
  
  export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: '#000',
      paddingBottom: 60,
    },
    ScrollView: {
      alignItems: 'flex-end',
      textAlign: 'right',
      paddingRight: 20,
      paddingLeft: 20,
      marginBottom: '1%', 
    },
    display: {
      fontSize: 72,
      color: 'white',
    },
    result: {
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
      left: 1,
      top: 1,
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
      bottom: 3,
      fontSize: 54,
      fontWeight: '300',
    },
    image: {
      right: 2,
      width: 50,
      height:50,
    },
  });