import React, { useContext } from 'react'
import {
  Container,
  ContentArea,
  OrangeBorder,
  Name,
  Avatar,
  ButtonArea,
  Button
} from './styles'
import { useNavigation } from '@react-navigation/native'
import AuthContext from '../../contexts/auth'

import ArrowButton from '../../assets/icons/arrow-button.svg'
interface FollowProps {
  data: {
    id: number
    login: string
    avatar_url: string
  }
}

export function FollowCard({ data }: FollowProps) {
  const navigation = useNavigation()
  const { setChangeUsername } = useContext(AuthContext)

  async function handleChangeUser() {
    setChangeUsername(data.login)
    navigation.navigate('FollowPage')
  }

  return (
    <Container>
      <ContentArea>
        <OrangeBorder />

        <Avatar source={{ uri: data.avatar_url }} />

        <Name>#{data.login}</Name>
      </ContentArea>

      <ButtonArea>
        <Button onPress={handleChangeUser}>
          <ArrowButton height={18} width={18} />
        </Button>
      </ButtonArea>
    </Container>
  )
}
