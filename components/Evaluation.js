import React, { useState,useCallback } from 'react';
import {Image, View,StyleSheet,Text,TouchableOpacity, StatusBar, SafeAreaView,Button, FlatList, ScrollView, Alert} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Container, Header, Left, Body, Right, Content } from 'native-base';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { isIphoneX, getBottomSpace } from "react-native-iphone-x-helper";
import Modal_custom from './Modal_custom';
import ActionSheet from './ActionSheet';

import { Entypo } from '@expo/vector-icons';
// import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'
import { Rating, AirbnbRating } from 'react-native-ratings';
//  npm react-native-modal 
import Modal from 'react-native-modal';
import EvaluationList from './EvaluationList';


const art = [
    {id:'1',title:'가나다라',year:"2020",img:require('../assets/img/1000.jpg'),vote:false,score:0,url:"https://m.comic.naver.com/webtoon/list.nhn?titleId=626907"},
    {id:'2',title:'마바사아자차',year:"2019",img:require('../assets/img/1001.jpg'),vote:false,score:0,url:"http://m.webtoon.daum.net/m/webtoon/view/deathonline"},
    {id:'3',title:'타파하',year:"2018",img:require('../assets/img/1002.jpg'),vote:false,score:0,url:"https://m.comic.naver.com/webtoon/detail.nhn?titleId=710760&no=114&weekday=wed"},
    {id:'4',title:'ABCD',year:"2017",img:require('../assets/img/1003.jpg'),vote:false,score:0,url:"https://m.comic.naver.com/webtoon/detail.nhn?titleId=727268&no=68&weekday=wed"},
    {id:'5',title:'EEEE',year:"2016",img:require('../assets/img/1004.jpg'),vote:false,score:0,url:"https://m.comic.naver.com/webtoon/list.nhn?titleId=717481&weekday=wed"},
    {id:'6',title:'SH',year:"1994",img:require('../assets/img/1005.jpg'),vote:false,score:0,url:"https://m.comic.naver.com/webtoon/list.nhn?titleId=732259&weekday=wed"},
    {id:'7',title:'HHHH',year:"2020",img:require('../assets/img/1006.jpg'),vote:false,score:0,url:"https://m.comic.naver.com/webtoon/list.nhn?titleId=718020&weekday=wed"}
]

const ActionButtons = ['더보기', '보고싶어요', '관심없어요', '취소'];
// var DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 3;



const Height = () => {
if (isIphoneX()) {
      return getStatusBarHeight() + getBottomSpace();
  } else {
    return getStatusBarHeight();
  }
};

const actionItems = [
    {
        id : 1,
        label : '더보기',
        onPress : () => {
        }
    },
    {
        id : 2,
        label : '보고싶어요',
        onPress : () => {
        }
    },
    {
        id : 3,
        label : '관심없어요',
        onPress : () => {
        }
    }
]



