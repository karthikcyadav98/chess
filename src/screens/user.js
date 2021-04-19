import React from 'react';
import {View, Text} from 'react-native';

const user = ({title}) => {
  return (
    <View style={{padding: 20, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
        {title}
      </Text>
    </View>
  );
};

export default user;
