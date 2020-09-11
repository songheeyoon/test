import React, { useEffect,useState, useRef, useCallback, useContext } from 'react';
import {WebView} from 'react-native-webview';
import {BackHandler,ActivityIndicator, StyleSheet, View, Text, Button,TouchableOpacity, ScrollView, Animated, Platform} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { isIphoneX, getBottomSpace } from "react-native-iphone-x-helper";
import {Context} from './Context';
import { Value } from 'react-native-reanimated';
import { Entypo } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { StackActions } from '@react-navigation/native';


const Height = () => {
    if (isIphoneX()) {
          return getStatusBarHeight() + getBottomSpace();
      } else {
        return getStatusBarHeight();
      }
    };

let jsStr = ` 
    var initTop=0;
    window.addEventListener('scroll',function(e){
        var info = navigator.userAgent.toLowerCase();
        var currTop;

        if(info.indexOf('iphone')>=0){
            currTop=document.body.scrollTop;
        }else{
            currTop=document.documentElement.scrollTop;
        }
        if(currTop>initTop){
            window.ReactNativeWebView.postMessage('down');              
        }else if(currTop<=initTop){
            window.ReactNativeWebView.postMessage('up');  
        }
        initTop = currTop;
    });
    true;
`;


const WebContents = ({navigation,route }) => {

    const value = useContext(Context);
    const [link,setLink] = useState('');
    const [canGoBack, setCanGoBack] = useState();
    const [currentUrl, setCurrentUrl] = useState("");
    const ref = useRef();
    const [show,setShow] = useState('up');

    console.log(navigation);
    // useEffect(()=>{

    //     navigation.addListener('tabPress',e=>{
    //         console.log('abc');
    //         navigation.navigate('Evaluat');
    //     })

    // });
//  android

    // navigation.dispatch({
    //     ...StackActions.replace('Evaluat'),
    //     source:route.key,
    //     target:navigation.dangerouslyGetState().key,
    // })
    const onAndroidBackPress = () => {
        if(ref && canGoBack){
            ref.current.goBack();
            return true;
        }
    }
     

    useEffect(()=>{
        if(Platform.OS === 'android'){
                BackHandler.addEventListener('hardwareBackPress',onAndroidBackPress);
            return ()=>{
                BackHandler.removeEventListener('hardwareBackPress',onAndroidBackPress);
            };
        }
    });

    // 마운트 해제시 removeListener

        
// 받아온 url 
    useEffect(()=>{
        if(route.params.data){
            setLink(route.params.url+'?'+route.params.data);
        }else{
            setLink(route.params.url);
        }
    } ,[route.params.url])
   
    //  ios 
    const backHandler = () => {
        if(ref.current){
            ref.current.goBack();
        }
    }

    return(

    <Context.Consumer>
        {(value)=>(

    <View style={styles.container}>
        { (Platform.OS === "ios") && (canGoBack === true) && (show === "up") ? 
        <TouchableOpacity onPress={backHandler} disabled={!canGoBack} style={{height:40}}>
          <Entypo name="arrow-bold-left" size={24} color="white" style={{marginTop:10,marginLeft:10}}/>
        </TouchableOpacity> :
            null
        }
      {/* <ScrollView style={{backgroundColor:'transparent',flex:1}} contentContainerStyle={{flex: 1}}
        onScroll={(e)=>{

            const currentOffset = e.nativeEvent.contentOffset.y;
            const dif = currentOffset -  offset;

            console.log(currentOffset);
            
            console.log(route.params);

            if(dif<0){
                navigation.setParams({toggle:true});
                console.log(route);
            }else{
                navigation.setParams({toggle:false});

                // navigation.setParams({tabBarVisible:false});
            }
            setOffset(currentOffset);
            // scrollY.setValue(currentOffset);
        }}
        > */}

        <WebView
            source={{uri:link}}
            useWebKit={true}
            originWhitelist={['*']}
            decelerationRate={100}
            javaScriptEnabled={true}
            injectedJavaScript={jsStr}
            ref={ref}
            renderLoading={() => (
                <ActivityIndicator
                  color='black'
                  size='large'
                />
              )}
            onMessage={(event)=>{
                    setShow(event.nativeEvent.data);
                    value.change(event.nativeEvent.data);            
            }}
            onNavigationStateChange={navState => {
                setCanGoBack(navState.canGoBack);
              }}
            >
                
  
        </WebView>

        {/* </ScrollView> */}
    </View>
        )
        }
    </Context.Consumer>
    // 내부가 함수여야 한다.
    )
}

// WebContents.contextType = Context;

const styles = StyleSheet.create({

    container : {
        flex:1,
        backgroundColor:'#141517',
        paddingTop: Height()
    }
})

export default WebContents;