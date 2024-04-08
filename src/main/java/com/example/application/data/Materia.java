package com.example.application.data;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Null;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;



@Entity
@Table(name = "materia")
public class Materia extends AbstractEntity {
  
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

   
   @OneToMany(mappedBy="materia") 
    private List<Practico> practicos = new LinkedList<>();

    @ManyToMany(mappedBy = "materias")    
    private List<User> users = new LinkedList<>();

     // nombre de la materia
     @NotBlank
     @NotNull
     @Column(unique = true)
     private String nombre;

     public Materia() {
        
     }

     
    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public Long getId() {
        return id;
    }

public List<Practico> getPracticos() {
    return practicos;
}

public void setPracticos(List<Practico> practicos) {
    this.practicos = practicos;
}

    /*     public List<Practico> getPracticos() {
        return practicos;
    }
*/
    public void setId(Long id) {
        this.id = id;
    }

        
    
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
 
 
    
 
}