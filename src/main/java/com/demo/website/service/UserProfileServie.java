package com.demo.website.service;

import com.demo.website.model.User;
import com.demo.website.repository.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserProfileServie {

    private UserDao userDao;

    @Autowired
    public UserProfileServie(@Qualifier("postgres") UserDao userDao) {
        this.userDao = userDao;
    }

    public int addUser(User user){
        return userDao.insertUser(user);
    }

    public List<User> getAllUsers(){
        return userDao.findAll();
    }

    public int removeUser(UUID id){
        return userDao.deleteUserById(id);
    }

    public int updateUser(UUID id, User user){
        return userDao.updateUserById(id, user);
    }
}
