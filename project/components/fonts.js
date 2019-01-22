import { Font } from 'expo';
import RF from "react-native-responsive-fontsize";
import { Platform } from 'react-native';
const getSize = (size) => {
  return RF(size / (Platform.OS === 'android' ? 8 : 6.5))
};
var FBFont = {
    async loadFonts() {
      await Font.loadAsync({
        "alternategot": require("../assets/fonts/AlternateGotNo3DOT/AlternateGotNo3DOT.otf")
      });
    },
  
    alternateMedium(size: Number) {
      return {
        fontFamily : 'alternategot',
        fontSize : getSize(size)
      };
    },
  };
  
  export default FBFont;