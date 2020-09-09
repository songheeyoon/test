import React from 'react';
import { View,Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const My_download  = () => {

    return(
        <View style={{backgroundColor:'#141517',flex:1,justifyContent:"center",alignItems:"center"}}>
            <MaterialCommunityIcons name="download" size={100} color="#303133" style={{marginBottom:10}} />
            <Text style={{color:"#303133"}}>
                다운로드한 작품이 없어요.
            </Text>
        </View>
    )
}

export default My_download ;