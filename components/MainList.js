import React from 'react';
import {View,Image,Text, FlatList} from 'react-native';


const MainList = ({list,index}) => {

    <FlatList
    // data={list.slide(0,section.count)}
    // list.slide(0,section.)
    // data={list.slice(0,count)}
    data={list}
    renderItem={({item,index})=>{
        console.log(index);
        return(
        <View style={{width:'50%',paddingHorizontal:10}}>
            <Image source={img} style={{width:'100%',height:width/3,alignItems:'center',justifyContent:"center"}}></Image>
            <Text style={{color:'#fff'}}>{name}</Text>
        </View>  
      )     
    }}
    ListFooterComponent={(index)=>{
        return(
            <TouchableOpacity style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}} onPress={()=>{
                    if(count<list.length){
                        setCount(prevState=>{prevState+4})
                    }else{
                        setCount(prevState=>{prevState})
                    }
            }}>
                <AntDesign name="down" size={24} color="#DBDBDB" style={{marginRight:20}}/>
                <Text style={{color:'#DBDBDB'}}>더보기</Text>
                {/* {
                    count>list.length ? <Text style={{color:'#DBDBDB'}}>더보기</Text>
                } */}
               
            </TouchableOpacity>
        )
    }}
    numColumns={2}
>
</FlatList>         
}

export default MainList;