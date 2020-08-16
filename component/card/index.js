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
    const  BGimage = require('../../assets/background.jpg');
    const [selected, setSelected] = useState(null)

    useEffect(()=>{
        setSelected(null)
    },[props.current])

    useEffect(()=>{
        props.selected(selected) 
    },[selected])

    // useEffect(()=>{
    //     if(props.timer == 0){
    //       setIsDisabled(true)
    //       // setSelected(null)
    //       // setSelected(props.current)
    //     }
    //     else{
    //       setIsDisabled(false)
    //       // setSelected(null)
    //     }
    // },[props.timer])
    return (
        <ScrollView>
            <ImageBackground 
                resizeMode='cover' 
                source={BGimage}
                style={styles.body}>
                <View style={styles.Card}>
                    <View style={styles.CardHeader}>
                        <View style={styles.headerBtn}>
                            <Text>{props.current + 1}/{props.totalScreens}</Text>
                        </View>
                        <View style={[styles.headerBtn, {backgroundColor:'orange'}]}>
                            <Text style={{color:'#fff'}}>{props.score}</Text>
                        </View>
                    </View>
                    <View style={styles.NumberSection}>
                        <View style={styles.Circle}>
                            <Text style={{fontSize:20, color:'#fff'}}>{props.timer}</Text>
                        </View>
                        <Text style={styles.QueText}>
                            {props.question}
                        </Text>
                    </View>
                    <View style={styles.BtnSection}>
                        {props.options.map((res, i)=>{
                            let iselected = selected == i
                            return(
                                <TouchableOpacity
                                    disabled={props.isDisabledOptions} 
                                    onPress={()=>{setSelected(i)}}
                                    key={i}
                                    style={[styles.Btn, {backgroundColor: iselected ? "#7100E4" : "#fff", paddingHorizontal:5}]}>
                                    <Text style={{color: iselected ? "#fff" : "#000", textAlign:'center'}}>{res}</Text>
                                </TouchableOpacity>
                            )
                        })}
                        <TouchableOpacity onPress={()=>{
                            if(selected !== null){
                                props.onSubmit()
                            }
                            else{
                                if(!props.isDisabledOptions){
                                  alert("Please select 1 option.")
                                }
                            }
                        }} style={styles.SubmitBtn}>
                            <Text style={{color:"#fff"}}>{props.timer == 0 ? "Next" : "Submit"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
};
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
  body: {
    // backgroundColor: "#000",
    width:deviceWidth,
    height:deviceHeight,
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:10,
  },
  Card:{
    width:"100%",
    backgroundColor:"#fff",
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
    height:60,
    width:60,
    borderRadius:60,
    backgroundColor:'orange',
    justifyContent:'center',
    alignItems:'center',
  },

  QueText:{
    textAlign:"center",
    marginTop:5,
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
    backgroundColor:'orange',
  },

});

export default Screen;
