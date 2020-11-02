import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import MIIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { TopInstructions, Marker, BottomInstructionsText, BottomInstructionsContainer, BottomButtom, TopContainer } from './styles';
import { Dimensions, View } from 'react-native';

interface QRCodeReadEvent {
  data: string;
}

const Scanner: React.FC = () => {
  const { navigate } = useNavigation();

  const onSuccess = useCallback((event: QRCodeReadEvent) => {
    navigate('Monument', { monumentId: event.data });
  }, [navigate]);


  return (
    <QRCodeScanner
      vibrate={false}
      reactivate={true}
      cameraStyle={{ height: Dimensions.get('window').height }}
      customMarker={
        <>
          <TopContainer>
            <MIIcon name='comment-question' size={30} color='#ff8616' onPress={() => navigate('Questions')} />
          </TopContainer>
          <TopInstructions>
            Posicione o QR Code na moldura e aguarde, o monumento será reconhecido automáticamente
          </TopInstructions>
          <Marker />
        </>
      }
      bottomContent={
        <BottomInstructionsContainer>
          <BottomButtom onPress={() => navigate('MonumentsList')}>
            <BottomInstructionsText>
              Clique aqui para acessar a lista completa de monumentos
            </BottomInstructionsText>
            <Icon name='arrow-right' size={25} color='#ffffff' />
          </BottomButtom>
        </BottomInstructionsContainer>
      }
      showMarker
      onRead={onSuccess}
      topViewStyle={{ display: 'none' }}
    />
  );
};

export default Scanner;
