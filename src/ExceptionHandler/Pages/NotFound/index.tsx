import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useNavigation, Link, useRoute } from '@react-navigation/native';
import IconEntyPO from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Feather';
import { Container, Text, Header } from './styles';

const NotFound: React.FC = () => {
  const { navigate } = useNavigation();

  const backToScannerHandle = useCallback(() => {
    navigate('Scanner');
  }, []);

  return (
    <>
      <Header>
        <Icon name='arrow-left' size={25} color='#202020' onPress={backToScannerHandle} />
      </Header>
      <Container>
        <IconEntyPO size={60} name="emoji-sad" />
        <Text>
          Monumento não encontrado por favor tente novamente.
      </Text>
      </Container>
    </>
  );
};

export default NotFound;
