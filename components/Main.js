import React, { useState, useLayoutEffect } from 'react';
import {View,StyleSheet,Image, StatusBar,Platform, Text, FlatList, Dimensions, SectionList} from 'react-native';
import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { TouchableItem } from 'react-native-tab-view';
import { List } from 'react-native-paper';
import First from './First';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");

const itemList = [
    // {id:'1',title:'가슴뛰는 스포츠 레전드',header:true},
    // {id:'1.1',title:'641',img:require('../assets/img/641.jpg'),header:false},
    // {id:'1.2',title:'642',img:require('../assets/img/642.jpg'),header:false},
    // {id:'1.3',title:'643',img:require('../assets/img/643.jpg'),header:false},
    // {id:'1.4',title:'644',img:require('../assets/img/644.jpg'),header:false},
    // {id:'1.5',title:'645',img:require('../assets/img/645.jpg'),header:false},
    // {id:'1.6',title:'646',img:require('../assets/img/646.jpg'),header:false},
    // {id:'2',title:'입꼬리 주의 개그 레전드',header:true},
    // {id:'3',title:'순수한 액션을 원한다면',header:true},
    // {id:'4',title:'감성충만 힐링웨툰',header:true},
    // {id:'5',title:'동면주인 연애세포를 깨워보자',header:true},
    // {id:'6',title:'이번주 신작',header:true}
    {title:'가슴뛰는 스포츠 레전드',count:4,
                                        data:[[{name:'641',img:require('../assets/img/641.jpg')},
                                        {name:'642',img:require('../assets/img/642.jpg')},
                                        {name:'643',img:require('../assets/img/643.jpg')},
                                        {name:'644',img:require('../assets/img/644.jpg')},                         
                                        {name:'645',img:require('../assets/img/645.jpg')},
                                        {name:'126',img:require('../assets/img/126.jpg')},                         
                                        {name:'127',img:require('../assets/img/127.jpg')},
                                        {name:'646',img:require('../assets/img/646.jpg')}
    ]]},
    {title:'입꼬리 주의 개그 레전드',count:4,
    data:[[{name:'641',img:require('../assets/img/641.jpg')},
    {name:'642',img:require('../assets/img/642.jpg')},
    {name:'643',img:require('../assets/img/643.jpg')},
    {name:'644',img:require('../assets/img/644.jpg')},                         
    {name:'645',img:require('../assets/img/645.jpg')},
    {name:'126',img:require('../assets/img/126.jpg')},                         
    {name:'127',img:require('../assets/img/127.jpg')},
    {name:'646',img:require('../assets/img/646.jpg')}
    ]]},
    {title:'순수한 액션을 원한다면',count:4,
    data:[[{name:'641',img:require('../assets/img/641.jpg')},
    {name:'642',img:require('../assets/img/642.jpg')},
    {name:'643',img:require('../assets/img/643.jpg')},
    {name:'644',img:require('../assets/img/644.jpg')},                         
    {name:'645',img:require('../assets/img/645.jpg')},
    {name:'126',img:require('../assets/img/126.jpg')},                         
    {name:'127',img:require('../assets/img/127.jpg')},
    {name:'646',img:require('../assets/img/646.jpg')}
    ]]},
    {title:'감성충만 힐링웨툰',count:4,
    data:[[{name:'641',img:require('../assets/img/641.jpg')},
    {name:'642',img:require('../assets/img/642.jpg')},
    {name:'643',img:require('../assets/img/643.jpg')},
    {name:'644',img:require('../assets/img/644.jpg')},                         
    {name:'645',img:require('../assets/img/645.jpg')},
    {name:'126',img:require('../assets/img/126.jpg')},                         
    {name:'127',img:require('../assets/img/127.jpg')},
    {name:'646',img:require('../assets/img/646.jpg')}
]]},
    {title:'동면주인 연애세포를 깨워보자',count:4,
    data:[[{name:'641',img:require('../assets/img/641.jpg')},
    {name:'642',img:require('../assets/img/642.jpg')},
    {name:'643',img:require('../assets/img/643.jpg')},
    {name:'644',img:require('../assets/img/644.jpg')},                         
    {name:'645',img:require('../assets/img/645.jpg')},
    {name:'126',img:require('../assets/img/126.jpg')},                         
    {name:'127',img:require('../assets/img/127.jpg')},
    {name:'646',img:require('../assets/img/646.jpg')}
]]},
    {title:'이번주 신작',count:4
    ,data:[[{name:'641',img:require('../assets/img/641.jpg')},
    {name:'642',img:require('../assets/img/642.jpg')},
    {name:'643',img:require('../assets/img/643.jpg')},
    {name:'644',img:require('../assets/img/644.jpg')},                         
    {name:'645',img:require('../assets/img/645.jpg')},
    {name:'126',img:require('../assets/img/126.jpg')},                         
    {name:'127',img:require('../assets/img/127.jpg')},
    {name:'646',img:require('../assets/img/646.jpg')}
]]}
];


