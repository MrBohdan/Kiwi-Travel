package com.demo.website.repository;

import com.demo.website.model.User;

import java.util.List;
import java.util.UUID;

public interface UserDao {

    List<User> findAll();

    int insertUser(UUID id, User user);

    default int insertUser(User user){
        UUID id = UUID.randomUUID();
        return insertUser(id, user);
    }

    int deleteUserById(UUID id);

    int updateUserById(UUID id, User user);
}
