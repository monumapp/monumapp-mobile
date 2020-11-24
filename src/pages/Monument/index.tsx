import React, { useEffect, useState, useCallback } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import IconEntyPO from 'react-native-vector-icons/Entypo';
import api from '../../services/api';
import { Container, TitleContainer, CarrousselContainer, TitleText, LocationContainer, LocationText, CarrousselImage } from './styles';
import TabButton from './components/TabButton';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import { formatPrice } from '../../utils/formatPrice';

interface RouteParams {
  monumentId?: string;
  monument?: Monument;
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

interface CarouselRenderItemProps {
  index: number,
  item: string
}

const { width: screenWidth } = Dimensions.get('window')

const Monument: React.FC = () => {
  const route = useRoute();
  const { monumentId, monument: paramMonument } = route.params as RouteParams;
  const { navigate } = useNavigation();
  const [monument, setMonument] = useState<Monument>({} as Monument);
  const [showingImageIndex, setShowingImageIndex] = useState(0);

  useEffect(() => {
    async function load() {
      try {
        if (paramMonument) {
          setMonument(paramMonument);
        } else {
          const response = await api.get(`/monuments/${monumentId}`);
          const monumentLoaded = response.data as Monument;
          setMonument(monumentLoaded);
        }
      } catch{
        navigate('NotFound');
      }
    }

    load();
  }, [monumentId]);

  const backToScannerHandle = useCallback(() => {
    navigate('Scanner', {
      isCommingBack: true
    });
  }, []);

  return (
    <Container>
      <Icon style={{
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 1
      }}
        name='arrow-left'
        size={25}
        color='#202020'
        onPress={backToScannerHandle} />
      <CarrousselContainer>
        {monument.imagesUrls &&
          <>
            <Carousel
              data={monument.imagesUrls}
              layout={'default'}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              onSnapToItem={(index) => setShowingImageIndex(index)}
              renderItem={({ index, item }: CarouselRenderItemProps) => (
                <CarrousselImage
                  source={{ uri: item }}
                  imageStyle={{ borderBottomRightRadius: 35, borderBottomLeftRadius: 35 }} />
              )} />

            <Pagination
              dotsLength={monument.imagesUrls.length}
              activeDotIndex={showingImageIndex}
              containerStyle={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
              }}
              dotStyle={{
                borderRadius: 5,
                backgroundColor: '#FF8616'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.8}
            />
          </>
        }
      </CarrousselContainer>
      <TitleContainer>
        <TitleText>{monument.name}</TitleText>
        <LocationContainer>
          <IconEntyPO name='location' size={15} color='#BCBCBC' /><LocationText>{monument.neighborhood}</LocationText>
        </LocationContainer>
      </TitleContainer>
      {
        monument.information && monument.history &&
        <TabButton data={[
          {
            buttonName: 'Informações',
            buttonContent: [
              { title: 'Descrição', info: monument.information.description },
              { title: 'Horário de Funcionamento', info: monument.information.openHours },
              { title: 'Preço de entrada', info: formatPrice(monument.information.enterPrice) }
            ]
          },
          {
            buttonName: 'História',
            buttonContent: [
              { title: 'Data de Fundação', info: monument.history.foundationDate },
              // { title: 'Origem', info: monument.history.origin },
              { title: 'Fatos Históricos', info: monument.history.importantFacts }
            ]
          }
        ]} />
      }
    </Container >
  );
};

export default Monument;
