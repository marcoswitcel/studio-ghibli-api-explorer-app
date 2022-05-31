import React from 'react';
import { Dimensions, FlatList, Image } from 'react-native';

/**
 * @typedef {{ id: string, title: string, image: string}} FilmInfo
 */

/**
 * @param {object} param0
 * @param {FilmInfo[]} param0.films
 */
export const Grid = ({ films }) => {
  const { width } = Dimensions.get('window');
  const numColumns = 2;
  const size = width / numColumns;

  return (
    <FlatList
      data={films}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      renderItem={({ item }) => (
        <Image
          source={{
            width: size,
            height: size * 1.50,
            uri: item.image,
          }}
        />
      )}
    />
  )
}

export default Grid;
