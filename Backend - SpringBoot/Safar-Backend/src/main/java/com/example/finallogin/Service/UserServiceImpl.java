package com.example.finallogin.Service;

// import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.finallogin.Dto.LoginDto;
import com.example.finallogin.Dto.UserDto;
import com.example.finallogin.Entity.User;
import com.example.finallogin.Repo.UserRepo;
import com.example.finallogin.Response.Message;

@Service // Indicates that this class provides a service
public class UserServiceImpl implements UserService{

    @Autowired // Injects an instance of UserRepo into the service
    private UserRepo userRepo;
 
    @Autowired // Injects an instance of PasswordEncoder into the service
    private PasswordEncoder passwordEncoder;
 
 
    @Override // Indicates that this method overrides a method from the UserService interface
    public Message addUser(UserDto userDTO) {
        // Implementation of logic for adding a new user
        User vUser = userRepo.findByEmail(userDTO.getEmail());
        if(vUser != null){
            return new Message("Email already in use !", false);
        }
        else{
            vUser = userRepo.findByUsername(userDTO.getUsername());
            if(vUser != null){
                return new Message("Username already taken. Choose different one.", false);
            }
            else{
                User user = new User(
 
                userDTO.getUserid(),
                userDTO.getUsername(),
                userDTO.getEmail(),
 
               this.passwordEncoder.encode(userDTO.getPassword())
            );
            userRepo.save(user);
            }
            return new Message("Signed Up Successfully", true);
        }
        
    }

    @Override // Indicates that this method overrides a method from the UserService interface
    public Message loginUser(LoginDto loginDTO) {
        // Implementation of logic for authenticating a user
        User user1 = userRepo.findByUsername(loginDTO.getUsername());
        if(user1 != null){
            String password = loginDTO.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if(isPwdRight){
                return new Message("Successful Login", true);
            }
            else{
                return new Message("Incorrect Password !", false);
            }
        }
        else{
            return new Message("Username does not exits !", false);
        }
    }
}
