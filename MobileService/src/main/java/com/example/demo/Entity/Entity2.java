package com.example.demo.Entity;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Table;

@jakarta.persistence.Entity
@Table(name="login")
public class Entity2 {
@jakarta.persistence.Id
@GeneratedValue
	private int Id;
	private String username;
	private String password;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	public Entity2(int id, String username, String password) {
		super();
		Id = id;
		this.username = username;
		this.password = password;
	}
	public Entity2()
	{
		
	}
}