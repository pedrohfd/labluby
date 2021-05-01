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

  useEffect(() => {
    async function Repos() {
      const { data } = await api.get(`${user?.login}/repos?&per_page=100`)

      setRepos(data)
      setLoading(false)
    }
    Repos()
  }, [])

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
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{ marginBottom: 75 }}
        />
      )}
    </Container>
  )
}
