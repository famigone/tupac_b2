package com.example.application.data;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.List;
import java.util.Set;



@Entity
@Table(name = "materia")
public class Materia extends AbstractEntity {
  
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    //nombre de la materia
    @NotBlank
    @NotNull        
    private String nombre;

        
    public Materia() {
        
    }
    
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
 
 
    
 
}