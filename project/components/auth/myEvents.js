import React, { Component } from "react";
import { Text, View,StyleSheet,Image,TextInput,ScrollView,TouchableOpacity } from 'react-native';
import FBFont from '../fonts';
import { MAROON, DEFAULT_WHITE } from "../colors";
import commonStyles from "../style";
class MyEvents extends Component{
    static navigationOptions = {
        header: {
          visible: false,
        }
      };
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={[FBFont.alternateMedium(23),styles.headerStyle]}>My Upcoming Events</Text>
                <View style={{flex:1}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('EventDetails')}>
                            <View style={[styles.eventCard,commonStyles.boxShadow]}>
                                <View style={styles.imageContainer}>
                                    <Image source={require("../../assets/images/usa_can.jpg")} style={{width:"100%",height:130,flex:1,overflow:'hidden'}} borderRadius={5} resizeMode="cover"/>
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
    eventCard:{
        marginBottom:30,
        marginHorizontal:13,
        paddingBottom:7
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
    }
})
export default MyEvents