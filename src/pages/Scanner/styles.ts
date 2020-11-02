import styled from 'styled-components/native';

export const TopContainer = styled.View`
  position: absolute;
  top: 50px;
  right: 20px;
`;

export const TopInstructions = styled.Text`
  position: absolute;
  top: 80px;
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
`;

export const BottomButtom = styled.TouchableOpacity`
  padding: 15px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #ffa616;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-direction: row;
`;

export const BottomInstructionsText = styled.Text`
  color: #ffffff;
  font-family: 'Montserrat-SemiBold';
  font-size: 15px;
  width: 90%;
`;
