import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'

import { SignIn } from '../pages/SignIn'

const StackRoutes = createStackNavigator()

const AuthRoutes: React.FC = () => (
  <StackRoutes.Navigator headerMode="none">
    <StackRoutes.Screen name="SignIn" component={SignIn} />
  </StackRoutes.Navigator>
)

export default AuthRoutes
