import React,{Component} from 'react';
import {StyleSheet,View,Text,ImageBackground,Image,Dimensions,TouchableOpacity} from 'react-native';


export default class CreateGroup extends Component{
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
              <View style={styles.upperContainer}>
              <View style={{width:'100%',marginBottom:10,}}>
              <Text style={{color:'tomato',textAlign:'center',fontSize:30,fontWeight:'bold',marginBottom:20}}>Create student group</Text>
              </View>
              </View>
              <Text style={{color:'black'}}>Create Group Page</Text>
              </View>
              </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    screen:{
      flex:1,
      width:'100%',
      height:Dimensions.get('screen').height,
  },
  upperContainer:{
    position:'absolute',
    top:'2%',
    width:'100%',
    alignContent:'center',
    alignItems:'center',
  },
    container:{
      flex:1,
      backgroundColor: 'rgba(255,255,255,0.8)',
      alignItems:'center',
      justifyContent:'center',
    },
});