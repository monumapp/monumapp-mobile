import React, { useState, useCallback, useEffect } from 'react';
import {
  Container,
  InputLabel,
  SearchInput,
  ListContainer,
  ListItem,
  ListText,
  Header
} from './styles';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

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

const MonumentsList: React.FC = () => {
  const { navigate } = useNavigation();
  const [monuments, setMonuments] = useState<Monument[]>([]);
  const [monumentsSearch, setMonumentsSearch] = useState<Monument[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadMonuments() {
      const response = await api.get('/monuments');
      setMonuments(response.data);
      setMonumentsSearch(response.data);
    }

    loadMonuments();
  }, []);

  const handleSelectedMonument = useCallback((monument: Monument) => {
    navigation.navigate('Monument', {
      monument: monument
    });
  }, []);

  const backToScannerHandle = useCallback(() => {
    navigate('Scanner');
  }, []);

  const filter = useCallback((monumentName: string) => {

    if (monumentName === "") {
      console.log('ddsdd');
      return setMonumentsSearch(monuments);
    }
    const searchName = monumentName.toLowerCase().split('');
    const filteredMonuments = monuments.filter((monument) => {
      const intersection = searchName.filter(value => monument.name.toLowerCase().includes(value));
      return intersection.length === searchName.length && monument;
    });
    setMonumentsSearch(filteredMonuments);

  }, [monuments]);

  return (
    <Container>
      <Header>
        <Icon name='arrow-left' size={25} color='#202020' onPress={backToScannerHandle} />
      </Header>
      <InputLabel>Busque um monumento pelo nome</InputLabel>
      <SearchInput
        placeholder='Ex: Theatro da Paz'
        onChangeText={(name) => filter(name)} />
      <ListContainer
        data={monumentsSearch}
        renderItem={({ item }) => (
          <ListItem key={item.id} onPress={() => handleSelectedMonument(item as Monument)}>
            <ListText>
              {item.name}
            </ListText>
            <Icon name='arrow-right' size={25} color='#828282' />
          </ListItem>
        )} />
    </Container>
  );
};

export default MonumentsList;
