import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import Login from './pages/Login';
import * as R from 'react-native';
import styled from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createContext, useEffect, useState } from 'react';
import Detail from './pages/Detail';

const Container = styled(R.SafeAreaView)`
  flex: 1;
  margin: 0;
  padding: 0;
`

const userInfo = {
  id: 0,
  email: '',
  nickName: '',
  authority: 'USER',
  contributeDocs: [],
  isLogin: false,
}

export const UserContext = createContext(userInfo)
export const SetUserContext = createContext((...props: any) => { });

export default function App() {
  const [user, setUser] = useState(userInfo)

  const Stack = createBottomTabNavigator();
  const date = new Date();
  const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

  useEffect(() => {

  }, [])

  return (
    <Container>
      <SetUserContext.Provider value={setUser}>
        <UserContext.Provider value={user}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={() => ({
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
                //Tab bar styles can be added here
                tabBarStyle: user.isLogin ?
                  { paddingVertical: 5, backgroundColor: 'black', position: 'absolute', height: 50 } :
                  { display: 'none' },
                tabBarLabelStyle: { paddingBottom: 3 },
              })}>
              <Stack.Screen
                name='Home'
                component={user.isLogin ? Home : Login}
                options={{
                  headerTitle: user.isLogin ? `${date.getFullYear()}년 ${date.getDate()}월 ${date.getDay()}일 ${week[date.getDay()]}` : '',
                  title: '수면 조절',
                  headerStyle: {
                    backgroundColor: '#00000b',
                  },
                  headerTintColor: '#ccc',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontWeight: '600',
                    fontSize: 15
                  },
                  tabBarIcon: ({ focused }) => {
                    return <R.Image source={focused ? require('./assets/clock.png') : require('./assets/clock_n.png')} style={{ width: 20, height: 20 }} />
                  }
                }} />
              <Stack.Screen
                name='Details'
                component={Detail}
                options={{
                  headerTitle: `${date.getFullYear()}년 ${date.getDate()}월 ${date.getDay()}일 ${week[date.getDay()]}`,
                  title: '패턴 분석',
                  headerStyle: {
                    backgroundColor: '#00000b',
                  },
                  headerTintColor: '#ccc',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontWeight: '600',
                    fontSize: 15
                  },
                  tabBarIcon: ({ focused }) => {
                    return (
                      <R.Image source={focused ? require('./assets/chart.png') : require('./assets/chart_n.png')} style={{ width: 20, height: 20 }} />
                    );
                  }
                }} />
            </Stack.Navigator>
          </NavigationContainer>
        </UserContext.Provider>
      </SetUserContext.Provider>
    </Container>
  );
}