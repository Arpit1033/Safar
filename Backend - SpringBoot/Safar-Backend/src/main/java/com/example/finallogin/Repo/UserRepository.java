package com.example.finallogin.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.finallogin.Entity.UserBooking;

public interface UserRepository extends JpaRepository<UserBooking,Long>{

    Optional<UserBooking> findByUserNameB(String userNameB);
    
}
