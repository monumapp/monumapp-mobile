import React, { useEffect, useState, useCallback } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import IconEntyPO from 'react-native-vector-icons/Entypo';
import api from '../../services/api';
import { Container, Carroussel, TitleContainer, CarrousselContainer, TitleText, LocationContainer, LocationText, ChangeContent, ChangeRightContent, DotIconsImage } from './styles';
import TabButton from './components/TabButton';
import Swipeable from 'react-native-gesture-handler/Swipeable';

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

const Monument: React.FC = () => {
  const route = useRoute();
  const { monumentId, monument: paramMonument } = route.params as RouteParams;
  const { navigate } = useNavigation();
  const [monument, setMonument] = useState<Monument>({} as Monument);
  const [showingImage, setShowingImage] = useState('');
  const [showingImageIndex, setShowingImageIndex] = useState(0);

  useEffect(() => {
    async function load() {
      try {
        if (paramMonument) {
          setMonument(paramMonument);
          setShowingImage(paramMonument.imagesUrls[0]);
        } else {
          const response = await api.get(`/monuments/${monumentId}`);
          const monumentLoaded = response.data as Monument;
          setMonument(monumentLoaded);
          setShowingImage(monumentLoaded.imagesUrls[showingImageIndex]);
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

  const handleCarrousselRight = useCallback(() => {
    if (showingImageIndex < monument.imagesUrls.length) {
      setShowingImageIndex(showingImageIndex + 1);
      setShowingImage(monument.imagesUrls[showingImageIndex + 1]);
    }
  }, [showingImageIndex, monument.imagesUrls]);

  const handleCarrousselLeft = useCallback(() => {
    if (showingImageIndex > 0) {
      setShowingImageIndex(showingImageIndex - 1);
      setShowingImage(monument.imagesUrls[showingImageIndex - 1]);
    }
  }, [showingImageIndex, monument.imagesUrls]);

  return (
    <Container>
      <CarrousselContainer>
        {showingImage !== '' && (
          <Carroussel
            source={{ uri: showingImage }}
            imageStyle={{ borderBottomRightRadius: 35, borderBottomLeftRadius: 35 }}>
            <Icon name='arrow-left' size={25} color='#202020' onPress={backToScannerHandle} />
            <Swipeable
              renderRightActions={() => showingImageIndex < monument.imagesUrls.length - 1
                && <ChangeRightContent>
                  {/* <Icon name='chevron-right' size={60} color="#FF8616" /> */}
                </ChangeRightContent>}
              onSwipeableRightOpen={handleCarrousselRight}
              renderLeftActions={() => showingImageIndex > 0
                && <ChangeRightContent>
                  {/* <Icon name='chevron-left' size={60} color="#FF8616" /> */}
                </ChangeRightContent>}
              onSwipeableLeftOpen={handleCarrousselLeft}>
              <ChangeContent />
            </Swipeable>
            <DotIconsImage>
              {monument.imagesUrls && monument.imagesUrls.map((_, index) => (
                <IconEntyPO key={`image-${index}`} name='controller-record' size={10} color={index === showingImageIndex ? "#FF8616" : "#9f9f9f"} />
              ))}
            </DotIconsImage>
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
