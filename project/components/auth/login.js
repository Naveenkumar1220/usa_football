import React, { Component } from "react";
import { StyleSheet, Text, View,ImageBackground,Dimensions,Image } from 'react-native';
import {FormLogin} from '../form';
import FBFont from '../fonts';
import {DEFAULT_WHITE,MAROON} from '../colors'
const devWidth= Dimensions.get('window').width
const devHeight= Dimensions.get('window').height
class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require("../../assets/images/bg_image.jpg")} style={styles.bgImage}>
                    <View style={styles.mainView}>
                        <View style={{position:"absolute",top:0}}>
                            <View style={styles.welcomeBg}>
                                <View style={styles.welcome}>
                                    <Text style={[styles.textColor,FBFont.alternateMedium(36)]}>WELCOME</Text>
                                    <Text style={[styles.textColor,styles.secondText]}>Let's Get Started</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.content}>
                            <View style={styles.logo}>
                                <Image
                                    source={require("../../assets/images/usaf_logo.png")}                                
                                />
                            </View>
                            <View style={{marginHorizontal:18}}>
                            <FormLogin navigation={this.props.navigation}/>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: DEFAULT_WHITE,
      alignItems: 'center',
      justifyContent: 'center'
    },
    bgImage:{
        width: '100%', 
        height: '100%'
      },
      welcomeBg:{
        position:"relative",
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: devWidth*0.55,
        borderTopWidth: devHeight*0.55,
        borderRightColor: 'transparent',
        borderTopColor: MAROON
      },
      welcome:{
        position:"absolute",
        top:-devHeight*0.55,
        marginTop:16,
        marginLeft:17
      },
    textColor:{
      color:DEFAULT_WHITE
    },
    mainView:{
      backgroundColor:'rgba(0,31,70,0.7)',
      width:"100%",
      height:"100%",
      flex:1,
      position:"relative"
    },
    welcomeText:{
      fontSize:36,
      fontFamily:"alternategot"
    },
    secondText:{
      fontSize:21,
      fontFamily:"alternategot"
    },
    logo:{
        alignItems:"flex-end",
        marginBottom:57.5
    },
    content:{
        width:"100%",
        flex:1,
        height:Dimensions.get('window').height,
        justifyContent:"flex-end"
    }
  });
export default Login  