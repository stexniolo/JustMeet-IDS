import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native'
 
export default class MyDatePicker extends React.Component {
  constructor(props){
    super(props)
    this.state = new Date()
  }
 
  render(){
    return (
      <View>
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY HH:mm"
        minDate= {new Date(Date.now())}
        maxDate="01-06-2025"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />

      <TouchableOpacity
          style={styles.button}
          onPress = {() => this.props.navigation.replace("Crea un evento",{dataSelezionata: this.state})}>
          <Text style = {styles.text}> Fatto </Text>
      </TouchableOpacity>

      </View>
    )
  }
}


const styles = StyleSheet.create({
button: {
  alignItems: 'center',
  backgroundColor: '#DDDDDD',
  padding: 20,
  marginTop: 20
},
text: {
  color: 'black',
  textAlign: 'center',
  fontSize: 20,
  fontWeight: 'bold'
}
})