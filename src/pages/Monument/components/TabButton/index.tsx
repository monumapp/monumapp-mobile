import React, { useEffect, useState, useCallback } from 'react';

import { Container, TabBar, TabBarButton, TabBarButtonText } from './styles';
import { Button } from 'react-native';

interface ButtonTabContent {
  title: string,
  text: string
}

interface ButtonData {
  buttonName: string,
  buttonContent: ButtonTabContent[]
}

interface TabButtonProps {
  data: ButtonData[],
}


const TabButton: React.FC<TabButtonProps> = ({ data }) => {
  const [isSelected, setIsSelected] = useState(0);


  return (
    <Container>
      <TabBar>
        {data.map((button, index) => {
          return (
            <TabBarButton isSelected={index === isSelected} key={button.buttonName} onPress={() => setIsSelected(index)}>
              <TabBarButtonText isSelected={index === isSelected}>{button.buttonName}</TabBarButtonText>
            </TabBarButton>
          )
        })}
      </TabBar>
    </Container >
  );
};

export default TabButton;
