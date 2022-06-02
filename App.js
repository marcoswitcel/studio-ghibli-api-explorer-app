import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { GhibliApi } from './api/GhibliApi';
import Grid from './components/Grid';

/**
 * @typedef {{ id: string, title: string, image: string}} FilmInfo
 */

export default function App() {
  /** @type {[FilmInfo[], React.Dispatch<React.SetStateAction<FilmInfo[]>>]} */
  const [ films, setFilms ] = useState([]);

  useEffect(() => {
    GhibliApi.fetchFilms().then((films) => {
      setFilms(films);
    });
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Filmes</Text>
      </View>
      {films.length ? <Grid films={films} /> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    paddingTop: 16,
    paddingBottom: 10,
  },
  headerText: {
    ...Platform.select({
      ios: { fontFamily: 'Arial', }, 
      android: { fontFamily: 'Roboto' }
    }),
    fontSize: 28,
  }
});
