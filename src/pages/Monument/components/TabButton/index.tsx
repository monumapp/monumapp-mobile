import React, { useEffect, useState, useCallback } from 'react';

import { Container, TabBar, TabBarButton, TabBarButtonText, TabContent, ContentSection, ContentSectionTitle, ContentSectionText, OpenHoursDays, OpenHoursTime } from './styles';
import { View, Text } from 'react-native';

interface OpenHours {
  days: string[];
  time: {
    from: number;
    to: number;
  };
}

interface ButtonTabContent {
  title: string,
  info: string | OpenHours[]
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
      <TabContent>
        {data.map((button, index) => {
          return (
            index === isSelected &&
            button.buttonContent.map(section => {
              return (
                <ContentSection>
                  <ContentSectionTitle>{section.title}</ContentSectionTitle>
                  {typeof section.info === 'string'
                    ? <ContentSectionText>{section.info}</ContentSectionText>
                    : <View>
                      {section.info.map(openHour => {
                        return <View>
                          <OpenHoursDays>{openHour.days.join(', ')}</OpenHoursDays>
                          <OpenHoursTime>Das {openHour.time.from}h às {openHour.time.to}h</OpenHoursTime>
                        </View>
                      })}
                    </View>}
                </ContentSection>
              );
            })
          );
        })}
      </TabContent>
    </Container >
  );
};

export default TabButton;
