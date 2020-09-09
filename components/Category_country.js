import React from 'react';
import { View,StyleSheet, FlatList,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const data = [
    {id:"1",title:'대만'},
    {id:"2",title:'인도'},
    {id:"3",title:'독일'},
    {id:"4",title:'캐나다'},
    {id:"5",title:'스페인'},
    {id:"6",title:'영국'},
    {id:"7",title:'프랑스'},
    {id:"8",title:'이탈리아'},
    {id:"9",title:'홍콩'},
    {id:"10",title:'미국'},
    {id:"11",title:'일본'},
    {id:"12",title:'중국'},
    {id:"13",title:'한국'}
]
const Category_country = () =>{

    return(
        <View style={styles.Container}>
            <FlatList
             data={data}
             renderItem={renderItem}   
            >
            </FlatList>
        </View>
    );
}

const renderItem = ({item,index}) =>{

    const press = (index) => {
        alert(index);        
    }
    return(
        <View style={{paddingLeft:20}}>
            <Text style={styles.listView}>{item.title}</Text>
        </View>
    );

}
export default Category_country;


const styles = StyleSheet.create({

    Container : {
        flex:10,
        height:'100%',
        backgroundColor:'#141517'
        // paddingTop: Platform.OS === 'ios' ? 60: 0    
    },
    listView : {
        color:"#fff",
        lineHeight:40,
        fontSize:16
    }

})