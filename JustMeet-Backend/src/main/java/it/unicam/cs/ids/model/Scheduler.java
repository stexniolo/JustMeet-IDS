package it.unicam.cs.ids.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "scheduling")
public class Scheduler {
	
	@Id
	private int id;
	
	@Column
	private Date ultimoScehduling;
	
	@Column
	private Date orarioAttuale;

	
	public Scheduler() {	
		if(this.orarioAttuale == null)
			this.ultimoScehduling = new Date();
		this.ultimoScehduling = this.orarioAttuale;
		this.orarioAttuale = new Date();
	}


	public Date getUltimoScehduling() {
		return ultimoScehduling;
	}


	public void setUltimoScehduling(Date ultimoScehduling) {
		this.ultimoScehduling = ultimoScehduling;
	}


	public Date getOrarioAttuale() {
		return orarioAttuale;
	}


	public void setOrarioAttuale(Date orarioAttuale) {
		this.orarioAttuale = orarioAttuale;
	}
	
  
}