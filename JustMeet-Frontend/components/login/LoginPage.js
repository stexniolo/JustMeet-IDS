import React from 'react'
import { StyleSheet, Text, View, Image, Button,Dimensions } from "react-native"

export default class LoginPage extends React.Component {
    render(){
    return (
        <View>
          <Text style={styles.title}>
            Benvenuto in JustMeet!
          </Text>
          <Text style={styles.instructions}>
            Con JustMeet puoi creare e prendere parte a gruppi e eventi vicino a te! 
          </Text>
          <Button style={styles.btnLogin} title="Accedi con Google" onPress={() => this.props.signIn()} />
        </View>
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
    btnLogin: {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 45,
      backgroundColor: '#448AFF',
      justifyContent: 'center',
      marginTop: 50,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
})