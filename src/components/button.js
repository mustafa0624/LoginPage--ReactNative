import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Button, Dimensions } from "react-native";


const Buttons = () => {
    return (
        <View>

            <TouchableOpacity style={styles1.myButton} >
                <Text style={styles1.myButtonText}> Giris Yap</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles1.myButton} >
                <Text style={styles1.myButtonText}> Kayit Ol</Text>
            </TouchableOpacity>
       
       
       
        </View>





    )


}


const styles1 = StyleSheet.create({
    myButton: {

        backgroundColor: "#4b6584",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        width:Dimensions.get("window").width/2,
        height: 50,
        alignSelf: "center",
        marginTop:15


    },
    myButtonText: {
        color: "white"
    }

})

export {Buttons};