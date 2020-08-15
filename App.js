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
import CardScreen from './component/card'
import ScreenArray from './screensArray';
const App = () => {
  const [time, setTime] = useState(0)
  const [currentScreen, setCurrentScreen] = useState(0)
  const [score, setScore] = useState(0)


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
        if(currentScreen !== 0){
          timer(10)
        }
    },[currentScreen])
  return (
    <CardScreen
      selected={(e)=>{console.log("selected", e)}}
      options={["Smoke", "Control", "Smoke", "Smoke"]}
      question={"Dummy text is text that is used in the publishing industry or by web designers to"}
      onSubmit={()=>{
        setScore(score + 10)
        setCurrentScreen(currentScreen + 1)
      }}
      score={score}
      current={currentScreen}
      totalScreens={ScreenArray.length}
      timer={time}/>
  );
};
export default App;