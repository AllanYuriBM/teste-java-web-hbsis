package com.hbsis.desafio.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hbsis.desafio.service.ApiService;

@RestController
@RequestMapping("/forecast")
public class ApiRest {
	
	@Autowired
	ApiService apiService;
		
	@GetMapping(value= "/{cidade}")
	public HttpEntity<String> getApi(@PathVariable("cidade") String cidade) {
		
	    HttpEntity<String> response = apiService.getApiForecast(cidade);
		
		return response;
		
	}
		
}	


