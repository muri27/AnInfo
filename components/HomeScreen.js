import React from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight, FlatList} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Details from './DetailScreen'


export default class homeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data :[]
        }
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async() =>{
        const response = await fetch ("https://api.jikan.moe/v3/season/2020/summer");
        const json = await response.json();
        this.setState({ data: json.anime});
    }


    render(){
        return(
            <View style={styles.container}>
                <View style={{flexDirection:'row', marginTop: 40, marginBottom:10, alignItems:'center'}}>
                    <View>
                        <MaterialCommunityIcons name="menu" size={30} color="#21c8de" onPress={() => this.props.navigation.toggleDrawer()}/>
                    </View>
                    <View style={{marginRight:32,justifyContent:'center', alignItems:'center', flex:1}}>
                        <Image source={require('../image/logo.jpg')} style={{width: 63.4, height:42.2}}/>
                    </View>
                </View>
                <View style={styles.titleLine}></View>
                
                <View style={{flex:1, marginLeft:5}}>
                <FlatList
                        data = {this.state.data}
                        keyExtractor={(item) => item.mal_id}
                        renderItem = {({item}) =>
                        <View style ={{flexDirection:'row', marginBottom: 24}}>
                            <TouchableHighlight onPress={() => this.props.navigation.push('Details',{id:item.mal_id})} underlayColor="white">
                            <Image source={{uri: item.image_url}} style={{width:150, height:200}}/>
                            </TouchableHighlight> 
                            <View style={{flex:1, marginHorizontal:5}}>
                                    <TouchableHighlight onPress={() => this.props.navigation.push('Details',{id:item.mal_id})} underlayColor="white">
                                        <Text style={{marginBottom:10}} numberOfLines={2} >{item.title}</Text>
                                    </TouchableHighlight> 
                                    <Text numberOfLines={4} style={{marginBottom:10, color:'gray', fontStyle:'italic'}}>{item.synopsis}</Text>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <MaterialIcons name="star" size={24} color="#fff220" style={{marginRight:5}} />
                                    <Text>{item.score}</Text>
                                    <Text>pisah</Text>
                                    <Text>{item.mal_id}</Text>
                                </View>
                            </View>
                        </View>
                    }/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white'
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
    }
})