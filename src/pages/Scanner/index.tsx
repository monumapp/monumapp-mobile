import React, { useCallback } from 'react';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { TopInstructions, Marker } from './styles';
import { Dimensions, Linking } from 'react-native';

interface QRCodeReadEvent {
  data: string;
}

const Scanner: React.FC = () => {
  const onSuccess = useCallback((e: QRCodeReadEvent) => {
    Linking.openURL(e.data);
  }, []);

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
