package com.example.finallogin.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.finallogin.Exception.UserNotFoundException;
import com.example.finallogin.Entity.User;
import com.example.finallogin.Entity.UserBooking;
import com.example.finallogin.Repo.UserRepo;
import com.example.finallogin.Repo.UserRepository;

@RestController // used to define a RESTful controller
@CrossOrigin("http://localhost:3000") // allows our web application running in one domain to access resources (such as
                                      // APIs) on a different domain
public class UserBookingController {

    @Autowired // for automatic dependency injection
    private UserRepository userRepository;
    @Autowired
    private UserRepo userRepo;

    @PostMapping("/user") // for http post request
    UserBooking newUser(@RequestBody UserBooking newUser) {
        System.out.println("hello   ");
        String userName = newUser.getuserNameB();
        System.out.println(userName);
        User user = userRepo.findByUsername(userName);
        System.out.println(user);
        List<UserBooking> list = user.getUserBooking();
        list.add(newUser);
        user.setUserBooking(list);
        newUser.setUser(user);

        // userRepo.save(user);
        // userRepository.save(newUser);

        return userRepository.save(newUser);
    }

    @GetMapping("/users") // for http get request for all users
    List<UserBooking> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}") // for getting user by their id
    UserBooking getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @GetMapping("/users/{userNameB}")
    List<UserBooking> getUserByUserNamedfsdfB(@PathVariable("userNameB") String userNameB) {
        System.out.println(userNameB);
        // return "hello";
        if(userNameB.equals("bautocrats")){
            return userRepository.findAll();
        }

        System.out.println("hello");
        System.out.println(userNameB);
        User user = userRepo.findByUsername(userNameB);

        return user.getUserBooking();
        // return userRepository.findByUserNameB(userNameB);
    }

    @PutMapping("/user/{id}") // for editing the old data
    UserBooking updatUser(@RequestBody UserBooking newUser, @PathVariable Long id) { // RequestBody :- to bind the HTTP
                                                                                     // request body to a method
                                                                                     // parameter in a controller /
        // PathVariable :- to extract values from parts of the URL path and bind them to
        // method parameters in a controller
        return userRepository.findById(id)
                .map(user -> {
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    user.setAddress(newUser.getAddress());
                    user.setUserPhone(newUser.getUserPhone());
                    user.setUserDestination(newUser.getUserDestination());
                    user.setUserCount(newUser.getUserCount());
                    user.setuserNameB(newUser.getuserNameB());
                    user.setUserLeavingDate(newUser.getUserLeavingDate());

                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));// exception handling
    }

    @DeleteMapping("/user/{id}") // for deleting the data from database
    String deleteUser(@PathVariable Long id) {
        if (!userRepository.existsById(id)) { // excetipion handling
            throw new UserNotFoundException(id);
        }

        userRepository.deleteById(id);

        return "Booking with id " + id + "has been deleted successfully"; // message on successfully deletion
    }

}
