import React, { useContext, useEffect, useState } from 'react'
import { FlatList, ActivityIndicator, View } from 'react-native'
import AuthContext from '../../contexts/auth'

import { Container, ActivityIndicatorArea } from './styles'

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
  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false)

  useEffect(() => {
    Following()
  }, [])

  async function Following() {
    const { data } = await api.get(
      `${user?.login}/following?page=${page}&per_page=10`
    )

    if (page > 1) {
      setFollowing(oldValue => [...oldValue, ...data])
    } else {
      setFollowing(data)
    }

    setLoadingMore(false)
    setLoading(false)
  }

  function handleFetchMore(distance: number) {
    if (distance < 1) return

    setLoadingMore(true)
    setPage(page + 1)
    Following()
  }

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
