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
import Home from './component/homeScreen';


const App = () => {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [showHome, setShowHome] = useState(false)
  const [quizName, setQuizName] = useState("js")



  if(showHome){
    return(
      <Home onPlayButtonPress={(x)=>{
        setQuizName(x)
        setShowHome(false)
      }}/>
    )
  }
  else{
    if(showResult){
      return(
        <Result reset={()=>{
          setCurrentScreen(0)
          setScore(0)
          setShowResult(false)
        }} score={score} totalQuestions={ScreenArray.js.length}/>
      )
    }
    else{
      return (
        <CardScreen
          back={()=>{
            setShowResult(false)
            setCurrentScreen(0)
            setScore(0)
            setShowHome(true)
          }}
          options={ScreenArray[quizName][currentScreen].options}
          question={ScreenArray[quizName][currentScreen].question}
          next={()=>{
            setCurrentScreen(currentScreen + 1)
          }}
          score={score}
          current={currentScreen}
          totalScreens={ScreenArray[quizName].length}
          onSubmit={(x)=>{
            if(x !== null && (x+1) == ScreenArray[quizName][currentScreen].answer){
              setScore(score + 10)
            }
            if((currentScreen + 1) !== ScreenArray[quizName].length){
              setCurrentScreen(currentScreen + 1)
            }else{
              setShowResult(true)
            }
          }}/>
      )
    }
  }
};
export default App;