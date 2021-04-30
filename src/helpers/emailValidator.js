export function emailValidator(numero1) {
  const re = /\S+@\S+\.\S+/
  if (!numero1) return "Email no valido."
  if (!re.test(numero1)) return 'Incorrecto! Necesitamos una dirección de correo electrónico válida.'
  return ''
}
