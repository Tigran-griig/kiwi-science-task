import {Text, View,Image,ScrollView,StyleSheet} from "react-native";
import React from "react";
import analytics from '@react-native-firebase/analytics';
import styled from "styled-components";
import { Card, ListItem, Button, Icon } from 'react-native-elements'

function HomeScreen() {
   const [data,setData] = React.useState('')

    React.useEffect(()=>{
        if(!data){
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res=>res.json())
                .then(json=>{
                setData(json)
            })
        }
    },[data])

    return (
        <Container>
            {data ?<View>

                <ScrollView style={styles.scrollView}>
                {data?.map((item,index)=>{
                        return(
                            <Card key={index} containerStyle={{height:300}}>

                            <Card.Title>HELLO {item.username}</Card.Title>
                        <Card.Divider/>
                        <Card.Image style={{height:150}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTChRlhS3TFoT-MIZOxAisE4kqG8jjHl93R3g&usqp=CAU'}}>
                        </Card.Image>

                                <Text style={{fontSize:16}} >
                                {item.company.catchPhrase}
                            </Text>
                            <Button
                                icon={<Icon name='code' color='#ffffff' />}
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='Watch' />
                            </Card>

                        )
                    })}
                </ScrollView>
                    </View>
            :
                <Title>Not Data</Title>}
        </Container>
    );
}
export default HomeScreen


const styles = StyleSheet.create({

    scrollView: {
        backgroundColor: 'grey',
        marginHorizontal: 20,
        paddingBottom: 50
    },
    text: {
        fontSize: 42,
    },
});
const Container = styled.View`
 margin-top:50px;
  margin-bottom: 50px;
`;
const Title = styled.Text`
   font-weight: 500;
  font-size: 22px;
  color:#007AFF ;
  text-align: center;
  margin-top: 100px;
  align-items: center;
  
`;


