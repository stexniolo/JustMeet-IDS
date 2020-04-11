import React from 'react'
import { View, Text, Image, StyleSheet ,ImageBackground,Dimensions} from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Asset } from "expo-asset";


const { width: WIDTH } = Dimensions.get('window')

export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       id: this.props.route.params.id,
       nome: this.props.route.params.nome,
       photo: this.props.route.params.photoUrl,
       email: this.props.route.params.email,
       fullName: this.props.route.params.fullName
      }
      this.props.navigation.navigate = this.props.navigation.navigate.bind(this);
  }

    render(){
      return (

    
      <ImageBackground source={require("../images/tenor9.gif")} style={styles.image}>

        <View style={styles.card}>
           <Image source={require('../images/FontText.png')} /> 
        </View>


      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Profilo Utente',{email: this.state.email, })}>
          <Text style = {styles.text}> Il mio profilo </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Google Maps')}>
          <Text style = {styles.text}> Vai alla mappa </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Eventi',{
            fullName: this.state.fullName,
            email: this.state.email
          })}>
          <Text style = {styles.text}> Scopri gli eventi </Text>
      </TouchableOpacity>
        
      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Scegli Data',{
              email: this.state.email
              })}>
          <Text style = {styles.text}> Crea un evento </Text>
      </TouchableOpacity>
   </ImageBackground>
    );
    }

}


const styles = StyleSheet.create({ 
  tinyLogo: {
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
    flexDirection: "column"
  },
  backgroundContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
image: {
  flex: 1,
  resizeMode: "cover",
  justifyContent: "center",
  alignItems: 'center',
  width: '100%',
  height: '100%'
},
  card: {
    flex: 0.9,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  background:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    color: 'white',
    fontSize: 25
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
    borderRadius:50,
    width: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.4)'
    //backgroundColor: 'rgba(52, 52, 52, 0.3)'
  },
});
