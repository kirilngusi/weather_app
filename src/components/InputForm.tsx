import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
  StyleSheet,
} from 'react-native';

import {
  ActivityContainer,
  Container,
  Header,
  ImageView,
  Image,
  Main,
  Temperature,
  TemperatureText,
  Content,
  ContentFlex
} from './styles';

import {useAppSelector, useAppDispatch} from '../hooks';
import {fetchApiByName} from '../features/getApi/index';

const InputForm = () => {
  const [city, setCity] = useState(null);
  const dispatch = useAppDispatch();

  const onPressLearnMore = () => {
    dispatch(fetchApiByName(city));
  };
  return (
    <ContentFlex>
      <TextInput
        style={{height: 50, width:300, borderWidth: 1}}
        onChangeText={city => setCity(city)}
        value={city}
        name="nameCity"
      />

      <Button
        onPress={onPressLearnMore}
        title="Submit"
        color="#841584"
        style={{height: 50}}
      />
    </ContentFlex>
  );
};

export default InputForm;
