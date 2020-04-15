import React from 'react'
import { View,StyleSheet ,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class PutCommento extends React.Component{
    componentDidMount(){
        return fetch('http://192.168.1.9:8080/comments/'+this.props.route.params.id, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              body: this.props.route.params.body
            }),
          });
    }


    render(){
        return(
            <View>
                 <TouchableOpacity 
                style={styles.button} 
                onPress={() => {this.props.navigation.navigate("Profilo Utente")}}>
                  <Text style = {styles.text}> Fatto </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
    marginTop: 275,
    width: 300,
    borderRadius:50
  }
})