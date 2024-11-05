// import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StatusBar, ScrollView, Image } from 'react-native';
import { styles } from './styles';

const App = () => {
  const scrollViewRef = useRef(null);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    setInput(input + value);
    setTimeout(() => {
      scrollViewRef.current.scrollToEnd({ animated: false } );
    }, 10); // 약간의 지연을 주어 업데이트 후 스크롤
  };

  const calculateResult = (value) => {
    try {
      setResult(eval(input.replaceAll("×", "*").replaceAll("÷", "/")).toString());
    } catch (error) {
      console.log(error)
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const renderButton = (style, value, func = handleInput, oper = false) => {
    return (
      <View style={styles.btnbg}>
        <View style={styles.btnbox1}>
          <View style={styles.btnbox2}></View>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => func(value)}
            style={style}
          >
            {value=='back' ? <Image
              source={require('./assets/backspace.png')} // 로컬 이미지 경로
              style={styles.image} // 이미지 스타일
            /> : <Text style={oper ? styles.ObuttonText : styles.buttonText}>{value}</Text>}
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2196F3" />

      <Text style={styles.result}>{result}</Text>

      <View style={styles.ScrollView}>
        <ScrollView 
          ref={scrollViewRef}
          centerContent
          horizontal>
           <Text style={styles.display}>{input || "0"}</Text>
        </ScrollView>
      </View>

      <View style={styles.box}>
        <View style={styles.row}>
          {input != 0 ? renderButton(styles.button_top, 'back', handleBackspace) : renderButton(styles.button_top, 'AC', clearInput)}
          {renderButton(styles.button_top, '+/-')}
          {renderButton(styles.button_top, '%')}
          {renderButton(styles.buttonOperator, '÷', handleInput, oper = true)}
        </View>

        <View style={styles.row}>
          {renderButton(styles.button, '7')}
          {renderButton(styles.button, '8')}
          {renderButton(styles.button, '9')}
          {renderButton(styles.buttonOperator, '×', handleInput, oper = true)}
        </View>

        <View style={styles.row}>
          {renderButton(styles.button, '4')}
          {renderButton(styles.button, '5')}
          {renderButton(styles.button, '6')}
          {renderButton(styles.buttonOperator, '−', handleInput, oper = true)}
        </View>

        <View style={styles.row}>
          {renderButton(styles.button, '1')}
          {renderButton(styles.button, '2')}
          {renderButton(styles.button, '3')}
          {renderButton(styles.buttonOperator, '+', handleInput, oper = true)}
        </View>

        <View style={styles.row}>
          {renderButton(styles.button, 'icon', console.log)}
          {renderButton(styles.button, '0')}
          {renderButton(styles.button, '.')}
          {renderButton(styles.buttonOperator, '=', calculateResult, oper = true)}
        </View>
      </View>
    </View>
  );
};


export default App;
