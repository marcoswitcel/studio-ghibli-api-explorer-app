import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

/**
 * @typedef {{ id: string, title: string, image: string}} FilmInfo
 */

/**
 * @param {object} param0 
 * @param {FilmInfo} param0.info
 * @param {number} param0.cardSize
 * @returns 
 */
export const MovieCard = ({ info, cardSize }) => (
  <TouchableOpacity activeOpacity={0.7}>
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
