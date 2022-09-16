import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import SidebarContent from '../components/navigations/SidebarContent';
import { COLORS } from '../constants/style';


import Home from '../screens/Home'
import Details from '../screens/Details'
import Profile from '../screens/Profile'
import Settings from '../screens/Settings'

import Stack from './Stack';

export class DrawerNavigator extends Component {
    render() {

        const Drawer = createDrawerNavigator();

        return (
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false,
                    drawerActiveBackgroundColor: COLORS.secondary,
                    drawerActiveTintColor: COLORS.white,
                    drawerInactiveTintColor: COLORS.white,
                }}
                drawerContent={props => <SidebarContent {...props} /> }
            >

                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Details" component={Details} />
                <Drawer.Screen name="Profile" component={Profile} />
                <Drawer.Screen name="Settings" component={Settings} />

                {/* don't use stack on first position because is used for nested store and product */}
                <Drawer.Screen name="STACK" component={Stack} />

            </Drawer.Navigator>
        )
    }
}

export default DrawerNavigator