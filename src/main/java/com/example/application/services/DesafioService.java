package com.example.application.services;

import com.example.application.data.Practico;
import com.example.application.data.Desafio;
import com.example.application.data.DesafioRepository;
import com.example.application.data.Desafio;
import com.example.application.services.DesafioService.DesafioRecord;
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
import com.example.application.data.PracticoRepository;

@Service
@AnonymousAllowed
@BrowserCallable
public class DesafioService {
    @Autowired
    private final DesafioRepository DesafioRepository;
    @Autowired
    private final PracticoRepository PracticoRepository;

    public record DesafioRecord(
             Long id,            
            @NotNull String narrativa,
            @NotNull Integer ordenamiento, 
            @NotNull PracticoRecord practico
            ) {
    }
    public record PracticoRecord(
        @NotNull
        Long id,
        String nombre
) {
}
    public DesafioService(DesafioRepository DesafioRepository,
                           PracticoRepository PracticoRepository
     ) {
        this.DesafioRepository = DesafioRepository;
        this.PracticoRepository = PracticoRepository;
    }

    private DesafioRecord toDesafioRecord(Desafio elDesafio) {
        return new DesafioRecord(
                elDesafio.getId(),
                elDesafio.getNarrativa(),
                elDesafio.getOrdenamiento() ,                
                new PracticoRecord(
                    elDesafio.getPractico().getId(),
                    elDesafio.getPractico().getNombre()
                )
                
                );
    }

    private DesafioRecord saveDesafio(DesafioRecord nuevaDesafio) {
        // Crea un nuevo objeto Desafio y asigna los valores del objeto recibido
        Desafio dbDesafio = new Desafio();
        //var Practico = PracticoRepository.findById(nuevaDesafio.practico.id()).orElseThrow();
        dbDesafio.setNarrativa(nuevaDesafio.narrativa);
        dbDesafio.setOrdenamiento(nuevaDesafio.ordenamiento );
        Practico elTp = new Practico();
        elTp.setId(nuevaDesafio.practico.id);                
        dbDesafio.setPractico(elTp);
        // Guarda el nuevo organismo en la base de datos
        Desafio savedDesafio = DesafioRepository.save(dbDesafio);

        // Devuelve el organismo guardado después de convertirlo a DesafioRecord
        return toDesafioRecord(savedDesafio);
    }

    private DesafioRecord updateDesafio(DesafioRecord elDesafio) {
        var dbDesafio = DesafioRepository.findById(elDesafio.id).orElseThrow();
        var Practico = PracticoRepository.findById(elDesafio.practico.id()).orElseThrow();
        dbDesafio.setNarrativa(elDesafio.narrativa); 
        dbDesafio.setOrdenamiento(elDesafio.ordenamiento );        
        dbDesafio.setPractico(Practico);
        Desafio savedDesafio = DesafioRepository.save(dbDesafio);

        return toDesafioRecord(savedDesafio);
    }

    public void delete(Long id) {
        DesafioRepository.deleteById(id);
    }

    public List<DesafioRecord> findAllDesafios() {
        Stream<Desafio> listaResul = DesafioRepository.findAllWithPracticos().stream();

        return listaResul.map(this::toDesafioRecord).toList();
    }

    public DesafioRecord save(DesafioRecord elDesafio) {
        DesafioRecord rta;
        // var dbDesafio = repository.findById(elDesafio.id);
        if (elDesafio.id == 0)
            rta = this.saveDesafio(elDesafio);
        else
            rta = this.updateDesafio(elDesafio);
        return rta;
    }

}