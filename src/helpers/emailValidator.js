export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Email no valido."
  if (!re.test(email)) return 'Incorrecto! Necesitamos una dirección de correo electrónico válida.'
  return ''
}
