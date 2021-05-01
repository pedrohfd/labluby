import React, { useContext, useEffect, useState } from 'react'
import { FlatList, ActivityIndicator, View } from 'react-native'

import { Container, ActivityIndicatorArea } from './styles'
import AuthContext from '../../contexts/auth'

import { Header } from '../../components/Header'
import { FollowCard } from '../../components/FollowCard'

import api from '../../services/auth'
interface FollowersProps {
  id: number
  login: string
  avatar_url: string
}

export function Followers() {
  const { user } = useContext(AuthContext)
  const [followers, setFollowers] = useState<FollowersProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function Followers() {
      const { data } = await api.get(`${user?.login}/followers`)

      setFollowers(data)
      setLoading(false)
    }
    Followers()
  }, [])

  return (
    <Container>
      <Header title="Seguindo" quantity={String(user?.followers)} />

      {loading ? (
        <ActivityIndicatorArea>
          <ActivityIndicator size="large" color="#fff" />
        </ActivityIndicatorArea>
      ) : (
        <FlatList
          data={followers}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <FollowCard data={item} />}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<View />}
          ListHeaderComponentStyle={{ marginTop: 20 }}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{ marginBottom: 75 }}
        />
      )}
    </Container>
  )
}
