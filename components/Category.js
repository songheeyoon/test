import React from 'react';
import { View } from 'native-base';
import {StyleSheet} from 'react-native';
import Category_genre from './Category_genre';
import Category_country from './Category_country';
import Category_character from './Category_character';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Category = () => {

return(
    <Tab.Navigator tabBarOptions={{style:{backgroundColor:"#141517",borderTopColor:'#141517'},activeTintColor:"#eb0056",inactiveTintColor:"#555",labelStyle: { fontSize: 16},indicatorStyle:{backgroundColor:"#eb0056"}}}>
      <Tab.Screen name="genre" component={Category_genre} 
        options={{
            tabBarLabel:'장르'
        }}
      />
      <Tab.Screen name="country" component={Category_country} 
        options={{
            tabBarLabel:'국가'
        }}      
      />
      <Tab.Screen name="character" component={Category_character} 
        options={{
            tabBarLabel:'특징'
        }}      
      />
    </Tab.Navigator>
);
}

export default Category;

