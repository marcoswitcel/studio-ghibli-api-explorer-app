import React, { useEffect, useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { GhibliApi } from '../api/GhibliApi';
import Grid from '../components/Grid';

/**
 * @typedef {import('../api/GhibliApi.js').FilmInfo} FilmInfo
 */

export const AllMovies = ({ navigation }) => {
  /** @type {[FilmInfo[], React.Dispatch<React.SetStateAction<FilmInfo[]>>]} */
  const [ films, setFilms ] = useState([]);

  useEffect(() => {
    GhibliApi.fetchFilms().then((films) => {
      setFilms(films);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Filmes</Text>
      </View>
      {films.length ? <Grid cardClickCallback={(filmInfo) => navigation.navigate('Movie', filmInfo)} films={films} /> : null}
    </SafeAreaView>
  )
};

export default AllMovies;

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
