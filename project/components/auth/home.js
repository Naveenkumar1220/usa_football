import React, { Component } from "react";
import { Text, View,StyleSheet,Image,TextInput,ScrollView,TouchableOpacity } from 'react-native';
import FBFont from '../fonts';
import { MAROON, DEFAULT_WHITE } from "../colors";
import commonStyles from "../style";
class Home extends Component{
    static navigationOptions = {
        header: {
          visible: false,
        }
      };
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
                <View style={{flex:1}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('EventDetails')}>
                            <View style={[styles.eventCard,commonStyles.boxShadow]}>
                                <View style={styles.imageContainer}>
                                    <Image source={require("../../assets/images/usa_can.jpg")} style={{width:"100%",height:130,flex:1,overflow:'hidden'}} borderRadius={5} resizeMode="cover"/>
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
                                            <Image source={require("../../assets/images/location.png")} style={{marginTop:3,width:10,height:16}} resizeMode="contain"/>
                                            <Text style={[commonStyles.txtWrap,styles.txt]}>High School Training Camp - Canton</Text>
                                        </View>
                                    </View>
                                    <View style={styles.dateTime}>
                                        <View style={[commonStyles.row,styles.imgText]}>
                                            <Image source={require("../../assets/images/calender.png")} style={{width:15.2,height:15.2,marginTop:3}}/>
                                            <Text style={[commonStyles.txtWrap,styles.txt]}>Dec 28 & 29, 2019</Text>
                                        </View>
                                        <View style={[commonStyles.row,styles.imgText]}>
                                            <Image source={require("../../assets/images/time.png")} style={{width:15.2,height:15.2,marginTop:3}}/>
                                            <Text style={[commonStyles.txtWrap,styles.txt]}>08:00 am - 02:00 pm</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[commonStyles.row,styles.bottom]}>
                                    <View style={styles.bgColor}>
                                        <View style={[commonStyles.row,{alignItems:"center"}]}>
                                            <Text style={[styles.bottomText,{fontSize:25}]}>$ 80 </Text>
                                            <Text style={styles.bottomText}>PER ATHLETE</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}></View>
                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('MemberSelect')} style={styles.bgColor}>
                                        <View>
                                            <Text style={styles.bottomText}>Register Now</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('EventDetails')}>
                            <View style={[styles.eventCard,commonStyles.boxShadow]}>
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
                                            <Image source={require("../../assets/images/location.png")} style={{marginTop:3,width:10,height:16}} resizeMode="contain"/>
                                            <Text style={[commonStyles.txtWrap,styles.txt]}>High School Training Camp - Canton</Text>
                                        </View>
                                    </View>
                                    <View style={styles.dateTime}>
                                        <View style={[commonStyles.row,styles.imgText]}>
                                            <Image source={require("../../assets/images/calender.png")} style={{width:15.2,height:15.2,marginTop:3}}/>
                                            <Text style={[commonStyles.txtWrap,styles.txt]}>Dec 28 & 29, 2019</Text>
                                        </View>
                                        <View style={[commonStyles.row,styles.imgText]}>
                                            <Image source={require("../../assets/images/time.png")} style={{width:15.2,height:15.2,marginTop:3}}/>
                                            <Text style={[commonStyles.txtWrap,styles.txt]}>08:00 am - 02:00 pm</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[commonStyles.row,styles.bottom]}>
                                    <View style={styles.bgColor}>
                                        <View style={[commonStyles.row,{alignItems:"center"}]}>
                                            <Text style={[styles.bottomText,{fontSize:25}]}>$ 80 </Text>
                                            <Text style={styles.bottomText}>PER ATHLETE</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}></View>
                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('MemberSelect')} style={styles.bgColor}>
                                        <View>
                                            <Text style={styles.bottomText}>Register Now</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('EventDetails')}>
                            <View style={[styles.eventCard,commonStyles.boxShadow]}>
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
                                            <Image source={require("../../assets/images/location.png")} style={{marginTop:3,width:10,height:16}} resizeMode="contain"/>
                                            <Text style={[commonStyles.txtWrap,styles.txt]}>High School Training Camp - Canton</Text>
                                        </View>
                                    </View>
                                    <View style={styles.dateTime}>
                                        <View style={[commonStyles.row,styles.imgText]}>
                                            <Image source={require("../../assets/images/calender.png")} style={{width:15.2,height:15.2,marginTop:3}}/>
                                            <Text style={[commonStyles.txtWrap,styles.txt]}>Dec 28 & 29, 2019</Text>
                                        </View>
                                        <View style={[commonStyles.row,styles.imgText]}>
                                            <Image source={require("../../assets/images/time.png")} style={{width:15.2,height:15.2,marginTop:3}}/>
                                            <Text style={[commonStyles.txtWrap,styles.txt]}>08:00 am - 02:00 pm</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[commonStyles.row,styles.bottom]}>
                                    <View style={styles.bgColor}>
                                        <View style={[commonStyles.row,{alignItems:"center"}]}>
                                            <Text style={[styles.bottomText,{fontSize:25}]}>$ 80 </Text>
                                            <Text style={styles.bottomText}>PER ATHLETE</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}></View>
                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('MemberSelect')} style={styles.bgColor}>
                                        <View>
                                            <Text style={styles.bottomText}>Register Now</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:"center"
    },
    headerStyle:{
        marginTop:15,
        marginBottom:17
    },
    searchContainer:{
        height:35,
        marginBottom:25,
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:13
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
        marginBottom:30,
        marginHorizontal:13,
        paddingBottom:7
    },
    imageContainer:{
        position:"relative",
        overflow:"hidden"
    },
    invite:{
        position:"absolute",
        right:0
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
        paddingTop:7,
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
    },
    imgText:{
        marginTop:10
    },
    bottom:{
        marginTop:10
    },
    bgColor:{
        backgroundColor:MAROON,
        padding:3,
        width:"49.5%",
        alignItems:"center",
        justifyContent:"center"
    },
    line:{
        width:1,
        height:"100%",
        backgroundColor:DEFAULT_WHITE
    },
    bottomText:{
        color:DEFAULT_WHITE
    }
});
export default Home