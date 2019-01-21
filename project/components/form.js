import React, { Component } from "react";
import { StyleSheet, Text, View,DrawerLayoutAndroid, ToolbarAndroid,ImageBackground,TextInput,Dimensions,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { BtnMedium } from "./buttons";
export class FormLogin extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding">
                <View style={styles.formContainer}>
                    <ImageBackground source={require("../assets/images/loginbg.png")} style={styles.bgImage} imageStyle={{borderRadius:5}} resizeMode="stretch">
                        <View style={styles.loginForm}>
                            <TextInput placeholder="Email Address" placeholderTextColor="#343741" style={styles.txtInput}></TextInput>
                            <TextInput placeholder="Password" placeholderTextColor="#343741" style={[styles.txtInput,styles.pswd]}></TextInput>
                            <BtnMedium
                                page={()=>{this.props.navigation.navigate('Register')}}
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
                            <TextInput placeholder="Username" placeholderTextColor="#343741" style={styles.txtInput}></TextInput>
                            <TextInput placeholder="Password" placeholderTextColor="#343741" style={[styles.txtInput,styles.pswd]}></TextInput>
                            <TextInput placeholder="Confirm Password" placeholderTextColor="#343741" style={[styles.txtInput,styles.pswd]}></TextInput>
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
            <KeyboardAvoidingView behavior="padding" style={{flex:1}}>
                <View style={styles.formContainer}>
                    <ImageBackground source={require("../assets/images/contactbg.png")} style={styles.bgImage} imageStyle={{borderRadius:5}} resizeMode="stretch">
                    <View style={styles.loginForm}>
                        <TextInput placeholder="First Name" placeholderTextColor="#343741" style={styles.txtInput}></TextInput>
                        <TextInput placeholder="Last Name" placeholderTextColor="#343741" style={[styles.txtInput,styles.pswd]}></TextInput>
                        <TextInput placeholder="Email Address" placeholderTextColor="#343741" style={[styles.txtInput,styles.pswd]}></TextInput>
                        <TextInput placeholder="Birthdate" placeholderTextColor="#343741" style={[styles.txtInput,styles.pswd]}></TextInput>
                        <TextInput placeholder="Mobile Number" placeholderTextColor="#343741" style={[styles.txtInput,styles.pswd]}></TextInput>
                        <BtnMedium
                            page={()=>{this.props.navigation.navigate('Register')}}
                            text="Next"
                        />
                        <Text style={styles.bottomText}>
                            <Text>Already have an account </Text><Text style={styles.loginNow}>Login Now</Text>
                        </Text>
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
        marginBottom:110,
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
        borderColor:"#343741",
        width:"100%",
        fontFamily:"alternategot"
      },
      formContainer:{
          width:"100%",
          position:"relative",
          alignItems:"center"
      },
      register:{
          borderBottomWidth:0.6,
          borderColor:"#343741",
          paddingBottom:1,
          fontSize:10,
          marginTop:12.5
      },
      pswd:{
          marginTop:31.5
      },
      loginNow:{
        borderBottomWidth:0.6,
        borderColor:"#343741",
        paddingBottom:1
      },
      bottomText:{
        fontSize:10,
        marginTop:12.5
      }
})