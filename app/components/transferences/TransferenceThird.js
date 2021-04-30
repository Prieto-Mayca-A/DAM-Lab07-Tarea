import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

export default function TransferenceThird(props){
    const {params} = props.route;
    return(
        <View style={styles.container}>
            <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Circle-icons-check.svg/1200px-Circle-icons-check.svg.png'}} style={{height: 200, width: 200, marginBottom: 20}}/>
            <TouchableOpacity style={styles.button} onPress={()=>params.navigator.navigate('First')}>
                <Text style={{color:'white'}}>ACEPTAR</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor:'purple',
        fontSize:20,
        width:130,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
    },
}