const Main = ({navigation}) => {
    const [data,setData] = useState(itemList);
    const [secIndex,setSecIndex] = useState(0) ;
    const [count,setCount] = useState(4);

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerLeft: () =>(
                <TouchableOpacity onPress={()=>navigation.navigate('push')}>
                   <SimpleLineIcons name="bell" size={24} color="#fff" style={{marginLeft:10, justifyContent:"center"}}/>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity>
                    <AntDesign name="search1" size={24} color="#fff" style={{marginRight:10, justifyContent:"center"}}/>
                </TouchableOpacity>
                ),    
        })
    },[navigation])

    return(
        <ScrollView style={styles.Container}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}></StatusBar>
            <Swiper style={{height:400}} auto loop={true} paginationStyle={{position:"absolute",bottom:50,left:-300}} 
            dot={<View style={{backgroundColor:'rgba(0,0,0,0.3)', width: 10, height: 10,borderRadius: 5, marginLeft: 3, marginRight: 3, marginTop: 5, marginBottom: 5}}/>}
            activeDot={<View style={{backgroundColor:'rgba(254,254,254,1)', width: 10, height: 10,borderRadius: 5, marginLeft: 3, marginRight: 5, marginTop: 5, marginBottom: 5}}/>}
            >
                <View style={styles.ImgView}>
                    <Image source={require('../assets/img/1.png')} style={{width:'100%',height:"100%"}}></Image>
                </View>
                <View style={styles.ImgView}>
                    <Image source={require('../assets/img/2.jpg')} style={{width:'100%',height:"100%"}}></Image>
                </View>
                <View style={styles.ImgView}>
                    <Image source={require('../assets/img/3.jpg')} style={{width:'100%',height:"100%"}}></Image>
                </View>
            </Swiper>
            <First>

            </First>
            {/* <View style={{flexDirection:'row', paddingHorizontal:10, paddingVertical:10,justifyContent:"space-around"}}>
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
                        <TouchableItem style={{width:80,height:40,backgroundColor:'rgba(255,255,255,0.2)',borderRadius:50,justifyContent:"center"}}>
                            <Text style={{color:'#eb0056',textAlign:"center",fontSize:16}}>열기</Text>
                        </TouchableItem>
                    </View>
                </View>
            </View> */}
            <View>
                {/* data - flatList가 보여줄 대량의 데이터 
                    renderItem - 아이템 하나의 모양(컴포넌트)를 만들어서 리턴하는 콜백함수 지정
                */}

               {/* <FlatList
                data={itemList}
                // renderItem의 함수 파라미터에 전달된 객체는 위 data 배열의 하나하나 욕소의 값과 인덱스 번호를 멤버로 가지고 있는 객체가 전달됨.
                renderItem={renderItem}
                numColumns={2}
                initialNumToRender={4}
                columnWrapperStyle={{ flexWrap: 'wrap' }}
                keyExtractor={ (item) => item.id}
               >
                {console.log(itemList)}
               </FlatList> */}
               <SectionList
                sections={data}
                renderSectionHeader={({section,index}) => {
                    // console.log(index);
                    // setSecIndex(index);
                    return(
                        <View style={{width:'100%'}}>
                            <Text style={{color:'#fff',fontSize:20}}>{section.title}</Text>
                        </View>
                    )
                }}
                renderItem={({item,index,section}) => {
                    const list = Object.values(item);
                    // console.log(secIndex);
                    // console.log(index);
                    // console.log(section[index].count);
                    return(
                        <FlatList
                            // data={list.slide(0,section.count)}
                            // list.slide(0,section.)
                            data={list.slice(0,count)}
                            // data={list}
                            renderItem={({item,index})=>{
                                // console.log(index);
                                return(
                                <View style={{width:'50%',paddingHorizontal:10}}>
                                    <Image source={item.img} style={{width:'100%',height:width/3,alignItems:'center',justifyContent:"center"}}></Image>
                                    <Text style={{color:'#fff'}}>{item.name}</Text>
                                </View>  
                              )     
                            }}
                            ListFooterComponent={(index)=>{
                                return(
                                    <TouchableOpacity style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}} onPress={()=>{
                                            if(count<list.length){
                                                setCount(prevState=>{prevState+4})
                                            }else{
                                                setCount(prevState=>{prevState})
                                            }
                                    }}>
                                        <AntDesign name="down" size={24} color="#DBDBDB" style={{marginRight:20}}/>
                                        <Text style={{color:'#DBDBDB'}}>더보기</Text>
                                        {/* {
                                            count>list.length ? <Text style={{color:'#DBDBDB'}}>더보기</Text>
                                        } */}
                                       
                                    </TouchableOpacity>
                                )
                            }}
                            numColumns={2}
                        >
                        </FlatList>                 
                    )
                }}
                initialNumToRender={4}
                // sections - 색션 title과 섹션별 data들을 가진 대량의 데이터 
               >

               </SectionList>
            </View>
        </ScrollView>           
    );
}

export default Main;
// const renderItem = ({item,index}) => {
//     if(item.header){
//         return(
//             <View style={{width:'100%'}}>
//                 <Text style={{color:'#fff',fontSize:20}}>{item.title}</Text>
//             </View>
//         )
//     }else{
//         return(
//             <View style={{width:'50%'}}>
//                     <Image source={item.img} style={{width:'100%',height:width/2}}></Image>
//                     <Text style={{color:'#fff'}}>{item.title}</Text>
//             </View>
//         )
//     }
// }

const styles = StyleSheet.create({

    Container : {
        flex:10,
        height:'100%',
        backgroundColor:'#141517'
        // paddingTop: Platform.OS === 'ios' ? 60: 0    
    }
})