import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 0.6px;
  border-color: #404040;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const ContentArea = styled.View`
  flex-direction: row;
  align-items: center;
`

export const OrangeBorder = styled.View`
  height: 40px;
  border-width: 5px;
  border-color: #ffce00;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
`

export const Name = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-family: 'Roboto Bold';
`

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  border-width: 2px;
  border-color: #fff;
  margin-left: 15px;
  margin-right: 20px;
`

export const ButtonArea = styled.View`
  justify-content: center;
  padding-right: 20px;
`

export const Button = styled.TouchableOpacity`
  align-items: flex-end;
`
