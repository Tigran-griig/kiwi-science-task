import React, { Component } from 'react';
import { StyleSheet, View, Text, Button,Image } from 'react-native';
import firebase from '../../database/firebase';
import {useMyContextAuth} from "../../context";

 const Dashboard = (props) => {
     const [displayName,setDisplayName] = React.useState('')
     const setIsAuth= useMyContextAuth()
     console.log(props)
    React.useEffect(()=>{
        if(firebase.auth().currentUser) {
            setDisplayName(firebase.auth().currentUser?.displayName)
            setIsAuth(true)
        }else{
            setDisplayName('')
            setIsAuth(false)

        }
    },[firebase.auth().currentUser])
  const  signOut = () => {

        firebase.auth().signOut().then(() => {
            setIsAuth(false)
        })
            .catch(error =>console.log(error))
    }

        return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Hello, {displayName}
            </Text>
            <Image style={{height:300,width:100}} source={{uri:'https://image.freepik.com/free-vector/man-character-avatar-icon-men-evening-outfit_51635-2325.jpg'}} />

            <Button
                color="#3740FE"
                title="Logout"
                onPress={signOut}
            />
        </View>

    );
}
export default Dashboard
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
        backgroundColor: '#fff'
    },
    textStyle: {
        fontSize: 15,
        marginBottom: 20
    }
});