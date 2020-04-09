package it.unicam.cs.ids.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import it.unicam.cs.ids.model.Event;
import it.unicam.cs.ids.model.Scheduler;
import it.unicam.cs.ids.repository.EventRepository;
import it.unicam.cs.ids.repository.SchedulerRepository;

@RestController
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
	        
	        String pattern = "dd/MM/yyyy";
	        DateFormat df = new SimpleDateFormat(pattern);
	        Date today = Calendar.getInstance().getTime();
	        String todayAsString = df.format(today);
	        
	        for(Event e : eventi) {
	        	if(e.before(todayAsString))
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
