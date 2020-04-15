import React from 'react'
import { View, Text,Button,StyleSheet,Dimensions,TextInput,TouchableOpacity} from 'react-native';

export default class AnnullaPartecipazione extends React.Component {
    componentDidMount(){
        fetch('http://192.168.1.9:8080/users/'+this.props.route.params.email+'/participantEvent/'+
                this.props.route.params.title, {
            method: 'DELETE',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }).catch(function(error) {console.log('There has been a problem with your fetch operation: ' + error.message)});

          fetch('http://192.168.1.9:8080/events/'+this.props.route.params.idEvento+'/participants/'+this.props.route.params.email,{
             method: 'DELETE',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
        }).catch(function(error) {console.log('There has been a problem with your fetch operation: ' + error.message)});
    }


    render(){
        return (
            <View>
                 <Button
                    title="Prenotazione annullata!"
                    onPress={() => this.props.navigation.navigate("Home Page")}
        />
            </View>
        )
    
    }
}