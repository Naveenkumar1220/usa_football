import React, { Component } from "react";
import { Text, View,StyleSheet,Image,ScrollView,TouchableOpacity,SafeAreaView,TouchableWithoutFeedback } from 'react-native';
import { MAROON, DEFAULT_WHITE, SHADOW_COLOR } from "../colors";
import commonStyles from "../style";
import FBFont from "../fonts";
import { BtnAdd } from "../buttons";
class MemberSelect extends Component{
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: DEFAULT_WHITE}}>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={[FBFont.alternateMedium(23),styles.heading]}>Who's Attending</Text>
                        <View style={styles.addButton}>
                            <BtnAdd text="Add Another Person" height={35}/>
                        </View>
                        <View style={styles.member}>
                            <View style={[commonStyles.boxShadow,styles.memberCard]}>
                                <View style={[styles.name,commonStyles.row]}> 
                                    <Text>Myself - Sean Wilkening</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:DEFAULT_WHITE,
        paddingHorizontal:35
    },
    heading:{
        marginTop:31,
        marginBottom:22,
        textAlign:"center"
    },
    addButton:{
        marginBottom:12.5
    },
    name:{
        justifyContent:"space-between"
    },
    member:{
        marginVertical:12.5
    },
    memberCard:{
        padding:10
    }
});
export default MemberSelect