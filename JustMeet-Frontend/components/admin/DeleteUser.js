import React from 'react'
import { View, Text,Button,StyleSheet,Dimensions,TextInput,TouchableOpacity} from 'react-native';

export default class DeleteUser extends React.Component {
    componentDidMount(){
        fetch('http://192.168.1.9:8080/users/'+this.props.route.params.email, {
            method: 'DELETE',
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
                    title="Utente eliminato!"
                    onPress={() => this.props.navigation.navigate("Admin")}
        />
            </View>
        )
    
    }
}