import React, {useState,useEffect} from 'react';
import {View,Text,StyleSheet,Button,TextInput} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import Barcode from 'react-native-barcode-builder';

function Combined() {
  const [hasPermission,setHasPermission] = useState(null);
  const [scanned,setScanned] = useState(false);
  const [text,setText] = useState(null);
  const [generatorText,setGeneratorText] = useState('0');
  const [generated,setGenerated] = useState(false);

  //Function for asking permission
  const askForPermission = () => {
    (async () =>{
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status =='granted')
    })();
  }

  //Request camera permission
  useEffect(()=>{
    askForPermission();
  },[]);

  //what happens when we scan barcode
  const handleBarCodeScanned = ({type,data}) => {
    setScanned(true);
    setText(data);
    console.log('Type: ' + type + '\n Data:' + data)
  }

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

  //Screen displayed if their is no permission
  if(hasPermission == null)
  {
    return(
      <View style={styles.container}>
        <Text>Requesting for Camera permission</Text>
      </View>
      
    )
  }

  //Screen displayed permission was denied
  if(hasPermission == false)
  {
    return(
      <View style={styles.container}>
      <Text style={{margin:10,}}> Allow access to camera to use the app</Text>
      <Button title='ALLOW CAMERA' onPress={()=> askForPermission()}/>
      </View>
      
    )
  }
  
  //Main Screen with Scanner
  return(
    <View style={styles.container}>

    <View style={styles.barcodeBox}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{height:540,width:540,}}
      />
    </View>
    <Text style={styles.mainText}>{text}</Text>
    {scanned && <Button title='SCAN AGAIN?' onPress={() => setScanned(false)} color='tomato'/>}

    <View style={styles.barcodeGeneratorBox}>
      <TextInput
        style={styles.input}
        underlineColorAndroid= 'black'
        placeholder='barcode input'
        placeholderTextColor= 'tomato'
        autoCapitalize='none'
        onChangeText={handleBarCodeGenerated}
      />
      
      <Barcode value={generatorText} format='CODE128'/>
    </View>

    </View>
    
  )


}

const styles = StyleSheet.create({

container:{
  flex:1,
  backgroundColor: '#fff',
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
  borderWidth:1,
},

});

export default Combined;