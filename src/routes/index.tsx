import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MovieDetail } from '~/screens/MovieDetail';
import theme from '~/theme';

import { BottomRoutes } from './bottomNavigation';

const StackNavigation = createStackNavigator();

export function RootStack() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.Colors.BLACK }}>
      <StatusBar hidden />
      <NavigationContainer>
        <StackNavigation.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="HomeApp"
        >
          <StackNavigation.Screen component={BottomRoutes} name="HomeApp" />

          <StackNavigation.Screen component={MovieDetail} name="MovieDetail" />
        </StackNavigation.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
