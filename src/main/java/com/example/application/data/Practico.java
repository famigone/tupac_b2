package com.example.application.data;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.annotation.Nullable;
import java.util.Date;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

@Entity

public class Practico extends AbstractEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    // nombre del desafío
    @NotBlank
    @NotNull
    private String descripcion;

    // nombre de la Practico
    @NotBlank
    @NotNull
    @Column(unique = true)
    private String nombre;

    public Practico() {

    }

    public String getDescripcion() {
        return descripcion;
    }

    @ManyToOne
    private Materia materia;

    public Materia getMateria() {
        return materia;
    }

    public void setMateria(Materia materia) {
        this.materia = materia;
    }

    // nombre del desafío
    @NotNull
    private Date fechaVisible;

    @OneToMany(mappedBy = "practico")
    private List<Desafio> desafios = new LinkedList<>();

    @ManyToMany(mappedBy = "practicos")
    private List<User> users = new LinkedList<>();

    public List<User> getUsers() {
        return users;
    }

    public String getNombre() {
        return nombre;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public List<Desafio> getDesafios() {
        return desafios;
    }

    public void setDesafios(List<Desafio> desafios) {
        this.desafios = desafios;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Date getfechaVisible() {
        return fechaVisible;
    }

    public void setfechaVisible(Date fechaVisible) {
        this.fechaVisible = fechaVisible;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}