import React from 'react';
import { StyleSheet, Text, View,DrawerLayoutAndroid, ToolbarAndroid } from 'react-native';
import {createStackNavigator} from 'react-navigation';
const App = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

// export default class App extends React.Component {
//   // constructor() {
//   //   super();
//   //   this.openDrawer = this.openDrawer.bind(this);
//   // }
 
//   // openDrawer() {
//   //   this.drawer.openDrawer();
//   // }
//   render() {
//     // var drawer = (
//     //   <View style={{flex: 1, backgroundColor: '#91c988'}}>
//     //     <Text style={{margin: 20, fontSize: 15, textAlign: 'left'}}>Your buttons here</Text>
//     //   </View>
//     // );
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text style={styles.tilt}></Text>
//       </View>
//       // <DrawerLayoutAndroid renderNavigationView={() => drawer} drawerWidth={300}
//       //   statusBarBackgroundColor='#7faf77' ref={_drawer => (this.drawer = _drawer)}>
//       //   <ToolbarAndroid style={styles.toolbar} navIcon={require('./assets/hamburger.png')}
//       //     actions={[{title: 'Settings', show: 'always'}]} onIconClicked={this.openDrawer}/>
//       // </DrawerLayoutAndroid>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   tilt:{
//     width:20,
//     height:150,
//     transform: [{ rotate: '28deg'}],
//     backgroundColor:"red"

//   }
//   // toolbar: {
//   //   height: 56,
//   //   backgroundColor: '#699162'
//   // }
// });
