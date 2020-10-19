import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useNavigation, Link, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { TopInstructions, Marker, BottomInstructionsText, BottomInstructionsContainer } from './styles';
import { Dimensions } from 'react-native';

interface QRCodeReadEvent {
  data: string;
}

const Scanner: React.FC = () => {
  const { navigate } = useNavigation();
  const [scanner, setScanner] = useState<QRCodeScanner | null>();

  const onSuccess = useCallback((event: QRCodeReadEvent) => {
    if (scanner) {
      scanner._setScanning(true);
    }
    navigate('Monument', { monumentId: event.data });
    setTimeout(() => {
      if (scanner) {
        scanner._setScanning(false);
      }
    }, 3000)
  }, [navigate]);

  useEffect(() => {
    if (scanner) {
      scanner._setScanning(false)
    }
  }, [scanner])


  return (
    <QRCodeScanner
      ref={(cam) => setScanner(cam)}
      vibrate={false}
      reactivate={true}
      cameraStyle={{ height: Dimensions.get('window').height }}
      customMarker={
        <>
          <TopInstructions>
            Posicione o QR Code na moldura e aguarde, o monumento será reconhecido automáticamente
          </TopInstructions>
          <Marker />
        </>
      }
      bottomContent={
        <BottomInstructionsContainer>
          <BottomInstructionsText onPress={() => navigate('MonumentsList')}>
            Clique aqui para acessar a lista completa de monumentos
          </BottomInstructionsText>
          <Icon onPress={() => navigate('MonumentsList')} name='arrow-right' size={25} color='#ffffff' />
        </BottomInstructionsContainer>
      }
      showMarker
      onRead={onSuccess}
      topViewStyle={{ display: 'none' }}
    />
  );
};

export default Scanner;
