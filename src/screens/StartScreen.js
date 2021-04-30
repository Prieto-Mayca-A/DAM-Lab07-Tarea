import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'

export default function FirstScreen({ navigation }) {
  const [numero1, setNumero] = useState({ value: '', error: '' })
  const [numcuenta, setNumeroCuenta] = useState({ value: '', error: '' })
  const [refe, setReferencia] = useState({ value: '', error: '' })
  const [impor, setNumeroImporte] = useState({ value: '', error: '' })

  const botonsiguiente = () => {
    const NumeroError = emailValidator(numero1.value)
    const NumeroCuentaError = passwordValidator(numcuenta.value)
    const ReferenciaError = passwordValidator(refe.value)
    const NumeroImporteError = passwordValidator(impor.value)

    if (NumeroError || NumeroCuentaError || ReferenciaError || NumeroImporteError) {
      setNumero({ ...numero1, error: NumeroError })
      setNumeroCuenta({ ...numcuenta, error: NumeroCuentaError })
      setNumeroImporte({ ...refe, error: ReferenciaError })
      setReferencia({ ...impor, error: NumeroImporteError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

/*
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }
*/
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>First Screen</Header>
      <Text>Cuenta origen</Text>
      <TextInput
        label="Numero de cuenta"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <Text>Cuenta destino</Text>
      <TextInput
        label="Numero de cuenta"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Text>Importe</Text>
      <TextInput
        label="numero de importe"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <Text>Referencia</Text>
      <TextInput
        label="Ingrese una referencia"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity>
          <Text>Click aqui para recibir notificaciones!</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={botonsiguiente}>
        Siguiente
      </Button>
      <View style={styles.row}>
        <Text>11/05/2020 </Text>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
