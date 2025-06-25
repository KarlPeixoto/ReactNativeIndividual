import { NavigationContainer } from '@react-navigation/native';
import MyStack from './NativeStack';

export const Routes = () => {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}