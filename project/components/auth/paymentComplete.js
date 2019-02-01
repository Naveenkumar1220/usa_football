import React, { Component } from "react";
import { Text, View, StyleSheet, Image, ScrollView, SafeAreaView,TouchableWithoutFeedback } from 'react-native';
import FBFont from "../fonts";
import { DEFAULT_WHITE, MAROON} from "../colors";
import {BtnAdd} from "../buttons"
class PaymentComplete extends Component {
    render(){
        return(
            <SafeAreaView style={{ flex: 1, backgroundColor: DEFAULT_WHITE }}>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={[FBFont.alternateMedium(23), styles.heading]}>Event Registration Review</Text>
                        <View style={{width:"100%"}}>
                            <BtnAdd text="Back To My Events" height={35} image={require("../../assets/images/my_events.png")} page={()=>{this.props.navigation.navigate("MyEvents")}}/>
                        </View>
                        <View style={[commonStyles.boxShadow,styles.card]}>
                            <View style={[commonStyles.row, styles.imgText]}>
                                <Image source={require("../../assets/images/location.png")} style={{ width: 15.2, height: 16.5 }} resizeMode="contain" />
                                <Text style={[commonStyles.txtWrap, styles.txt]}>High School Training Camp - CANTON</Text>
                            </View>
                            <View style={[commonStyles.row,styles.imgText]}>
                                <Image source={require("../../assets/images/calender.png")} style={{width:25,height:25,marginTop:3}}/>
                                <Text style={[commonStyles.txtWrap,styles.txt,commonStyles.bold]}>Dec 28 & 29, 2019</Text>
                            </View>
                            <View style={[commonStyles.row,styles.imgText]}>
                                <Image source={require("../../assets/images/time.png")} style={{width:25,height:25,marginTop:3}}/>
                                <Text style={[commonStyles.txtWrap,styles.txt,commonStyles.bold]}>08:00 am - 02:00 pm</Text>
                            </View>
                        </View>
                        <View style={styles.qrScan}>
                            <View style={styles.head}>
                                <Text style={[styles.txtColor,commonStyles.bold]}>Sean Wilkening</Text>
                                <Text style={styles.passport}>Add To Passport</Text>
                            </View>
                            <View style={{alignItems:"center"}}>
                                <Image source={require("../../assets/images/qr_code.png")} resizeMode="contain"/>
                            </View>
                        </View>
                        <View style={styles.qrScan}>
                            <View style={styles.head}>
                                <Text style={[styles.txtColor,commonStyles.bold]}>Dennis Wilkening</Text>
                                <Text style={styles.passport}>Add To Passport</Text>
                            </View>
                            <View style={{alignItems:"center"}}>
                                <Image source={require("../../assets/images/qr_code.png")} resizeMode="contain"/>
                            </View>
                        </View>
                        <View style={styles.horizontalLine}></View>
                        <View>
                            <Text style={[styles.txtColor,{marginBottom:3}]}>Directors</Text>
                            <View style={styles.head}>
                                <Text>Name 1</Text>
                                <Text>Name 2</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: DEFAULT_WHITE,
        paddingHorizontal: 14.5,
        justifyContent:"center",
        flex:1,
        marginBottom:25
    },
    heading: {
        marginTop: 31,
        marginBottom: 12.5,
        textAlign: "center"
    },
    card:{
        marginVertical:12.5,
        paddingVertical:15,
        paddingHorizontal:19,
        width:"100%"
    },
    imgText: {
        alignItems: "center",
        marginVertical: 12
    },
    txt: {
        marginLeft: 9
    },
    head:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    txtColor:{
        color:MAROON,
        fontSize:20
    },
    qrScan:{
        width:"100%",
        marginBottom:22
    },
    passport:{
        textDecorationLine:"underline"
    },
    horizontalLine:{
        width:"100%",
        height:1,
        backgroundColor:"#59575D",
        marginVertical:3
    }
})
export default PaymentComplete