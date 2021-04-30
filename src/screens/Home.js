import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, FlatList, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    contenedor: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 3,
        marginBottom: 3,
        padding: 10,
        borderRadius:5,
        backgroundColor:'white',
        shadowColor:'black',
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 10
    },
    texto: {
        width:'60%',
        marginLeft:10,
    },
    imagen: {
        height:100,
        width: '100%',
        borderTopLeftRadius:  30,
        borderBottomRightRadius:  30
    },
    contenedorImagen: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contenedorButton: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

function Home({ navigation }) {
    const [lista, setLista] = useState([])

    useEffect(() => {
        fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
        )
        .then(res => res.json())
        .then(
            result => {
                setLista(result.drinks)
            },
        )}
    )

    function Item(props){
        return(
            <View style={styles.contenedor}>
                <View style={styles.contenedorImagen}>
                    <Image style={styles.imagen} source={{uri: props.image}}/>
                </View>
    
                <View style={styles.texto}>
                    <Text style={{ flex: 1, fontSize:25 }}>{props.titulo}</Text>
                    <Text numberOfLines={4} style={{ textAlign: 'left' }}>{props.resumen}</Text>
                </View>
                <View style={styles.contenedorButton}>
                    <Button color="#5320C0"
                        title=">"
                        onPress={ () => props.navigation.navigate('Detalles', {
                            titulo: props.titulo,
                            imagen: props.image,
                            texto: props.resumen,
                            text_ingr: props.ingredientes,
                            text_ingr2: props.ingredientes2,
                            text_ingr3: props.ingredientes3,
                        })}
                    />
                    
                </View>
            </View>
        )
    }    

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 30}}>
            <View style={{ width:'100%'}}>
            <Button color="#5320C0"
                    title="Inicio"
                    onPress={ () => navigation.navigate('Dashboard')}
                />
                </View>
            <FlatList
                data={lista.length > 0 ? lista : []} renderItem={({item})=>{
                    return(
                    <Item image={item.strDrinkThumb} titulo={item.strDrink} resumen={item.strInstructions} ingredientes={item.strIngredient1} ingredientes2={item.strIngredient2} ingredientes3={item.strIngredient3} navigation={navigation}/>)
                }}
                keyExtractor = {item => item.id}
            />
        </View>
    );
}

export default Home