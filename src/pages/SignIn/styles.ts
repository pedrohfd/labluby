import styled from 'styled-components/native'
import { TextInputProps, TouchableOpacityProps } from 'react-native'

interface Props extends TextInputProps {}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #292929;
  justify-content: center;
  align-items: center;
`
export const Logo = styled.Image``

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#535353'
})`
  background-color: #ffffff;
  color: #000;
  width: 380px;
  border-radius: 8px;
  padding-left: 15px;
  font-size: 16px;
`

export const Button = styled.TouchableOpacity`
  background-color: #ffce00;
  margin-top: 20px;
  border-radius: 8px;
  height: 60px;
  width: 380px;
  justify-content: center;
  align-items: center;
`

export const TextButton = styled.Text``
