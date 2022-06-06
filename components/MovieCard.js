import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

/**
 * @typedef {{ id: string, title: string, image: string}} FilmInfo
 */

/**
 * @param {object} param0 
 * @param {FilmInfo} param0.info
 * @param {number} param0.cardSize
 * @param {(info: FilmInfo) => void} param0.onPress
 * @returns 
 */
export const MovieCard = ({ info, cardSize, onPress }) => (
  <TouchableOpacity activeOpacity={0.7} onPress={() => onPress(info)}>
    <Image
      source={{
        width: cardSize,
        height: cardSize * 1.50,
        uri: info.image,
      }}
    />
  </TouchableOpacity>
);

export default MovieCard;
