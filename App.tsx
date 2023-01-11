import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/HomeScreen';
import DetailsScreen from './pages/DetailsScreen';
import * as R from 'react-native';

export default function App() {
  const Stack = createBottomTabNavigator();

  return (
    <R.View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </R.View>
  );
}