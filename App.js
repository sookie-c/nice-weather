import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
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
