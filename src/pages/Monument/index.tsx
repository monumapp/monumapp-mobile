import React, { useEffect, useState, useCallback } from 'react';
import { Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import IconEntyPO from 'react-native-vector-icons/Entypo';
import api from '../../services/api';
import { Container, Carroussel, TitleContainer, CarrousselContainer, TitleText, LocationContainer, LocationText, InfoContainer } from './styles';
import TabButton from './components/TabButton';

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
  const { navigate } = useNavigation();
  const [monument, setMonument] = useState<Monument>({} as Monument);
  const [showingImage, setShowingImage] = useState('');

  useEffect(() => {
    async function load() {
      const response = await api.get(`/monuments/${monumentId}`);
      const monumentLoaded = response.data as Monument;
      console.log(monumentLoaded.information);
      setMonument(monumentLoaded);
      setShowingImage(monumentLoaded.imgs_urls[0]);
    }

    load();
  }, [monumentId]);

  const backToSearchHandle = useCallback(() => {
    navigate('Search');
  }, []);

  return (
    <Container>
      <CarrousselContainer>
        {monument.imgs_urls && (
          <Carroussel
            source={{ uri: showingImage }}
            imageStyle={{ borderBottomRightRadius: 35, borderBottomLeftRadius: 35 }}>
            <Icon name='arrow-left' size={25} color='#202020' onPress={backToSearchHandle} />
          </Carroussel>
        )}
      </CarrousselContainer>
      <TitleContainer>
        <TitleText>{monument.name}</TitleText>
        <LocationContainer>
          <IconEntyPO name='location' size={15} color='#BCBCBC' /><LocationText>{monument.neighborhood}</LocationText>
        </LocationContainer>
      </TitleContainer>
      {monument &&
        <TabButton data={[
          {
            buttonName: 'Informações',
            buttonContent: [
              { title: 'Descrição', text: 'monument.information.description' },
              { title: 'Horário de Funcionamento', text: 'monument.information.open_hours.toString()' },
              { title: 'Preço de entrada', text: 'monument.information.enter_price.toFixed(2)' }
            ]
          },
          {
            buttonName: 'História',
            buttonContent: [
              { title: 'Data de Fundação', text: 'monument.information.description' },
              { title: 'Origem', text: 'monument.information.open_hours.toString()' },
              { title: 'Fatos Históricos', text: 'monument.information.enter_price.toFixed(2)' }
            ]
          }
        ]} />
      }
    </Container >
  );
};

export default Monument;
