import React from 'react';
import {View, Button,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components';
import Main from './Main';
import Push from './Push';

const Stack = createStackNavigator();

const MainScreen = () =>{
    return(
        // <NavigationContainer independent="true">
            <Stack.Navigator>
            <Stack.Screen name="main" component={Main} 
            options={(navigation,route)=>({
                headerTitle:false,
                headerTransparent: true,
            })} 

            // headerLeft: () =>(
            //     <TouchableOpacity onPress={()=>navigation.navigate('push')}>
            //        <SimpleLineIcons name="bell" size={24} color="#fff" style={{marginLeft:10, justifyContent:"center"}}/>
            //     </TouchableOpacity>
            // ),
            // headerRight: () => (
            //     <TouchableOpacity>
            //         <AntDesign name="search1" size={24} color="#fff" style={{marginRight:10, justifyContent:"center"}}/>
            //     </TouchableOpacity>
            //     ),
            //     // headerTitleAlign:"center"
            
          />
          <Stack.Screen name="push" component={Push}
            options={{headerTitle:false,headerTransparent:true,headerTintColor:"#fff"}}
          >
          </Stack.Screen>
            </Stack.Navigator>
        // </NavigationContainer>
    );
}

export default MainScreen;