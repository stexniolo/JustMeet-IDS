package it.unicam.cs.ids.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="comment")
public class Commento {
	
	@Id
	@Column
	private int id;
	
	@Column
	private String body;
	
	@JoinColumn
	@OneToOne(cascade = CascadeType.ALL)
	private User mittente;
	
	@Column
	private String orarioPubblicazione;
	
	public Commento() {
		
	}
	
	public Commento(String body,User mittente,String orario) {
		this.body = body;
		this.mittente = mittente;
		this.orarioPubblicazione = orario;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public User getMittente() {
		return mittente;
	}

	public void setMittente(User mittente) {
		this.mittente = mittente;
	}

	public int getId() {
		return id;
	}

	public String getOrarioPubblicazione() {
		return orarioPubblicazione;
	}

	public void setOrarioPubblicazione(String orarioPubblicazione) {
		this.orarioPubblicazione = orarioPubblicazione;
	}
	
}
