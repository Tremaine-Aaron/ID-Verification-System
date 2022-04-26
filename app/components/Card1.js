import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';

export default function Card(){
        return(
        <View style={styles.container}>
            <Image
                source={require('../resources/barcode.png')}
                style={styles.imageStyle}
            />
            <Text style={styles.txtStyle}>
                Create Barcode
            </Text>
        </View>
        );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(255,99,71,0.5)',
        height:400,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
    },
    imageStyle:{
        width:100,
        height:100,
    },
    txtStyle:{
        color:'white',
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
    }

});