import React from "react"
import { StyleSheet, Text, View, Image, Button } from "react-native"
import * as Google from 'expo-google-app-auth'
import LoginPage from './LoginPage.js'


export default class GoogleLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      id: "",
      email: "",
      cognome: "",
      nome: "",
      photoUrl: "",
      fullName: ""
    }
  }

  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "82869702994-obb654jdvpuo53p59t6ko94j95fttgql.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      })

      if (result.type === "success") {
        this.setState({
          signedIn: true,
          id: result.user.id,
          cognome: result.user.familyName,
          email: result.user.email,
          nome: result.user.givenName,
          photoUrl: result.user.photoUrl,
          fullName: result.user.name
        })
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    } finally {

     // componentDidMount(){
        return fetch('http://192.168.1.9:8080/users', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              nome: this.state.nome,
              cognome: this.state.cognome,
              email: this.state.email,
              photoUrl: this.state.photoUrl
            }),
          });
 //   }
  }
}
  
  render() {
    return (
      <View style={styles.container}>
        {this.state.signedIn ? ( 
          this.state.email === "stefano.perniola@studenti.unicam.it" ? (
          this.props.navigation.replace("Admin")
          ) :
            this.props.navigation.replace("Home Page",{
                nome: this.state.nome,
                cognome: this.state.cognome,
                id: this.state.id,
                photoUrl: this.state.photoUrl,
                email: this.state.email,
                fullName: this.state.fullName,
            })
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})