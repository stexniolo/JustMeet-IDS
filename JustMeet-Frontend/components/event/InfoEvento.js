import React from 'react'
import {
    Image,
    Button,
    Alert,
    Dimensions,
    StyleSheet,
    View,
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity
    } from "react-native";
    import {Card,Icon} from 'react-native-elements' 

export default class InfoEvento extends React.Component{
    render(){
        return(
            <View>
                <Text style={styles.text}>
                    Luogo:{"\n"} {this.props.route.params.nomeLocation}{"\n"}{"\n"}
                    Data : {"\n"}{this.props.route.params.date}{"\n"}{"\n"}
                    organizzatore:{"\n"} {this.props.route.params.organizzatore}{"\n"}{"\n"}
                    topic: {"\n"}{this.props.route.params.topic}{"\n"}{"\n"}
                    partecipanti:{"\n"} {this.props.route.params.participants}{"\n"}{"\n"}
                    adesioni attuali: {"\n"}{this.props.route.params.adesioniAttuali}{"\n"}{"\n"}
                </Text>

                <TouchableOpacity style={styles.button}
                              onPress = {() => this.props.navigation.navigate("Scrivi Commento",{
                                idEvento : this.props.route.params.id,
                                email: this.props.route.params.email,
                                idEvento: this.props.route.params.id
                            })}>
                        <Text style={styles.text}>Pubblica un Commento</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                              onPress = {() => this.props.navigation.navigate("Sezione Commenti",{
                                idEvento : this.props.route.params.id,
                                commenti: this.props.route.params.commento
                            })}>
                        <Text style={styles.text}>Vedi Commenti</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
      },
      button: {
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 20,
        marginTop: 20,
        width: 300,
        borderRadius:50
      }
})