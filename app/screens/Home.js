import React,{Component} from 'react';
import {StyleSheet,View,Text,ImageBackground,Image,Dimensions,TouchableOpacity} from 'react-native';
import Card from '../components/Card';
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';

export default class Home extends Component{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
        <ImageBackground
            style={styles.screen}
            source={require('../resources/background.jpg')}
        >
        <View style={styles.container}>
            <TouchableOpacity 
            style={{width:'100%',alignItems:'center'}} 
            onPress={()=>{this.props.navigation.navigate('ScanBarcode')}}
            >
           <Card/>
           </TouchableOpacity>

           <View style={styles.container2}>
           <TouchableOpacity 
           style={{width:'50%',alignItems:'center'}}
           onPress={()=>{this.props.navigation.navigate('GenerateBarcode')}}
           >
           <Card1/>
           </TouchableOpacity>

           <View style={styles.container3}>
           <TouchableOpacity 
           style={{width:'100%',alignItems:'center'}}
           onPress={()=>{this.props.navigation.navigate('CreateGroup')}}
           >
           <Card2/>
           </TouchableOpacity>

           <TouchableOpacity 
           style={{width:'100%',alignItems:'center'}}
           onPress={()=>{this.props.navigation.navigate('ViewGroup')}}
           >
           <Card3/>
           </TouchableOpacity>
           </View>

           </View>

        </View>

        </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    screen:{
        flex:1,
        width:'100%',
        height:Dimensions.get('screen').height,
    },
    container:{
        flex:1,
        backgroundColor: 'rgba(255,255,255,0.6)',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:30,
    },
    container2:{
        flexDirection:'row',
        marginTop:20,
        padding:20,
    },

});