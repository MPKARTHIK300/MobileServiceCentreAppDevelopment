package com.example.demo.Controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Entity2;
import com.example.demo.Service.Service2;
@RestController
@CrossOrigin
public class Controller2 {
	@Autowired
	Service2 Eservice;
	
	@GetMapping("/get")
	public List <Entity2> show() {
		return Eservice.showDetails();
	}
	
	@PutMapping("/put")
	public String update(@RequestBody Entity2 ee) {
		return Eservice.updateDetails(ee);
	}
	
	@DeleteMapping("/del/{eid}")
	public String delete(@PathVariable("eid") int id) {
		return Eservice.deleteDetails(id);
	}
	
	@PostMapping("/post")
	public String add(@RequestBody Entity2 ee) {
		return Eservice.addDetails(ee);
		
	}
}