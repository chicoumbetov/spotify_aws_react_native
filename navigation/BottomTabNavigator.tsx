import { Ionicons, Entypo, EvilIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import YourLibraryScreen from '../screens/YourLibraryScreen';
import PremiumScreen from '../screens/PremiumScreen';
import { BottomTabParamList, HomeParamList, SearchParamList, YourLibraryParamList, PremiumParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={30} color={color} style={{ marginBottom: -3 }}/>,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <EvilIcons name="search" size={30} color={color} style={{ marginBottom: -3 }}/>,
        }}
      />
      <BottomTab.Screen
        name="Your Library"
        component={YourLibraryNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="music-box-multiple-outline" size={30} color={color} style={{ marginBottom: -3 }} />,
        }}
      />
      <BottomTab.Screen
        name="Premium"
        component={PremiumNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="spotify" size={30} color={color} style={{ marginBottom: -3 }}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<SearchParamList>();

function SearchNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerTitle: 'Search' }}
      />
    </TabTwoStack.Navigator>
  );
}

const YourLibraryStack = createStackNavigator<YourLibraryParamList>();

function YourLibraryNavigator() {
  return (
    <YourLibraryStack.Navigator>
      <YourLibraryStack.Screen
        name="YourLibraryScreen"
        component={YourLibraryScreen}
        options={{ headerTitle: 'Your Library' }}
      />
    </YourLibraryStack.Navigator>
  );
}

const PremiumStack = createStackNavigator<PremiumParamList>();

function PremiumNavigator() {
  return (
    <PremiumStack.Navigator>
      <PremiumStack.Screen
        name="PremiumScreen"
        component={PremiumScreen}
        options={{ headerTitle: 'Premium' }}
      />
    </PremiumStack.Navigator>
  );
}