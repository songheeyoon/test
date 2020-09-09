import React from 'react';
import { View, TouchableOpacity,Text,Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Mypage_Nv from './Mypage_Nv';
import { AntDesign } from '@expo/vector-icons';

const Mypage = () => {

    return(
        <View style={{backgroundColor:'#141517',flex:10}}> 
            <View>
                <View style={{flexDirection:"row",justifyContent:"center"}}>
                    <TouchableOpacity style={{}}>
                        <Image source={require('../assets/img/pro.jpg')} style={{width:60,height:60,borderRadius:30,borderColor:'#fff',borderWidth:2}}></Image>
                        <Text style={{color:'#fff',alignSelf:"center",marginTop:3}}>
                        닉네임
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal:10}}>
                        <AntDesign name="pluscircle" size={60} color="#303133" />
                        <Text style={{color:'#fff',alignSelf:"center",marginTop:3}}>
                          새 프로필
                        </Text>
                    </TouchableOpacity>
                </View>            
                <View style={{justifyContent:"center",alignItems:"center",paddingBottom:20,marginTop:5}}>
                    <TouchableOpacity style={{flexDirection:"row",justifyContent:"center",backgroundColor:"#1c1d21",paddingHorizontal:10,paddingVertical:5}}>
                        <FontAwesome name="pencil" size={24} color="#c6c6c7" />
                        <Text style={{color:'#c6c6c7',alignSelf:"center",marginLeft:10}}>프로필 수정</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Mypage_Nv style={{flex:6}}>
            </Mypage_Nv>    
        </View>
        
    )
}

export default Mypage;