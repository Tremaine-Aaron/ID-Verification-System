import React,{Component} from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity,ImageBackground,TouchableWithoutFeedback,Keyboard,ScrollView, Dimensions} from 'react-native';
import CustBtn from '../components/CustBtn';

export default class Login extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            loginName:'',
            password:'',
            access:'',
        }
    }

    SignUp = () => {
        var loginName = this.state.loginName;
        var password = this.state.password;

        if(loginName.length == 0 || password.length == 0 )
        {
            alert("Required field is missing");
        }
        else
        {
            var loginAPIURL = "http://192.168.214.188:80/projects/smartcardAPI/login.php"; 
            var headers = {
                'Accept':'application/json',
                'Content-Type':'application/json'
              };
            var Data = {
                loginName:loginName,
                password:password
            };
            fetch(loginAPIURL,
                {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(Data)     //Converts javascript object into JSON object
              })
              .then((response)=>response.json())  //Check if response is in json
                .then((response)=>
                {
                  alert("message: " + response[0].Message);
                  this.setState({access:response[0].Access});
                  if(this.state.access==true)
                  {
                    this.props.navigation.navigate('Home');
                  }
                }
                )
                .catch((error)=>{
                  alert("Error: " + error);
                })

        }
    }

    render(){
        return(

            <ScrollView style={{flex:1,width:'100%'}}>
            <ImageBackground 
            style={styles.screen}
            source={require('../resources/background.jpg')}
            >
            
            <TouchableWithoutFeedback
            onPress={()=>{Keyboard.dismiss()}}
            >
            
            <View style={styles.container}>
            
            <View style={styles.titleContainer}>
            <Text style={styles.titleTxt}>Smart Card</Text>
            </View>

            <View style={styles.txtInputContainer}>
            <TextInput
            placeholder={'Staff No:'}
            placeholderTextColor={'tomato'}
            onChangeText={loginName=>this.setState({loginName})}
            style={styles.txtStyle}
            keyboardType={'numeric'}
            
            />
            <TextInput
            placeholder={'password'}
            placeholderTextColor={'tomato'}
            onChangeText={password=>this.setState({password})}
            style={styles.txtStyle}
            secureTextEntry={true}
            />
            </View>

            <TouchableOpacity onPress={this.SignUp}>
            <CustBtn title={'LOGIN'}/>
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop:30}} onPress={()=>{this.props.navigation.navigate('Home')}}>
            <CustBtn title={'ADMIN LOGIN'}/>
            </TouchableOpacity>

            
            </View>
            
            </TouchableWithoutFeedback>
            </ImageBackground>
            </ScrollView>
        )
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
        backgroundColor: 'rgba(255,255,255,0.8)',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    txtStyle:{
        borderBottomWidth:1,
        width:'100%',
        height:'20%',
        borderBottomColor:'tomato',
        marginBottom:20,
        color:'black',
        marginBottom:10,
      },
    titleContainer:{
        //backgroundColor:'red',
        padding:10,
        marginTop:10,
        alignSelf:'flex-start',
        height:'30%',
        width:'100%',
        position:'absolute',
        top:'5%',

    },
    txtInputContainer:{
        padding:10,
        marginTop:10,
        width:'90%',
        alignContent:'center',
        justifyContent:'center',
        //backgroundColor:'blue',
    },
    titleTxt:{
        color:'tomato',
        fontSize:60,
        fontWeight:'bold',
        textAlign:'center',
    },
});