package com.mvc.educentr.api.models;

import org.springframework.stereotype.Component;

@Component
public class User {
    private String initials;
    private String email;
    private String password;

    public User() {

    }

    public User(String initials, String email, String password) {
        this.initials = initials;
        this.email = email;
        this.password = password;
    }

    public String getInitials() {
        return initials;
    }

    public void setInitials(String initials) {
        this.initials = initials;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
