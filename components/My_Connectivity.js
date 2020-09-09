import React from 'react';
import { View,Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const My_Connectivity = () => {

    return(
        <View style={{backgroundColor:'#141517',flex:1,justifyContent:"center",alignItems:"center"}}>
            <Feather name="play-circle" size={100} color="#303133" style={{marginBottom:10}} />
            <Text style={{color:"#303133"}}>
                감삼 중인 작품이 없어요.
            </Text>
        </View>
    )
}

export default My_Connectivity;