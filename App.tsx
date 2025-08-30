import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import styled from 'styled-components/native';

const StyledView = styled(SafeAreaView)`
  flex: 1;
  background-color: #F00;
`;

const StyledContentView = styled.View`
  flex: 1;
  background-color: blue;
`;

const StyledText = styled.Text`
  font-size: 20px;
  line-height: 40px;
  color: aliceblue;
`;

const App = () => {
  return (
    <StyledView>
      <StyledContentView>
        <StyledText>你好</StyledText>
      </StyledContentView>
    </StyledView>
  );
};

export default App;
