import React from 'react'

import { Container, OrangeBorder, Name, Avatar } from './styles'

interface RepoProps {
  data: {
    id: number
    login: string
    avatar_url: string
  }
}

export function FollowCard({ data }: RepoProps) {
  return (
    <Container>
      <OrangeBorder />

      <Avatar source={{ uri: data.avatar_url }} />

      <Name>#{data.login}</Name>
    </Container>
  )
}
