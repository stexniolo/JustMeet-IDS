package it.unicam.cs.ids.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import it.unicam.cs.ids.model.Event;
import it.unicam.cs.ids.model.Scheduler;
import it.unicam.cs.ids.repository.EventRepository;
import it.unicam.cs.ids.repository.SchedulerRepository;

public class SchedulerController {
	
	@Autowired
	private SchedulerRepository scheduler;
	
	@Autowired
	private EventRepository eventRepository;
	
	
	 @Scheduled(fixedRate = 600000) //10 minuti
	    public void checkDatabase() {
		 	Scheduler now = new Scheduler();
		 	scheduler.save(now);
		 	
	        List<Event> eventi = new ArrayList<Event>();
	        
	        eventi.addAll(eventRepository.findAll());
	        
	        for(Event e : eventi) {
	        	if(e.getDate().before(now.getOrarioAttuale()))
	        		eventRepository.delete(e);
	        }
	    }
	 
	 @GetMapping("/schedulers")
	    public List<Scheduler> index(){
	        return scheduler.findAll();
	    }
	 
	  @GetMapping("/schedulers/{id}")
	  public Scheduler findLocation(@PathVariable String id) {
		  return scheduler.findById(Integer.parseInt(id));
	  }
}
