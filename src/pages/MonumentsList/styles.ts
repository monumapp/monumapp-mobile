import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: ${getStatusBarHeight()}px 20px 20px ${getStatusBarHeight()}px;
  flex: 1;
  background: #eaeaea;
  align-items: center;
`;

export const Header = styled.View`
  padding: 15px 0 0 0;
  background: transparent;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
`;

export const InputLabel = styled.Text`
  margin: 30px 0;
  color: #ff8616;
  font-family: 'Montserrat-Regular';
  font-size: 20px;
  width: 300px;
`;

export const SearchInput = styled.TextInput`
  height: 55px;
  width: 300px;
  padding: 0 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-width: 1px;
  border-color: #828282;
`;

export const ListContainer = styled(FlatList)`
  margin-top: 20px;
  width: 100%;
`;

export const ListItem = styled.TouchableOpacity`
  min-height: 60px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 2px;
  background-color: #f0f0f0;
  flex-direction: row;
  padding: 10px;
`;

export const ListText = styled.Text`
  width: 80%;
  color: #5f5f5f;
  font-family: 'Montserrat-SemiBold';
  font-size: 15px;
`;
