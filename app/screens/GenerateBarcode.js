import React, {useState,useEffect} from 'react';
import {View,Text,StyleSheet,Button,TextInput,ImageBackground,Dimensions} from 'react-native';
import Barcode from 'react-native-barcode-builder';

export default function GenerateBarcode() {
    const [generatorText,setGeneratorText] = useState('0');
    const [generated,setGenerated] = useState(false);

     //what happens when we input text to create barcode
 const handleBarCodeGenerated = (value) => {
    setGenerated(false);
    if(value != null)
    {
      setGeneratorText(value);
    }
 
    if(value == '')
    {
      setGeneratorText('0');
    }
}

    return(
      <ImageBackground 
      style={styles.screen}
      source={require('../resources/background.jpg')}
      >
        <View style={styles.container}>
        <View style={{width:'100%',position:'absolute',top:'2%',justifyContent:'center',alignItems:'center'}}>
        <View style={{width:'100%',marginBottom:10,}}>
        <Text style={{color:'tomato',textAlign:'center',fontSize:30,fontWeight:'bold',marginBottom:20}}> Generate Barcode</Text>
        </View>
        <View style={styles.barcodeGeneratorBox}>
      <TextInput
        style={styles.input}
        underlineColorAndroid= 'tomato'
        placeholder='barcode input'
        placeholderTextColor= 'tomato'
        autoCapitalize='none'
        onChangeText={handleBarCodeGenerated}
      />
      
      <Barcode value={generatorText} format='CODE128'/>
      </View>
    </View>
    

    </View>
    </ImageBackground>
    
  );
    }

  const styles = StyleSheet.create({
    screen:{
      flex:1,
      width:'100%',
      height:Dimensions.get('screen').height,
  },
    container:{
      flex:1,
      backgroundColor: 'rgba(255,255,255,0.8)',
      alignItems:'center',
      justifyContent:'center',
    },
    barcodeBox:{
      alignItems:'center',
      justifyContent:'center',
      height:300,
      width:300,
      overflow:'hidden',
      borderRadius:30,
      backgroundColor: 'tomato',
    },
    mainText:{
      fontSize:16,
      margin:20,
      color:'black'
    },
    barcodeGeneratorBox:{
      alignItems:'center',
      justifyContent:'center',
      height:300,
      width:300,
      overflow:'hidden',
     // backgroundColor:'tomato',
    },
    input:{
      margin:10,
      height:50,
      width:200,
      color:'black',
      borderColor:'tomato',
    },
    
    });

