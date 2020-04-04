import React from "react";
import {StyleSheet,View, Text} from "react-native"; 
import MapView from 'react-native-maps';

export default class GoogleMaps extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    loading: true,
    dataSource:[]
    };
  }
  
  componentDidMount(){
  fetch("http://192.168.1.8:8080/events")
  .then(response => response.json())
  .then((responseJson)=> {
    this.setState({
    loading: false,
    dataSource: responseJson
    })
  })
  .catch(error=>console.log(error)) //to catch the errors if any
  }
  
  
  render(){
      return(

       
          
    <View style={styles.container}>
    
        
    
    <MapView style={styles.map}
        region={{
            latitude: 43.1023,
            longitude: 13.2313,
            latitudeDelta: 0.9,
            longitudeDelta: 0.9
        }}>

    {this.state.dataSource.map(event => 
        <MapView.Marker coordinate={{
          latitude: event.location.latitudine,
          longitude: event.location.longitudine,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }}
        title = {event.title}
        description = {event.description}/>
    )}
    </MapView> 
    </View>
    
    );
  }
  
}

  const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left:0,
        bottom:0,
        right:0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map:{
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0
    }
  });