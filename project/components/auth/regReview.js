import React, { Component } from "react";
import { Text, View, StyleSheet, Image, ScrollView, SafeAreaView,TouchableWithoutFeedback } from 'react-native';
import FBFont from "../fonts";
import { DEFAULT_WHITE, MAROON} from "../colors";
import checkedImg from '../../assets/images/checked.png';
import uncheckedImg from '../../assets/images/unchecked.png';
import {BtnNext} from "../buttons"
class RegReview extends Component {
    constructor() {
        super();
        this.state = { showCheckbox: true };
    }
    static navigationOptions = {
        header: null,
    };
    renderImage = (showCheckbox) => {
        var imgSource = showCheckbox ? uncheckedImg : checkedImg;
        return (
            <Image
                style={styles.checkBox}
                source={imgSource}
            />
        );
    }
    render(){
        return(
            <SafeAreaView style={{ flex: 1, backgroundColor: DEFAULT_WHITE }}>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={[FBFont.alternateMedium(23), styles.heading]}>Event Registration Review</Text>
                        <View style={[commonStyles.boxShadow,styles.card]}>
                            <Text style={[styles.heading1,commonStyles.bold]}>THE BEST HIGH SCHOOL FOOTBALL WORLDWIDE</Text>
                            <Text>It may be America’s sport, but competition comes from all over the world. Come see the top football players from the U.S., Mexico, Japan, Canada, Panama and more compete at the tenth annual International Bowl. It may be America’s sport, but competition comes from all over the world. </Text>
                            <View style={[commonStyles.row, styles.imgText]}>
                                <Image source={require("../../assets/images/location.png")} style={{ width: 15.2, height: 16.5 }} resizeMode="contain" />
                                <Text style={[commonStyles.txtWrap, styles.txt]}>High School Training Camp - CANTON</Text>
                            </View>
                            <View style={[commonStyles.row,styles.timeDate]}>
                                <View style={{width:"60%"}}>
                                    <View style={[commonStyles.row,styles.imgText]}>
                                        <Image source={require("../../assets/images/calender_maroon.png")} style={{width:25,height:25,marginTop:3}}/>
                                        <Text style={[commonStyles.txtWrap,styles.txt,styles.txtColor,commonStyles.bold]}>Dec 28 & 29, 2019</Text>
                                    </View>
                                    <View style={[commonStyles.row,styles.imgText]}>
                                        <Image source={require("../../assets/images/time_maroon.png")} style={{width:25,height:25,marginTop:3}}/>
                                        <Text style={[commonStyles.txtWrap,styles.txt,styles.txtColor,commonStyles.bold]}>08:00 am - 02:00 pm</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={{width:"35%",justifyContent:"center",alignItems:"center"}}>
                                    <Text style={styles.attendeesText}>ATTENDEES</Text>
                                    <Text style={[commonStyles.bold,styles.attendeesText]}>275/300</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[commonStyles.boxShadow,styles.card1]}>
                            <Text style={[commonStyles.bold,styles.nameText]}>Sean Wilkening</Text>
                            <Text style={styles.horizontalLine}></Text>
                            <Text style={[commonStyles.bold,styles.nameText]}>Dennis Wilkening</Text>
                            <View style={[commonStyles.row,styles.agree]}>
                                <TouchableWithoutFeedback
                                    style={styles.checkBox}
                                    onPress={() => this.setState({ showCheckbox: !this.state.showCheckbox })}
                                >
                                    <View style={[commonStyles.row,{alignItems:"center"}]}>
                                        {this.renderImage(this.state.showCheckbox)}
                                        <Text style={styles.agreeText}>I agree to waiver for all attendees</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback>
                                    <Text style={styles.link}>Link To Waiver</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                        <View style={[commonStyles.boxShadow,styles.card1]}>
                            <View style={styles.rate}>
                                <Text style={commonStyles.bold}>Sub Total</Text>
                                <Text style={commonStyles.bold}>$200.00</Text>
                            </View>
                            <View style={styles.rate}>
                                <Text style={commonStyles.bold}>Discount</Text>
                                <Text style={commonStyles.bold}>$10.00</Text>
                            </View>
                            <View style={styles.rate}>
                                <Text style={commonStyles.bold}>Tax</Text>
                                <Text style={commonStyles.bold}>$3.60</Text>
                            </View>
                            <View style={styles.horizontalLine}></View>
                            <View style={styles.rate}>
                                <Text style={commonStyles.bold}>Total</Text>
                                <Text style={commonStyles.bold}>$193.60</Text>
                            </View>
                        </View>
                        <View style={[commonStyles.row,styles.buttons]}>
                            <View style={styles.btnCancel}>
                                <BtnNext text="Cancel" height={39} page={()=>{this.props.navigation.navigate('MemberSelect')}}/>
                            </View>
                            <View style={styles.btnNext}>
                                <BtnNext text="Register" height={39} page={()=>{this.props.navigation.navigate('PaymentComplete')}}/>
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
        alignItems:"center",
        justifyContent:"center",
        flex:1
    },
    heading: {
        marginTop: 31,
        marginBottom: 12.5,
        textAlign: "center"
    },
    card:{
        marginVertical:12.5,
        paddingVertical:15,
        paddingHorizontal:19
    },
    heading1:{
        fontSize:14,
        color:MAROON,
        marginBottom:3
    },
    imgText: {
        alignItems: "center",
        marginVertical: 12
    },
    txt: {
        marginLeft: 9
    },
    txtColor:{
        color:MAROON,
        fontSize:16
    },
    timeDate:{
        justifyContent:"space-between"
    },
    line:{
        width:1,
        height:"100%",
        backgroundColor:"#59575D"
    },
    attendeesText:{
        textAlign:"center",
        fontSize:15,
        marginTop:3
    },
    card1:{
        marginVertical:12.5,
        paddingVertical:15,
        width:"100%"
    },
    horizontalLine:{
        width:"100%",
        height:1,
        backgroundColor:"#59575D",
        marginVertical:3
    },
    nameText:{
        paddingVertical:5,
        paddingHorizontal:19,
        fontSize:16
    },
    agree:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:19,
        paddingTop:15
    },
    checkBox:{
        width:15,
        height:15
    },
    link:{
        color:MAROON,
        textDecorationLine:"underline",
        textDecorationColor:MAROON
    },
    agreeText:{
        marginLeft:5
    },
    rate:{
        paddingHorizontal:19,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:3
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
export default RegReview