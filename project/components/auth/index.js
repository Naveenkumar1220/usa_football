import React, {Component} from 'react';
import { createStackNavigator,createAppContainer  } from "react-navigation";
import Login from "./login"
import Register from "./register"
import Contact from "./contact"
import Home from "./home"
import EventDetails from "./eventDetails"
import MemberSelect from "./memberSelect"
import PaymentInfo from "./paymentInfo"
import RegReview from "./regReview"
import PaymentComplete from "./paymentComplete"
import MyEvents from "./myEvents"

const AuthComponent = createStackNavigator(
    {   
        Login:{screen:Login},
        Contact:{screen:Contact},
        Register:{screen:Register},
        Home:{screen:Home},
        EventDetails:{screen:EventDetails},
        MemberSelect:{screen:MemberSelect},
        PaymentInfo:{screen:PaymentInfo},
        RegReview:{screen:RegReview},
        MyEvents:{screen:MyEvents},
        PaymentComplete:{screen:PaymentComplete}
    },
    {
        headerMode:"none"
    }
  );
  const AppContainer = createAppContainer(AuthComponent);
  export default AppContainer