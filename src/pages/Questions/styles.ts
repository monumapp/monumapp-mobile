import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  padding: ${getStatusBarHeight() + 30}px 20px 20px ${getStatusBarHeight()}px;
  flex: 1;
  background: #eaeaea;
`;

export const QuestionsHeader = styled.View`
  height: 80px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const QuestionsHeaderText = styled.Text`
  color: #ff8616;
  font-family: 'Montserrat-Bold';
  font-size: 20px;
`;

export const QuestionContainer = styled.View`
  margin: 10px 0;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #d4d4d4;
`;

export const QuestionText = styled.Text`
  width: 100%;
  color: #ff8616;
  font-family: 'Montserrat-Bold';
  font-size: 15px;
`;

export const AnswerText = styled.Text`
  width: 100%;
  color: #5f5f5f;
  font-family: 'Montserrat-Regular';
  text-align: justify;
  font-size: 15px;
`;
