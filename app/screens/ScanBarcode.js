import React, {useState,useEffect} from 'react';
import {View,Text,StyleSheet,Button,TextInput,ImageBackground,Dimensions,ScrollView,Image} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';

function ScanBarcode()
{
    const [hasPermission,setHasPermission] = useState(null);
    const [scanned,setScanned] = useState(false);
    const [text,setText] = useState(null);
    const [name,setName] = useState(null);
    const [program,setProgram] = useState(null);
    const [year,setYear] = useState(null);
    const [url,setUrl] = useState(null);

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



  //getting API to see details of a student
  const viewStudentDetails = () => {
    var studentId = text;
    if(studentId.length == 0)
    {
      alert("Required field is missing");
    }
    else
    {
      var retreaveAPIURL = "http://192.168.214.188:80/projects/smartcardAPI/retreave.php"; 
      var headers = {
        'Accept':'application/json',
        'Content-Type':'application/json'
      };
    var Data = {
      FindStudentId:studentId
    };
    fetch(retreaveAPIURL,
      {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)     //Converts javascript object into JSON object
      })
      .then((response)=>response.json())
      .then((response)=>
        {
          //alert("message: " + response[0].Message);
          //this.setState({access:response[0].Access});
          setName(response[0].studentFname);
          setProgram(response[0].programme);
          setYear(response[0].year);
          setUrl(response[0].imgDir);
        }
        )
        .catch((error)=>{
          alert("Error: " + error);
          //alert("Error: Results not found");
          })
    }
  }





  //Screen displayed if their is no permission
  if(hasPermission == null)
  {
    return(
      <ImageBackground 
      style={styles.screen}
      source={require('../resources/background.jpg')}
      >
      <View style={styles.container}>
        <Text>Requesting for Camera permission</Text>
      </View>
      </ImageBackground>
      
    )
  }

  //Screen displayed permission was denied
  if(hasPermission == false)
  {
    return(
      <ImageBackground 
      style={styles.screen}
      source={require('../resources/background.jpg')}
      >
      <View style={styles.container}>
      <Text style={{margin:10,}}> Allow access to camera to use the app</Text>
      <Button title='ALLOW CAMERA' onPress={()=> askForPermission()}/>
      </View>
      </ImageBackground>
    )
  }

    //Main Screen with Scanner
    return(
      <ScrollView style={{flex:1,width:'100%'}}>
      <ImageBackground 
            style={styles.screen}
            source={require('../resources/background.jpg')}
            >
        <View style={styles.container}>
        <View style={styles.upperContainer}>
        <View style={{width:'100%',marginBottom:10,}}>
        <Text style={{color:'tomato',textAlign:'center',fontSize:30,fontWeight:'bold',marginBottom:20}}> Scan Barcode</Text>
        </View>
        <View style={styles.barcodeBox}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{height:540,width:540,}}
          />
        </View>
        <Text style={styles.mainText}>{text}</Text>
        {scanned && <Button title='SCAN AGAIN?' onPress={() => setScanned(false)} color='tomato'/>}

        <View style={{width:'100%',alignContent:'center',alignItems:'center',marginTop:10,}}>
        <Button title='VIEW STUDENT DETAILS' onPress={viewStudentDetails} color='tomato'/>
        </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.imageContainer}><Image source={{uri:url}} style={styles.imgStyle}/></View>
          <View style={styles.contentsContainer}>
          <Text style={styles.detailsText}>Name: {name}</Text>
          <Text style={styles.detailsText}>Program: {program} </Text>
          <Text style={styles.detailsText}>Year: {year} </Text>
          </View>
        </View>

        </View>
        </ImageBackground>
        </ScrollView>
    
  )

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
    upperContainer:{
      //backgroundColor:'yellow',
      position:'absolute',
      top:'2%',
      width:'100%',
      alignItems:'center',
    },
    input:{
      margin:10,
      height:50,
      width:200,
      color:'black',
      borderColor:'tomato',
      borderWidth:1,
    },
    detailsContainer:{
     // backgroundColor:'red',
      position:'absolute',
      top:'57%',
      width:'90%',
      height:200,
      marginTop:100,
      flexDirection:'row',
      alignContent:'center',
      justifyContent:'center',
    },
    imageContainer:{
      //backgroundColor:'blue',
      width:'50%',
    },
    contentsContainer:{
      //backgroundColor:'green',
      width:'50%',
    },
    imgStyle:{
      width:'80%',
      height:'80%',
      alignSelf:'center',
      paddingTop:10,
    },
    detailsText:{
      fontSize:14,
      color:'tomato',
      padding:10,
    },
    
    });    

export default ScanBarcode;