package com.example.application.data;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

@Entity

public class CasoTest extends AbstractEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    // nombre del desafío
    @NotBlank
    @NotNull
    private String narrativa;
    
    @ManyToOne 
    private Practico practico;

 @ManyToMany(mappedBy = "desafios")    
    private List<User> users = new LinkedList<>();

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public Practico getPractico() {
        return practico;
    }

    public void setPractico(Practico practico) {
        this.practico = practico;
    }

    public CasoTest() {
        
    }
    
    public String getNarrativa() {
        return narrativa;
    }

    public void setNarrativa(String narrativa) {
        this.narrativa = narrativa;
    }

    @NotNull    
    private Integer ordenamiento; 

    //fk al tp
    
  

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getOrdenamiento() {
        return ordenamiento;
    }

    public void setOrdenamiento(Integer ordenamiento) {
        this.ordenamiento = ordenamiento;
    }

}