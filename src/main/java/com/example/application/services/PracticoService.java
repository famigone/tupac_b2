package com.example.application.services;

import com.example.application.data.Materia;
import com.example.application.data.Practico;
import com.example.application.data.PracticoRepository;
import com.example.application.data.Practico;
import com.example.application.services.PracticoService.PracticoRecord;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.BrowserCallable;
import jakarta.persistence.Column;
import jakarta.transaction.Transactional;
import jakarta.validation.constraints.NotNull;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import com.example.application.data.MateriaRepository;

@Service
@AnonymousAllowed
@BrowserCallable
public class PracticoService {
    @Autowired
    private final PracticoRepository PracticoRepository;
    @Autowired
    private final MateriaRepository MateriaRepository;

    public record PracticoRecord(
            Long id,
            @NotNull String nombre,
            @NotNull String descripcion,
            @NotNull Date fechaVisible, 
            @NotNull MateriaRecord materia
            ) {
    }
    public record MateriaRecord(
        @NotNull
        Long id,
        String nombre
) {
}
   
public PracticoRecord findById(long practicoid){
    var elPractico = PracticoRepository.findById(practicoid).orElseThrow();
    return  toPracticoRecord(elPractico);
}
public PracticoService(PracticoRepository PracticoRepository,
                           MateriaRepository MateriaRepository
     ) {
        this.PracticoRepository = PracticoRepository;
        this.MateriaRepository = MateriaRepository;
    }

    private PracticoRecord toPracticoRecord(Practico elPractico) {
        return new PracticoRecord(
                elPractico.getId(),
                elPractico.getNombre(),
                elPractico.getDescripcion(),
                elPractico.getfechaVisible(), 
                new MateriaRecord(
                    elPractico.getMateria().getId(),
                    elPractico.getMateria().getNombre()
                )
                
                );
    }



    private PracticoRecord savePractico(PracticoRecord nuevaPractico) {
        // Crea un nuevo objeto Practico y asigna los valores del objeto recibido
        Practico dbPractico = new Practico();
        var materia = MateriaRepository.findById(nuevaPractico.materia.id()).orElseThrow();
        dbPractico.setNombre(nuevaPractico.nombre);
        dbPractico.setDescripcion(nuevaPractico.descripcion);
        dbPractico.setfechaVisible(nuevaPractico.fechaVisible);
        dbPractico.setMateria(materia);
        // Guarda el nuevo organismo en la base de datos
        Practico savedPractico = PracticoRepository.save(dbPractico);

        // Devuelve el organismo guardado después de convertirlo a PracticoRecord
        return toPracticoRecord(savedPractico);
    }

    private PracticoRecord updatePractico(PracticoRecord elPractico) {
        var dbPractico = PracticoRepository.findById(elPractico.id).orElseThrow();
        var materia = MateriaRepository.findById(elPractico.materia.id()).orElseThrow();
        dbPractico.setNombre(elPractico.nombre);
        dbPractico.setNombre(elPractico.nombre);
        dbPractico.setDescripcion(elPractico.descripcion);
        dbPractico.setfechaVisible(elPractico.fechaVisible);
        dbPractico.setMateria(materia);
        Practico savedPractico = PracticoRepository.save(dbPractico);

        return toPracticoRecord(savedPractico);
    }

    public void delete(Long id) {
        PracticoRepository.deleteById(id);
    }

    public List<PracticoRecord> findAllPracticos() {
        Stream<Practico> listaResul = PracticoRepository.findAllWithMateria().stream();

        return listaResul.map(this::toPracticoRecord).toList();
    }

    public PracticoRecord save(PracticoRecord laPractico) {
        PracticoRecord rta;
        // var dbPractico = repository.findById(elPractico.id);
        if (laPractico.id == 0)
            rta = this.savePractico(laPractico);
        else
            rta = this.updatePractico(laPractico);
        return rta;
    }

}