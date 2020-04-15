import React from 'react'
import {Button,View} from "react-native";

export default class PubblicaCommento extends React.Component {
    componentDidMount(){
        fetch('http://192.168.1.9:8080/events/'+this.props.route.params.idEvento+'/comments', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              body: this.props.route.params.body,
              email: this.props.route.params.email,
              idEvento: this.props.route.params.idEvento
            })
          })
        fetch('http://192.168.1.9:8080/users/'+this.props.route.params.email+'/comments',{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            body: this.props.route.params.body,
            email: this.props.route.params.email,
            idEvento: this.props.route.params.idEvento
          })
        })
    }

render(){
    return (
        <View>
             <Button
                title="Commento Pubblicato!"
                onPress={() =>{this.props.navigation.navigate("Home Page")}}
            />
        </View>
    )

}
}