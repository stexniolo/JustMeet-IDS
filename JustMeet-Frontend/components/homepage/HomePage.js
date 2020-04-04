import React from 'react'
import { View, Text, Image, StyleSheet ,ImageBackground,Dimensions} from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'


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
          
    <View style={{flex: 1}}>

  
      <View style={styles.card}>
        <Text style={styles.header}>Benvenuto {this.state.nome} </Text>
        <Image style={styles.image} source={{uri: this.state.photo}} />     
      </View>  

      <View>

      <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('Google Maps')}>
          <Text style = {styles.text}> Vai alla mappa </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('Profilo Utente',{
                          email: this.state.email,
                        })}>
          <Text style = {styles.text}> Il mio profilo </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Eventi',{
            fullName: this.state.fullName,
            email: this.state.email
          })}>
          <Text style = {styles.text}> Scopri gli eventi </Text>
      </TouchableOpacity>
        
      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Crea un evento',{
              email: this.state.email
      })}>
          <Text style = {styles.text}> Crea un evento </Text>
      </TouchableOpacity>
      </View>
      
    </View>
    
          );
    }

}


const styles = StyleSheet.create({
  card: {
    flex: 1,
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
    color: 'black',
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
    marginTop: 20
  },
});
