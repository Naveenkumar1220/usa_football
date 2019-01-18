import React, { Component } from "react";
import { StyleSheet, Text, View,ImageBackground,Dimensions,Image } from 'react-native';
import {FormContact} from '../form';
const devWidth= Dimensions.get('window').width
const devHeight= Dimensions.get('window').height
class Contact extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require("../../assets/images/bg_image.jpg")} style={styles.bgImage}>
                    <View style={styles.mainView}>
                        <View style={styles.welcomeBg}>
                            <View style={styles.welcome}>
                                <Text style={styles.textColor}>CONTACT</Text>
                                <Text style={styles.textColor}>INFORMATION</Text>
                            </View>
                        </View>
                        <View style={styles.content}>
                            <View style={styles.logo}>
                                <Image
                                    source={require("../../assets/images/usaf_logo.png")}                                
                                />
                            </View>
                            <FormContact navigation={this.props.navigation}/>
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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bgImage:{
      width: '100%', 
      height: '100%',
      position:"relative"
    },
    welcomeBg:{
      position:"relative",
      width:devWidth*0.65,
      height:devHeight*0.65,
      transform: [{ rotate: '35deg'}],
      backgroundColor:"#8F0026",
      left:-100,
      top:-120
    },
    welcome:{
      position:"absolute",
      transform: [{ rotate: '-35deg'}],
      left:80,
      top:90
    },
    textColor:{
      color:"#FFFFFF",
      fontSize:36,
      fontFamily:"alternategot"
    },
    mainView:{
      backgroundColor:'rgba(0,31,70,0.7)',
      width:"100%",
      height:"100%",
      flex:1,
      position:"relative"
    },
    secondText:{
      fontSize:21
    },
    logo:{
        alignItems:"flex-end",
        marginBottom:57.5
    },
    content:{
        position:"absolute",
        width:"100%",
        flex:1,
        height:Dimensions.get('window').height,
        justifyContent:"flex-end"
    }
  });
export default Contact  