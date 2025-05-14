package com.gym.repository;

import com.gym.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    // Consulta personalizada para contar usuarios por membresía
    long countByMembresiaId(Long membresiaId);
}
