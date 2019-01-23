import React, { Component } from "react";
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {DEFAULT_WHITE,MAROON} from './colors';
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
        fontSize:18,
        textAlign:"center",
        color:DEFAULT_WHITE
    }
})