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
  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false)

  useEffect(() => {
    Followers()
  }, [])

  async function Followers() {
    const { data } = await api.get(
      `${user?.login}/followers?page=${page}&per_page=10`
    )

    if (page > 1) {
      setFollowers(oldValue => [...oldValue, ...data])
    } else {
      setFollowers(data)
    }

    setLoading(false)
    setLoadingMore(false)
  }

  function handleFetchMore(distance: number) {
    if (distance < 1) return

    setLoadingMore(true)
    setPage(page + 1)
    Followers()
  }

  return (
    <Container>
      <Header title="Seguidores" quantity={String(user?.followers)} />

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
          ListHeaderComponentStyle={{ marginTop: 10 }}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color="#ffffff" /> : <View />
          }
          ListFooterComponentStyle={{ marginBottom: 75 }}
        />
      )}
    </Container>
  )
}
