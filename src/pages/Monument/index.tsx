import React from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
interface RouteParams {
  monumentId: string;
}

const Monument: React.FC = () => {
  const route = useRoute();
  const routeParams = route.params as RouteParams;
  return <Text>Monument {routeParams.monumentId}</Text>;
};

export default Monument;
