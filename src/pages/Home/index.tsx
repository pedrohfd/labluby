import React, { useContext } from 'react'

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

import AuthContext from '../../contexts/auth'

export function Home() {
  const { user, signOut } = useContext(AuthContext)

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
        <UserButtons>
          <UserButtonsItems>{user?.followers}</UserButtonsItems>
          <UserButtonsName>Seguidores</UserButtonsName>
        </UserButtons>

        <UserButtons>
          <UserButtonsItems>{user?.following}</UserButtonsItems>
          <UserButtonsName>Seguindo</UserButtonsName>
        </UserButtons>

        <UserButtons>
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
