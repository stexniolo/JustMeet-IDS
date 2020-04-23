import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,ImageBackground, Alert } from "react-native"

export default class LoginPage extends React.Component {
    render(){
    return (
      <ImageBackground source={require("../images/Sfondo.png")} style={styles.image}>
        <View>
          <Text style={styles.title}>
            Benvenuto in JustMeet!
          </Text>

          <TouchableOpacity style = {styles.button}
            onPress = {() => Alert.alert("Informativa","Con JustMeet puoi creare e prendere parte a eventi vicino "+
            "a te. L'idea è quella di semplificare il processo organizzativo di un evento di qualsiasi dimensione e tipologia "+
            "con pochi step "+
            "e in maniera molto semplice!\n\n"+
            "Dati raccolti\n\n"+ 
            "Profilo: email e foto Google, ai soli fini dell'applicazione\n\n"+
            "Tracciamento posizione: per migliorare l'esperienza di navigazione sulla mappa\n\n"+
            "Info di contatto:\n stefano.perniola@studenti.unicam.it\n\n"+
            "La tutela della leggitimità degli eventi è importante, un Moderatore sarà incaricato di rimuovere eventi illeggittimi o utenti che non rispettano le buone norme di comportamento.\n\n"+
            "Per andare avanti bisogna effettuare la login con Google")}>
            <Text style={styles.text}>Informativa App</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}  onPress={() => this.props.signIn()} >
            <Text style = {styles.text}>Accedi con Google </Text>
          </TouchableOpacity>

       </View>
       </ImageBackground>
      )
    }
}

const { width: WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
  title: {
    fontSize: 31,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(142, 68, 173, 0.2)',
    padding: 20,
    marginTop: 20,
    width: 300,
    borderRadius:50
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
})