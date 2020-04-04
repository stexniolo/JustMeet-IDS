import React from 'react'
import { View, Text,Button,StyleSheet,Dimensions,TextInput,TouchableOpacity} from 'react-native';

export default class PostEvento extends React.Component {
    componentDidMount(){
        fetch('http://192.168.1.8:8080/events', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: this.props.route.params.title,
              description: this.props.route.params.description,
              date: this.props.route.params.date,
              latitude: this.props.route.params.latitude,
              longitude: this.props.params.route.longitude,
              topic: this.props.params.route.topic,
              organizzatore: this.props.route.params.organizzatore,
              numPartecipanti: this.props.route.params.numPartecipanti
            }),
          });

          fetch('http://192.168.1.8:8080/users/'+this.props.route.params.emailCreatore+'/createdEvent/'+
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
                    onPress={() =>{this.functionPost; this.props.navigation.navigate("JustMeet")}}
                />
            </View>
        )
    
    }
}