import express from 'express';
import Expo from 'expo-server-sdk';
// express server app을 생성하고, const app에 저장한다.
const app = express();
// expo server SDK의 새로운 instance를 const expo에 저장한다.
const expo = new Expo();
// react native app에 등록된 token들을 저장하기 위한 array를 선언해준다.
let savedPushTokens = [];
// server를 실행시키기 위한 port number를 선언해준다.
const PORT_NUMBER = 3000;

// server는 두개의 endpoint가 필요하다.
//  token을 등록하기 위한 endpoint
// react native app 에서 메세지를 받아오기 위한 endpoint
//  따라서 두개의 함수를 정의해 준다.
//  api 프로그램들이 서로 상호작용하는 것을 도와주는 매개체
//  서버와 DB에 대한 출입구 역할
//  DB는 소중한 정보들이 저장 . API는 이릉 방지하기 서버와DB에 대한 출입구 역할을
// endpoint란 API가 서버에서 리소스에 접근할 수 있도록 가능하게 하는 URI ?//.
// 어떠한 소프트웨어나 제품에 최종목적지인 사용자를 가리키며 그 예로는 PC나 노트북, 핸드폰등 유저가 사용하는 devices등을 말함.

// token 등록 함수
const saveToken = (token) => {
    if (savedPushTokens.indexOf(token === -1)) {
      savedPushTokens.push(token);
    }
    console.log(token);
  }

const sendMessage = () => {
//  클라이언트에게 보낼 메시지를 만듭니다. 
    let  messages  =  [ ] ; 
    for (let pushToken of somePushTokens) {
        // 모든 푸시 토큰이 유효한 Expo 푸시 토큰으로
        if (!Expo.isExpoPushToken(pushToken)) {
          console.error(`Push token ${pushToken} is not a valid Expo push token`);
          continue;
        }
         // 메시지 생성 (https://docs.expo.io/push-notifications/sending-notifications/ 참조) 
        messages.push({
            to: pushToken,
            sound: 'default',
            body: 'This is a test notification',
            data: { withSome: 'data' },
          })
    }
}

// react native app으로 부터 메세지를 받았을 때 push notification을 보내는 함수

const handlePushTokens = (message) => {
    // message array를 받아오면, Expo 서버로 전송한다. expo 서버에서 등록된 모든 기기에 push
    let notifications = [];
    for (let pushToken of savedPushTokens) {
      if (!Expo.isExpoPushToken(pushToken)) {
        console.error(`Push token ${pushToken} is not a valid Expo push token`);
        continue;
      }
      notifications.push({
        to: pushToken,
        sound: 'default',
        title: 'Message received!',
        body: message,
        data: { message }
      })
    }
    //chunkPushNotifications와 sendPushNotificationsAsync 메소드를 통해, expo 서버에서 message array를 받는다.
    let chunks = expo.chunkPushNotifications(notifications);
    (async () => {
      for (let chunk of chunks) {
        try {
          let receipts = await expo.sendPushNotificationsAsync(chunk);
          console.log(receipts);
        } catch (error) {
          console.error(error);
        }
      }
    })();
  }

//   API endpoint 생성해 위의 함수들을 사용해준다
app.use(express.json());
// 서버가 실행중이라는 응답
app.get('/', (req, res) => {
    res.send('Push Notification Server Running');
  });
//push notification token을 저장하기 위한 endpoint를 실행한다.
//post 요청이 /token endpoint로 보내지면, token 값을 saveToken으로 보내고 토큰이 수신되었다는 응답을 return한다.

  app.post('/token', (req, res) => {
    saveToken(req.body.token.value);
    console.log(`Received push token, ${req.body.token.value}`);
    res.send(`Received push token, ${req.body.token.value}`);
  });
  //마찬가지로 /message endpoint는 request body에서 메세지를 받아올 것이다. 그리고 그것을 handlePushTokens으로 넘겨준다. 그리고나면 우리는 message가 수신되었다는 응답을 받아온다.
  app.post('/message', (req, res) => {
    handlePushTokens(req.body.message);
    console.log(`Received message, ${req.body.message}`);
    res.send(`Received message, ${req.body.message}`);
  });

  app.listen(PORT_NUMBER, () => {
    console.log(`Server Online on Port, ${PORT_NUMBER}`);
  });