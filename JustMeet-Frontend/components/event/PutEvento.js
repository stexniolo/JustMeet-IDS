import React from 'react'
import { View, Text,Button,StyleSheet,Dimensions,TextInput,TouchableOpacity} from 'react-native';

export default class PutEvento extends React.Component {
    componentDidMount(){
        return fetch('http://192.168.1.9:8080/events/'+this.props.route.params.id, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: this.props.route.params.title,
              description: this.props.route.params.description,
              topic: this.props.route.params.topic,
              organizzatore: this.props.route.params.organizzatore,
              numPartecipanti: this.props.route.params.numPartecipanti
            }),
          });
    }


    render(){
        return (
            <View>
                 <Button
                    title="Evento modificato!"
                    onPress={() => this.props.navigation.navigate("Home Page")}
        />
            </View>
        )
    
    }
}