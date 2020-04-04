package it.unicam.cs.ids.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;


@Entity
@Table(name = "Event")
public class Event {
	
	static int countID = 1;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column
	private int id;
	
	@Column
	private String title;
	
	@Column
	private String description;
	
	@Column
	@JsonFormat(pattern="dd/MM/yyyy HH:mm", shape = Shape.STRING)
	private Date date;
	
	@JoinColumn
	@OneToOne(cascade = CascadeType.ALL)
	private Location luogo;
	
	@Column
	private String organizzatore;
	
	@JoinColumn
	@OneToOne(cascade = CascadeType.ALL)
	private Topic topic;
	
	@ElementCollection
	@JoinColumn
	@LazyCollection(LazyCollectionOption.FALSE)
	private List<String> participants; 
	
	@Column
	private int numPartecipanti; //massimo numero di partecipanti
	
	@Column
	private int adesioniAttuali;
	
	public Event() {

	}
	
	public Event(String title,String description,
			     Date date ,Location luogo,
			     Topic topic,
			     String organizzatore,int numPartecipanti) {
		this.title = title;
		this.description = description;
		this.date = date;
		this.luogo = luogo;
		this.topic = topic;
		this.organizzatore = organizzatore;
		this.participants = new ArrayList<String>();
		this.numPartecipanti = numPartecipanti;
		this.adesioniAttuali = 1;
	}
	
	

	public int getAdesioniAttuali() {
		return this.adesioniAttuali;
	}

	public void setAdesioniAttuali(int adesioniAttuali) {
		this.adesioniAttuali = adesioniAttuali;
	}

	public String getOrganizzatore() {
		return organizzatore;
	}

	public void setOrganizzatore(String organizzatore) {
		this.organizzatore = organizzatore;
	}

	public int getNumPartecipanti() {
		return numPartecipanti;
	}

	public void setNumPartecipanti(int numPartecipanti) {
		this.numPartecipanti = numPartecipanti;
	}

	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Location getLocation() {
		return luogo;
	}


	public void setLocation(Location luogo) {
		this.luogo = luogo;
	}


	public List<String> getParticipants() {
		return participants;
	}


	public void setParticipants(List<String> participants) {
		this.participants = participants;
	}


	public int getId() {
		return id;
	}

	public Location getLuogo() {
		return luogo;
	}

	public void setLuogo(Location luogo) {
		this.luogo = luogo;
	}

	public Topic getTopic() {
		return topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((title == null) ? 0 : title.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Event other = (Event) obj;
		if (title == null) {
			if (other.title != null)
				return false;
		} else if (!title.equals(other.title))
			return false;
		return true;
	}	
	
	
	
}
