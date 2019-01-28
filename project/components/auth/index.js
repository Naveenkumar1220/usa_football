import React, {Component} from 'react';
import { createStackNavigator,createAppContainer  } from "react-navigation";
import Login from "./login"
import Register from "./register"
import Contact from "./contact"
import Home from "./home"
import EventDetails from "./eventDetails"
import MemberSelect from "./memberSelect"

const AuthComponent = createStackNavigator(
    { 
        MemberSelect:{screen:MemberSelect},
        Home:{screen:Home},
        Login:{screen:Login},
        Register:{screen:Register},
        Contact:{screen:Contact},
        EventDetails:{screen:EventDetails}
    },
    {
        headerMode:"none"
    }
  );
  const AppContainer = createAppContainer(AuthComponent);
  export default AppContainer