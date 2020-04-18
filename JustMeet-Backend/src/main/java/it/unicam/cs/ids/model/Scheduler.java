package it.unicam.cs.ids.model;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "scheduling")
public class Scheduler {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column
	private int id;
	
	@Column
	private String ultimoScehduling;
	
	@Column
	private String orarioAttuale;

	
	public Scheduler() {	
	     DateFormat df = new SimpleDateFormat("dd/MM/yyyy HH:mm");
	     String todayAsString = df.format(Calendar.getInstance().getTime());
		if(this.orarioAttuale == null)
			this.ultimoScehduling = todayAsString;
		this.ultimoScehduling = this.orarioAttuale;
		this.orarioAttuale = todayAsString;
	}


	public String getUltimoScehduling() {
		return ultimoScehduling;
	}


	public void setUltimoScehduling(String ultimoScehduling) {
		this.ultimoScehduling = ultimoScehduling;
	}


	public String getOrarioAttuale() {
		return orarioAttuale;
	}


	public void setOrarioAttuale(String orarioAttuale) {
		this.orarioAttuale = orarioAttuale;
	}
	
  
}