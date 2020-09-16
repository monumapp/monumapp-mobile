import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const CarrousselContainer = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height / 3}px;
  background: #ffffff;
`;

export const Carroussel = styled.ImageBackground`
  padding: 40px 0 0 20px;
  height: 100%;
  width: 100%;
`;

export const TitleContainer = styled.View`
  height: 100px;
  background: #ffffff;
  padding: 15px 30px;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
`;

export const TitleText = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 20px;
`;

export const LocationContainer = styled.View`
  flex-direction: row;
  margin-top: 5px;
  align-items: center;
`;

export const LocationText = styled.Text`
  color: #BCBCBC;
  font-size: 15px;
  margin-left: 5px;
`;
