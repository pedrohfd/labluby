import styled from 'styled-components/native'

export const Container = styled.View`
  border-bottom-width: 0.6px;
  border-color: #404040;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 18px;
`

export const OrangeBorder = styled.View`
  height: 30px;
  border-width: 5px;
  border-color: #ffce00;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
`

export const RepoTitle = styled.Text`
  color: #ffffff;
  padding-left: 15px;
  font-family: 'Roboto Bold';
  font-size: 20px;
`

export const RepoDescription = styled.Text`
  color: #ffffff;
  padding-left: 25px;
  font-size: 18px;
  padding-top: 6px;
  padding-bottom: 10px;
  line-height: 30px;
`

export const IconArea = styled.View`
  flex-direction: row;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 20px;
  justify-content: space-between;
`

export const StarArea = styled.View`
  flex-direction: row;
  align-items: center;
`

export const PadlockArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 40px;
`

export const RepoStar = styled.Text`
  color: #ffffff;
  padding-left: 5px;
  font-size: 18px;
`
