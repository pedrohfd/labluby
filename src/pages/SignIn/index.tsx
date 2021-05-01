import React, { useContext, useState } from 'react'
import { Container, Input, Button, TextButton } from './styles'

import AuthContext from '../../contexts/auth'

import Logo from '../../assets/icons/github.svg'
import Arrow from '../../assets/icons/arrow.svg'

export function SignIn() {
  const { signIn, username, setUsername } = useContext(AuthContext)

  async function handleSignIn() {
    signIn()
  }

  return (
    <Container>
      <Logo width={100} height={100} />
      <Input placeholder="Usuário" onChangeText={text => setUsername(text)} />
      <Button onPress={handleSignIn}>
        <TextButton>ENTRAR</TextButton>
        <Arrow width={15} height={15} />
      </Button>
    </Container>
  )
}
