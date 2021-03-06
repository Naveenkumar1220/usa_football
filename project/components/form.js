import React, { Component } from "react";
import { StyleSheet, Text, View,ImageBackground,TextInput,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { BtnMedium } from "./buttons";
import {INPUT_BORDER} from './colors';
export class FormLogin extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior='padding'>
                <View style={styles.formContainer}>
                    <ImageBackground source={require("../assets/images/loginbg.png")} style={styles.bgImage} imageStyle={{borderRadius:5}} resizeMode="stretch">
                        <View style={styles.loginForm}>
                            <TextInput placeholder="Email Address" placeholderTextColor="#343741" style={styles.txtInput} allowFontScaling={false}></TextInput>
                            <TextInput placeholder="Password" placeholderTextColor="#343741" style={[styles.txtInput,styles.pswd]} secureTextEntry={true} allowFontScaling={false}></TextInput>
                            <BtnMedium
                                page={()=>{this.props.navigation.navigate('Home')}}
                                text="Login"
                            />
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Contact')}>
                                <Text style={styles.register}>Register Now</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
export class FormRegister extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding">
                <View style={styles.formContainer}>
                    <ImageBackground source={require("../assets/images/registerbg.png")} style={styles.bgImage} imageStyle={{borderRadius:5}} resizeMode="stretch">
                        <View style={styles.loginForm}>
                            <TextInput placeholder="Username" placeholderTextColor="#343741" style={styles.txtInput} allowFontScaling={false}></TextInput>
                            <TextInput placeholder="Password" placeholderTextColor="#343741" style={[styles.txtInput,styles.pswd]} secureTextEntry={true} allowFontScaling={false}></TextInput>
                            <TextInput placeholder="Confirm Password" placeholderTextColor="#343741" style={[styles.txtInput,styles.pswd]} secureTextEntry={true} allowFontScaling={false}></TextInput>
                            <BtnMedium
                                page={()=>{this.props.navigation.navigate('Home')}}
                                text="Register Now"
                            />
                        </View>
                    </ImageBackground>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
export class FormContact extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={{justifyContent:'flex-end'}}>
                <View style={styles.formContainer}>
                    <ImageBackground source={require("../assets/images/contactbg.png")} style={styles.bgImage} imageStyle={{borderRadius:5}} resizeMode="stretch">
                    <View style={styles.loginForm}>
                        <TextInput placeholder="First Name" placeholderTextColor="#343741" style={styles.txtInput} allowFontScaling={false}></TextInput>
                        <TextInput placeholder="Last Name" placeholderTextColor="#343741" style={[styles.txtInput,styles.pswd]} allowFontScaling={false}></TextInput>
                        <TextInput placeholder="Email Address" placeholderTextColor="#343741" style={[styles.txtInput,styles.pswd]} allowFontScaling={false}></TextInput>
                        <TextInput placeholder="Birthdate" placeholderTextColor="#343741" style={[styles.txtInput,styles.pswd]} allowFontScaling={false}></TextInput>
                        <TextInput placeholder="Mobile Number" placeholderTextColor="#343741" style={[styles.txtInput,styles.pswd]} allowFontScaling={false}></TextInput>
                        <BtnMedium
                            page={()=>{this.props.navigation.navigate('Register')}}
                            text="Next"
                        />
                        <View style={[styles.bottomText,commonStyles.row]}>
                            <Text>Already have an account </Text>
                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Login")}}>
                                <Text style={styles.loginNow}>Login Now</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                    </ImageBackground>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    bgImage:{
        width:"100%",
        marginBottom:55,
        alignItems:"center"
    },
    loginForm:{
        width:"100%",
        paddingHorizontal:29,
        paddingTop:61,
        paddingBottom:28,
        alignItems:"center"
      },
      txtInput:{
        borderBottomWidth:0.3,
        paddingBottom:3.2,
        borderColor:INPUT_BORDER,
        width:"100%",
        fontFamily:"alternategot",
        fontSize:16
      },
      formContainer:{
          width:"100%",
          position:"relative",
          alignItems:"center",
          justifyContent:"flex-end"
      },
      register:{
          borderBottomWidth:0.6,
          borderColor:INPUT_BORDER,
          paddingBottom:1,
          fontSize:14,
          marginTop:12.5
      },
      pswd:{
          marginTop:31.5
      },
      loginNow:{
        borderBottomWidth:0.6,
        borderColor:INPUT_BORDER,
        paddingBottom:1
      },
      bottomText:{
        fontSize:14,
        marginTop:12.5
      }
})