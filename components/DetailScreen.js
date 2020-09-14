import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default class detailsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async() =>{
        const response = await fetch (`https://api.jikan.moe/v3/anime/39587`);
        const json = await response.json();
        this.setState({ data: json});
    }



    render(){
        return(
                <View style={styles.container}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image source={{uri: this.state.data.image_url}} style={{width:200, height:250}}/>
                        <Text style={{flex:1, fontSize:20, fontWeight:'bold'}}>{this.state.data.title}</Text>
                    </View>

                    <Text style={{fontSize:14, fontWeight:'bold'}}>Sinopsis</Text>
                    <Text style={{fontSize:14}}>{this.state.data.synopsis}</Text>

                    <Text style={{fontSize:14, fontWeight:'bold', marginTop:20}}>Episode: <Text style={{fontWeight:null}}>{this.state.data.episodes}</Text></Text>
                    <Text style={{fontSize:14, fontWeight:'bold', marginTop:20}}>Season: <Text style={{fontWeight:null}}>{this.state.data.premiered}</Text></Text>
                    <Text style={{fontSize:14, fontWeight:'bold', marginTop:20}}>Source: <Text style={{fontWeight:null}}>{this.state.data.source}</Text></Text>
                    <Text style={{fontSize:14, fontWeight:'bold', marginTop:20}}>Rating: <Text style={{fontWeight:null}}>{this.state.data.rating}</Text></Text>


                </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white'
    },
    image:{
        width: 187.5,
        height: 51
    },
    profile:{
        paddingTop:7,
        flexDirection:'row',
        alignItems: 'center',
        paddingLeft:16
    },
    profileDesc:{
        paddingLeft:11
    },
    profileDesc1:{
        fontSize:12,
        color:'#003366'
    },
    profileDesc2:{
        fontSize:16,
        color:'#003366'
    },
    title:{
        paddingVertical:16,
        paddingLeft:16
    },
    titleDesc:{
        fontSize:36,
        color:'#003366'
    },
    titleLine:{
        height:3,
        width:360,
        backgroundColor:'#21c8de'
    },
    category:{
        paddingLeft:16,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    category1:{
        backgroundColor:'#b4e9ff',
        width:135,
        height:32,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8
    },
    category2:{
        backgroundColor:'#b4e9ff',
        width:136,
        height:32,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8
    },
    category3:{
        backgroundColor:'#b4e9ff',
        width:70,
        height:32,
        alignItems:'center',
        justifyContent:'center', 
        borderRadius:8
    },
    categoryDesc:{
        fontSize:12,
        fontWeight:'bold'
    },
    box:{
        width:343,
        height:129,
        marginLeft:16, 
        marginTop:10, 
        backgroundColor:'#b4e9ff', 
        borderRadius:8, 
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-around'
    },
    boxSkill:{
        fontSize:24, 
        color:'#003366', 
        fontWeight:'bold'
    },
    boxCategory:{
        fontSize:16,
        color:'#3ec6ff', 
        fontWeight:'bold'
    },
    boxPercentage:{
        fontSize:48, 
        color:'#ffffff', 
        fontWeight:'bold'
    }
})