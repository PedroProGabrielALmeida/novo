import {React, useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Platform, StatusBar, TextInput, Button, Alert } from 'react-native';
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};



export default function CreateStoryScreen() {
  const[fontsLoaded,setFontsLoaded] = useState(false);
  const[previewImage, setPreviewImage] = useState('image_1');
  const[ dropdownHeight, setDropDownHeight] = useState(40);
  const [open, setOpen] = useState(false);

const loadFontsAsync = async () => {
  await Font.loadAsync(customFonts);
  setFontsLoaded(true);
}

useEffect(() =>{
loadFontsAsync();
})

if (fontsLoaded) {
  SplashScreen.hideAsync();
  let preview_images = {
    'imagem_1': require('../assets/story_image_1.png'),
    'imagem_2': require('../assets/story_image_2.png'),
    'imagem_3': require('../assets/story_image_3.png'),
    'imagem_4': require('../assets/story_image_4.png'),
    'imagem_5': require('../assets/story_image_5.png')
  }
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea}/>
      <View style={styles.appTitle}>
        <View style={styles.appIcon}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.iconImage}
          ></Image>
        </View>
        <View style={styles.appTitleTextContainer}>
          <Text style={styles.appTitleText}>Nova História</Text>  
        </View>
      </View>
      <View style={styles.fieldsContainer}>
            <ScrollView>
              <Image
                source={preview_images[previewImage]}
                style={styles.previewImage}
              ></Image>
              
              <View style={{ height: RFValue(dropdownHeight) }}>
                <DropDownPicker
                  // Adicione as propriedades 
                  open={open}
                  setOpen={setOpen}
                  items={[
                    {label: "Imagem 1", value: "preview_images['image_1']"},
                    {label: "Imagem 2", value: "preview_images['image_2']"},
                    {label: "Imagem 3", value: "preview_images['image_3']"},
                    {label: "Imagem 4", value: "preview_images['image_4']"},
                    {label: "Imagem 5", value: "preview_images['image_5']"}
                  ]}
                  defaultValue={previewImage}
                  setPreviewImage={setPreviewImage}

                  onChangeItem={items => (
                    (setPreviewImage(items.value))
                  )}

                  containerStyle={{
                    height: 40,
                    borderRadius: 20,
                    marginBottom: 10
                  }}

                  onOpen={() => {
                     setDropDownHeight(170);
                  }}
                  onClose={() => {
                    setDropDownHeight(40);
                  }}
                  style={{ backgroundColor: "transparent" }}
                  itemStyle={{
                    justifyContent: "flex-start"
                  }}
                  dropDownStyle={{ backgroundColor: "#2f345d" }}
                  labelStyle={{
                    color: "white",
                    fontFamily: "Bubblegum-Sans"
                  }}
                  arrowStyle={{
                    color: "white",
                    fontFamily: "Bubblegum-Sans"
                  }}
                />
              </View>

              <TextInput
                style={styles.inputFont}
                onChangeText={title => ({ title })}
                placeholder={'Título'}
                placeholderTextColor='white'
              />
              <TextInput
                style={[styles.inputFont,styles.inputFontExtra,styles.inputTextBig]}
                onChangeText={description => ({ description })}
                placeholder={'descrição'}
                placeholderTextColor='white'
                multiline={true}
                numberOfLines={4}
              />

              <TextInput
                style={[styles.inputFont,styles.inputFontExtra,styles.inputTextBig]}
                onChangeText={story => ({ story })}
                placeholder={'História'}
                placeholderTextColor="white"
                multiline={true}
                numberOfLines={20}
              />

              <TextInput
                style={[styles.inputFont,styles.inputFontExtra,styles.inputTextBig]}
                onChangeText={moral => ({ moral })}
                placeholder={'moral da história'}
                placeholderTextColor="white"
                multiline={true}
                numberOfLines={4}
              />
              

              
            </ScrollView>
          </View>
          <View style={{ flex: 0.08 }} />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  containerLight: {
    flex: 1,
    backgroundColor: "white"
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
  appTitleTextLight: {
    color: "black",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  fieldsContainer: {
    flex: 0.85
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain"
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    fontFamily: "Bubblegum-Sans"
  },
  inputFontLight: {
    height: RFValue(40),
    borderColor: "black",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "black",
    fontFamily: "Bubblegum-Sans"
  },
  dropdownLabel: {
    color: "white",
    fontFamily: "Bubblegum-Sans"
  },
  dropdownLabelLight: {
    color: "black",
    fontFamily: "Bubblegum-Sans"
  },
  inputFontExtra: {
    marginTop: RFValue(15)
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5)
  },
  submitButton: {
    marginTop: RFValue(20),
    alignItems: "center",
    justifyContent: "center"
  }
});