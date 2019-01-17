import React, {Component} from 'react';
import { createStackNavigator,createAppContainer  } from "react-navigation";
import Login from "./login"
import Register from "./register"
import Contact from "./contact"
import Home from "./home"

const AuthComponent = createStackNavigator(
    { 
        Login:{screen:Login},
        Register:{screen:Register},
        Contact:{screen:Contact},
        Home:{screen:Home}
    },
    {
        headerMode:"none"
    }
  );
  const AppContainer = createAppContainer(AuthComponent);
  export default AppContainer