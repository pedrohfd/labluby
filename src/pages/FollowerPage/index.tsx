import React, { useContext, useEffect, useState } from 'react'
import {
  Container,
  Header,
  IconArea,
  BackButton,
  SaveButton,
  SaveText,
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
import AuthContext from '../../contexts/auth'
import api from '../../services/auth'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import SaveIcon from '../../assets/icons/login.svg'
import BackIcon from '../../assets/icons/backbutton.svg'

interface NewUser {
  login: string
  name: string
  email?: string
  location?: string
  company?: string
  bio?: string
  avatar_url: string
  followers_url: string
  following_url: string
  organizations_url: string
  starred_url: string
  public_repos: number
  repos_url: string | undefined
  public_gists: number
  followers: number
  following: number
}

export function FollowPage() {
  const { changeUsername, setUser } = useContext(AuthContext)
  const [newUser, setNewUser] = useState<NewUser | null>(null)
  const navigation = useNavigation()

  useEffect(() => {
    async function getUser() {
      const { data } = await api.get(`${changeUsername}`)
      setNewUser(data)
    }

    getUser()
  }, [changeUsername])

  async function handleSaveNewUser() {
    setUser(newUser)
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }]
    })
    await AsyncStorage.setItem('@labluby:user', JSON.stringify(newUser))
  }

  return (
    <Container>
      <Header>
        <IconArea>
          <BackButton onPress={() => navigation.goBack()}>
            <BackIcon height={15} width={15} />
          </BackButton>

          <SaveButton onPress={handleSaveNewUser}>
            <SaveText>Salvar</SaveText>
            <SaveIcon height={15} width={15} />
          </SaveButton>
        </IconArea>

        <Avatar source={{ uri: newUser?.avatar_url }} />
      </Header>

      <UserArea>
        <OrangeBorder />
        <Name>{newUser?.name}</Name>
      </UserArea>

      <UserData>
        {newUser?.email} {'\n'}
        {newUser?.location}
      </UserData>

      <UserButtonArea>
        <UserButtons>
          <UserButtonsItems>{newUser?.followers}</UserButtonsItems>
          <UserButtonsName>Seguidores</UserButtonsName>
        </UserButtons>

        <UserButtons>
          <UserButtonsItems>{newUser?.following}</UserButtonsItems>
          <UserButtonsName>Seguindo</UserButtonsName>
        </UserButtons>

        <UserButtons>
          <UserButtonsItems>{newUser?.public_repos}</UserButtonsItems>
          <UserButtonsName>Repos</UserButtonsName>
        </UserButtons>
      </UserButtonArea>

      <BioTitleArea>
        <OrangeBorder />
        <TitleBio>BIO</TitleBio>
      </BioTitleArea>

      <Bio>{newUser?.bio}</Bio>
    </Container>
  )
}
