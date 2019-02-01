import React, { Component } from "react";
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import {DEFAULT_WHITE,MAROON} from './colors';
import commonStyles from './style'
export class BtnMedium extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.page}>
                <View style={styles.btnMedium}>
                    <Text style={styles.btnText}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
export class BtnAdd extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.page}>
                <View style={[commonStyles.row,styles.btnAdd]} height={this.props.height}>
                    <Image source={this.props.image} style={{width:15,height:19}} resizeMode="cover"/>
                    <Text style={[styles.addText,styles.btnText]}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
export class BtnNext extends Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.page}>
                <View style={styles.btnNext} height={this.props.height}>
                    <Text style={styles.btnText}>{this.props.text}</Text>
                </View>
            </TouchableOpacity> 
        );
    }
}
const styles=StyleSheet.create({
    btnMedium:{
        backgroundColor:MAROON,
        width:170,
        height:43,
        justifyContent:"center",
        borderRadius:5,
        marginTop:25.5
    },
    btnText:{
        fontSize:16,
        textAlign:"center",
        color:DEFAULT_WHITE
    },
    btnAdd:{
        backgroundColor:MAROON,
        width:"100%",
        // height:35,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"
    },
    addText:{
        fontSize:12,
        marginLeft:5.7
    },
    btnNext:{
        backgroundColor:MAROON,
        width:101,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"
    }
})