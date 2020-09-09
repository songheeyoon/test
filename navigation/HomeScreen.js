import React, { useEffect, useState } from 'react';
import MainScreen from '../components/MainScreen';
import CategoryScreen from '../components/CategoryScreen';
import EvaluationScreen from '../components/EvaluationScreen';
import MyPageScreen from '../components/MyPageScreen';

import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
const HomeScreen = ({navigation,route}) => {
    // console.log((route.state && route.state.index === 2))

    // if(route.state){
    //     console.log(route.state)
    // }
    //  useEffect(()=>{
    //     if(route.state && route.state.index === 1 ){
    //         navigation.setOptions({tabBarVisible:false})
    //     }else{
    //         navigation.setOptions({tabBarVisible:true})
    //     }   np     
    //  },[navigation,route])
    const [toggle,setToggle] = useState('');
    return(
    <Tab.Navigator tabBarOptions={{showIcon:"true",style:{backgroundColor:"#141517",height:55},labelStyle: { fontSize: 12}, activeTintColor: 'white',
    inactiveTintColor: 'gray'}}>
        {/* ,indicatorStyle :{backgroundColor:"#141517"} */}
      <Tab.Screen name="Main" component={MainScreen}
        options={{    
        tabBarIcon:({focused})=>{
            return(
                focused?
                <Fontisto name="home" size={24} color="#fff" /> :
                <Fontisto name="home" size={24} color="#4f4f50" />
            )                
        },
        tabBarLabel: '홈',
        tabBarVisible: true             
      }} />
      <Tab.Screen name="Category" component={CategoryScreen}
        options={{
            tabBarIcon:({focused})=>{
                return(
                    focused?
                    <FontAwesome name="list" size={24} color="#fff" /> :
                    <FontAwesome name="list" size={24} color="#4f4f50" />
                )                
            },
            tabBarLabel: '카테고리',
            tabBarVisible: true
          }}      
      />
      <Tab.Screen name="Evaluation" component={EvaluationScreen} 
         options={{
            tabBarIcon:({focused})=>{
                return(
                    focused?
                    <Feather name="star" size={24} color="#fff" /> :
                    <Feather name="star" size={24} color="#4f4f50" />
                )                
            },
            tabBarLabel: '평가',
            tabBarVisible: true
            // tabBarVisible: (route.state && route.state.index === 2) ? false : true
          }}  
      />
      <Tab.Screen name="MyPage" component={MyPageScreen} 
         options={{
            tabBarIcon:({focused})=>{
                return(
                    focused?
                    <MaterialIcons name="person" size={24} color="#fff" /> :
                    <MaterialIcons name="person" size={24} color="#4f4f50" />
                )                
            },
            tabBarLabel: '마이페이지'      
          }}
           
      />
    </Tab.Navigator>
    );
}

export default HomeScreen;