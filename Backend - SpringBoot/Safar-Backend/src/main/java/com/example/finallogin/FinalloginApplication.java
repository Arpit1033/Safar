package com.example.finallogin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

/* @SpringBootApplication annotation is used to enable Spring Boot auto-configuration 
	and component scanning for the application.
	
	The 'exclude' attribute is used to exclude specific auto-configurations from being applied.
	The default auto-configuration of Spring Security has been disabled.*/ 

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class FinalloginApplication {

	public static void main(String[] args) {
		SpringApplication.run(FinalloginApplication.class, args);
	}

}
