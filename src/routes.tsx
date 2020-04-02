import 'react-native-gesture-handler';
import * as React from 'react';
import Main from './views/main';
import Cards from './views/cards';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="Cards"
          component={Cards}
          options={{
            title: 'Cards of Magic',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
