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
  Image, TextInput, Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Buttons from "./button"

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        {/* <Image source={require("")}/> */}
        <TextInput style={styles.input} placeholder="E-posta Giriniz.." />
        <TextInput style={styles.input} placeholder="Sifre Giriniz.." />
        
        
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

  }
    

})


export default App;