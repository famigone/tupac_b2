package com.example.application.data;


import java.util.List;
import java.util.Set;
import java.util.stream.Stream;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.helger.commons.email.EmailAddress;

public interface MateriaRepository extends JpaRepository<Materia, Long>, JpaSpecificationExecutor<Materia> {
    
    
   // List<Materia> findMateriaesByPerfiles(Long id);    
   
   

   //List<Materia> findMateria(@Param("perfilId") Long perfilId); 

//@Query("SELECT a FROM Materia a JOIN a.perfiles p WHERE p.id = :perfilId")
//List<Materia> findMateriaesByPerfilId(@Param("perfilId") Long perfilId);

Materia getMateriaById(Long id);

}