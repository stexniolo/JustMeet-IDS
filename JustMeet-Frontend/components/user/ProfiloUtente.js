import React from 'react'
import {
    Image,
    ImageBackground,
    Alert,
    Dimensions,
    StyleSheet,
    View,
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity
} from "react-native"

export default class ProfiloUtente extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource:[],
      };
    }
    componentDidMount(){
    fetch("http://192.168.1.9:8080/users/"+this.props.route.params.email)
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
      loading: false,
      dataSource: responseJson
      })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }
    
  
      render(){
      if(this.state.loading){
        return( 
          <View style={styles.loader}> 
            <ActivityIndicator size="large" color="#0c9"/>
          </View>
      )}
      return(
        <View style = {styles.container}>
        <ImageBackground source={require("../images/Prova.png")} style={styles.image2}>
        <View style={styles.view}>
          <Text style={styles.header}>Nome: {this.state.dataSource.nome}</Text>
          <Text style={styles.header}>Cognome: {this.state.dataSource.cognome}</Text>
          <Text style={styles.header}>Email: {this.state.dataSource.email}</Text>
          <Image style={styles.image} source={{uri: this.state.dataSource.photoUrl}} />  
        </View>

      <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('Email')}>
          <Text style = {styles.text}> Segnala un problema </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('Elimina Utente',{
                          email: this.state.dataSource.email
                        })}>
          <Text style = {styles.text}> Elimina il mio account </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('Commenti Pubblicati',{
                          email:this.state.dataSource
                        })}>
          <Text style = {styles.text}> I miei Commenti </Text>
      </TouchableOpacity>

        <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={styles.button}
               onPress = {() => this.props.navigation.navigate('Eventi Creati',{
                fullName: this.state.dataSource.fullName, 
                email: this.state.dataSource.email
               })}>
              <Text style={styles.text}>Eventi Creati</Text>
         </TouchableOpacity>
     </View>
     <View style={{ flex: 1}}>
         <TouchableOpacity style={styles.button}
           onPress = {() => this.props.navigation.navigate('Partecipazione a Eventi',{
            fullName: this.state.dataSource.fullName, 
            email: this.state.dataSource.email
           })}>
              <Text style={styles.text}>Partecipazioni</Text>
         </TouchableOpacity>
     </View>
     </View>
     </ImageBackground> 
     </View>
      )}
    }
   


const { width: WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
  view: {
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
    backgroundColor: 'rgba(142, 68, 173, 0.5)',
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    color: 'black',
    fontSize: 20
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  },
  image2: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    alignItems: 'center',
    //backgroundColor: '#DDDDDD',
    backgroundColor: 'rgba(142, 68, 173, 0.2)',
    padding: 20,
    marginTop: 20,
    borderRadius:70
  },
  button2:{
    alignSelf: 'stretch',
    backgroundColor: '#2980B9'
  }
});
