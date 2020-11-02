import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const CarrousselContainer = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height / 3}px;
  background: #ffffff;
  position: relative;
`;

export const CarrousselImage = styled.ImageBackground`
  padding: 40px 20px;
  height: 100%;
  width: 100%;
  display: flex;
`;

export const TitleContainer = styled.View`
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

export const InfoContainer = styled.View`
  flex: 1
`;
