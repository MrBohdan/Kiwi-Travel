package com.demo.website.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "user")
public class UserProfile {

    @Id
    private UUID uuid;
    private String fullname;
    private String username;
    private String password;

    public UserProfile(@JsonProperty("id") UUID uuid,
                       @JsonProperty("fullname") String fullname,
                       @JsonProperty("username") String username,
                       @JsonProperty("password") String password) {
        this.uuid = uuid;
        this.fullname = fullname;
        this.username = username;
        this.password = password;
    }

    public UserProfile() {
    }

    public UUID getUuid() {
        return uuid;
    }

    public void setUuid(UUID uuid) {
        this.uuid = uuid;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UserProfile)) return false;
        UserProfile user = (UserProfile) o;
        return uuid.equals(user.uuid) &&
                fullname.equals(user.fullname) &&
                username.equals(user.username) &&
                password.equals(user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(uuid, fullname, username, password);
    }
}
