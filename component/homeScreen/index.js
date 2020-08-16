import React, {useState, useEffect, version} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const MainMenu = () => {

  return(
    <ScrollView style={{backgroundColor:'#07361E'}}>
        <View style={style.MainBox}>
            {/* <View style={style.header}>
              <Text style={style.HeaderText}>
                Pakistan Quiz
              </Text>
              <View style={style.HeaderBox}>
                <Text>Dummy</Text>
              </View>
            </View> */}
            <View style={style.titleCard}>
              <Text style={style.TitalText}>
                Jacpot
              </Text>
              <Text style={style.TitalText}>
                Qiuz
              </Text>
              <TouchableOpacity style={style.Btn}>
                <Text style={style.PlayBtnText}>
                  Play Now
                </Text>
                <Icon name="play" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
              <Text style={style.quizeheading}>
                Pakistan Quiz
              </Text>
              <View style={[style.Row, {marginBottom:15}]}>
                <View style={style.Box}>
                  <View style={style.InnerBox}>
                    <Text style={style.InnerTxt}>Sports</Text>
                  </View>
                  <View style={style.InnerBox2}>
                    <TouchableOpacity style={style.InnerBoxBtn}>
                     <Text style={style.PlayBtnText}>
                        Play Now
                     </Text>
                      <Icon name="arrow-right" size={15} color="#fff" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={style.Box}>
                  <View style={style.InnerBox}>
                    <Text style={style.InnerTxt}>Sports</Text>
                  </View>
                  <View style={style.InnerBox2}>
                    <TouchableOpacity style={style.InnerBoxBtn}>
                      <Text style={style.PlayBtnText}>
                         Play Now
                     </Text>
                     <Icon name="arrow-right" size={15} color="#fff" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={[style.Row, {marginBottom:10}]}>
                <View style={style.Box}>
                  <View style={style.InnerBox}>
                    <Text style={style.InnerTxt}>Sports</Text>
                  </View>
                  <View style={style.InnerBox2}>
                    <TouchableOpacity style={style.InnerBoxBtn}>
                      <Text style={style.PlayBtnText}>
                         Play Now
                      </Text>
                      <Icon name="arrow-right" size={15} color="#fff" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={style.Box}>
                  <View style={style.InnerBox}>
                    <Text style={style.InnerTxt}>Sports</Text>
                  </View>
                  <View style={style.InnerBox2}>
                    <TouchableOpacity style={style.InnerBoxBtn}>
                      <Text style={style.PlayBtnText}>
                        Play Now
                      </Text>
                      <Icon name="arrow-right" size={15} color="#fff" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
        </View>
    </ScrollView>
  )

}

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

const style = StyleSheet.create({
  MainBox:{
    width:deviceWidth,
    paddingHorizontal:10,
    marginVertical:10
  },
  header:{
    height:deviceHeight / 9,
    width:"100%",
    overflow:"hidden",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"

  },
  HeaderBox:{
    height:30,
    width:100,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff",
    borderRadius:20
  },
  titleCard:{
    height:200,
    backgroundColor:"#0A522D",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center"
  },

  TitalText:{
    margin:3,
    fontSize:25,
    color:"#fff",
    fontFamily:"serif"
  },

  Btn:{
    marginTop:20,
    height:50,
    width:140,
    borderRadius:30,
    backgroundColor:"#64952D",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:'row'
  },

  PlayBtnText:{
    fontSize:16,
    color:"#fff",
    fontFamily:"serif",
    marginRight:10

  },
  HeaderText:{
    color:'white',
    paddingVertical:10,
    color:"#fff",
    fontWeight:'500',
    fontSize:20,
    fontFamily:"serif",
  },
  quizeheading:{
    color:'white',
    fontSize:20,
    paddingVertical:10,
    fontWeight:'200',
    fontFamily:"serif",
  },

  Row:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
  },
  Box:{
    height:140,
    width:160,
    backgroundColor:"#0A522D",
    overflow:"hidden",
    borderRadius:5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  InnerBox:{
    justifyContent:"center",
    height:"50%",
    width:"100%",
  },
  InnerBox2:{
    height:"50%",
    width:"100%",
    justifyContent:"flex-end",
    alignItems:"flex-end",
  },
  InnerBoxBtn:{
    height:40,
    borderRadius:30,
    marginBottom:10,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#64952D",
    marginRight:10,
    flexDirection:'row',
    padding:8
  },
  InnerTxt:{
    fontSize:20,
    color:"#fff",
    marginLeft:5,
    fontFamily:"serif",
  }


})



  
export default MainMenu;