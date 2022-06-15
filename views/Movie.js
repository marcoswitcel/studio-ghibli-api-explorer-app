import React from 'react';
import {
  Button, Dimensions, Image, Platform, SafeAreaView,
  ScrollView, StyleSheet, Text, View
} from 'react-native';

/**
 * @typedef {import('../api/GhibliApi.js').FilmInfo} FilmInfo
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
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.titleText}>{route.params.title}</Text>
        <Text style={styles.subTitle}>({route.params.releaseDate})</Text>
        <Image
          style={styles.image}
          source={{
            width: width,
            height: width * 1.50,
            uri: route.params.image,
          }}
        />
      </ScrollView>
      <View style={styles.footer}>
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
  contentContainer: {
    flex: 1,
    width: '100%',
    paddingTop: 45,
  },
  image: {
    alignSelf: 'center',
    marginTop: 4,
    marginBottom: 10,
  },
  footer: {
    width: '85%',
    paddingVertical: 10,
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
    marginBottom: 12,
  },
});
