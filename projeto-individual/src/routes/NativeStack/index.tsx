import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../../screens/Login/login';
import { BottomTabs } from '../BottomTabs/index';


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={BottomTabs} />
    </Stack.Navigator>
  );
}

export default MyStack;