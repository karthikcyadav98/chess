import React from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';

import PieceImages from '../images/pieces';

const Cell = props => {
  const {
    size,
    rowIndex,
    columnIndex,
    piece,
    selected,
    canMoveHere,
    handleClick,
  } = props;

  const isBlack = (rowIndex + columnIndex) % 2 === 0;
  let backgroundColor = isBlack ? '#E3EABD' : '#558536';

  if (selected) {
    backgroundColor = '#48d1cc';
  } else if (canMoveHere) {
    backgroundColor = '#63ECD5';
  }

  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <View style={{backgroundColor, width: size, height: size}}>
        {piece !== null && piece && (
          <Image
            source={PieceImages[piece]}
            style={{width: size, height: size}}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Cell;
