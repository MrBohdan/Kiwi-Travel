package com.demo.website.service;

import com.demo.website.model.UserProfile;
import com.demo.website.repository.UserProfileDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserProfileServie {

    private UserProfileDao userProfileDao;

    @Autowired
    public UserProfileServie(@Qualifier("postgres") UserProfileDao userProfileDao) {
        this.userProfileDao = userProfileDao;
    }

    public int addUser(UserProfile userProfile){
        return userProfileDao.insertUser(userProfile);
    }

    public List<UserProfile> getAllUsers(){
        return userProfileDao.findAll();
    }

    public int removeUser(UUID id){
        return userProfileDao.deleteUserById(id);
    }

    public int updateUser(UUID id, UserProfile userProfile){
        return userProfileDao.updateUserById(id, userProfile);
    }
}
