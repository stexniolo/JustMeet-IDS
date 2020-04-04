import React from "react";
import {
StyleSheet,
View,
ActivityIndicator,
FlatList,
Text,
TouchableOpacity,
Dimensions
} from "react-native";
export default class AdminScreen extends React.Component {

  

  

  render(){
  
  return(
    <View style={{ flexDirection: "row" }}>
     <View style={{ flex: 1 }}>
         <TouchableOpacity style={styles.buttonPartecipa }
               onPress = {() => this.props.navigation.navigate("Lista User [Admin]")}>
              <Text style={styles.text}>Utenti</Text>
         </TouchableOpacity>
     </View>
     <View style={{borderLeftWidth: 1,borderLeftColor: 'white'}}/>
     <View style={{ flex: 1}}>
         <TouchableOpacity style={styles.buttonPartecipa}
                            onPress = {() => this.props.navigation.navigate("Lista Eventi [Admin]")}>
              <Text style={styles.text}>Eventi</Text>
         </TouchableOpacity>
     </View>
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
        loader:{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff"
        },
        list:{
          paddingVertical: 4,
          margin: 5,
          backgroundColor: "#fff"
        },
        buttonPartecipa: {
          alignSelf: 'stretch',
          backgroundColor: '#2980B9'
        },
        buttonInfo: {
          width: WIDTH - 55,
          backgroundColor: '#448AFF',
          alignItems: 'flex-end',
        },
        text: {
          alignSelf: 'center',
          color: '#ffffff',
          fontSize: 16,
          fontWeight: '600',
          paddingTop: 10,
          paddingBottom: 10 
        },
        instructions: {
          fontSize: 16,
          textAlign: 'center',
          color: '#333333',
          marginBottom: 5,
          marginTop: 250
        }
  });