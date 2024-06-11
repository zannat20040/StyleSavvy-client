import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Root from './src/Layout/Root';
import SignUp from './src/Layout/SignUp';
import SignIn from './src/Layout/SignIn';
import Home from './src/Layout/Home';
import BackBtn from './src/Component/BackBtn';

const Stack = createStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={Root} options={{
          headerTransparent: true,
          headerTintColor: '#fff',
          headerTitle: '',
        }} />
        <Stack.Screen name="Home" component={Home} options={{
          headerTransparent: true,
          headerTintColor: '#fff',
          headerTitle: '',
        }} />
        <Stack.Screen name="Signup" component={SignUp}
          options={{
            headerTransparent: true,
            headerTintColor: '#fff',
            headerTitle: '',
          }}
        />
        <Stack.Screen name="Signin" component={SignIn} options={{
          headerTransparent: true,
          headerTintColor: '#fff',
          headerTitle: '',
          headerRight: () => <BackBtn />,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

