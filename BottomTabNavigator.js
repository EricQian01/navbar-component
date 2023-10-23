import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraScreen from './screens/CameraScreen';
import HomeScreen from './screens/HomeScreen';
import SavedScreen from './screens/SavedScreen';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'white',
                    borderRadius: 20,
                    height: 60,
                },
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (focused) {
                        iconName = 'home';
                    } else {
                        iconName = 'home';
                    }

                    return <FontAwesome5 name={iconName} size={size} color={color} />;
                },
            }}
        >
            <Tab.Screen name="Camera" component={CameraScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Saved" component={SavedScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;