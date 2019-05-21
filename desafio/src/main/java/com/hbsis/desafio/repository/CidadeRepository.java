package com.hbsis.desafio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hbsis.desafio.models.Cidade;

public interface CidadeRepository extends JpaRepository<Cidade, String>{

	public Cidade findByNomeAndPais(String nome, String pais);
	
	public Cidade findByNome(String nome);
	
}
