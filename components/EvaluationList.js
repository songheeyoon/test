import React,{useState} from 'react';
import {Image, View,Text,TouchableOpacity,StyleSheet, Linking, Alert} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { isIphoneX, getBottomSpace } from "react-native-iphone-x-helper";
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Entypo } from '@expo/vector-icons';
import ActionSheet from './ActionSheet';
import Modal from 'react-native-modal';
// import InAppBrowser from 'react-native-inappbrowser-reborn';
import { WebView } from 'react-native-webview';


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


const Height = () => {
    if (isIphoneX()) {
          return getStatusBarHeight() + getBottomSpace();
      } else {
        return getStatusBarHeight();
      }
    };

    //   onPress => navigation
const EvaluationList = ({img,title,year,index,ratingCompleted,link,onPress}) => {
    const closeActionSheet = () => setActionSheet(false);
    const [actionSheet,setActionSheet] = useState(false);
    // const double = () => {
    //     EvaluationComplete();
    //     ratingCompleted();
    // }
return(
    <View style={{flexDirection:"row",borderBottomColor:"#ccc",borderBottomWidth:0.3,paddingVertical:5}}>
        <TouchableOpacity onPress={()=>{
                onPress.navigate('Web',{
                    url:link
                })
        }}>
            <Image source={img} style={{width:80,height:100}}></Image>
        </TouchableOpacity>
        <View style={{marginLeft:10}}>
            <Text style={styles.Font}>{title}</Text>
            <Text style={{color:"#ccc"}}>{year}</Text>
            <Rating 
            type="custom"
            style={{ paddingVertical: 10 }}
            defaultRating={0}
            showRating={false}
            startingValue={0}
            ratingBackgroundColor={'#ddd'}
            tintColor={"#141517"}
            fractions={1}
            //  onStartRating={startCompleted(item,index)}
            onFinishRating={ratingCompleted}
            />

        </View>
        <View style={{position:"absolute",right:0,top:10}}>

            <TouchableOpacity onPress={() => 
            setActionSheet(true)}>
                <Entypo name="dots-three-vertical" size={20} color="#ddd" />   
            </TouchableOpacity>          
        </View>
        <Modal
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
                </Modal>
    </View>
);
}

export default EvaluationList;


const styles = StyleSheet.create({

    Container : {
        flex:1,
        backgroundColor:'#141517',
        // paddingTop:Height()
        },
    Font : {
        color:"#ddd"
    }

})