package com.hbsis.desafio.service;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class ApiService {

	public HttpEntity<String> getApiForecast(String cidade) {
		RestTemplate restTemplate = new RestTemplate();
		
		String apiKey = "eb8b1a9405e659b2ffc78f0a520b1a46";
		String mode = "json";
		String url = "https://api.openweathermap.org";
		
		HttpHeaders headers = new HttpHeaders();
		headers.set("Accept", MediaType.APPLICATION_JSON_VALUE);
		
		UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(url).
				path("/data").path("/2.5").path("/forecast").queryParam("q", cidade).queryParam("units", "metric").queryParam("mode", mode).queryParam("appid", apiKey);
		
		HttpEntity<?> entity = new HttpEntity<>(headers);
		
		HttpEntity<String> response = restTemplate.exchange(builder.toUriString(), HttpMethod.GET, entity, String.class);
		
		return response;
		
	}

	
}
