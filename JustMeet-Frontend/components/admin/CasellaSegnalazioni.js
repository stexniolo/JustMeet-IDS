import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    ImageBackground
    } from "react-native";
import email from 'react-native-email'
import launchMailApp from "react-native-mail-launcher"
 
export default class CasellaSegnalazioni extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <ImageBackground source={require("../images/Prova.png")} style={styles.image}>
               <TouchableOpacity style={styles.button }
                     onPress = {() => this.openMail()}>
                    <Text style={styles.text}>Casella Segnalazioni</Text>
               </TouchableOpacity>
         
        
         
               <TouchableOpacity style={styles.button}
                                  onPress = {() => this.handleEmail()}>
                    <Text style={styles.text}>Invia Email</Text>
               </TouchableOpacity>
        
          </ImageBackground>
           </View>
        )
    }

    openMail = () => {
        launchMailApp();
      };
 
    handleEmail = () => {
        const to = ['tiaan@email.com', 'foo@bar.com'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
            bcc: 'mee@mee.com', // string or array of email addresses
            subject: 'Show how to use',
            body: 'Some body right here'
        }).catch(console.error)
    }
}
 

const { width: WIDTH } = Dimensions.get('window')


const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff"
      }, 
      button: {
        alignSelf: 'center',
        alignItems: 'center',
        //backgroundColor: '#DDDDDD',
        backgroundColor: 'rgba(142, 68, 173, 0.2)',
        padding: 20,
        marginTop: 20,
        width: 300,
        borderRadius:50
      },
      text: {
        alignSelf: 'center',
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10 
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        height: '100%'
      }
});