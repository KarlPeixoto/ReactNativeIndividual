import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { Home } from '../../screens/Home/home';
import { Cards } from '../../screens/Cards/index';

import home from '../../../assets/home.png'
import cards from '../../../assets/cards.png'
import friends from '../../../assets/friends.png'
import vs from '../../../assets/vs.png'
import menu from '../../../assets/menu.png'


export type BottomTabsParamList = {
    Home: undefined;
    Cards: undefined;
    Friends: undefined;
    VS: undefined;
    Menu: undefined;
}

const Tab = createBottomTabNavigator<BottomTabsParamList>();



export function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: '#000', paddingBottom: 2, height: 40 },
                tabBarInactiveTintColor: '#aaa',
                tabBarActiveTintColor: '#19FF0F',
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen
                name= "Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image
                            resizeMode='contain'
                            style={{ width: 25, tintColor: color }}
                            source={home}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Cards"
                component={Cards}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image
                            resizeMode='contain'
                            style={{ width: 25, tintColor: color }}
                            source={cards}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Friends"
                component={Cards}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image
                            resizeMode='contain'
                            style={{ width: 25, tintColor: color }}
                            source={friends}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="VS"
                component={Cards}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image
                            resizeMode='contain'
                            style={{ width: 25, tintColor: color }}
                            source={vs}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Menu"
                component={Cards}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image
                            resizeMode='contain'
                            style={{ width: 25, tintColor: color }}
                            source={menu}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}