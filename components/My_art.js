import React from 'react';
import { View,Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const My_art = () => {

    return(
        <View style={{backgroundColor:'#141517',flex:1,justifyContent:"center",alignItems:"center"}}>
            <AntDesign name="checkcircleo" size={100} color="#303133" style={{marginBottom:10}}/>
            <Text style={{color:"#303133"}}>
                아직 다 본 작품이 없어요.
            </Text>
        </View>
    )
}

export default My_art;