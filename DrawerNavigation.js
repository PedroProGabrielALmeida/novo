import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigation from "../appHistorias/Navigation/TabNavigation";
import Profile from "../appHistorias/screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Tela Inicial" component={TabNavigation}/>
            <Drawer.Screen name="Perfil" component={Profile}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;