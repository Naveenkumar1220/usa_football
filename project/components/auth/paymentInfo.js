import React, { Component } from "react";
import { Text, View, StyleSheet, Image, ScrollView, SafeAreaView,TextInput } from 'react-native';
import FBFont from "../fonts";
import { DEFAULT_WHITE, MAROON, INPUT_BORDER, DEFAULT_BLACK } from "../colors";
import {BtnNext} from "../buttons"
class PaymentInfo extends Component {
    render(){
        return(
            <SafeAreaView style={{ flex: 1, backgroundColor: DEFAULT_WHITE }}>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={[FBFont.alternateMedium(23), styles.heading]}>Payment Information</Text>
                        <View style={[commonStyles.boxShadow,commonStyles.row,styles.card]}>
                            <TextInput placeholder="Have Promo Code?" placeholderTextColor={MAROON} style={styles.txtInput} allowFontScaling={false}></TextInput>
                            <Image source={require("../../assets/images/tick_gray.png")} style={{ width: 25, height: 25}} resizeMode="cover" />
                        </View>
                        <View style={[commonStyles.boxShadow,styles.card]}>
                            <TextInput placeholder="Credit Card Number" placeholderTextColor={DEFAULT_BLACK} style={styles.txtInput} allowFontScaling={false}></TextInput>
                            <View style={[commonStyles.row,styles.expiry]}>
                                <View style={[styles.txtInputImage,commonStyles.row]}>
                                    <TextInput placeholder="Expiry" placeholderTextColor={DEFAULT_BLACK} allowFontScaling={false} style={styles.creditText}></TextInput>
                                    <Image source={require("../../assets/images/calender.png")} style={{ width: 25, height: 25}} resizeMode="cover" />
                                </View>
                                <TextInput placeholder="CVV" placeholderTextColor={DEFAULT_BLACK} style={styles.cardNum} allowFontScaling={false}></TextInput>
                            </View>
                        </View>
                        <Text style={[FBFont.alternateMedium(23), styles.heading]}>Billing Address</Text>
                        <View style={[commonStyles.boxShadow,styles.card]}>
                            <TextInput placeholder="Street Address 1" placeholderTextColor={DEFAULT_BLACK} style={[styles.txtInput,styles.mart30]} allowFontScaling={false}></TextInput>
                            <TextInput placeholder="Street Address 2" placeholderTextColor={DEFAULT_BLACK} style={[styles.txtInput,styles.mart30]} allowFontScaling={false}></TextInput>
                            <TextInput placeholder="City" placeholderTextColor={DEFAULT_BLACK} style={[styles.txtInput,styles.mart30]} allowFontScaling={false}></TextInput>
                            <View style={[commonStyles.row,styles.state]}>
                                <TextInput placeholder="State" placeholderTextColor={DEFAULT_BLACK} style={[styles.txtInput,styles.stateDd]} allowFontScaling={false}></TextInput>
                                <TextInput placeholder="Postal Code" placeholderTextColor={DEFAULT_BLACK} style={[styles.txtInput,styles.code]} allowFontScaling={false}></TextInput>
                            </View>
                        </View>
                        <View style={[commonStyles.row,styles.buttons]}>
                            <View style={styles.btnCancel}>
                                <BtnNext text="Cancel" height={39} page={()=>{this.props.navigation.navigate('Home')}}/>
                            </View>
                            <View style={styles.btnNext}>
                                <BtnNext text="Next" height={39} page={()=>{this.props.navigation.navigate('RegReview')}}/>
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
        paddingHorizontal: 14.5
    },
    heading: {
        marginTop: 31,
        marginBottom: 12.5,
        textAlign: "center"
    },
    card:{
        marginVertical:12.5,
        paddingTop:17,
        paddingBottom:25,
        paddingHorizontal:39
    },
    txtInput:{
        borderBottomWidth:0.3,
        paddingBottom:3.2,
        borderColor:INPUT_BORDER,
        width:"90%",
        fontFamily:"alternategot",
        fontSize:16
    },
    expiry:{
        justifyContent:"space-between",
        marginTop:30
    },
    txtInputImage:{
        width:"60%",
        borderBottomWidth:0.3,
        paddingBottom:3.2,
        borderColor:INPUT_BORDER
    },
    creditText:{
        width:"80%",
        fontFamily:"alternategot",
        fontSize:16
    },
    cardNum:{
        borderBottomWidth:0.3,
        paddingBottom:3.2,
        borderColor:INPUT_BORDER,
        width:"30%",
        fontFamily:"alternategot",
        fontSize:16
    },
    state:{
        justifyContent:"space-between",
        marginTop:30
    },
    mart30:{
        marginTop:30
    },
    stateDd:{
        width:"60%",
        borderBottomWidth:0.3,
        paddingBottom:3.2,
        borderColor:INPUT_BORDER,
        fontFamily:"alternategot",
        fontSize:16
    },
    code:{
        width:"30%",
        borderBottomWidth:0.3,
        paddingBottom:3.2,
        borderColor:INPUT_BORDER,
        fontFamily:"alternategot",
        fontSize:16
    },
    buttons:{
        justifyContent:"center",
        marginTop:12.5,
        marginBottom:25
    },
    btnNext:{
        width:101
    },
    btnCancel:{
        width:101,
        marginRight:27
    }
})
export default PaymentInfo