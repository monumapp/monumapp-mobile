import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { TopInstructions, Marker } from './styles';
import { Dimensions } from 'react-native';

interface QRCodeReadEvent {
  data: string;
}

const Scanner: React.FC = () => {
  const { navigate } = useNavigation();
  const onSuccess = useCallback(
    (event: QRCodeReadEvent) => {
      navigate('Monument', { monumentId: event.data });
    },
    [navigate],
  );

  return (
    <QRCodeScanner
      cameraStyle={{ height: Dimensions.get('window').height }}
      customMarker={
        <>
          <TopInstructions>
            Posicione o QR Code na moldura, ele será selecionado automáticamente
          </TopInstructions>
          <Marker />
        </>
      }
      showMarker
      onRead={onSuccess}
      topViewStyle={{ display: 'none' }}
    />
  );
};

export default Scanner;
