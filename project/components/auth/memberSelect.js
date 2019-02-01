import React, { Component } from "react";
import { Text, View, StyleSheet, Image, ScrollView, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { MAROON, DEFAULT_WHITE } from "../colors";
import commonStyles from "../style";
import FBFont from "../fonts";
import { BtnAdd,BtnNext } from "../buttons";
import checkedImg from '../../assets/images/checked.png';
import uncheckedImg from '../../assets/images/unchecked.png';
class MemberSelect extends Component {
    constructor() {
        super();
        this.state = { showCheckbox: false, showCheckbox1: true, showCheckbox2: true };
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
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: DEFAULT_WHITE }}>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={[FBFont.alternateMedium(23), styles.heading]}>Who's Attending</Text>
                        <View style={styles.addButton}>
                            <BtnAdd text="Add Another Person" height={35} image={require("../../assets/images/add_another.png")}/>
                        </View>
                        <View style={styles.member}>
                            <View style={[commonStyles.boxShadow, styles.memberCard]}>
                                <View style={[styles.name, commonStyles.row]}>
                                    <Text style={[styles.txtColor,commonStyles.bold]}>Myself - Sean Wilkening</Text>
                                    <TouchableWithoutFeedback
                                        style={styles.checkBox}
                                        onPress={() => this.setState({ showCheckbox: !this.state.showCheckbox })}
                                    >
                                        {this.renderImage(this.state.showCheckbox)}
                                    </TouchableWithoutFeedback>
                                </View>
                                <View style={[commonStyles.row, styles.imgText, styles.date]}>
                                    <Image source={require("../../assets/images/calender.png")} style={{ width: 15.2, height: 15.2 }} resizeMode="contain" />
                                    <Text style={[commonStyles.txtWrap, styles.txt]}>Dec 28 & 29, 2019</Text>
                                </View>
                                <View style={[commonStyles.row, styles.imgText]}>
                                    <Image source={require("../../assets/images/location.png")} style={{ width: 15.2, height: 16.5 }} resizeMode="contain" />
                                    <Text style={[commonStyles.txtWrap, styles.txt]}>High School Training Camp - CANTON</Text>
                                </View>
                            </View>
                            <View style={styles.border}></View>
                        </View>
                        <View style={styles.member}>
                            <View style={[commonStyles.boxShadow, styles.memberCard]}>
                                <View style={[styles.name, commonStyles.row]}>
                                    <Text style={[styles.txtColor,commonStyles.bold]}>Dennis Wilkening - Child</Text>
                                    <TouchableWithoutFeedback
                                        style={styles.checkBox}
                                        onPress={() => this.setState({ showCheckbox1: !this.state.showCheckbox1 })}
                                    >
                                        {this.renderImage(this.state.showCheckbox1)}
                                    </TouchableWithoutFeedback>
                                </View>
                                <View style={[commonStyles.row, styles.imgText, styles.date]}>
                                    <Image source={require("../../assets/images/calender.png")} style={{ width: 15.2, height: 15.2 }} resizeMode="contain" />
                                    <Text style={[commonStyles.txtWrap, styles.txt]}>Dec 28 & 29, 2019</Text>
                                </View>
                                <View style={[commonStyles.row, styles.imgText]}>
                                    <Image source={require("../../assets/images/location.png")} style={{ width: 15.2, height: 16.5 }} resizeMode="contain" />
                                    <Text style={[commonStyles.txtWrap, styles.txt]}>High School Training Camp - CANTON</Text>
                                </View>
                            </View>
                            <View style={styles.border}></View>
                        </View>
                        <View style={styles.member}>
                            <View style={[commonStyles.boxShadow, styles.memberCard]}>
                                <View style={[styles.name, commonStyles.row]}>
                                    <Text style={[styles.txtColor,commonStyles.bold]}>Gretchen Wilkening - Spouse</Text>
                                    <TouchableWithoutFeedback
                                        style={styles.checkBox}
                                        onPress={() => this.setState({ showCheckbox2: !this.state.showCheckbox2 })}
                                    >
                                        {this.renderImage(this.state.showCheckbox2)}
                                    </TouchableWithoutFeedback>
                                </View>
                                <View style={[commonStyles.row, styles.imgText, styles.date]}>
                                    <Image source={require("../../assets/images/calender.png")} style={{ width: 15.2, height: 15.2 }} resizeMode="contain" />
                                    <Text style={[commonStyles.txtWrap, styles.txt]}>Dec 28 & 29, 2019</Text>
                                </View>
                                <View style={[commonStyles.row, styles.imgText]}>
                                    <Image source={require("../../assets/images/location.png")} style={{ width: 15.2, height: 16.5 }} resizeMode="contain" />
                                    <Text style={[commonStyles.txtWrap, styles.txt]}>High School Training Camp - CANTON</Text>
                                </View>
                            </View>
                            <View style={styles.border}></View>
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
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: DEFAULT_WHITE,
        paddingHorizontal: 35
    },
    heading: {
        marginTop: 31,
        marginBottom: 22,
        textAlign: "center"
    },
    addButton: {
        marginBottom: 12.5
    },
    name: {
        justifyContent: "space-between"
    },
    member: {
        marginVertical: 12.5
    },
    memberCard: {
        padding: 10
    },
    checkBox: {
        width: 30,
        height: 30
    },
    imgText: {
        alignItems: "center",
        marginVertical: 12
    },
    txt: {
        marginLeft: 9
    },
    date: {
        marginVertical: 0
    },
    border:{
        width:"100%",
        height:3,
        backgroundColor:MAROON
    },
    txtColor:{
        color:MAROON,
        fontSize:17
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
});
export default MemberSelect