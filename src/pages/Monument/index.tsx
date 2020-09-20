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
  open: string;
  close: string;
}

interface Monument {
  id: string;
  imagesUrls: string[];
  name: string;
  neighborhood: string;
  information: {
    description: string;
    openHours: OpenHours[];
    enterPrice: number;
  };
  history: {
    foundationDate: string;
    origin: string;
    importantFacts: string;
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
      setMonument(monumentLoaded);
      setShowingImage(monumentLoaded.imagesUrls[0]);
    }

    load();
  }, [monumentId]);

  const backToSearchHandle = useCallback(() => {
    navigate('Search');
  }, []);

  return (
    <Container>
      <CarrousselContainer>
        {monument.imagesUrls && (
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
      {monument.information && monument.history &&
        <TabButton data={[
          {
            buttonName: 'Informações',
            buttonContent: [
              { title: 'Descrição', info: monument.information.description },
              { title: 'Horário de Funcionamento', info: monument.information.openHours },
              { title: 'Preço de entrada', info: monument.information.enterPrice.toFixed(2) }
            ]
          },
          {
            buttonName: 'História',
            buttonContent: [
              { title: 'Data de Fundação', info: monument.history.foundationDate },
              { title: 'Origem', info: monument.history.origin },
              { title: 'Fatos Históricos', info: monument.history.importantFacts }
            ]
          }
        ]} />
      }
    </Container >
  );
};

export default Monument;
