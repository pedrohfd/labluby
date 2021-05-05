import React, { useContext, useEffect, useState } from 'react'
import { FlatList, ActivityIndicator, View } from 'react-native'

import { Container, ActivityIndicatorArea } from './styles'
import AuthContext from '../../contexts/auth'

import { Header } from '../../components/Header'
import { RepoCard } from '../../components/RepoCard'

import api from '../../services/auth'
interface RepoProps {
  id: number
  name: string
  description: string
  stargazers_count: number
}

export function Repositories() {
  const { user } = useContext(AuthContext)
  const [repos, setRepos] = useState<RepoProps[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false)

  useEffect(() => {
    Repos()
  }, [])

  async function Repos() {
    const { data } = await api.get(
      `${user?.login}/repos?page=${page}&per_page=10`
    )

    if (page > 1) {
      setRepos(oldValue => [...oldValue, ...data])
    } else {
      setRepos(data)
    }

    setLoading(false)
    setLoadingMore(false)
  }

  function handleFetchMore(distance: number) {
    if (distance < 1) return

    setLoadingMore(true)
    setPage(page + 1)
    Repos()
  }

  return (
    <Container>
      <Header title="Repositórios" quantity={String(user?.public_repos)} />

      {loading ? (
        <ActivityIndicatorArea>
          <ActivityIndicator size="large" color="#fff" />
        </ActivityIndicatorArea>
      ) : (
        <FlatList
          data={repos}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <RepoCard data={item} />}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<View />}
          ListHeaderComponentStyle={{ marginTop: 20 }}
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
