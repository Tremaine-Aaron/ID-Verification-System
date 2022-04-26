import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';

export default function Card(){
        return(
        <View style={styles.container}>
        
            <Image
                source={require('../resources/barcode-scanner.png')}
                style={styles.imageStyle}
            />
            <Text style={styles.txtStyle}>
                Scan Barcode
            </Text>
            
        </View>
        );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(255,99,71,0.5)',
        height:200,
        width:'82%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
    },
    imageStyle:{
        width:150,
        height:150,
    },
    txtStyle:{
        color:'white',
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
    }

});