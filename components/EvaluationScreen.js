import React, { useState, createContext, useEffect } from 'react';
import {View,TouchableOpacity, Text} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import Evaluation from './Evaluation';
import { Root } from 'native-base';
import WebContents from './WebContent';
import {Context} from './Context';

const Stack = createStackNavigator();

const EvaluationScreen = ({navigation,route,children}) =>{

    // navigation.push("Web",{toggle:"false"});

    // navigation.push("Web",{toggle:true});

    // for (var key in route) {
    //     console.log(key + " / " + route[key])
    //  }

    // console.log(JSON.stringify(navigation)+"S");
    // console.log(navigation+"Screen");  
    // navigation.setOptions({tabBarVisible:false})

    useEffect(()=>{
        navigation.addListener('tabPress',e=>{
            console.log(navigation.navigate);
        })
    });

    const change = (toggle) => {
        // console.log(toggle);
        if(toggle==="up"){
            setToggle("true")
            navigation.setOptions({tabBarVisible:true})

        }else if(toggle==="down"){
            setToggle("fasle")
            navigation.setOptions({tabBarVisible:false})
        }
    }

    // const initState = {
    //     toggle : "false",
    //     change
    // }

    const [num,setNum] = useState('0');
    const [toggle,setToggle] = useState('');
    // setToggle(route.params.toggle);

    return(
        <Context.Provider value={{
            toggle:toggle,
            change
        }}>
            <NavigationContainer independent="true">
                <Stack.Navigator initialRouteName="Evaluat">
                    <Stack.Screen name="Evaluat" component={Evaluation} options={{headerShown: false}} />
                    <Stack.Screen name="Web" component={WebContents} options={{headerShown: false,}} />
                </Stack.Navigator>
            </NavigationContainer>
        </Context.Provider>
    );
}
export default EvaluationScreen;

