import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #292929;
  justify-content: center;
  align-items: center;
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#535353'
})`
  background-color: #ffffff;
  color: #000;
  width: 380px;
  border-radius: 10px;
  padding-left: 15px;
  font-size: 16px;
  margin-top: 50px;
`

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #ffce00;
  margin-top: 20px;
  border-radius: 10px;
  height: 60px;
  width: 380px;
  justify-content: center;
  align-items: center;
`

export const TextButton = styled.Text`
  font-size: 25px;
  font-family: 'Almarai Bold';
  margin-right: 10px;
`
