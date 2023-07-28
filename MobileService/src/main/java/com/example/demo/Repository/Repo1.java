package com.example.demo.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Entity1;



@Repository
public interface Repo1 extends JpaRepository<Entity1, Integer>{

}