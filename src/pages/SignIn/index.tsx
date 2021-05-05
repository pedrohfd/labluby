import React, { useContext, useState } from 'react'
import {
  Container,
  Input,
  TextRequireArea,
  TextRequire,
  Button,
  TextButton
} from './styles'

import AuthContext from '../../contexts/auth'

import Logo from '../../assets/icons/github.svg'
import Arrow from '../../assets/icons/arrow.svg'

export function SignIn() {
  const { signIn, setUsername } = useContext(AuthContext)
  const [isFilled, setIsFilled] = useState(false)
  const [alert, setAlert] = useState(false)

  async function handleSignIn() {
    signIn()
  }

  return (
    <Container>
      <Logo width={100} height={100} />

      <Input
        placeholder="Usuário"
        onChangeText={text => {
          setUsername(text), setIsFilled(!!text)
        }}
      />

      {alert ? <TextRequire>Campo Obrigatório</TextRequire> : null}

      <Button
        onPress={() => {
          if (!isFilled) {
            setAlert(true)
          } else {
            handleSignIn()
          }
        }}
      >
        <TextButton>ENTRAR</TextButton>

        <Arrow width={15} height={15} />
      </Button>
    </Container>
  )
}
