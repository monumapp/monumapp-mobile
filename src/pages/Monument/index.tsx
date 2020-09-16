import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import IconEntyPO from 'react-native-vector-icons/Entypo';
import api from '../../services/api';
import { Container, Carroussel, TitleContainer, CarrousselContainer, TitleText, LocationContainer, LocationText } from './styles';

interface RouteParams {
  monumentId: string;
}

interface OpenHours {
  days: string[];
  time: {
    from: number;
    to: number;
  };
}

interface Monument {
  id: string;
  imgs_urls: string[];
  name: string;
  neighborhood: string;
  information: {
    description: string;
    open_hours: OpenHours[];
    enter_price: number;
  };
  history: {
    fundation_date: string;
    origin: string;
    important_facts: string;
  };
}

const Monument: React.FC = () => {
  const route = useRoute();
  const { monumentId } = route.params as RouteParams;
  const [monument, setMonument] = useState<Monument>({} as Monument);
  const [showingImage, setShowingImage] = useState('');
  useEffect(() => {
    async function load() {
      const response = await api.get(`/monuments/${monumentId}`);
      const monumentLoaded = response.data as Monument;
      setMonument(monumentLoaded);
      setShowingImage(monumentLoaded.imgs_urls[0]);
    }

    load();
  }, [monumentId]);

  return (
    <Container>
      <CarrousselContainer>
        {monument.imgs_urls && (
          <Carroussel
            source={{ uri: showingImage }}
            imageStyle={{ borderBottomRightRadius: 35, borderBottomLeftRadius: 35 }}>
            <Icon name='arrow-left' size={25} color='#202020' />
          </Carroussel>
        )}
      </CarrousselContainer>
      <TitleContainer>
        <TitleText>{monument.name}</TitleText>
        <LocationContainer>
          <IconEntyPO name='location' size={15} color='#BCBCBC' /><LocationText>{monument.neighborhood}</LocationText>
        </LocationContainer>
      </TitleContainer>
    </Container >
  );
};

export default Monument;
