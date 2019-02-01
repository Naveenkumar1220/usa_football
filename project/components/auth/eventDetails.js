import React, { Component } from "react";
import { Text, View,StyleSheet,Image,ScrollView,TouchableOpacity,SafeAreaView,TouchableWithoutFeedback } from 'react-native';
import { MAROON, DEFAULT_WHITE, SHADOW_COLOR } from "../colors";
import commonStyles from "../style";
class EventDetails extends Component{
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: DEFAULT_WHITE}}>
                <ScrollView>
                    <View>
                        <View style={styles.imgContainer}>
                            <Image source={require("../../assets/images/usa_can.jpg")} style={styles.imgStyle} borderRadius={10} resizeMode="cover"/>
                            <View style={styles.imgOpacity}>
                                <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Home')}>
                                        <Image source={require("../../assets/images/back_arrow.png")} style={styles.backArrow} resizeMode="cover"/>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                        <Text style={[styles.eventName,commonStyles.bold]}>THE BEST HIGH SCHOOL FOOTBALL WORLDWIDE</Text>
                        <Text style={styles.eventDesc}>
                            It may be America’s sport, but competition comes from all over the world. Come see the top football players from the U.S.,Mexico, Japan, Canada, Panama and more compete at the tenth annual International Bowl. It may be America’s sport, but competition comes from all over the world. 
                        </Text>
                        <View style={[commonStyles.boxShadow,styles.venue]}>
                            <View style={[commonStyles.row,styles.imgText]}>
                                <Image source={require("../../assets/images/location.png")} style={{width:15.2,height:16.5}} resizeMode="contain"/>
                                <Text style={[commonStyles.txtWrap,styles.txt]}>High School Training Camp - CANTON</Text>
                            </View>
                            <View style={[commonStyles.row,styles.imgText,styles.date]}>
                                <Image source={require("../../assets/images/calender.png")} style={{width:15.2,height:15.2}} resizeMode="contain"/>
                                <Text style={[commonStyles.txtWrap,styles.txt,commonStyles.bold]}>Dec 28 & 29, 2019</Text>
                            </View>
                            <View style={[commonStyles.row,styles.imgText]}>
                                <Image source={require("../../assets/images/time.png")} style={{width:15.2,height:15.2}} resizeMode="contain"/>
                                <Text style={[commonStyles.txtWrap,styles.txt,commonStyles.bold]}>08:00 am - 02:00 pm</Text>
                            </View>
                        </View>
                        <View style={[commonStyles.row,styles.total]}>
                            <View>
                                <Text>ATTENDEES</Text>
                                <Text style={commonStyles.bold}>300</Text>
                            </View>
                            <View style={[commonStyles.row,styles.cost]}>
                                <Text style={[commonStyles.bold,styles.athelete]}>$ 80</Text>
                                <Text style={[styles.bg]}>PER ATHELETE</Text>
                            </View>
                        </View>
                        <View style={styles.map}>
                            <Text style={{color:DEFAULT_WHITE,textAlign:'center'}}>This is just placeholder for map. Map will be added later</Text>
                        </View>
                        <Text style={[styles.eventName,commonStyles.bold]}>Additional Notes</Text>
                        <Text style={styles.eventDesc}>
                            It may be America’s sport, but competition comes from all over the world. Come see the top football players from the U.S.,Mexico, Japan, Canada, Panama and more compete at the tenth annual International Bowl. It may be America’s sport, but competition comes from all over the world. 
                        </Text>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('MemberSelect')}>
                            <View>
                                <Text style={styles.registerNow}>Register Now</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles=StyleSheet.create({
    imgContainer:{
        position:"relative"
    },
    imgOpacity:{
        position:"absolute",
        width:"100%",
        height:"100%",
        backgroundColor:'rgba(0,0,0,0.44)',
        borderRadius:10,
        overflow:"hidden"
    },
    imgStyle:{
        width:"100%",
        height:180,
        flex:1
    },
    backArrow:{
        width:17.8,
        height:13.2,
        margin:11.5
    },
    eventName:{
        fontSize:18,
        marginHorizontal:28,
        marginVertical:10
    },
    eventDesc:{
        marginHorizontal:10
    },
    venue:{
        paddingHorizontal:17,
        marginHorizontal:13,
        marginTop:10,
        marginBottom:25
    },
    imgText:{
        alignItems:"center",
        marginVertical:12
    },
    txt:{
        marginLeft:9
    },
    date:{
        marginVertical:0
    },
    cost:{
        alignItems:'center'
    },
    total:{
        justifyContent:"space-around",
        marginBottom:25
    },
    athelete:{
        paddingHorizontal:10,
        paddingVertical:9,
        alignSelf:"center",
        borderWidth:1,
        borderColor:MAROON
    },
    bg:{
        borderWidth:1,
        borderColor:MAROON,
        backgroundColor:MAROON,
        paddingHorizontal:10,
        paddingVertical:9,
        color:DEFAULT_WHITE
    },
    map:{
        height:221,
        marginBottom:15,
        backgroundColor:SHADOW_COLOR,
        alignItems:"center",
        justifyContent:"center"
    },
    registerNow:{
        backgroundColor:MAROON,
        paddingVertical:10,
        color:DEFAULT_WHITE,
        fontSize:20,
        textAlign:"center",
        marginTop:30
    }
});
export default EventDetails