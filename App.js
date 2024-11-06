// import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StatusBar, ScrollView, Image, Dimensions } from 'react-native';
import { styles } from './styles';

const { width } = Dimensions.get('window');

const App = () => {
  const [isShadowActive, setIsShadowActive] = useState([true, false]); // 상태로 그림자 활성화 여부를 제어
  const dynamicStyles = [isShadowActive[0]
    ? { ...styles.shadow1, shadowOpacity: 1 }  // 그림자 활성화 시 opacity 값 설정
    : { ...styles.shadow1, shadowOpacity: 0 }, 
    isShadowActive[1]
    ? { ...styles.shadow2, shadowOpacity: 1 }  // 그림자 활성화 시 opacity 값 설정
    : { ...styles.shadow2, shadowOpacity: 0 }];

  const [isEnd, setIsEnd] = useState(false);
  const pagescrollRef = useRef(null);
  const scrollViewRef = useRef(null);
  const [input, setInput] = useState("");

  const dynamicfont = (input.length < 9) 
    ? {...styles.result1, fontSize: 72}
    : (input.length == 9) ? {...styles.result1, fontSize: 66}
    : {...styles.result1, fontSize: 58};

  const [result, setResult] = useState("");
  
  useEffect(() => {
    setTimeout(() => {
      pagescrollRef.current.scrollTo({ x: width * 0.85, animated: false });
    }, 100);  // 100ms 지연 후에 스크롤 이동
  }, []);

  const handleInput = (value) => {
    setInput(input + value);
    setTimeout(() => {
      scrollViewRef.current.scrollToEnd({ animated: false });
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

  const images = {
    back: require('./assets/backspace.png'),
    list: require('./assets/list.png'),
    calc: require('./assets/calc.png'),
    comple: require('./assets/comple.png'),
    // 다른 이미지도 추가 가능
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
            {value in images ? <Image
              source={images[value]} // 로컬 이미지 경로
              style={styles[value]} // 이미지 스타일
            /> : <Text style={oper ? styles.ObuttonText : styles.buttonText}>{value}</Text>}
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleScroll = (event) => {
    const contentWidth = event.nativeEvent.contentSize.width; // 전체 콘텐츠 너비
    const contentOffsetX = event.nativeEvent.contentOffset.x; // 스크롤 된 위치
    const layoutWidth = event.nativeEvent.layoutMeasurement.width; // 스크롤 뷰의 너비


    if (contentOffsetX <= 0) {
      // 스크롤이 끝까지 갔을 때
      if (!isEnd) {
        setIsEnd(true);
        console.log('스크롤 끝까지 도달1!');
        setIsShadowActive([false, true])
        // 여기서 원하는 함수 호출
      }
    } else if (contentWidth - contentOffsetX <= layoutWidth+5) {
      // 스크롤이 끝까지 갔을 때
      if (!isEnd) {
        setIsEnd(true);
        console.log('스크롤 끝까지 도달2!');
        setIsShadowActive([true, false])
        // 여기서 원하는 함수 호출
      }
    } else {
      console.log("dd")
      setIsEnd(false);
      if (layoutWidth < contentWidth)
        setIsShadowActive([true, true])
    }
    if (input.length < 8)
      setIsShadowActive([true, false])
  };

  return (
    <ScrollView
      ref={pagescrollRef}
      scrollEnabled={false}
      horizontal
      pagingEnabled
      contentContainerStyle={styles.mainscroll}>
      <View style={[styles.page, styles.page1]}>
        <StatusBar barStyle="light-content" backgroundColor="#2196F3" />

        <TouchableOpacity
          activeOpacity={0.2}
          style={styles.listcont}
          onPress={() => pagescrollRef.current.scrollTo({ x: width * 0.85, animated: true })}
        >
          <Image
            source={images.list}
            style={styles.list} />
        </TouchableOpacity>
      </View>
      <View style={[styles.page, styles.page2]}>
        <StatusBar barStyle="light-content" backgroundColor="#2196F3" />

        <TouchableOpacity
          activeOpacity={0.2}
          style={styles.listcont}
          onPress={() => pagescrollRef.current.scrollTo({ x: 0, animated: true })}
        >
          <Image
            source={images.list}
            style={styles.list} />
        </TouchableOpacity>

        <Text style={styles.result2}>{result}</Text>
        
        <View style={styles.display}>
          <View style={dynamicStyles[0]}></View>
          <View style={styles.ScrollView}>
            <ScrollView
              onScroll={handleScroll} // 스크롤 이벤트 처리
              scrollEventThrottle={50}
              scrollEnabled={input.length > 10}
              ref={scrollViewRef}
              centerContent
              horizontal>
              <Text style={dynamicfont}>{input || "0"}</Text>
            </ScrollView>
          </View>
          <View style={dynamicStyles[1]}></View>
        </View>

        <View style={styles.box}>
          <View style={styles.row}>
            {(!input || result) ?  renderButton(styles.button_top, 'AC', clearInput) : renderButton(styles.button_top, 'back', handleBackspace, false)}
            {renderButton(styles.button_top, 'comple')}
            {renderButton(styles.button_top, '%')}
            {renderButton(styles.buttonOperator, '÷', handleInput, true)}
          </View>

          <View style={styles.row}>
            {renderButton(styles.button, '7')}
            {renderButton(styles.button, '8')}
            {renderButton(styles.button, '9')}
            {renderButton(styles.buttonOperator, '×', handleInput, true)}
          </View>

          <View style={styles.row}>
            {renderButton(styles.button, '4')}
            {renderButton(styles.button, '5')}
            {renderButton(styles.button, '6')}
            {renderButton(styles.buttonOperator, '−', handleInput, true)}
          </View>

          <View style={styles.row}>
            {renderButton(styles.button, '1')}
            {renderButton(styles.button, '2')}
            {renderButton(styles.button, '3')}
            {renderButton(styles.buttonOperator, '+', handleInput, true)}
          </View>

          <View style={styles.row}>
            {renderButton(styles.button, 'calc', console.log)}
            {renderButton(styles.button, '0')}
            {renderButton(styles.button, '.')}
            {renderButton(styles.buttonOperator, '=', calculateResult, true)}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};


export default App;
