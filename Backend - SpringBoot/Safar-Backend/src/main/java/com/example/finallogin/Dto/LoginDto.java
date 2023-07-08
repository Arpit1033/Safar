package com.example.finallogin.Dto;

public class LoginDto {
    
    private String username; // User's username
    private String password; // User's password
    
    public LoginDto() {
    }

    // Constructor with parameters
    public LoginDto(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // Getter and Setter methods for username
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    // Getter and Setter methods for password
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
