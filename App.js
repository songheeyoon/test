import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React, { useState, useRef,useEffect } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, View,Platform,TextInput,TouchableOpacity } from 'react-native';
import { NavigationContainer, useLinking } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './navigation/HomeScreen';
import WebContents from './components/WebContent';
import Push from './components/Push';
import * as Linking from 'expo-linking';
import Mypage from './components/Mypage';
import Category from './components/Category';
import Evaluation from './components/Evaluation';

import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';


// 서버 endpoint 를 위해 선언 뒤에 url 은 바꿔줄것.
const PUSH_REGISTRATION_ENDPOINT = 'http://15c583b833df.ngrok.io///token';
const MESSAGE_ENPOINT = 'http://15c583b833df.ngrok.io//message';
let token;

// 앱이 실행되는 동안 알림이 수신되면
Notifications.setNotificationHandler({
  // 알림에 적용 가능한 promis 동작 
  // NotificationBehavior에 대한 해결을 반환하는 수신 알림을 수락하는 함수 (필수)
  handleNotification:async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
  handleSuccess:async ()  => ({
    //  수신 알림이 성공적으로 처리 될때마다 호출되는 함수 선택사항 
  }),
  handleError:async () => ({
    // 수신 알림 처리가 실패 할 때마다 호출되는 함수 선택 사항
  })
});


const prefix = Linking.makeUrl('/');
const Stack = createStackNavigator();


export default function App({navigation,route}) {
  const navigationRef = useRef();
  const [isReady,setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef(); 
  const [messageText,setMessageText] = useState('');



  const {getInitialState} = useLinking(navigationRef,{
    prefixes: [prefix],
    config:{
      screen:{
        Home:{
          path:'home',
            screen:{
              Main : 'main',
              Category :'category',
              Evaluation:{
                path:'evaluation',
                screen:{
                  Evaluate:'evaluate',
                  Web:{
                      path:'web',
                      params:''
                    }
                  }
              },
              MyPage : "mypage"
            }
        }
      }
    }

  })

  useEffect(() => {
    getInitialState()
      .catch((error) => {
        // console.error('error getInitialState', error);
      })
      .then((state) => {
        // console.log('state', state);

        if (state !== undefined) {
          setInitialState(state);
        }

        setIsReady(true);
        // console.log(state+"state");
      });
  }, [getInitialState]);

  console.log(initialState+"init");

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => sendPushNotification(token));
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

       // 앱이 포그라운 상태인 동안 알람이 수신될 때 마다 실행
      //  새로운 알림이 수신 될때 마다 
      //  단말기에서 2개 이상 프로그램이 돌아갈때 한 프로세스가 다른 프로세스보다 우선권을 가지고 수행되는것.
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

      // 사용자가 알람을 탭했을때,상호작용 할때 마다 실행
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {


        const screen = response.notification.request.content.data.body.screen;
      // if (screen) navigation.navigate(screen);
      console.log(screen);
      Linking.openURL(screen);

      // Linking.addEventListener('url',url);
      // if (screen) navigation.navigate("Home",navigation.navigate(screen));
      // A simple example of passing data as the value
      // of the screen you want the user to be navigated to
      // when they click on a notification
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);
  
  if(!isReady){
    return null;
  }
  
  return (
    <NavigationContainer initialState={initialState} ref={navigationRef}>
      <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{headerShown: false}}
        // initialParams={{navigationRef}}
        />
        {/* <Stack.Screen name="Category" component={Category} options={{headerShown: false}}>
        </Stack.Screen>
        <Stack.Screen name="Evaluat" component={Evaluation} options={{headerShown: false}}>
        </Stack.Screen>
        <Stack.Screen name="mypage" component={Mypage} options={{headerShown: false}}>
        </Stack.Screen> */}
    {/* <Stack.Screen name="push" component={Push} options={{headerShown: false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141517',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

registerForPushNotificationsAsync = async () => {
  //  알림을 보낼 수 있는 권한이 이미 있는지 

  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      Alert.alert(
        '알림',
        '알림 허용을 하지 않고서는 알림을 받을 수 없습니다. 지금 설정하시겠습니까?',
        [
          { text: '취소' },
          // If they said no initially and want to change their mind,
          // we can automatically open our app in their settings
          // so there's less friction in turning notifications on
          { text: 'Enable Notifications', onPress: () => Platform.OS === 'ios' ? Linking.openURL('app-settings:') : Linking.openSettings() }
        ]
      )
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    // alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

 const sendPushNotification = async(expoPushToken) => {

  //  token이 적절하다면, PUSH_REGISTRATION_ENDPOINT를 사용하여 push notification  server로 요청을 보낸다.
    await fetch(PUSH_REGISTRATION_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: {
          value: expoPushToken,
        },
        user: {
          username: 'warly', //임의값
          name: 'Dan Ward'   //임의값
        },
      }),
    });
  }
  
