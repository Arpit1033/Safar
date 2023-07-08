package com.example.finallogin.Service;


import com.example.finallogin.Dto.LoginDto;
import com.example.finallogin.Dto.UserDto;
import com.example.finallogin.Response.Message;

public interface UserService {

    // Response to be provided when a user is add to the database
    Message addUser(UserDto userDTO);
    
    // Response to be provided when a user try to login
    Message loginUser(LoginDto loginDTO);
    
}
