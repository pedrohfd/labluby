import React from 'react'

import {
  Container,
  Header,
  OrangeBorder,
  RepoTitle,
  RepoDescription,
  IconArea,
  StarArea,
  PadlockArea,
  RepoStar
} from './styles'

import Star from '../../assets/icons/star.svg'
import PadlockOpen from '../../assets/icons/padlock_open.svg'
import PadlockClose from '../../assets/icons/padlock_close.svg'

interface RepoProps {
  data: {
    id: number
    name: string
    description: string
    stargazers_count: number
  }
}

export function RepoCard({ data }: RepoProps) {
  return (
    <Container>
      <Header>
        <OrangeBorder />
        <RepoTitle>{data.name}</RepoTitle>
      </Header>

      <RepoDescription>{data.description}</RepoDescription>

      <IconArea>
        <StarArea>
          <Star height={15} width={15} />
          <RepoStar>{data.stargazers_count}</RepoStar>
        </StarArea>

        <PadlockArea>
          <PadlockOpen height={15} width={15} />
          <PadlockClose height={15} width={15} />
        </PadlockArea>
      </IconArea>
    </Container>
  )
}
