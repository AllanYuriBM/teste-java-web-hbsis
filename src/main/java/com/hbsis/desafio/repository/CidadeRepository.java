package com.hbsis.desafio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hbsis.desafio.model.Cidade;

@Repository
public interface CidadeRepository extends JpaRepository<Cidade, String>{

	Cidade findByNomeAndPais(String nome, String pais);
	
}
