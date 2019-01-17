import React, {Component} from 'react';
import { createStackNavigator,createAppContainer  } from "react-navigation";
import Login from "./login"
import Register from "./register"
import Contact from "./contact"

const AuthComponent = createStackNavigator(
    { 
        Register:{screen:Register},
        Contact:{screen:Contact},
        
        Login:{screen:Login}
    },
    {
        headerMode:"none"
    }
  );
  const AppContainer = createAppContainer(AuthComponent);
  export default AppContainer