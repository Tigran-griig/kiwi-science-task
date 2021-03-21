import React from 'react';
import {Text} from "react-native";
import styled from 'styled-components'
import {View,SafeAreaView,TextInput} from "react-native";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";
import Signup from "./RegisterForm";
import { createStackNavigator } from '@react-navigation/stack';
import firebase from "../../database/firebase";
import {useMyContext, useMyContextAuth} from "../../context";


const Stack = createStackNavigator();

const Auth = () => {
const isAuth = useMyContext()
 // const setIsAuth = useMyContextAuth()
 //    React.useEffect(()=>{
 //        if(firebase.auth().currentUser) {
 //            setIsAuth(true)
 //
 //        }else{
 //            setIsAuth(false)
 //        }
 //    },[firebase.auth().currentUser])
    return (
        isAuth ? <Dashboard /> : <Stack.Navigator
                initialRouteName="Signup"
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#3740FE',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}>
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options={{ title: 'Signup' }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginForm}
                    options={
                        {title: 'Login',
                         headerLeft: null
                        }
                    }
                />
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={
                        { title: 'My Profile',
                            headerLeft: null

                        }
                    }
                />
            </Stack.Navigator>

    );
};


export default Auth;
