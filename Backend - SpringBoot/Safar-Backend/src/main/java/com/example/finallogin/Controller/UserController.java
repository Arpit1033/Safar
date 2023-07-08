package com.example.finallogin.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.finallogin.Dto.LoginDto;
import com.example.finallogin.Dto.UserDto;
import com.example.finallogin.Response.Message;
import com.example.finallogin.Service.UserService;

@RestController // Marks this class as a RESTful controller
@CrossOrigin // Allows cross-origin requests from different domains
@RequestMapping("safar/user") // Base URL mapping for UserController endpoints
public class UserController {
    
    @Autowired // Injects an instance of UserService into the controller
    private UserService userService;

    @PostMapping(path = "/register")
    public Message registerUser(@RequestBody UserDto userDTO){
        // Invoke the addUser method from the UserService to register a user
        Message id = userService.addUser(userDTO);
        return id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDto loginDTO){
        // Invoke the loginUser method from the UserService to authenticate a user
        Message loginMessage = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginMessage);
    }
}
