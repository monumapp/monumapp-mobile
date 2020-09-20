import styled from 'styled-components/native';

interface TabBarButtonProps {
  isSelected: boolean;
}

export const Container = styled.ScrollView`
  flex: 1;
  padding: 10px 25px 0 25px;
`;

export const TabBar = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const TabBarButton = styled.TouchableOpacity<TabBarButtonProps>`
  align-items: center;
  justify-content: center;
  padding:10px;
  border-bottom-color: ${({ isSelected }) => isSelected ? '#FF8616' : 'transparent'};
  border-bottom-width: 1px;
`;

export const TabBarButtonText = styled.Text<TabBarButtonProps>`
  color: ${({ isSelected }) => isSelected ? '#FF8616' : '#5F5F5F'};
`;
