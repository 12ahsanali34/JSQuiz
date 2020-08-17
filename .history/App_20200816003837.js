import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';
import CardScreen from './component/card';
import ScreenArray from './screensArray';
import Result from './component/result';

const App = () => {
  const [time, setTime] = useState(0)
  const [currentScreen, setCurrentScreen] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selected, setSelected] = useState(null)
  const [isDisabled, setIsDisabled] = useState(false)



    const timer = (t) =>{
        if(t > 0){
            setTimeout(()=>{
                --t;
                setTime(t)
                timer(t)
            },1000)
        }
    }
    useEffect(()=>{
        timer(10)
    },[])

    useEffect(()=>{
      if(time == 0){
        setIsDisabled(true)
        // setSelected(null)
        // setSelected(props.current)
      }
      else{
        setIsDisabled(false)
        // setSelected(null)
      }
  },[time])

    useEffect(()=>{
        if(currentScreen !== 0){
          timer(10)
        }
    },[currentScreen])
    
  if(showResult){
    return(
      <Result reset={()=>{
        setTime(10)
        setCurrentScreen(0)
        setScore(0)
        setShowResult(false)
        timer(10)
      }} score={score} totalQuestions={ScreenArray.length}/>
    )
  }
  else{
    return (
      <CardScreen
        isDisabledOptions={isDisabled}
        selected={(e)=>setSelected(e)}
        options={ScreenArray[currentScreen].options}
        question={ScreenArray[currentScreen].question}
        onSubmit={()=>{
          if((selected+1) == ScreenArray[currentScreen].answer){
            setScore(score + 10)
          }
          if((currentScreen + 1) !== ScreenArray.length){
            setCurrentScreen(currentScreen + 1)
          }else{
            setShowResult(true)
          }
        }}
        score={score}
        current={currentScreen}
        totalScreens={ScreenArray.length}
        timer={time}/>
    )
  }
};
export default App;