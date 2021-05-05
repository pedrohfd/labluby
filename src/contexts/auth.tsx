import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, ActivityIndicator } from 'react-native'
import api from '../services/auth'

interface User {
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

interface AuthContextData {
  signed: boolean
  user: User | null
  setUser: (state: User | null) => void
  username: string | null
  setUsername: (state: string) => void
  changeUsername: string | null
  setChangeUsername: (state: string) => void
  signIn(): Promise<void>
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const [changeUsername, setChangeUsername] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('@labluby:user')

      if (storageUser) {
        setUser(JSON.parse(storageUser))
      }
      setLoading(false)
    }
    loadStorage()
  }, [])

  async function signIn() {
    if (username !== null) {
      const { data } = await api.get(`${username}`)
      setUser(data)
      await AsyncStorage.setItem('@labluby:user', JSON.stringify(data))
    }
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUsername(null)
      setUser(null)
    })
  }

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#292929'
        }}
      >
        <ActivityIndicator size="large" color="#fff" />
      </View>
    )
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        setUser,
        signIn,
        signOut,
        username,
        setUsername,
        changeUsername,
        setChangeUsername
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
