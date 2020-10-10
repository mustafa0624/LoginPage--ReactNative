import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Button, TextInput } from "react-native";

const Input = () => {
    return (
        <View>
            <TextInput style={styles.input}
                keyboardType="email-address"
                placeholder="E-posta Giriniz.." />
            <TextInput style={styles.input}
                keyboardType="phone-pad"
                placeholder="Sifre Giriniz.." />
                </View>
                
                )
}

export { Input }




const styles = StyleSheet.create({

    input: {

        marginTop: 15,
        margin: 10,
        paddingLeft: 5,
        borderRadius: 10,
        backgroundColor: "white"
    }





})