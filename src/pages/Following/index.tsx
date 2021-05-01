import React, { useContext, useEffect, useState } from 'react'
import { FlatList, ActivityIndicator, View } from 'react-native'

import { Container, ActivityIndicatorArea } from './styles'
import AuthContext from '../../contexts/auth'

import { Header } from '../../components/Header'
import { FollowCard } from '../../components/FollowCard'

import api from '../../services/auth'
interface FollowingProps {
  id: number
  login: string
  avatar_url: string
}

export function Following() {
  const { user } = useContext(AuthContext)
  const [following, setFollowing] = useState<FollowingProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function Following() {
      const { data } = await api.get(`${user?.login}/following`)

      setFollowing(data)
      setLoading(false)
    }
    Following()
  }, [])

  return (
    <Container>
      <Header title="Seguindo" quantity={String(user?.following)} />

      {loading ? (
        <ActivityIndicatorArea>
          <ActivityIndicator size="large" color="#fff" />
        </ActivityIndicatorArea>
      ) : (
        <FlatList
          data={following}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <FollowCard data={item} />}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{ marginBottom: 75 }}
        />
      )}
    </Container>
  )
}
