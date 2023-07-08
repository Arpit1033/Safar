package com.example.finallogin.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration // Indicates that this class provides bean definitions and configuration
public class SecurityConfig {
    
    @Bean // Indicates that this method produces a bean to be managed by the Spring container

    /* Create and return an instance of BCryptPasswordEncoder which is a PasswordEncoder implementation that uses the BCrypt hashing function*/
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
