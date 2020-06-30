package com.demo.website.repository;

import com.demo.website.model.UserProfile;

import java.util.List;
import java.util.UUID;

public interface UserProfileDao {

    List<UserProfile> findAll();

    int insertUser(UUID id, UserProfile userProfile);

    default int insertUser(UserProfile userProfile){
        UUID id = UUID.randomUUID();
        return insertUser(id,userProfile);
    }

    int deleteUserById(UUID id);

    int updateUserById(UUID id, UserProfile userProfile);
}
