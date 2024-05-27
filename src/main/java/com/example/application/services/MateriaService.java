package com.example.application.services;

import com.example.application.data.Materia;
import com.example.application.data.MateriaRepository;
import com.example.application.data.Materia;
import com.example.application.services.MateriaService.MateriaRecord;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.BrowserCallable;
import jakarta.persistence.Column;
import jakarta.transaction.Transactional;
import jakarta.validation.constraints.NotNull;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Stream;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
@AnonymousAllowed
@BrowserCallable
public class MateriaService {

    private final MateriaRepository repository;

    public record MateriaRecord(
            Long id,
            // nombre de la aplicación
            @NotNull 
            @Column(unique = true) 
            String nombre,

            @NotNull 
            @Column(unique = true) 
            String codigo,

            @NotNull             
            String descripcion
            ) {
    }

    public MateriaService(MateriaRepository repository) {
        this.repository = repository;
    }

    private MateriaRecord toMateriaRecord(Materia laMateria) {
        return new MateriaRecord(
                laMateria.getId(),
                laMateria.getNombre(), 
                laMateria.getCodigo(), 
                laMateria.getDescripcion()
                );
    }

    private MateriaRecord saveMateria(MateriaRecord nuevaMateria) {
        // Crea un nuevo objeto Materia y asigna los valores del objeto recibido
        Materia dbMateria = new Materia();
        dbMateria.setNombre(nuevaMateria.nombre);        
        dbMateria.setDescripcion(nuevaMateria.descripcion);        
        dbMateria.setCodigo(nuevaMateria.codigo);        
        // Guarda el nuevo organismo en la base de datos
        Materia savedMateria = repository.save(dbMateria);

        // Devuelve el organismo guardado después de convertirlo a MateriaRecord 
        return toMateriaRecord(savedMateria);
    }

    private MateriaRecord updateMateria(MateriaRecord laMateria) {
        var dbMateria = repository.findById(laMateria.id).orElseThrow();

        dbMateria.setNombre(laMateria.nombre);        
        dbMateria.setNombre(laMateria.codigo);        
        dbMateria.setNombre(laMateria.descripcion);        

        Materia savedMateria = repository.save(dbMateria);
        
        return toMateriaRecord(savedMateria);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
    
    public List<MateriaRecord> findAllMaterias() {
        Stream<Materia> listaResul = repository.findAll().stream();
        
        return listaResul.map(this::toMateriaRecord).toList();
    }

    public MateriaRecord save(MateriaRecord laMateria) {
        MateriaRecord rta;
        // var dbMateria = repository.findById(elMateria.id);
        if (laMateria.id == 0)
            rta = this.saveMateria(laMateria);
        else
            rta = this.updateMateria(laMateria);
        return rta;
    }


}