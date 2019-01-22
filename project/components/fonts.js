import { Font } from 'expo';
var FBFont = {
    async loadFonts() {
      await Font.loadAsync({
        "alternategot": require("../assets/fonts/AlternateGotNo3DOT/AlternateGotNo3DOT.otf")
      });
    },
  
    alternateMedium(size: Number) {
      return {
        fontFamily : 'alternategot',
        fontSize : size
      };
    },
  };
  
  export default FBFont;