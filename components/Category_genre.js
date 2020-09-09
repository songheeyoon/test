import React from 'react';
import { View,StyleSheet, FlatList,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const data = [
    {id:"1",title:'새로 올라온 작품'},
    {id:"2",title:'왓챠 익스클루시브'},
    {id:"3",title:'TV드라마'},
    {id:"4",title:'TV다큐멘터리'},
    {id:"5",title:'TV애니메이션'},
    {id:"6",title:'영어자막 지원 작품'},
    {id:"7",title:'재난'},
    {id:"8",title:'로맨틱코미디'},
    {id:"9",title:'시트콤'},
    {id:"10",title:'틴에이져'},
    {id:"11",title:'시대극'},
    {id:"12",title:'가족사'},
    {id:"13",title:'역사'},
    {id:"14",title:'음악'},
    {id:"15",title:'SF'},
    {id:"16",title:'모험'},
    {id:"17",title:'스포츠'},
    {id:"18",title:'전쟁'},
    {id:"19",title:'키즈'},
    {id:"20",title:'판타지'},
    {id:"21",title:'미스터리'},
    {id:"22",title:'서부극'},
    {id:"23",title:'범죄'},
    {id:"24",title:'로맨스'},
    {id:"25",title:'코미디'},
    {id:"26",title:'스릴러'},
    {id:"27",title:'공포'},
    {id:"28",title:'액션'},
    {id:"29",title:'시사교양'},
    {id:"30",title:'애니메이션'},
    {id:"31",title:'예능'},
    {id:"32",title:'다큐멘터리'},
    {id:"33",title:'드라마'},
    {id:"34",title:'단편'}
]
const Category_genre = () =>{

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
export default Category_genre;


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