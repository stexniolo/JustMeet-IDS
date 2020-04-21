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
  
   
         <TouchableOpacity style={styles.button }
               onPress = {() => this.props.navigation.navigate("Casella Segnalazioni [Admin]")}>
              <Text style={styles.text}>Controlla Segnalazioni</Text>
         </TouchableOpacity>
     </View>
  )
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