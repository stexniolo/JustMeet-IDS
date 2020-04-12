import React from 'react'
import { View, Text,Button,StyleSheet,Dimensions,TextInput,TouchableOpacity} from 'react-native';

export default class PostEvento extends React.Component {
    componentDidMount(){
        fetch('http://192.168.1.9:8080/events', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                  title: this.props.route.params.title,
                  description: this.props.route.params.description,
                  date: this.props.route.params.date,
                  nome: this.props.route.params.nome,
                  latitude: this.props.route.params.latitude,
                  longitude: this.props.route.params.longitude,
                  topic: this.props.route.params.topic,
                  organizzatore: this.props.route.params.organizzatore,
                  numPartecipanti: this.props.route.params.numPartecipanti
            }),
          });

          fetch('http://192.168.1.9:8080/users/'+this.props.route.params.emailCreatore+'/createdEvent/'+
          this.props.route.params.title, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
    }
    


    render(){
        return (
            <View>
                 <Button
                    title="Evento creato!"
                    onPress={() =>{this.props.navigation.navigate("Home Page")}}
                />
            </View>
        )
    
    }
}