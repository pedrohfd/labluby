import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 100px;
  border-bottom-width: 0.6px;
  border-color: #404040;
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

export const RepoStar = styled.Text`
  color: #ffffff;
`
