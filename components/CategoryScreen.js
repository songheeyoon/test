import React from 'react';
import {View,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import Category from './Category';
import { AntDesign } from '@expo/vector-icons';
import Search from './Search';

const Stack = createStackNavigator();

const CategoryScreen = ({navigation}) =>{
    return(
        // <NavigationContainer independent="true">
            <Stack.Navigator lazy="true">
            <Stack.Screen name="main" component={Category}
            options={{ 
                // headerTransparent: true
                // ,
                headerTitle:"카테고리"
                ,
                headerTintColor:"#fff",
                headerStyle:{
                    backgroundColor:"#141517"
                },
            headerRight: () => (
                <TouchableOpacity onPress={()=>navigation.navigate('search')}>
                    <AntDesign name="search1" size={24} color="#fff" style={{marginRight:10, justifyContent:"center"}}/>
                </TouchableOpacity>
                ),
                headerTitleAlign:"center"
            }}
          />
          {/* <Stack.Screen name="detail" component={Detail}>

          </Stack.Screen> */}
          <Stack.Screen name="search" component={Search}>

          </Stack.Screen>
            </Stack.Navigator>
        // </NavigationContainer>
    );
}


export default CategoryScreen;