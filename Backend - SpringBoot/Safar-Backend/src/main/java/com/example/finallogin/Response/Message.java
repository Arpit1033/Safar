package com.example.finallogin.Response;

public class Message {
    String message; // Variable for storing message/response
    Boolean status; // Is set to true or false according to login status of user
 
    // Getter and Setter for message
    public String getMessage() {
        return message;
    }
 
    public void setMessage(String message) {
        this.message = message;
    }
 
    // Getter and Setter for status
    public Boolean getStatus() {
        return status;
    }
 
    public void setStatus(Boolean status) {
        this.status = status;
    }
 
    // Constructor with parameters
    public Message(String message, Boolean status) {
        this.message = message;
        this.status = status;
    }
}
