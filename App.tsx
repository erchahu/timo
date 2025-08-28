import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'pink' }}>
      <View style={{ flex: 1, backgroundColor: 'deeppink' }}>
        <Text>你好</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
