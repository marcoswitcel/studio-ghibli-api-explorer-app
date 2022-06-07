import React from 'react';
import { Button, Dimensions, Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';

/**
 * @typedef {{ id: string, title: string, image: string, release_date: string}} FilmInfo
 */

/**
 * Tela que exibe informações de um filme
 * 
 * @param {object} param0 
 * @param {{ params: FilmInfo }} param0.route
 * @param {any} param0.navigation
 */
export const Movie = ({ route, navigation }) => {
  const width = Dimensions.get('window').width * 0.85;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>{route.params.title}</Text>
        <Text style={styles.subTitle}>({route.params.release_date})</Text>
        <Image
          style={styles.image}
          source={{
            width: width,
            height: width * 1.50,
            uri: route.params.image,
          }}
        />
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
  contentContainer: {},
  image: {
    alignSelf: 'center',
    marginTop: 4,
    marginBottom: 10,
  },
  titleText: {
    ...Platform.select({
      ios: { fontFamily: 'Arial', }, 
      android: { fontFamily: 'Roboto' }
    }),
    textAlign: 'center',
    fontSize: 28,
  },
  subTitle: {
    ...Platform.select({
      ios: { fontFamily: 'Arial', }, 
      android: { fontFamily: 'Roboto' }
    }),
    textAlign: 'center',
    fontSize: 18,
  },
});
  