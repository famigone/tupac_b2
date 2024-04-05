package com.example.application.data;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "desafio")
public class Desafio extends AbstractEntity {

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

    public Desafio() {
        
    }
    
    public String getNarrativa() {
        return narrativa;
    }

    public void setNarrativa(String narrativa) {
        this.narrativa = narrativa;
    }

    // nombre del desafío
    @NotBlank
    @NotNull
    private Number orden;

    public Number getOrden() {
        return orden;
    }

    public void setOrden(Number orden) {
        this.orden = orden;
    }

    //fk al tp
    @NotBlank
    @NotNull
    private Long tpId;

    public Long getTpId() {
        return tpId;
    }

    public void setTpId(Long tpId) {
        this.tpId = tpId;
    }

}