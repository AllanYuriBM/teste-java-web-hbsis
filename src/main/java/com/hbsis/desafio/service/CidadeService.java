package com.hbsis.desafio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hbsis.desafio.model.Cidade;
import com.hbsis.desafio.repository.CidadeRepository;

@Service
public class CidadeService {

	@Autowired
	private CidadeRepository cidadeRepository;
	
	public List<Cidade> getCidades() {
		List<Cidade> listaCidades = cidadeRepository.findAll(); 
		return listaCidades;
	}
	
	
	public void save(String pais, String nome) {
		if(cidadeRepository.findByNomeAndPais(nome, pais) == null) {
			Cidade city = new Cidade();
			city.setNome(nome);
			city.setPais(pais);
			save(city);
		}
	}
	
	public void save(Cidade cidade) {
		cidadeRepository.save(cidade);
	}
	
}
