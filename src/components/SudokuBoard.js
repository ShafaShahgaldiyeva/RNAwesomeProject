import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SudokuBoard = () => {
  const initialBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];

  const [board, setBoard] = useState(initialBoard);

  const onCellPress = (row, col, value) => {
    debugger
    const regionStartRow = Math.floor(row / 3) * 3;
    const regionStartCol = Math.floor(col / 3) * 3;
    board[row][col] = value;
    // Burada hücrenin değerini kullanıcının girdiği bir değerle değiştirebilirsiniz.
    // Örnek: Kullanıcıdan bir sayı girdikten sonra, board[row][col] değerini güncelleyebilirsiniz.
  };

  // Sudoku tahtasını render etmek için bir işlev
  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.row}>
        {row.map((cell, colIndex) => (
          <TouchableOpacity
            key={colIndex}
            style={styles.cell}
            onPress={() => onCellPress(rowIndex, colIndex, cell)}
          >
            <Text>{cell !== 0 ? cell.toString() : ''}</Text>
          </TouchableOpacity>
        ))}
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      {renderBoard()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 30,
    height: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SudokuBoard;
