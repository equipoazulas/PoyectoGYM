package com.gym.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gym.model.Membresia;
import com.gym.repository.MembresiaRepository;

@RestController
@RequestMapping("/api/membresias")
@CrossOrigin(origins = "*")
public class MembresiaController {

    @Autowired
    private MembresiaRepository repository;

    @PostMapping
    public Membresia crearMembresia(@RequestBody Membresia membresia) {
        return repository.save(membresia);
    }

    @GetMapping
    public List<Membresia> listarMembresias() {
        return repository.findAll();
    }
}
