package it.unicam.cs.ids.controller;

import java.util.Date;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import it.unicam.cs.ids.model.Event;
import it.unicam.cs.ids.model.Location;
import it.unicam.cs.ids.model.Topic;
import it.unicam.cs.ids.repository.EventRepository;

@RestController
public class EventController {
	
	@Autowired
	private EventRepository eventRepository;
	
	
	  @GetMapping("/events")
	  /**
	   * Ritorna la lista di tutti gli eventi disponibili
	   */
	    public List<Event> index(){
	        return eventRepository.findAll();
	    }
	  
	  @GetMapping("/events/{id}")
	  /**
	   * Ritorna l'evento con id specifico
	   */
	    public Event show(@PathVariable String id){
	        int eventID = Integer.parseInt(id);
	        return eventRepository.findByid(eventID);
	    }
	  
	  @PostMapping("/events")
	  /**
	   * Crea un nuovo evento
	   */
	    public void create(@RequestBody Map<String, String> body){
		    String title = body.get("title");
	        String description = body.get("description");
	       
	        Long date = Long.parseLong(body.get("date"));
	        Date dateEvent = new Date(date);
	        
	        String latitude = body.get("latitude");
	        String longitude = body.get("longitude");
	        Location location = new Location(Double.parseDouble(latitude),Double.parseDouble(longitude));
	        Topic topic = new Topic(Integer.parseInt(body.get("topic")));
	        String organizzatore = body.get("organizzatore");
	        String numPartecipanti = body.get("numPartecipanti");
		    int partecipanti = Integer.parseInt(numPartecipanti);
		    if(eventRepository.findByTitle(title) != null)
		    	return;
		    Event e = new Event(title,description,dateEvent,location,topic,organizzatore,partecipanti);
		    e.getParticipants().add(organizzatore);
		    eventRepository.save(e);
	    }
	  
	  @GetMapping("/events/{id}/participants")
	  /**
	   * Ritorna la lista dei partecipanti di un evento con id specifico
	   */
	  public List<String> showParticipants(@PathVariable String id) {
		  int eventId = Integer.parseInt(id);
	      Event event = eventRepository.findByid(eventId);
	      return event.getParticipants();
	  }
	  
	  @PostMapping("/events/{id}/participants")
	  /**
	   * Aggiunge un partecipante all'evento con id specifico
	   */
	  public void addPartecipant(@PathVariable String id,@RequestBody Map<String,String> body) {
		  int eventId = Integer.parseInt(id);
	      Event event = eventRepository.findByid(eventId);
	      String participant = body.get("fullName");
	      if((!event.getParticipants().contains(participant)) && event.getAdesioniAttuali() != event.getNumPartecipanti()) {
	      event.getParticipants().add(participant);
	      int adesioni = event.getAdesioniAttuali() + 1;
	      event.setAdesioniAttuali(adesioni);
	      eventRepository.save(event);
	      }
	  }
	  
	  @DeleteMapping("/events/{id}/participants")
	  /**
	   * Rimuove un partecipante dall'evento con id specifico
	   */
	  public void deleteParticipant(@PathVariable String id,@RequestBody Map<String,String> body) {
		  int eventId = Integer.parseInt(id);
	      Event event = eventRepository.findByid(eventId);
	      String participant = body.get("fullName");
	      int index = event.getParticipants().indexOf(participant);
	      event.getParticipants().remove(index);
	      int adesioni = event.getAdesioniAttuali() - 1;
	      event.setAdesioniAttuali(adesioni);
	      eventRepository.save(event);
	  }
	  
	  @PutMapping("/events/{id}")
	  /**
	   *  Modifica un'evento con id specifico 
	   */
	    public Event update(@PathVariable String id, @RequestBody Map<String, String> body){
	        int eventId = Integer.parseInt(id);
	        Event event = eventRepository.findByid(eventId);
	        event.setTitle(body.get("title"));
	        event.setDescription(body.get("description"));
	        Long date = Long.parseLong(body.get("date"));
	        event.getDate().setTime(date);
	        event.getLocation().setLatitudine(Double.parseDouble(body.get("latitude")));
	        event.getLocation().setLongitudine(Double.parseDouble(body.get("longitude")));
	        String numPartecipanti = body.get("numPartecipanti");
	        event.setNumPartecipanti(Integer.parseInt(numPartecipanti));
	        return eventRepository.save(event);
	  }
	  
	  @DeleteMapping("/events/{id}")
	  /**
	   * Rimuove un evento con id specifico
	   */
	    public boolean delete(@PathVariable String id){
	        int eventId = Integer.parseInt(id);
	        eventRepository.deleteById(eventId);
	        return true;
	    }
}
