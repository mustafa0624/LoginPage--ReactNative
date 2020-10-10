/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image, TextInput, Button,Dimensions
} from 'react-native';

import {Buttons,Input} from "./components"
// import Buttons from "./components/button";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const App = () => {
  
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Image source={require("./img/34627.png")}
        style={styles.image}/>
       
        
        <Input/>
        <Buttons/>

      </View>


    </SafeAreaView>
  )
};






const styles = StyleSheet.create({
  container:{
    backgroundColor:"#81ecec",
    flex:1,
    // alignItems:"center",
    justifyContent:"center"
  },
  input:{
    
    marginTop:15,
    margin:10,
    paddingLeft:5,
    borderRadius:10,
    backgroundColor:"white"
  },
  buttons:{
    width:100,
    margin:100

  },
  image:{
    
    width:Dimensions.get("window").width,
    height:Dimensions.get("window").height*0.30,
    
    // marginBottom:20,
    // backgroundColor:"red",
    resizeMode:"contain",
    // tintColor:"green"
  }
    
    
    

})


export default App;