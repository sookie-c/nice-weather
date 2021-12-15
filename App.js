import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

const WINDOW_WIDTH = Dimensions.get('window').width;

export default function App() {
  const [city, setCity] = useState('Loading...');
  const [location, setLocation] = useState(null);
  const [ok, setOk] = useState(true);
  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
  };

  useEffect(() => {
    ask();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.description}>Sunny</Text>
          <Text style={styles.temp}>7</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.description}>Sunny</Text>
          <Text style={styles.temp}>7</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.description}>Sunny</Text>
          <Text style={styles.temp}>7</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#85C1E9',
  },
  city: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    color: 'white',
    fontSize: 40,
    fontWeight: '300',
  },
  weather: {
    // backgroundColor: 'teal',
  },
  day: {
    width: WINDOW_WIDTH,
    flex: 1,
    alignItems: 'center',
  },
  description: {
    fontSize: 18,
    fontWeight: '300',
    color: 'white',
  },
  temp: {
    fontSize: 120,
    fontWeight: '200',
    color: 'white',
  },
});
