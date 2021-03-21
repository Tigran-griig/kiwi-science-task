import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from "./HomePage";
import Profiles from "./Profiles";
import {StyleSheet,Image} from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {MaterialCommunityIcons} from "@expo/vector-icons";
const Tab = createMaterialBottomTabNavigator();

function MyPage() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#D31928"
            labelStyle={{ fontSize: 12 ,fontWeight:"bold"}}
        >
            <Tab.Screen  name="Home" component={HomePage}
                         options={{
                             tabBarLabel: 'Home',
                             tabBarIcon: ({ color }) => (
                                 <MaterialCommunityIcons name="bell" color={color} size={26} />
                             ),
                         }}
            />
            <Tab.Screen name="Favorite" component={Profiles}
                        options={{
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="account" color={color} size={26} />
                            ),
                        }}
            />
        </Tab.Navigator>
    );
}



export default MyPage