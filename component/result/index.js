import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  Dimensions,
  ImageBackground
} from 'react-native';
const Screen = (props) => {
    return (
        <ScrollView style={{backgroundColor: "#07361E"}}>
            <SafeAreaView>
                <View style={styles.body}>
                  <View style={styles.Card}>
                      <Text style={styles.Heading1}> Congratulation</Text>
                      <Text style={styles.MyResult}>You Won <Text style={{color:"orange", fontWeight:'bold'}}>{props.score}</Text></Text>
                      <Text style={styles.ViewResult}>You Answered {props.totalQuestions} Questions</Text>
                      <TouchableOpacity onPress={props.reset} style={styles.playAgainBTN}>
                          <Text style={{color:"#fff"}}>Play Again</Text>
                      </TouchableOpacity>
                  </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
  body: {
    width:deviceWidth,
    height:deviceHeight,
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:10,
  },
  Card:{
    width:"100%",
    backgroundColor:"#0A522D",
    borderRadius:5,
    overflow:"hidden",
    alignItems:"center",
    justifyContent:"center",
    padding:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  ResultBox:{
      alignItems:"center",
      justifyContent:"center",
  },

  Heading1:{
      marginBottom:10,
      color:"orange",
      fontSize:20,
      fontWeight:'bold'
  },

  MyResult:{
      marginBottom:10,
      color:"#fff",
      fontSize:25,
  },

  ViewResult:{
      fontSize:15,
      color:"#fff",
  },
  playAgainBTN:{
    marginTop:20,
    width:150,
    height:50,
    borderRadius:30,
    marginVertical:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#64952D',
  },


});

export default Screen;
