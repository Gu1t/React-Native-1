import React from "react";
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409'
const colorFontGithub = '#C9D1d9'
const colorDarkFontGithub ='#4F565E'
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/105243951?v=4';
const urltoMyGithub = 'https://github.com/Gu1t';

const App = () => {

    const handlepressGotoGithub = async () => {
        console.log('Verificando Link')
      const res = await Linking.canOpenURL(urltoMyGithub);
      if(res){
        console.log('Link Aprovado')
        console.log('Abrindo Link...')
        await Linking.openURL(urltoMyGithub);
      }
    }
    return (
     <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
        accessibilityLabel="Guilherme em um ambiente com fundo Branco" 
        style={style.avatar} 
        source={{uri: imageProfileGithub}} 
        />
        <Text 
        accessibilityLabel="Nome: Guilherme Oliveira" 
        style={[style.defaultText, style.Name]}>Guilherme Oliveira</Text>
        <Text 
        accessibilityLabel="Nickname: Gu1t" 
        style={[style.defaultText, style.nickname]}>Gu1t</Text>
        <Text
        accessibilityLabel="Descrição: | Analista de Sistemas | | Desenvolvedor front-end |" 
        style={[style.defaultText, style.description,]}>| Analista de Sistemas | | Desenvolvedor front-end |
        </Text>
        <Pressable onPress={handlepressGotoGithub}>
        <View style={style.button}>
            <Text style={[style.defaultText, style.textbutton]}>Open in Github</Text>
        </View>
        </Pressable>
      </View>
     </SafeAreaView>   
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1,
        justifyContent: 'center'
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'white',
    },
    defaultText: {
        color: 'white',
    },
    Name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colorFontGithub,
    },
    nickname: {
        fontSize: 18,
        color:colorDarkFontGithub,
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colorFontGithub,
        padding: 10,
    },
    button: {
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 10,
    },
    textbutton: {
        fontSize: 16,
        fontWeight: 'bold',
    },

});