import React, { Component } from "react";
import { StyleSheet, Text, View,ImageBackground,Dimensions,Image,PixelRatio } from 'react-native';
import {FormRegister} from '../form';
const devWidth= Dimensions.get('window').width
const devHeight= Dimensions.get('window').height
class Register extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require("../../assets/images/bg_image.jpg")} style={styles.bgImage}>
                    <View style={styles.mainView}>
                        <View style={styles.welcomeBg}>
                            <View style={styles.welcome}>
                                <Text style={styles.textColor}>REGISTER</Text>
                                <Text style={styles.textColor}>NOW</Text>
                            </View>
                        </View>
                        <View style={styles.content}>
                            <View style={styles.logo}>
                                <Image
                                    source={require("../../assets/images/usaf_logo.png")}                                
                                />
                            </View>
                            <View style={{marginHorizontal:18}}>
                                <FormRegister navigation={this.props.navigation}/>
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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bgImage:{
        width: '100%', 
        height: '100%',
      //   position:"relative"
      },
      welcomeBg:{
        position:"relative",
      //   width:devWidth*0.65,
      //   height:devHeight*0.65,
      //   transform: [{ rotate: '35deg'}],
      //   backgroundColor:"#8F0026",
      //   left:-100,
      //   top:-120
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderRightWidth: devWidth*0.5,
      borderTopWidth: devHeight*0.5,
      borderRightColor: 'transparent',
      borderTopColor: '#8F0026'
      },
      welcome:{
        position:"absolute",
      //   transform: [{ rotate: '-35deg'}],
      //   left:85,
        top:-devHeight*0.5,
        marginTop:16/PixelRatio.get(),
        marginLeft:17/PixelRatio.get()
      },
    textColor:{
      color:"#FFFFFF",
      fontSize:36/PixelRatio.get(),
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
export default Register  