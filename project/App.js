import React from 'react';
import AuthStack from './components/auth/index'
import { Platform, StatusBar,View} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {Font} from "expo";
export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { loading: true };
  // }
  // async componentWillMount() {
  //   await Font.loadAsync({
  //     "alternategot": require("./assets/fonts/AlternateGotNo3DOT/AlternateGotNo3DOT.otf"),
  //     "FiraSans-Regular": require("./assets/fonts/FiraSans/FiraSans-Regular.ttf"),
  //     "FiraSans-MediumItalic": require("./assets/fonts/FiraSans/FiraSans-MediumItalic.ttf"),
  //     "FiraSans-LightItalic": require("./assets/fonts/FiraSans/FiraSans-LightItalic.ttf"),
  //     "FiraSans-Medium": require("./assets/fonts/FiraSans/FiraSans-Medium.ttf"),
  //     "FiraSans-Light": require("./assets/fonts/FiraSans/FiraSans-Light.ttf"),
  //     "FiraSans-Italic": require("./assets/fonts/FiraSans/FiraSans-Italic.ttf"),
  //     "FiraSans-BoldItalic": require("./assets/fonts/FiraSans/FiraSans-BoldItalic.ttf"),
  //     "FiraSans-Bold": require("./assets/fonts/FiraSans/FiraSans-Bold.ttf")
  //   });

  //   this.setState({ fontLoaded: true });
  // }

  render() {
    return (
      <View style={{ paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,flex:1 }}>
        <AuthStack/>
      </View>
    );
  }
}
