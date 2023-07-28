package com.example.demo.Service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.Entity.Entity2;
import com.example.demo.Repository.Repo2;



@org.springframework.stereotype.Service
public class Service2 {
	
		@Autowired
		Repo2 Erepo;
		public String addDetails(Entity2 ee) {
			Erepo.save(ee);
			return "Data added";
		}
		public String updateDetails(Entity2 ee) {
			Erepo.saveAndFlush(ee);
			return "Data updated";
		}
		
		public String deleteDetails(int id) {
			Erepo.deleteById(id);
			return "data Deleted";
		}
		public List<Entity2> showDetails() {
				return Erepo.findAll();
		}

}