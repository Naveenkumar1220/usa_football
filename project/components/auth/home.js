import React, { Component } from "react";
import { Text, View,StyleSheet,Image,TextInput,ScrollView } from 'react-native';
import FBFont from '../fonts';
import { MAROON, DEFAULT_WHITE, SHADOW_COLOR } from "../colors";
import commonStyles from "../style";
class Home extends Component{
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={[FBFont.alternateMedium(23),styles.headerStyle]}>Upcoming Events</Text>
                <View style={styles.searchContainer}>
                    <View style={styles.iconText}>
                        <Image source={require("../../assets/images/search_icon.png")} style={{width:17,height:17}}/>
                        <TextInput style={styles.txtInput}/>
                    </View>
                    <View style={styles.searchButton}>
                        <Text style={styles.txtColor}>Search</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.eventCard}>
                        <View style={styles.imageContainer}>
                            <Image source={require("../../assets/images/usa_can.jpg")} style={{width:"100%",height:130,flex:1,borderTopLeftRadius:5,borderTopRightRadius:5}} resizeMode="cover"/>
                            <View style={styles.invite}>
                                <View style={styles.inviteOnly}>
                                    <Image source={require("../../assets/images/invite.png")} style={{width:16.2,height:15.6}}/>
                                    <Text style={styles.inviteText}>Invite only</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.eventDetails}>
                            <View style={styles.nameLocation}>
                                <View>
                                    <Text style={[commonStyles.txtWrap,styles.eventName]}>MIDDLE SCHOOL BOWL GAME SERIES</Text>
                                </View>
                                <View style={commonStyles.row}>
                                    <Image source={require("../../assets/images/location.png")} style={{width:7.1,height:10.3}} resizeMode="contain"/>
                                    <Text style={[commonStyles.txtWrap,styles.txt]}>High School Training Camp - Canton</Text>
                                </View>
                            </View>
                            <View style={styles.dateTime}>
                                <View style={commonStyles.row}>
                                    <Image source={require("../../assets/images/calender.png")} style={{width:15.2,height:15.2}}/>
                                    <Text style={[commonStyles.txtWrap,styles.txt]}>Dec 28 & 29, 2019</Text>
                                </View>
                                <View style={commonStyles.row}>
                                    <Image source={require("../../assets/images/time.png")} style={{width:15.2,height:15.2}}/>
                                    <Text style={[commonStyles.txtWrap,styles.txt]}>08:00 am - 02:00 pm</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:"center",
        marginHorizontal:13
    },
    headerStyle:{
        marginTop:15,
        marginBottom:17
    },
    searchContainer:{
        height:35,
        width:"100%",
        marginBottom:25,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    iconText:{
        flexDirection:"row",
        borderWidth:1,
        borderColor:MAROON,
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
        flex:1,
        alignItems:"center",
        paddingLeft:14.5
    },
    searchButton:{
        width:101,
        backgroundColor:MAROON,
        alignItems:"center",
        justifyContent:"center",
        borderTopRightRadius:25,
        borderBottomRightRadius:25
    },
    txtColor:{
        color:DEFAULT_WHITE
    },
    txtInput:{
       flex:1
    },
    eventCard:{
        shadowColor:SHADOW_COLOR,
        shadowOffset:{width:0,height:8},
        shadowOpacity:10,
        shadowRadius:0,
        elevation:2
    },
    imageContainer:{
        position:"relative"
    },
    invite:{
        position:"absolute",
        right:18
    },
    inviteOnly:{
        flexDirection:"row",
        padding:7,
        backgroundColor:DEFAULT_WHITE,
        alignItems:"center"
    },
    inviteText:{
        paddingLeft:5.8
    },
    eventDetails:{
        flex:1,
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:7,
        paddingHorizontal:10
    },
    nameLocation:{
        width:'55%'
    },
    eventName:{
        fontSize:18
    },
    dateTime:{
        width:'42%'
    },
    txt:{
        marginLeft:6
    }
});
export default Home