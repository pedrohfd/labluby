import React from 'react'
import { Container, HeaderTitle, BackButton } from './styles'
import { useNavigation } from '@react-navigation/native'

import Arrow from '../../assets/icons/backbutton.svg'

interface HeaderProps {
  quantity: string
  title: string
}

export function Header({ title, quantity }: HeaderProps) {
  const navigation = useNavigation()

  return (
    <Container>
      <BackButton onPress={() => navigation.navigate('Home')}>
        <Arrow height={20} width={20} />
      </BackButton>

      <HeaderTitle>
        {quantity} {title}
      </HeaderTitle>
    </Container>
  )
}
