package com.example.demo.config;



import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

import com.example.demo.Constants.Api;


@Configuration

public class CorsConfig {
	  @Bean
	    public CorsWebFilter corsWebFilter() {
	        CorsConfiguration corsConfig = new CorsConfiguration();
	        corsConfig.addAllowedOrigin("http://localhost:3000");
	        corsConfig.setMaxAge(3600L);
	        corsConfig.addAllowedMethod("GET");
	        corsConfig.addAllowedMethod("POST");
	        corsConfig.addAllowedMethod("PUT");
	        corsConfig.addAllowedMethod("DELETE");
	        corsConfig.addAllowedMethod("OPTIONS");
	        corsConfig.addAllowedHeader("*");

	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	        source.registerCorsConfiguration("/**", corsConfig);

	        return new CorsWebFilter(source);
	    }
}
