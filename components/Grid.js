import React from 'react';
import { Dimensions, FlatList } from 'react-native';
import MovieCard from './MovieCard';

/**
 * @typedef {import('../api/GhibliApi.js').FilmInfo} FilmInfo
 */

/**
 * @param {object} param0
 * @param {FilmInfo[]} param0.films
 * @param {(info: FilmInfo) => void} param0.cardClickCallback
 */
export const Grid = ({ films, cardClickCallback }) => {
  const { width } = Dimensions.get('window');
  const numColumns = 2;
  const size = width / numColumns;

  return (
    <FlatList
      data={films}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      renderItem={({ item }) => <MovieCard onPress={cardClickCallback} info={item} cardSize={size} />}
    />
  )
}

export default Grid;
