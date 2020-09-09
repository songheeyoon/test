import React from 'react';
import { View,Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const My_Like  = () => {

    return(
        <View style={{backgroundColor:'#141517',flex:1,justifyContent:"center",alignItems:"center"}}>
            <MaterialCommunityIcons name="heart-circle-outline" size={100} color="#303133" />          
            <Text style={{color:"#303133"}}>
                아직 보고싶어요 한 작품이 없어요.
            </Text>
        </View>
    )
}

export default My_Like ;