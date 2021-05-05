import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import AuthContext from '../../contexts/auth'
import {
  Container,
  Header,
  Logout,
  LogoutText,
  Avatar,
  UserArea,
  Name,
  OrangeBorder,
  UserButtonArea,
  UserData,
  UserButtons,
  UserButtonsItems,
  UserButtonsName,
  BioTitleArea,
  TitleBio,
  Bio
} from './styles'

import LogoutIcon from '../../assets/icons/logout.svg'

export function Home() {
  const { user, signOut } = useContext(AuthContext)
  const navigation = useNavigation()

  async function handleSignOut() {
    signOut()
  }

  return (
    <Container>
      <Header>
        <Logout onPress={handleSignOut}>
          <LogoutText>Sair</LogoutText>
          <LogoutIcon height={15} width={15} />
        </Logout>

        <Avatar source={{ uri: user?.avatar_url }} />
      </Header>

      <UserArea>
        <OrangeBorder />
        <Name>{user?.name}</Name>
      </UserArea>

      <UserData>
        {user?.email} {'\n'}
        {user?.location}
      </UserData>

      <UserButtonArea>
        <UserButtons onPress={() => navigation.navigate('Seguidores')}>
          <UserButtonsItems>{user?.followers}</UserButtonsItems>
          <UserButtonsName>Seguidores</UserButtonsName>
        </UserButtons>

        <UserButtons onPress={() => navigation.navigate('Seguindo')}>
          <UserButtonsItems>{user?.following}</UserButtonsItems>
          <UserButtonsName>Seguindo</UserButtonsName>
        </UserButtons>

        <UserButtons onPress={() => navigation.navigate('Repos')}>
          <UserButtonsItems>{user?.public_repos}</UserButtonsItems>
          <UserButtonsName>Repos</UserButtonsName>
        </UserButtons>
      </UserButtonArea>

      <BioTitleArea>
        <OrangeBorder />
        <TitleBio>BIO</TitleBio>
      </BioTitleArea>

      <Bio>{user?.bio}</Bio>
    </Container>
  )
}
