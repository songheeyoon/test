import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import My_Connectivity from './My_Connectivity';
import My_Like from './My_Like';
import My_art from './My_art';
import My_download from './My_download ';

const Tab = createMaterialTopTabNavigator();


const Mypage_Nv = () => {

    return(
     <Tab.Navigator tabBarOptions={{style:{backgroundColor:"#141517"},activeTintColor:"#fff",inactiveTintColor:"#555",labelStyle: { fontSize: 16},indicatorStyle:{backgroundColor:"#eb0056"}}}>
        <Tab.Screen name="look" component={My_Connectivity} 
          options={{
              tabBarLabel:'이어보기'
          }}
        />
        <Tab.Screen name="like" component={My_Like} 
          options={{
              tabBarLabel:'보고싶어요'
          }}      
        />
        <Tab.Screen name="end" component={My_art} 
          options={{
              tabBarLabel:'다 본 작품'
          }}      
        />
        <Tab.Screen name="download" component={My_download} 
          options={{
              tabBarLabel:'다운로드'
          }}      
        />
      </Tab.Navigator>

    );


}

export default Mypage_Nv;