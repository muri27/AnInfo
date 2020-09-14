import React from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight, TextInput} from 'react-native';

export default function loginScreen ({navigation}) {
        return(      
            <View style={styles.container}>
                <View style={{alignItems: 'center',justifyContent:'center', paddingTop: 105}}>
                    <Image source={require('../image/logo.jpg')} style={styles.image}/>
                </View>

                <Text style={{fontSize: 14, paddingTop:63, paddingLeft: 43}}>Username/Email</Text>
                
                <View style={styles.body}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Enter your username here ...'
                        placeholderTextColor='grey'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>

                <Text style={{fontSize: 14, paddingTop:35, paddingLeft: 43}}>Password</Text>
                <View style={styles.body}>
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry={true}
                        placeholder='Enter your password here ...'
                        placeholderTextColor='grey'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>
                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <TouchableHighlight onPress={() => navigation.push('Drawer')} underlayColor="white">
                        <View style={styles.button}>
                            <Text style={styles.buttonText1}>LOGIN</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            
                
                <View style={{alignItems:'center'}}>
                    <TouchableHighlight onPress={() => navigation.push('Login')} underlayColor="white">
                        <View style={styles.button2}>
                            <Text style={styles.buttonText2}>REGISTER</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'white'
    },
    body:{
        marginHorizontal: 40,
        marginTop: 4,
        borderWidth: 2,
        borderColor:'#41c8de',
        width: 303,
        height: 40,
        borderRadius: 8
    },
    button:{
        marginTop: 51,
        width: 95,
        height: 28,
        backgroundColor: '#2196f3',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent:'center'  
    },
    textInput: {
        alignSelf: 'stretch',
        paddingTop: 5,
        paddingLeft: 7,
        fontSize: 14
    },
    button2:{
        marginTop: 35,
        width: 95,
        height: 28,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent:'center',
        borderWidth: 1,
        borderColor: '#2196f3'
    },
    buttonText1:{
        fontSize: 14, 
        color: '#ffffff'
    },
    buttonText2:{
      fontSize: 14, 
      color: '#2196f3'
  }
})