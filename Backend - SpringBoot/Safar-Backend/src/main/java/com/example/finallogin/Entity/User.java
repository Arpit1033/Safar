package com.example.finallogin.Entity;


import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity // Specifies that this class is an entity mapped to a database table
@Table(name="users") // Specifies the name of the table in the database
public class User {

    @Id // Specifies that this field is the primary key of the entity
    @Column(name="user_id",length = 1000) // Specifies the primary key column name and length
    @GeneratedValue(strategy = GenerationType.AUTO) // Specifies automatic generation of the primary key
    private Long userid;

    @NonNull // Specifies that this field cannot be null
    @Column(name="username", length = 255) // Specifies the column name and length for username
    private String username;

    @NonNull // Specifies that this field cannot be null
    @Column(name="email", length = 255) // Specifies the column name and length for email
    private String email;

    @NonNull // Specifies that this field cannot be null
    @Column(name="password", length = 255) // Specifies the column name and length for password
    private String password;

    // private UserBooking userBooking;
    
    @OneToMany(mappedBy = "users", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<UserBooking> userBooking = new ArrayList<>();

    public User() {
    }
        public User(Long userid, String username, String email, String password) {
        this.userid = userid;
        this.username = username;
        this.email = email;
        this.password = password;
       
    }

    // Constructor with parameters
    public User(Long userid, String username, String email, String password,List<UserBooking> userBooking) {
        this.userid = userid;
        this.username = username;
        this.email = email;
        this.password = password;
        this.userBooking=userBooking;
    }

        public List<UserBooking>getUserBooking() {
        return userBooking;
    }

    public void setUserBooking(List<UserBooking> userBooking) {
        this.userBooking = userBooking;
    }

    // Getter and Setter methods for userid
    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    // Getter and Setter methods for username
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
    
    // Getter and Setter methods for email
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // Getter and Setter methods for password
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
}