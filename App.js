import React from 'react';
import {Dimensions, SafeAreaView, View, StyleSheet} from 'react-native';

import Board from './src/screens/board';
import User from './src/screens/user';

const App = () => {
  const {width} = Dimensions.get('window');

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <User title="White Player" />
        <Board size={width} />
        <User title="Black Player" />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
