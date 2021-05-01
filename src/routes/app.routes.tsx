import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'

import Dashboard from '../assets/icons/home.svg'
import DashboardGray from '../assets/icons/home_gray.svg'
import Github from '../assets/icons/github_tab.svg'
import GithubGray from '../assets/icons/github_tab_gray.svg'
import User from '../assets/icons/users.svg'
import UserGray from '../assets/icons/users_gray.svg'

import { Home } from '../pages/Home'
import { Repositories } from '../pages/Repositories'
import { Following } from '../pages/Following'
import { Followers } from '../pages/Followers'

const bottomRoutes = createBottomTabNavigator()
const stack = createBottomTabNavigator()

const size = 28

const AppRoutes: React.FC = () => (
  <bottomRoutes.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let icon

        if (route.name === 'Home') {
          icon = focused ? (
            <Dashboard height={size} width={size} />
          ) : (
            <DashboardGray height={size} width={size} />
          )
        } else if (route.name === 'Repos') {
          icon = focused ? (
            <Github height={size} width={size} />
          ) : (
            <GithubGray height={size} width={size} />
          )
        } else if (route.name === 'Seguidores') {
          icon = focused ? (
            <User height={size} width={size} />
          ) : (
            <UserGray height={size} width={size} />
          )
        } else if (route.name === 'Seguindo') {
          icon = focused ? (
            <User height={size} width={size} />
          ) : (
            <UserGray height={size} width={size} />
          )
        }

        return icon
      }
    })}
    tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: '#A5A5A5',
      labelStyle: {
        fontSize: 19,
        fontFamily: 'Roboto'
      },
      style: {
        height: 75,
        paddingVertical: 15,
        paddingBottom: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute'
      },
      iconStyle: {
        paddingBottom: 5
      }
    }}
  >
    <bottomRoutes.Screen name="Home" component={Home} />
    <bottomRoutes.Screen name="Repos" component={Repositories} />
    <bottomRoutes.Screen name="Seguidores" component={Following} />
    <bottomRoutes.Screen name="Seguindo" component={Followers} />
  </bottomRoutes.Navigator>
)

export default AppRoutes
