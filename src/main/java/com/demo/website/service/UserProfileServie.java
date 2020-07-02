package com.demo.website.service;

import com.demo.website.model.Staff;
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

    public int addUser(Staff staff){
        return userDao.insertUser(staff);
    }

    public List<Staff> getAllUsers(){
        return userDao.findAll();
    }

    public int removeUser(UUID id){
        return userDao.deleteUserById(id);
    }

    public int updateUser(UUID id, Staff staff){
        return userDao.updateUserById(id, staff);
    }
}
