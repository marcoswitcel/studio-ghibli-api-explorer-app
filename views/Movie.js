import React from 'react';
import { Button, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';

/**
 * @typedef {{ id: string, title: string, image: string}} FilmInfo
 */

export const Movie = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Tela do filme específico {route.params.title}</Text>
        <Button title='Voltar' onPress={() => navigation.navigate('AllMovies')} />
      </View>
    </SafeAreaView>
  )
};

export default Movie;

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
  