import React from 'react'

import { Container, HeaderTitle, BackButton } from './styles'

import Arrow from '../../assets/icons/backbutton.svg'

interface HeaderProps {
  quantity: string
  title: string
}

export function Header({ title, quantity }: HeaderProps) {
  return (
    <Container>
      <BackButton>
        <Arrow height={20} width={20} />
      </BackButton>

      <HeaderTitle>
        {quantity} {title}
      </HeaderTitle>
    </Container>
  )
}
