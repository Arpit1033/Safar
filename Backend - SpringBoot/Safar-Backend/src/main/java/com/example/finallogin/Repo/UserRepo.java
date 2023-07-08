package com.example.finallogin.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.finallogin.Entity.User;


@EnableJpaRepositories // Enables JPA repositories for this interface
@Repository // Marks this interface as a repository component
public interface UserRepo extends JpaRepository<User,Long>{
    
    // Finds a user by username and password
    Optional<User> findOneByUsernameAndPassword(String username, String password);

    // Finds a user by username
    User findByUsername(String username);

    // Finds a user by password
    User findByPassword(String password);

    // Finds a user by email
    User findByEmail(String email);
}
