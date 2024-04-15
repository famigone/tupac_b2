package com.example.application.data;


import java.util.List;
import java.util.Set;
import java.util.stream.Stream;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.helger.commons.email.EmailAddress;

public interface DesafioRepository extends JpaRepository<Desafio, Long>{
    
    
   // List<Practico> findPracticoesByPerfiles(Long id);    
   
   @Query("SELECT d FROM Desafio d JOIN FETCH d.practico")
   List<Desafio> findAllWithPracticos();

   //List<Practico> findPractico(@Param("perfilId") Long perfilId); 

//@Query("SELECT a FROM Practico a JOIN a.perfiles p WHERE p.id = :perfilId")
//List<Practico> findPracticoesByPerfilId(@Param("perfilId") Long perfilId);



}