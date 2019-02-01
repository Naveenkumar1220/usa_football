import {StyleSheet} from "react-native";
import {DEFAULT_BLACK,DEFAULT_WHITE} from "./colors"
export default (commonStyles=StyleSheet.create({
    row:{
        flexDirection:"row"
    },
    txtWrap:{
        flexWrap:'wrap'
    },
    flex1:{
        flex:1
    },
    boxShadow:{
        shadowColor:DEFAULT_BLACK,
        shadowOffset:{width:0,height:8},
        shadowOpacity:0.4,
        shadowRadius:6,
        elevation:6,
        backgroundColor:DEFAULT_WHITE
    },
    bold:{
        fontWeight:"bold",
    }
}));