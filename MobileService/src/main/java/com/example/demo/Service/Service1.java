package com.example.demo.Service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.Entity.Entity1;
import com.example.demo.Repository.Repo1;



@org.springframework.stereotype.Service
public class Service1 {
	
		@Autowired
		Repo1 Erepo;
		public String addDetails(Entity1 ee) {
			Erepo.save(ee);
			return "Data added";
		}
		public String updateDetails(Entity1 ee) {
			Erepo.saveAndFlush(ee);
			return "Data updated";
		}
		
		public String deleteDetails(int id) {
			Erepo.deleteById(id);
			return "data Deleted";
		}
		public List<Entity1> showDetails() {
				return Erepo.findAll();
		}

}