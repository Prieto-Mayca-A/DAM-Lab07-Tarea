import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import Cocktail from '../components/cocktail'
import Cocktailelegancia from '../components/coctailelegancia'

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Header>Bienvenido</Header>
      <Cocktail />
      <Paragraph>
        Esta aplicacion trata sobre los cocteles mas recomendados,
        como elaborarlos ademas de sus ingredientes.
      </Paragraph>
      <Header>Nota</Header>
      <Cocktailelegancia />
      <Paragraph>
        Los cocteles mostrados en la aplicacion fueron listados por popularidad
      </Paragraph>
            <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Lista' }],
          })
        }
      >
        Continuar
      </Button>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Log out
      </Button>
    </Background>
  )
}
