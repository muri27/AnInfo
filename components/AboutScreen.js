import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default class aboutScreen extends React.Component{
    render(){
        return(
            <ScrollView>
            <View style={styles.container}>
                <View style={{alignItems: 'center', marginTop: 64}}>
                    <FontAwesome name="user-circle" size={109} color="#059aee" />
                </View>

                <View style={styles.identity}>
                    <Text style={{color: '#059aee', fontSize:20, fontWeight:'bold',marginBottom: 12}}>Muhammad Rifki</Text>
                    <Text style={{color: '#c4c4d4', fontSize:14}}>Joined</Text>
                    <Text style={{color: '#c4c4d4', fontSize:14}}>14 Aug 2020</Text>
                </View>

                <View style={styles.portofolio}>
                    <View >
                    <Text style={styles.kategori}>Watching</Text>
                    <Text style={styles.kategori}>Completed</Text>
                    <Text style={styles.kategori}>Hold</Text>
                    <Text style={styles.kategori}>Dropped</Text>
                    <Text style={styles.kategori}>Plan to Watch</Text>
                    </View>
                    <View>
                    <Text style={styles.number}>0</Text>
                    <Text style={styles.number}>0</Text>
                    <Text style={styles.number}>0</Text>
                    <Text style={styles.number}>0</Text>
                    <Text style={styles.number}>0</Text>
                    </View>
                </View>                    
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    identity:{
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 60
    },
    portofolio:{
        width: 359.9,
        height: 380,
        backgroundColor:'#059aee',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    kategori:{
        marginRight:16,
        marginBottom:18,
        fontSize:18,
        color:'#ffffff'
    },
    number:{
        marginLeft:16,
        marginBottom:18,
        fontSize:18,
        color:'#ffffff'
    }
})