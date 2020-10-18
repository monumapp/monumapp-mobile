import styled from 'styled-components/native';

export const TopInstructions = styled.Text`
  position: absolute;
  top: 50px;
  color: #ff8616;
  font-family: 'Montserrat-Regular';
  font-size: 15px;
  padding: 30px;
`;

export const Marker = styled.View`
  width: 200px;
  height: 200px;
  border: 2px solid #5eff00;
`;

export const BottomInstructionsContainer = styled.View`
  position: absolute;
  bottom: 50px;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

export const BottomInstructionsText = styled.Text`
  color: #ffffff;
  font-family: 'Montserrat-Regular';
  font-size: 15px;
  margin-right: 10px;
`;
