import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const First = () => {

    return(
    <View style={{flexDirection:'row', paddingHorizontal:10, paddingVertical:10,justifyContent:"space-around"}}>
        <View>
            <View style={{flexDirection:'column'}}>
                <Text style={{color:'#fff'}}>
                    왓챠가 처음이신가요?
                </Text>
                <Text style={{color:"#777878"}}>
                    신규 회원님을 위한 취향 저격 주천작
                </Text>
            </View>
        </View>
        <View>
            <View>
                <TouchableOpacity style={{width:80,height:40,backgroundColor:'rgba(255,255,255,0.2)',borderRadius:50,justifyContent:"center"}}>
                    <Text style={{color:'#eb0056',textAlign:"center",fontSize:16}}>열기</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );


}

export default First;