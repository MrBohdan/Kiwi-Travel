package com.demo.website.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "staff")
public class Staff {

    @Id
    @Column(name = "id", unique = true, updatable = false, length = 36, nullable = false)
    private UUID uuid;
    @Column(name = "fullname", nullable = false)
    private String fullname;
    @Column(name = "username", nullable = false)
    private String username;
    @Column(name = "password", nullable = false)
    private String password;

    public Staff(@JsonProperty("id") UUID uuid,
                 @JsonProperty("fullname") String fullname,
                 @JsonProperty("username") String username,
                 @JsonProperty("password") String password) {
        this.uuid = uuid;
        this.fullname = fullname;
        this.username = username;
        this.password = password;
    }

    public Staff() {
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
        if (!(o instanceof Staff)) return false;
        Staff staff = (Staff) o;
        return uuid.equals(staff.uuid) &&
                fullname.equals(staff.fullname) &&
                username.equals(staff.username) &&
                password.equals(staff.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(uuid, fullname, username, password);
    }
}
