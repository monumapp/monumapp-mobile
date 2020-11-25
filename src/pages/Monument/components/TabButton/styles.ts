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
  padding: 5px;
  border-bottom-color: ${({ isSelected }) => isSelected ? '#FF8616' : 'transparent'};
  border-bottom-width: 2px;
`;

export const TabBarButtonText = styled.Text<TabBarButtonProps>`
  color: ${({ isSelected }) => isSelected ? '#FF8616' : '#5F5F5F'};
  font-family: 'Montserrat-Bold';
`;

export const TabContent = styled.View`
  flex: 1;
  margin-bottom: 40px;
`;

export const ContentSection = styled.View`
  margin-top: 20px;
`;

export const ContentSectionTitle = styled.Text`
  margin-bottom: 10px;
  font-family: 'Montserrat-Bold';
  color: #FF8616;
`;

export const ContentSectionText = styled.Text`
  font-family: 'Montserrat';
  color: #5F5F5F;
  text-align: justify;
`;

export const OpenHoursDays = styled.Text`
  font-family: 'Montserrat-SemiBold';
  color: #5F5F5F;
  text-align: justify;
`;

export const OpenHoursTime = styled.Text`
  font-family: 'Montserrat';
  color: #5F5F5F;
  text-align: justify;
  margin-bottom: 5px;
`;
