import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #292929;
`

export const Header = styled.View`
  background-color: #1f1f1f;
  height: 150px;
`
export const IconArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const BackButton = styled.TouchableOpacity`
  padding-left: 15px;
  padding-top: 20px;
`

export const SaveButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 20px;
  padding-top: 20px;
`

export const SaveText = styled.Text`
  font-size: 16px;
  font-family: 'Roboto';
  line-height: 18px;
  color: #ffffff;
  margin-right: 10px;
`

export const Avatar = styled.Image`
  align-self: center;
  height: 120px;
  width: 120px;
  border-radius: 60px;
  border-width: 2px;
  border-color: #ffffff;
  position: relative;
  top: 55px;
`

export const UserArea = styled.View`
  margin-top: 100px;
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
  font-size: 26px;
  font-family: 'Roboto Bold';
  color: #ffffff;
  text-transform: uppercase;
  padding-left: 15px;
`

export const UserData = styled.Text`
  padding-left: 25px;
  font-size: 16px;
  color: #ffffff;
`

export const UserButtonArea = styled.View`
  background-color: #383838;
  height: 100px;
  flex-direction: row;
  justify-content: center;
  padding-right: 10px;
  margin-top: 30px;
`

export const UserButtons = styled.TouchableOpacity`
  justify-content: center;
  padding: 30px;
`

export const UserButtonsItems = styled.Text`
  text-align: center;
  font-size: 40px;
  font-family: 'Roboto Bold';
  color: #ffffff;
`

export const UserButtonsName = styled.Text`
  text-align: center;
  font-size: 20px;
  font-family: 'Roboto';
  color: #ffffff;
`

export const BioTitleArea = styled.View`
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
`

export const TitleBio = styled.Text`
  font-size: 26px;
  font-family: 'Roboto Bold';
  color: #ffffff;
  padding-left: 15px;
`

export const Bio = styled.Text`
  padding-left: 25px;
  font-size: 16px;
  color: #ffffff;
`
