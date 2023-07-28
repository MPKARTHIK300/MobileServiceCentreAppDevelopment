package com.example.demo.Service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.Entity.Entity;
import com.example.demo.Repository.Repo;



@org.springframework.stereotype.Service
public class Service {
	
		@Autowired
		Repo Erepo;
		public String addDetails(Entity ee) {
			Erepo.save(ee);
			return "Data added";
		}
		public String updateDetails(Entity ee) {
			Erepo.saveAndFlush(ee);
			return "Data updated";
		}
		
		public String deleteDetails(int id) {
			Erepo.deleteById(id);
			return "data Deleted";
		}
		public List<Entity> showDetails() {
				return Erepo.findAll();
		}

}