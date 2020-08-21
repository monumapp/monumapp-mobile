import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  padding: ${getStatusBarHeight()}px 20px 20px ${getStatusBarHeight()}px;
  flex: 1;
  align-items: center;
  background: #eaeaea;
`;

export const LogoImage = styled.Image`
  width: 150px;
  height: 150px;
  margin-top: 20px;
`;

export const ActionsContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const InputLabel = styled.Text`
  color: #ff8616;
  font-family: 'Montserrat-Regular';
  font-size: 20px;
  width: 300px;
`;

export const SearchInput = styled.TextInput`
  margin-top: 20px;
  height: 55px;
  width: 300px;
  border: 1px solid #828282;
  border-radius: 10px;
  padding: 0 10px;
`;

export const Label = styled.Text`
  margin: 20px 0;
  color: #5f5f5f;
  font-family: 'Montserrat-Regular';
  font-size: 20px;
`;

export const QRCodeButton = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 120px;
  padding: 20px;
  background: #ededed;
  border: 1px solid #828282;
  border-radius: 10px;
  elevation: 5;
`;

export const QRCodeButtonText = styled.Text`
  margin-left: 10px;
  font-family: 'Montserrat-SemiBold';
  font-size: 40px;
`;
