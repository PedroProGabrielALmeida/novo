import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigation from './TabNavigation'
import Profile from "../appHistorias/screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='TelaInicial' component={TabNavigation} ></Drawer.Screen>
            <Drawer.Screen name='Perfil' component={Profile} ></Drawer.Screen>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;