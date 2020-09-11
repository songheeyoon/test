import React from 'react';
import {View,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import Mypage from './Mypage';
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();

const MyPageScreen = () =>{
    return(
        <NavigationContainer independent="true">
            <Stack.Navigator>
            <Stack.Screen name="mypage" component={Mypage} 
            options={{ 
                headerStyle:{
                    backgroundColor:"#141517"
                },    
                headerTitleStyle:{
                    display:"none"
                },            
            headerLeft: () => (
                <TouchableOpacity>
                    <AntDesign name="setting" size={24} color="#fff" style={{marginLeft:10}} />
                </TouchableOpacity>
                )
            }}            
            />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MyPageScreen;