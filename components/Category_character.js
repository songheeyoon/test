import React from 'react';
import { View,StyleSheet, FlatList,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const data = [
    {id:"1",title:'시간여행'},
    {id:"2",title:'픽사'},
    {id:"3",title:'마블'},
    {id:"4",title:'디즈니'},
    {id:"5",title:'블록버스터'},
    {id:"6",title:'명작'},
    {id:"7",title:'7080'},
    {id:"8",title:'워너 브라더스'},
    {id:"9",title:'부자'},
    {id:"10",title:'워킹타이틀'},
    {id:"11",title:'카리스마'},
    {id:"12",title:'신파극'},
    {id:"13",title:'간첩'},
    {id:"14",title:'OST'},
    {id:"15",title:'DC코믹스'},
    {id:"16",title:'돌연변이'},
    {id:"17",title:'퍼포먼스'},
    {id:"18",title:'사기꾼'},
    {id:"19",title:'재해석'},
    {id:"20",title:'철학적인'},
    {id:"21",title:'안타까운'},
    {id:"22",title:'몽환적인'},
    {id:"23",title:'디스토피아'},
    {id:"24",title:'완성도'},
    {id:"25",title:'사랑스러운'},
    {id:"26",title:'미장센'},
    {id:"27",title:'독재'},
    {id:"28",title:'왕위'},
    {id:"29",title:'악역'},
    {id:"30",title:'사이버 펑크'},
    {id:"31",title:'슈퍼히어로'},
    {id:"32",title:'동심'},
    {id:"33",title:'조선시대'},
    {id:"34",title:'스페이스 오페라'},
    {id:"35",title:'일제강점기'},
    {id:"36",title:'권선징악'},
    {id:"37",title:'저항'},
    {id:"38",title:'사기'},
    {id:"39",title:'화려한'},
    {id:"40",title:'프리퀼'},
    {id:"41",title:'슬픈'},
    {id:"42",title:'여왕'},
    {id:"43",title:'원한'}
]
const Category_character = () =>{

    return(
        <View style={styles.Container}>
            <FlatList
             data={data}
             renderItem={renderItem}   
            >
            </FlatList>
        </View>
    );
}

const renderItem = ({item,index}) =>{

    const press = (index) => {
        alert(index);        
    }
    return(
        <View style={{paddingLeft:20}}>
            <Text style={styles.listView}>{item.title}</Text>
        </View>
    );

}
export default Category_character;


const styles = StyleSheet.create({

    Container : {
        flex:10,
        height:'100%',
        backgroundColor:'#141517'
        // paddingTop: Platform.OS === 'ios' ? 60: 0    
    },
    listView : {
        color:"#fff",
        lineHeight:40,
        fontSize:16
    }

})