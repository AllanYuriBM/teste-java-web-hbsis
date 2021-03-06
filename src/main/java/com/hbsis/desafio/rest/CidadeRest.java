package com.hbsis.desafio.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hbsis.desafio.model.Cidade;
import com.hbsis.desafio.service.CidadeService;

@RestController
@RequestMapping("/cidade")
public class CidadeRest {
	
	@Autowired
	CidadeService cidadeService;
	
	@GetMapping()
	public List<Cidade> listaCidades() {
		return cidadeService.getCidades();
	}
	
	@PostMapping(value= "/{pais}/{cidade}")
	public void cadastraCidade(@PathVariable("pais") String pais, @PathVariable("cidade") String cidade) {
	    cidadeService.save(pais, cidade);
	}
	
}
