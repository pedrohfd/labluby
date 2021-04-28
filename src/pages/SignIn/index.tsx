import React from 'react'
import { Text, View } from 'react-native'

import { Container, Logo, Input, Button, TextButton } from './styles'

export function SignIn() {
  return (
    <Container>
      <Input placeholder="Usuário" />
      <Button>
        <TextButton>Entrar</TextButton>
      </Button>
    </Container>
  )
}
