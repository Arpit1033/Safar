package com.example.finallogin.Exception;

public class UserNotFoundException extends RuntimeException{ //exception handling
    public UserNotFoundException(Long id){ //exception if booking is not available
        super("could not found Booking with id "+ id); 
    }
}
