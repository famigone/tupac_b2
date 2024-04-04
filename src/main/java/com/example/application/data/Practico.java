package com.example.application.data;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.List;
import java.util.Set;



@Entity
@Table(name = "Practico")
public class Practico extends AbstractEntity {
  
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    //nombre de la Practico
    @NotBlank
    @NotNull      
    @Column(unique = true)   
    private String nombre;

    private Materia materia;
    
    @ManyToOne
    public Materia getMateria() {
        return materia;
    }

    public Practico() {
        
    }
    
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
 
 
    
 
}