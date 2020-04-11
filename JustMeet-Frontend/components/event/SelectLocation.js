import React from 'react';
import { ActivityIndicator, Text, Button, Platform, StyleSheet, View,TextInput ,Dimensions} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';



export default class ScegliLocation extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      indirizzo: '',
      result: '',
      inProgress: false
    };
  }
  
  componentDidMount() {
    Permissions.askAsync(Permissions.LOCATION);
  }

  static navigationOptions = {
    title: 'Geocoding',
  }

  _attemptGeocodeAsync = async () => {
    this.setState({ inProgress: true, error: null });
    try {
      let result = await Location.geocodeAsync(this.state.indirizzo);
      this.setState({ result });
    } catch (e) {
      this.setState({ error: e.message });
    } finally {
      this.setState({ inProgress: false });
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Scegli una location</Text>
        </View>

      

        <View style={styles.separator} />

        <View style={styles.actionContainer}>
          <Button
            onPress={this._attemptGeocodeAsync}
            title="Avanti"
            style={styles.button}
          />
         
        </View>
      </View>
    );
  }

  
}

const { width: WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginTop: 10,
    marginBottom: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  headerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginHorizontal: 20,
    marginBottom: 0,
    marginTop: 20,
  },
  exampleText: {
    fontSize: 15,
    color: '#ccc',
    marginVertical: 10,
  },
  selectedExampleText: {
    color: 'black',
  },
  resultText: {
    padding: 20,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  errorResultText: {
    padding: 20,
    color: 'red',
  },
  button: {
    ...Platform.select({
      android: {
        marginBottom: 10,
      },
    }),
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'white',
    color: 'black',
    marginHorizontal: 25,
    marginBottom: 25
}
});