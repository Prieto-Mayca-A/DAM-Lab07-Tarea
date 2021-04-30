import React from 'react'
import Background from '../components/Background'
import Coctel from '../components/coctel'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Coctel />
      <Header>Cooktail</Header>
      <Paragraph>
        Bienvenido a su aplicacion de recetas para cocteles
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Registrate
      </Button>
    </Background>
  )
}
