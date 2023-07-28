package com.example.demo.Entity;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;

@jakarta.persistence.Entity
@Table(name="appoinment")
public class Entity1 {
@jakarta.persistence.Id
@GeneratedValue
	private int id;
	private String custname;
	private String mobilemodel;
	private String issue;
	private String appoinment;
	public String getCustname() {
		return custname;
	}
	public void setCustame(String custname) {
		this.custname = custname;
	}
	public String getMobilemodel() {
		return mobilemodel;
	}
	public void setMobilemodel(String mobilemodel) {
		this.mobilemodel = mobilemodel;
	}
	public String getIssue() {
		return issue;
	}
	public void setIssue(String issue) {
		this.issue = issue;
	}
	public String getAppoinment() {
		return appoinment;
	}
	public void setEmail(String appoinment) {
		this.appoinment = appoinment;
	}

	public Entity1(int id, String custname, String mobilemodel, String issue, String appoinment) {
		super();
		this.id = id;
		this.custname = custname;
		this.mobilemodel = mobilemodel;
		this.issue = issue;
		this.appoinment= appoinment;
	}
	public Entity1()
	{
		
	}
}