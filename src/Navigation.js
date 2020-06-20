import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';


import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PaymentScreen from './screens/Payment';

import PaymentButton from '../src/components/PayButton';

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
      lib: AntDesign,
      name: 'home',
    },
    Wallet: {
      lib: AntDesign,
      name: 'creditcard',
    },
    Notifications: {
      lib: Ionicons,
      name: 'ios-notifications-outline',
    },
    Settings: {
      lib: AntDesign,
      name: 'setting',
    },
};

export default function Navigation(){

    return (
        <Tab.Navigator
            initialRouteNam="Wallet"

            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    if(route.name === "Payment"){
                        return (
                            <PaymentButton 
                                onPress={() => navigation.navigate("Payment")}
                                focused={focused}
                            />
                        );                        
                    }
                    const {lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={size} color={color}/>
                }
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: "#131418",
                    borderTopColor: "rgba(255,255,255,0.2)"
                },
                activeTintColor: "#fff",
            }}
        >
        
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    title: "Inicio"
                }}
            />
            <Tab.Screen 
                name="Wallet" 
                component={WalletScreen} 
                options={{
                    title: "Carteira"
                }}
            />
            
            <Tab.Screen 
                name="Payment" 
                component={HomeScreen}                
                options={{
                    title: ""
                }}
            />

            <Tab.Screen 
                name="Notifications" 
                component={HomeScreen} 
                options={{
                    title: "Notificações"
                }}
            />

            <Tab.Screen 
                name="Settings" 
                component={HomeScreen} 
                options={{
                    title: "Ajustes"
                }}
            />
        </Tab.Navigator>
    );
}
