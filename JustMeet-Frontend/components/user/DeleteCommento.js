import React from 'react'
import {View,StyleSheet,TouchableOpacity,Text} from 'react-native'

export default class DeleteCommento extends React.Component{
    componentDidMount(){
        fetch('http://192.168.1.9:8080/comments/'+this.props.route.params.id, {
            method: 'DELETE',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
        });
    }

    render(){
        return(
            <View>
                 <TouchableOpacity 
                style={styles.button} 
                onPress={() => {this.props.navigation.navigate("Home Page")}}>
                  <Text style = {styles.text}> Fatto </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
button: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
    marginTop: 275,
    width: 300,
    borderRadius:50
  }
})