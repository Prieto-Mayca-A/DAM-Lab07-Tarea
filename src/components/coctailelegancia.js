import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Cocktailelegancia() {
  return <Image source={require('../assets/elegancia.jpg')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
})