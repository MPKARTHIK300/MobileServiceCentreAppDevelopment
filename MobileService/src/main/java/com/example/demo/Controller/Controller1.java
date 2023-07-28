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


import com.example.demo.Entity.Entity1;
import com.example.demo.Service.Service1;
@RestController
@CrossOrigin
public class Controller1 {
	@Autowired
	Service1 Eservice;
	
	@GetMapping("/displayDetails")
	public List <Entity1> show() {
		return Eservice.showDetails();
	}
	
	@PutMapping("/changeDetails")
	public String update(@RequestBody Entity1 ee) {
		return Eservice.updateDetails(ee);
	}
	
	@DeleteMapping("/removeDetails/{eid}")
	public String delete(@PathVariable("eid") int id) {
		return Eservice.deleteDetails(id);
	}
	
	@PostMapping("/postDetails")
	public String add(@RequestBody Entity1 ee) {
		return Eservice.addDetails(ee);
		
	}
}