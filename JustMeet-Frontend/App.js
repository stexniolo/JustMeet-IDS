﻿import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '././components/homepage/Welcome.js'
import HomePage from '././components/homepage/HomePage.js'
import EventList from '././components/event/EventList.js'
import GoogleLogin from '././components/login/GoogleLogin.js'
import LoginPage from '././components/login/LoginPage.js'
import CreazioneEvento from '././components/event/CreazioneEvento.js'
import PostEvento from '././components/event/PostEvento.js'
import ProfiloUtente from '././components/user/ProfiloUtente.js'
import PostPartecipante from '././components/event/PostPartecipante.js'
import AdminScreen from '././components/admin/AdminScreen.js';
import partecipazioneEventi from '././components/user/partecipazioneEventi.js';
import eventiCreati from '././components/user/eventiCreati.js';
import PutEvento from '././components/event/PutEvento.js'
import ModificaEvento from '././components/event/ModificaEvento.js';
import AnnullaEvento from '././components/event/AnnullaEvento.js';
import AnnullaPartecipazione from '././components/event/AnnullaPartecipazione.js';
import GoogleMaps from '././components/map/GoogleMaps.js'
import GmailSend from '././components/map/GmailSend.js';
import DeleteUser from '././components/admin/DeleteUser.js';
import EliminaEvento from '././components/admin/EliminaEvento.js';
import ListaEventi from '././components/admin/ListaEventi.js';
import ListaUser from '././components/admin/ListaUser.js';


const Stack = createStackNavigator();


function App() {
  return (    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Benvenuto">
      <Stack.Screen name = "Lista User [Admin]" component={ListaUser}/>
      <Stack.Screen name="Lista Eventi [Admin]" component={ListaEventi}/>
      <Stack.Screen name = "Elimina Utente [Admin]" component={DeleteUser}/>
      <Stack.Screen name = "Elimina Evento [Admin]" component={EliminaEvento}/>
      <Stack.Screen name = "Email" component={GmailSend}/>
      <Stack.Screen name = "Google Maps" component={GoogleMaps}/>
      <Stack.Screen name = "Annulla Partecipazione" component={AnnullaPartecipazione}/>
      <Stack.Screen name = "Annulla Evento" component={AnnullaEvento}/>
      <Stack.Screen name="Modifica Evento" component={ModificaEvento}/>
      <Stack.Screen name = "PutEvento" component = {PutEvento}/>
      <Stack.Screen name= "Eventi Creati" component={eventiCreati}/>
      <Stack.Screen name= "Partecipazione a Eventi" component={partecipazioneEventi}/>
      <Stack.Screen name = "Admin" component={AdminScreen}/>
      <Stack.Screen name = "PostPartecipante" component={PostPartecipante}/>
      <Stack.Screen name = "Profilo Utente" component={ProfiloUtente}/>
      <Stack.Screen name = "PostEvento" component={PostEvento}/>
      <Stack.Screen name="Crea un evento" component={CreazioneEvento}/>
      <Stack.Screen name="LoginPage" component={LoginPage}/>
      <Stack.Screen name="Login" component ={GoogleLogin}/>
      <Stack.Screen name="Benvenuto" component={Welcome}/>
      <Stack.Screen name="JustMeet" component={HomePage}/>
      <Stack.Screen name="Eventi" component={EventList}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
    
}
export default App;