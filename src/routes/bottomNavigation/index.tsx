import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useCallback } from 'react';

import TabIcon from '~/components/TabIcon';

import home from '~/assets/icons/home.png';
import playButton from '~/assets/icons/playButton.png';
import profile from '~/assets/icons/profile.png';
import search from '~/assets/icons/search.png';
import { Home } from '~/screens/Home/views';
import theme from '~/theme';

const BottomNavigation = createBottomTabNavigator();

export function BottomRoutes() {
  const renderIcon = useCallback((focused: boolean, icon: string) => {
    return <TabIcon focused={focused} icon={icon} />;
  }, []);

  return (
    <BottomNavigation.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.Colors.BLACK,
          borderTopColor: 'transparent',
          paddingTop: 5,
          height: 60,
        },
        tabBarActiveTintColor: theme.Colors.PRIMARY,
      }}
    >
      <BottomNavigation.Screen
        component={Home}
        name="Home"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => renderIcon(focused, home),
        }}
      />
      <BottomNavigation.Screen
        component={Home}
        name="Play"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => renderIcon(focused, playButton),
        }}
      />
      <BottomNavigation.Screen
        component={Home}
        name="Search"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => renderIcon(focused, search),
        }}
      />
      <BottomNavigation.Screen
        component={Home}
        name="Profile"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => renderIcon(focused, profile),
        }}
      />
    </BottomNavigation.Navigator>
  );
}
