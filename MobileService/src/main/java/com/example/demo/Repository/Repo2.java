package com.example.demo.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Entity2;



@Repository
public interface Repo2 extends JpaRepository<Entity2, Integer>{

}