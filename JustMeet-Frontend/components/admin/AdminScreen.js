import React from "react";
import {
StyleSheet,
View,
Text,
TouchableOpacity,
Dimensions,
ImageBackground
} from "react-native";
export default class AdminScreen extends React.Component {

  

  

  render(){
  
  return(
    <View style={styles.container}>
         <TouchableOpacity style={styles.button }
               onPress = {() => this.props.navigation.navigate("Lista User [Admin]")}>
              <Text style={styles.text}>Utenti</Text>
         </TouchableOpacity>
   
  
   
         <TouchableOpacity style={styles.button}
                            onPress = {() => this.props.navigation.navigate("Lista Eventi [Admin]")}>
              <Text style={styles.text}>Eventi</Text>
         </TouchableOpacity>
  
   
         <TouchableOpacity style={styles.button}
                                  onPress = {() => this.handleEmail()}>
                    <Text style={styles.text}>Invia Email</Text>
          </TouchableOpacity>
     </View>
  )
  }

}

handleEmail = () => {
  const to = [] // string or array of email addresses
  email(to, {
      // Optional additional arguments
      cc: [], // string or array of email addresses
      bcc: '', // string or array of email addresses
      subject: '',
      body: ''
  }).catch(console.error)
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
          backgroundColor: '#DDDDDD',
          padding: 20,
          marginTop: 20,
          width: 300,
          borderRadius:50
        },
        text: {
          alignSelf: 'center',
          color: 'black',
          fontSize: 16,
          fontWeight: 'bold',
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