import React from 'react';
import {
  Container,
  LogoImage,
  ActionsContainer,
  SearchInput,
  QRCodeButton,
  QRCodeButtonText,
  InputLabel,
  Label,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Logo from '../../icons/logo.png';

const Search: React.FC = () => {
  return (
    <Container>
      <LogoImage source={Logo} />

      <ActionsContainer>
        <InputLabel>Busque um monumento pelo nome</InputLabel>
        <SearchInput placeholder="Ex: Theatro da Paz" />
        <Label>Ou</Label>
        <InputLabel>Pressione o botão para buscar por QR Code</InputLabel>
        <QRCodeButton onPress={() => console.log('QR Code')}>
          <Icon name="qrcode-scan" size={75} />
          <QRCodeButtonText>QR Code</QRCodeButtonText>
        </QRCodeButton>
      </ActionsContainer>
    </Container>
  );
};

export default Search;
