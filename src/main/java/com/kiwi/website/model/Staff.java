package com.kiwi.website.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.kiwi.website.util.AuthorityDeserializerUtil;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.Set;
import java.util.UUID;

import static javax.persistence.FetchType.EAGER;

/**
 * JPA Annotated Pojo (Plain Old Java Object) that represents a staff.
 *
 * @author Bohdan Skrypnyk (bohdan.skrypnyk@yahoo.com)
 */
@Entity
@Table(name = "staff", uniqueConstraints = {@UniqueConstraint(columnNames = "username")})
public class Staff implements Serializable, UserDetails {

    @Id
    @Column(name = "id", unique = true, updatable = false, length = 36, nullable = false)
    private UUID uuid;
    @Column(name = "username", nullable = false)
    private String username;
    @Column(name = "password", nullable = false)
    private String password;
    @Column(name = "isAccountNonExpired", nullable = false)
    private boolean isAccountNonExpired;
    @Column(name = "isAccountNonLocked", nullable = false)
    private boolean isAccountNonLocked;
    @Column(name = "isCredentialsNonExpired", nullable = false)
    private boolean isCredentialsNonExpired;
    @Column(name = "isEnabled", nullable = false)
    private boolean isEnabled;

    @ElementCollection(targetClass = SimpleGrantedAuthority.class, fetch = EAGER)
    @JsonTypeInfo(use = JsonTypeInfo.Id.CLASS, include = JsonTypeInfo.As.WRAPPER_OBJECT, property = "class")
    private Set<? extends GrantedAuthority> grantedAuthorities;

    public Staff() {
    }

    /**
     * @param uuid
     * @param username
     * @param password
     * @param isAccountNonExpired
     * @param isAccountNonLocked
     * @param isCredentialsNonExpired
     * @param isEnabled
     * @param grantedAuthorities
     */
    public Staff(@JsonProperty("id") UUID uuid,
                 @JsonProperty("username") String username,
                 @JsonProperty("password") String password,
                 @JsonProperty("isAccountNonExpired") boolean isAccountNonExpired,
                 @JsonProperty("isAccountNonLocked") boolean isAccountNonLocked,
                 @JsonProperty("isCredentialsNonExpired") boolean isCredentialsNonExpired,
                 @JsonProperty("isEnabled") boolean isEnabled,
                 @JsonProperty("grantedAuthorities") Set<? extends GrantedAuthority> grantedAuthorities) {
        this.uuid = uuid;
        this.username = username;
        this.password = password;
        this.isAccountNonExpired = isAccountNonExpired;
        this.isAccountNonLocked = isAccountNonLocked;
        this.isCredentialsNonExpired = isCredentialsNonExpired;
        this.isEnabled = isEnabled;
        this.grantedAuthorities = grantedAuthorities;
    }

    public UUID getUuid() {
        return uuid;
    }

    public void setUuid(UUID uuid) {
        this.uuid = uuid;
    }

    @Override
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    @JsonDeserialize(using = AuthorityDeserializerUtil.class)
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return grantedAuthorities;
    }

    @JsonDeserialize(using = AuthorityDeserializerUtil.class)
    public void setAuthorities(Set<? extends GrantedAuthority> grantedAuthorities) {
        this.grantedAuthorities = grantedAuthorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return isAccountNonExpired;
    }

    @Override
    public boolean isAccountNonLocked() {
        return isAccountNonLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return isCredentialsNonExpired;
    }

    @Override
    public boolean isEnabled() {
        return isEnabled;
    }
}
