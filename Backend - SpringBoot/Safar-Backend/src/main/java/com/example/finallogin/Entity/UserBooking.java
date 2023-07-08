package com.example.finallogin.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class UserBooking {

    @Id // booking id
    @GeneratedValue // will automatically generate unique id

    private Long id;

    private String address;
    private String name;
    private String email;
    private Long userPhone;
    private String userDestination;
    private Long userCount;
    private String userNameB;
    private String userLeavingDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    public User users;

    // public String getuserNameB() {
    //     return userNameB;
    // }

    // public void setuserNameB(String userNameB) {
    //     this.userNameB = userNameB;
    // }

    public User getUsers() {
        return users;
    }

    public void setUsers(User users) {
        this.users = users;
    }

    public UserBooking() {
    }

    public UserBooking(Long id, String address, String name, String email, Long userPhone, String userDestination,
            Long userCount, String userNameB, String userLeavingDate) {
        this.id = id;
        this.address = address;
        this.name = name;
        this.email = email;
        this.userPhone = userPhone;
        this.userDestination = userDestination;
        this.userCount = userCount;
        this.userNameB = userNameB;
        this.userLeavingDate = userLeavingDate;

    }

    public User getUser() {
        return users;
    }

    public void setUser(User users) {
        this.users = users;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Long getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(Long userPhone) {
        this.userPhone = userPhone;
    }

    public String getUserDestination() {
        return userDestination;
    }

    public void setUserDestination(String userDestination) {
        this.userDestination = userDestination;
    }

    public Long getUserCount() {
        return userCount;
    }

    public void setUserCount(Long userCount) {
        this.userCount = userCount;
    }

    public String getuserNameB() {
        return userNameB;
    }

    public void setuserNameB(String userNameB) {
        this.userNameB = userNameB;
    }

    public String getUserLeavingDate() {
        return userLeavingDate;
    }

    public void setUserLeavingDate(String userLeavingDate) {
        this.userLeavingDate = userLeavingDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
