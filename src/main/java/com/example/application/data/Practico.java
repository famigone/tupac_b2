package com.example.application.data;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.annotation.Nullable;
import java.sql.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "practico")
public class Practico extends AbstractEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    // nombre del desafío
    @NotBlank
    @NotNull
    private String descripcion;

    public Practico() {

    }
    
   @ManyToOne 
   private Materia materia;
    
    public String getDescripcion() {
        return descripcion;
    }

    // nombre de la Practico
    @NotBlank
    @NotNull
    @Column(unique = true)
    private String nombre;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

 
    // nombre del desafío
    @NotBlank
    @NotNull
    private Date fechaLimite;

    public Date getFechaLimite() {
        return fechaLimite;
    }

    public void setFechaLimite(Date fechaLimite) {
        this.fechaLimite = fechaLimite;
    }

    

     public Materia getMateria() {
        return materia;
    }

    public void setMateria(Materia materia) {
        this.materia = materia;
    }

}