import React, { useState } from 'react';
import { View, Modal,Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';


const Modal_custom = () => {
    const [bt,setBt] = useState(true);

    const close = () =>{
        setBt(bt => !bt);
    }

return(
        <View style={bt ? styles.modal : styles.none}>
            <Text style={{color:'#ddd',marginLeft:10}}>
                10개 이상의 작품을 평가를 하면,{"\n"}
                내 취향에 딱 맞는 작품들을 추천 받을 수 있어요
            </Text>
            <TouchableOpacity style={{marginRight:10}} onPress={close}> 
              <AntDesign name="close" size={24} color="#ddd" style={{paddingTop:8}}/>
            </TouchableOpacity>
        </View>
)

}

export default Modal_custom;



const styles = StyleSheet.create({

    modal : {
        flexDirection:'row',
        justifyContent:"space-between",
        backgroundColor:'#212223',
        paddingVertical:15
    },
    none : {
        display:'none'
    }
})