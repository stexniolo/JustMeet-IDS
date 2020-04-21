import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,ImageBackground } from "react-native"

export default class LoginPage extends React.Component {
    render(){
    return (
      <ImageBackground source={require("../images/Sfondo.png")} style={styles.image}>
        <View>
          <Text style={styles.title}>
            Benvenuto in JustMeet!
          </Text>
          <Text style={styles.instructions}>
            Con JustMeet puoi creare e prendere parte a gruppi e eventi vicino a te! 
          </Text>
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