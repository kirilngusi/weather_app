import React from 'react';
import {useAppSelector} from '../hooks';

import {ActivityIndicator, Alert, ImageBackground} from 'react-native';

import {
  ActivityContainer,
  Container,
  Header,
  ImageView,
  Image,
  Main,
  Temperature,
  TemperatureText,
  Text,
  Content,
} from './styles';

import {upperCase} from '../utils/upperCase';

const Home = () => {
  const result = useAppSelector(state => state.weather.value);

  if (result.message) {
    return <Text>City Not Found</Text>;
  }

  const image = {
    uri: `https://openweathermap.org/img/wn/${result?.weather[0].icon}@4x.png`,
  };

  if (result.name) {
    return (
      <Container>
        <Header>
          <Text>Weather</Text>
        </Header>

        <Main>
          <Content>
            <ImageView>
              <Image source={image} />
            </ImageView>
            <Temperature>
              <Text>
                {result.name}, {result.sys.country}
              </Text>
              <Text>{upperCase(result.weather[0].description)}</Text>
              <TemperatureText>
                {result?.main.temp}
                <TemperatureText>º</TemperatureText>
              </TemperatureText>
            </Temperature>
          </Content>
        </Main>
      </Container>
    );
  } else {
    return <Text>City Search</Text>;
  }
};

export default Home;
