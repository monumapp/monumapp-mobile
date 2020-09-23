import React, { useState, useCallback, useEffect } from 'react';
import {
  Container,
  LogoImage,
  ActionsContainer,
  SearchInput,
  QRCodeButton,
  QRCodeButtonText,
  InputLabel,
  Label,
  ListAutoCompleteItem,
  ListAutoCompleteText,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Logo from '../../icons/logo.png';
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

const Search: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedMonumentsName, setSelectedMonumentsName] = useState('');
  const [autocompleteOptions, setAutocompleteOptions] = useState<Monument[]>([]);
  const [selectedMonuments, setSelectedMonuments] = useState<Monument>({} as Monument);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadAutoCompleteOptions() {
      const response = await api.get(`/monuments?monumentName=${selectedMonumentsName}`);
      setAutocompleteOptions(response.data);
    }

    loadAutoCompleteOptions();
    // eslint-disable-next-line
  }, [selectedMonumentsName]);

  const handleAutoCompleteOptions = useCallback((name: string) => {
    setSelectedMonumentsName(name);
  }, []);

  const handleSelectedMonument = useCallback((monument: Monument) => {
    setSelectedMonuments(monument);
    setSelectedMonumentsName(monument.name);
    navigation.navigate('Monument', {
      monument: monument
    });
  }, []);

  const handleSubmitSearch = useCallback(() => {
    navigation.navigate('Monument', {
      monument: selectedMonuments
    });
  }, [selectedMonuments]);

  return (
    <Container>
      <LogoImage source={Logo} />

      <ActionsContainer>
        <InputLabel>Busque um monumento pelo nome</InputLabel>
        <SearchInput
          inputContainerStyle={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderWidth: 1,
            borderColor: '#828282'
          }}
          containerStyle={{
            marginTop: 20,
          }}
          listContainerStyle={{
            width: 300
          }}
          onSubmitEditing={handleSubmitSearch}
          placeholder="Ex: Theatro da Paz"
          data={autocompleteOptions}
          defaultValue=''
          value={selectedMonumentsName}
          onChangeText={(value) => handleAutoCompleteOptions(value)}
          renderItem={({ item }) => (selectedMonumentsName !== ''
            && selectedMonumentsName !== item.name
            && <ListAutoCompleteItem key={item.id} onPress={() => handleSelectedMonument(item as Monument)}>
              <ListAutoCompleteText>
                {item.name}
              </ListAutoCompleteText>
            </ListAutoCompleteItem>
          )}
        />
        <Label>Ou</Label>
        <InputLabel>Pressione o botão para buscar por QR Code</InputLabel>
        <QRCodeButton onPress={() => navigate('Scanner')}>
          <Icon name="qrcode-scan" size={75} />
          <QRCodeButtonText>QR Code</QRCodeButtonText>
        </QRCodeButton>
      </ActionsContainer>
    </Container>
  );
};

export default Search;
