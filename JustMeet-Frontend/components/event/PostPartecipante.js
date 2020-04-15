import React from 'react'
import { View,Button,Text} from 'react-native';

export default class PostPartecipante extends React.Component {


  componentDidMount(){
    fetch('http://192.168.1.9:8080/events/'+this.props.route.params.idEvento+'/participants', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: this.props.route.params.fullName
        }),
      });

       fetch('http://192.168.1.9:8080/users/'+this.props.route.params.email+'/participantEvent/'+
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
                    title="Prenotazione fatta!"
                    onPress={() => this.props.navigation.navigate("Home Page")}
        />
            </View>
        )  
    }
}