const Evaluation = ({navigation,route}) =>{
    for (var key in route) {
        console.log( key + " / " + route[key])
     }
    // console.log(route+"평가페이지");
    const [num,setNum] = useState(0);
    // const closeActionSheet = () => setActionSheet(false);
    // const [actionSheet,setActionSheet] = useState(false);
    const [data,setData] = useState(art);
    const [selectdId,setSelectedId] = useState(null);
    // const [score,setScore] = useState(0);

    return(
            <Container style={styles.Container}>

                <Header span style={{paddingTop:15,backgroundColor:"#141517",height:105}}>
                    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} ></StatusBar>

                    <Left transparent>
                        <Text style={{color:"#fff",fontSize:16}}>취향분석</Text>
                    </Left>
                    <Body transparent style={{widht:"100%",position:'absolute',top:20,alignItems:'center'}}>
                        <Text style={{color:'#fff',fontSize:30,alignItems:"center"}}>
                            {num}
                        </Text>
                        <Text style={{color:'#ddd'}}>
                            최소 10개 이상의 작품을 평가해주세요 :)
                        </Text>
                    </Body>
                    <Right transparent>
                        <TouchableOpacity>
                            <AntDesign name="search1" size={24} color="#fff" style={{marginRight:10, justifyContent:"center"}}/>
                        </TouchableOpacity>                        
                    </Right>
                </Header>
                <Modal_custom>
                </Modal_custom>
                <ScrollView>
                <View style={{paddingLeft:10,paddingVertical:10}}>
                    <Text style={{color:'#eb0056'}}>
                        과거에 본 작품을 찾아 평가해보세요
                    </Text>
                </View>
                <Content style={{padding:10}}>
                    
                    <FlatList
                    data={data}
                    renderItem={({item,index}) =>{
                       return(  
                           <EvaluationList 
                                img={item.img} 
                                title={item.title} 
                                year={item.year} 
                                link={item.url}
                                onPress={navigation}
                                ratingCompleted={(rating)=>{
                                    // const newScore[index]
                                   if(data[index].vote === true){
                                       if(data[index].score != rating){
                                            const newScore = [...data]
                                            newScore[index].score = rating
                                            setData(prevState => newScore)
                                            // console.log(rating === 0);
                                            // console.log(data[index].vote +"/"+data[index].score +"투표0, 점수change");
                                       if(rating === 0 ){
                                        console.log(data[index].scroe);
                                        const newVote = [...data]
                                        newVote[index].vote = !newVote[index].vote
                                        setData(prevState => newVote);
                                        // console.log(data[index].vote +"/"+data[index].score+"투표0, 점수다시0");  
                                        setNum(num => num - 1);                                         
                                      }
                                     }
                                   } else{
                                    if(rating === 0){
                                        const newVote = [...data]
                                        setData(prevState => newVote);  
                                        // console.log(data[index].vote +"/"+data[index].score+"투표x, 점수0");                                  
                                   }else{
                                    const newVote = [...data]
                                    newVote[index].vote = !newVote[index].vote
                                    setData(prevState => newVote);  
                                    setNum(num => num + 1);  
                                    // console.log(data[index].vote +"/"+data[index].score+"투표x, 점수change");                                                  
                                   }                                       
                                   }
                                }}
                        //  투표를 했던건데  점수가 이전이랑 다르면  점수를 바꿔야 하고, 0점이 되면 vote을 fasle로 
                        //  vote(true) score != setScore score ==0 => vote(false) num - 1
                        //  투표를 안했던거를 vote을 true로    
                        //  vote(flase) socre =>setScore vote(true) num +1   
                        // 시작/ 끝 
                           >

                           </EvaluationList>
                        //    <View style={{flexDirection:"row",borderBottomColor:"#ccc",borderBottomWidth:0.3,paddingVertical:5}}>
                        //        <View>
                        //            <Image source={item.img} style={{width:80,height:100}}></Image>
                        //        </View>
                        //        <View style={{marginLeft:10}}>
                        //            <Text style={styles.Font}>{item.title}</Text>
                        //            <Text style={{color:"#ccc"}}>{item.year}</Text>
                        //             <TouchableOpacity onPress={(index)=>{alert(index)}}>
                        //              <Rating
                        //              type="custom"
                        //              style={{ paddingVertical: 10 }}
                        //              startingValue={0}
                        //              ratingBackgroundColor={'#ddd'}
                        //              tintColor={"#141517"}
                        //              fractions={1}
                        //             //  onStartRating={startCompleted(item,index)}
                        //              onFinishRating={ratingCompleted}/>
                        //              </TouchableOpacity>
                        //        </View>
                        //        <View style={{position:"absolute",right:0,top:10}}>
                   
                        //            <TouchableOpacity onPress={() => 
                        //            setActionSheet(true)}>
                        //                <Entypo name="dots-three-vertical" size={20} color="#ddd" />   
                        //            </TouchableOpacity>          
                        //        </View>
                        //    </View>
                       )
                   }}
                   keyExtractor={(item,index) => index.toString() }
                    >

                    </FlatList>
                </Content>
                </ScrollView>
                {/* <Modal
                    isVisible={actionSheet}
                    style={{
                        margin: 0,
                        justifyContent: 'flex-end'
                    }}
                    >
                    <ActionSheet
                        actionItems={actionItems}
                        onCancel={closeActionSheet}
                    />
                </Modal> */}
            </Container>
    );
}

export default Evaluation;



const styles = StyleSheet.create({

    Container : {
        flex:1,
        backgroundColor:'#141517',
        paddingTop:Height()
        },
    Font : {
        color:"#ddd"
    }

})