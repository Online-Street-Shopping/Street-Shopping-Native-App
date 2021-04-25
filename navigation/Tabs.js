import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import ChangePassword from "../screens/ChangePassword";
import Profile from "../screens/Profile";
import ProductDetails from "../screens/ProductDetails";
import Products from "../screens/Products";

import { StyleSheet } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from "react-native-vector-icons/Entypo";
import { COLORS } from '../constants';

const Tab = createBottomTabNavigator();

const Tabs = ()=>{
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: COLORS.primary,
                    activeBackgroundColor: COLORS.tabSelectionColor,
                }}
            >
                <Tab.Screen
                    name="SignIn"
                    component={ ProductDetails }
                    options={{
                        tabBarLabel: "Home",
                        tabBarIcon: ()=>(
                            <AntDesign
                                name="home"
                                style={ styles.tabIcon }
                                size={30}
                                color={ COLORS.primary }
                            />
                        ),
                        tabBarBadge: 3
                    }}
                />
                <Tab.Screen
                    name="SignUp"
                    component={ Products }
                    options={{
                        tabBarLabel:"Search",
                        tabBarIcon: ()=>(
                            <AntDesign
                                name="search1"
                                style={ styles.tabIcon }
                                size={30}
                                color={ COLORS.primary }
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="ChangePassword"
                    component={ ChangePassword }
                    style={ styles.tab }
                    options={{
                        tabBarLabel:"Cart",
                        tabBarIcon: ()=>(
                            <Entypo
                                name="shopping-cart"
                                size={30}
                                color={ COLORS.primary }
                                style={ styles.tabIcon }
                            />
                        ),
                        tabBarBadge: 5
                    }}
                />
                <Tab.Screen
                    name="EditProfile"
                    component={ Profile }
                    options={{
                        tabBarLabel:"Profile",
                        tabBarIcon: ()=>(
                            <AntDesign
                                name="meh"
                                style={ styles.tabIcon }
                                size={30}
                                color={ COLORS.primary }
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
};

export default Tabs;

const styles = StyleSheet.create({
    tabIcon: {
        textAlign: "center",
        color: COLORS.primary
        // backgroundColor: COLORS.selectionColor
    },
    tab: {
        color: COLORS.primary
    }
});
