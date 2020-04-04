import React from 'react'
import { View, Text,Button,StyleSheet,Dimensions,TextInput,TouchableOpacity} from 'react-native';

export default class AnnullaPartecipazione extends React.Component {
    componentDidMount(){
        fetch('http://192.168.1.8:8080/users/'+this.props.route.params.email+'/participantEvent'+
                this.props.route.params.title, {
            method: 'DELETE',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });

          fetch('http://192.168.1.8:8080/events/'+this.props.route.params.idEvento+'/participantEvent'+
          this.props.route.params.title, {
             method: 'DELETE',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullName: this.props.route.params.participantName
              }),
        });
    }


    render(){
        return (
            <View>
                 <Button
                    title="Prenotazione annullata!"
                    onPress={() => this.props.navigation.navigate("JustMeet")}
        />
            </View>
        )
    
    }
}