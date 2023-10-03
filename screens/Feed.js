import {React, useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Platform, StatusBar } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { FlatList } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import StoryCardScreen from './StoryCardScreen';

SplashScreen.preventAutoHideAsync();

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/Bubblwgum-Sans-Regular.ttf'),
};
let stories=require('./temp.json')


export default function FeedScreen() {
// 3 - Crie um estado para o carregamento da font
const[fontsLoaded, setFontsLoaded] = useState(false);
// 4 - Carregue a fonte com useEffect
const loadFontsAsync = async () => {
  await Font.loadAsync(customFonts);
  setFontsLoaded(true)
}
useEffect(()  => {
  loadFontsAsync();
})

// 6 -Programe o item a ser renderizado no Flatlist

renderItem = ({ item: story }) => {
  return <StoryCardScreen story={story} />
}

keyExtractor = (item, index) => index.toString();

  if (fontsLoaded) {
    SplashScreen.hideAsync();
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image source={require("../assets/logo.png")}
            style={styles.iconImage}></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>App Narração de Histórias</Text>
            </View>
        </View> 
        <View style={styles.cardContainer}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={stories}
              renderItem={this.renderItem}
            />
          </View>   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 0.93
  }
});