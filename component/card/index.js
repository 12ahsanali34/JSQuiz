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
import CountDown from 'react-native-countdown-component';
import Icon from 'react-native-vector-icons/FontAwesome';

const Screen = (props) => {
    const [timerID, setTimerID] = useState(1)

    return (
        <ScrollView style={{backgroundColor: "#07361E"}}>
          <SafeAreaView>
              <View style={styles.body}>
                  <TouchableOpacity onPress={props.back} style={{width:'100%', paddingBottom:20}}>
                    <Icon name="arrow-left" size={20} color="#64952D" />
                  </TouchableOpacity>
                  <View style={styles.Card}>
                      <View style={styles.CardHeader}>
                          <View style={styles.headerBtn}>
                              <Text style={{color:'#fff'}}>{props.current + 1}/{props.totalScreens}</Text>
                          </View>
                          <View style={[styles.headerBtn, {backgroundColor:'#3D3D3D'}]}>
                              <Text style={{color:'#fff'}}>{props.score}</Text>
                          </View>
                      </View>
                      <View style={styles.NumberSection}>
                          <View style={styles.Circle}>
                              <CountDown
                                id={timerID.toString()}
                                until={10}
                                size={20}
                                onFinish={() => {
                                    props.onSubmit(null)
                                    setTimerID(timerID + 1)
                                }}
                                digitTxtStyle={{color: '#fff'}}
                                timeToShow={['S']}
                                timeLabels={{m: null, s: null}}
                              />
                          </View>
                          <Text style={styles.QueText}>
                              {props.question}
                          </Text>
                      </View>
                      <View style={styles.BtnSection}>
                          {props.options.map((res, i)=>{
                              return(
                                  <TouchableOpacity
                                      onPress={()=>{
                                        props.onSubmit(i)
                                        setTimerID(timerID + 1)
                                      }}
                                      key={i}
                                      style={[styles.Btn, {backgroundColor: "#64952D", paddingHorizontal:5}]}>
                                      <Text style={{color: "#fff", textAlign:'center'}}>{res}</Text>
                                  </TouchableOpacity>
                              )
                          })}
                      </View>
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
    backgroundColor: "#07361E",
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
  },
  CardHeader:{
    width:"100%",
    padding:15,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  NumberSection:{
    width:"100%",
    alignItems:'center',
    justifyContent:"center",
  },

  Circle:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10
  },

  QueText:{
    textAlign:"center",
    marginTop:5,
    color:"#fff",
    paddingHorizontal:10
  },

  BtnSection:{
    width:"100%",
    paddingHorizontal:20,
    justifyContent:"center",
  },

  headerBtn:{
    width:100,
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center',
    padding:6,
  },

  Btn:{
    width:"100%",
    height:50,
    borderStyle:"solid",
    borderColor: 'black',
    borderWidth: 1,
    borderRadius:30,
    marginVertical:10,
    justifyContent:'center',
    alignItems:'center',
  },

  SubmitBtn:{
    width:"100%",
    height:50,
    borderRadius:30,
    marginVertical:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#3D3D3D',
  },

});

export default Screen;
