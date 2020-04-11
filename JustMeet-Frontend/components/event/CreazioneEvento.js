import React from 'react'
import { View, Text,Button,StyleSheet,Dimensions,TextInput,TouchableOpacity, Alert,ScrollView} from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


export default class CreazioneEvento extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      //emailCreatore: this.props.route.params.email,
      dataScelta:this.props.route.params.giorno+"/"+this.props.route.params.mese+"/"+this.props.route.params.anno+" "+this.props.route.params.ore+":"+this.props.route.params.minuti,
      title: '',
      description: '',
      organizzatore: '',
      numPartecipanti: '',

    };
  }


 handleTitle = (text) => {
    this.setState({ title: text })
 }

 handleDescription = (text) => {
   this.setState({description: text})
 }

 handleDate = (text) => {
  this.setState({date: text})
}

handleLocation = (text) => {
  this.setState({location: text})
}

handleOrganizzatore = (text) => {
  this.setState({organizzatore: text})
}

handleNumPartecipanti = (text) => {
  this.setState({numPartecipanti: text})
}

  render() {
    return (
            <ScrollView style={styles.inputContainer}>
              <TouchableOpacity
              style={styles.button}
              onPress = {() => alert(this.state.dataScelta)}>
                <Text style = {styles.text}> Vedi DATA scelta </Text>
              </TouchableOpacity>


                <TextInput 
                    style={styles.input}
                    placeholder={'Nome'}
                    placeholderTextColor={'grey'}
                    underlineColorAndroid='transparent'
                    value = {this.state.title}
                    onChangeText = {this.handleTitle}
                />
                <TextInput 
                    style={styles.input}
                    placeholder={'Descrizione'}
                    placeholderTextColor={'grey'}
                    underlineColorAndroid='transparent'
                    value = {this.state.description}
                    onChangeText = {this.handleDescription}
                />
              

                <TextInput 
                    style={styles.input}
                    placeholder={'Organizzatore'}
                    placeholderTextColor={'grey'}
                    underlineColorAndroid='transparent' 
                    value = {this.state.organizzatore}
                    onChangeText = {this.handleOrganizzatore}
                />

                <TextInput 
                    style={styles.input}
                    placeholder={'Numero Partecipanti'}
                    placeholderTextColor={'grey'}
                    underlineColorAndroid='transparent' 
                    value = {this.state.numPartecipanti}
                    onChangeText = {this.handleNumPartecipanti}
                />     

 
             <TouchableOpacity
             disabled={(this.state.title == '' || this.state.description == '' || this.state.organizzatore == ''
             || this.state.numPartecipanti == '' )}
              style={styles.button}
              onPress = {() => 
                this.props.navigation.navigate('PostEvento',{
                  //emailCreatore: this.state.emailCreatore,
                  title: this.state.title,
                  description: this.state.description,
                 
                  nome: this.state.indirizzo,
                  latitude: this.state.result.latitude,
                  longitude: this.state.result.longitude,
                  topic: "5",
                  organizzatore: this.state.organizzatore,
                  numPartecipanti: this.state.numPartecipanti
                })
            } >
                <Text style = {styles.text}> Pubblica </Text>
              </TouchableOpacity>
              
              </ScrollView>
              
           
    );
}
}

const { width: WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
  input: {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 45,
      fontSize: 16,
      paddingLeft: 45,
      backgroundColor: 'white',
      color: 'black',
      marginHorizontal: 25,
      marginBottom: 25
  },
  inputContainer: {
      marginBottom: 20,
      marginTop: 20
  },
  btnPubblica: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#448AFF',
    justifyContent: 'center',
    marginTop: 50,
},
button: {
  alignItems: 'center',
  backgroundColor: '#DDDDDD',
  padding: 20,
  marginTop: 20
},
text: {
  color: 'black',
  textAlign: 'center',
  fontSize: 20,
  fontWeight: 'bold'
}
})