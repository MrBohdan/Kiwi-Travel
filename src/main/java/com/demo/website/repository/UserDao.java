package com.demo.website.repository;

import com.demo.website.model.Staff;

import java.util.List;
import java.util.UUID;

public interface UserDao {

    List<Staff> findAll();

    int insertUser(UUID id, Staff staff);

    default int insertUser(Staff staff){
        UUID id = UUID.randomUUID();
        return insertUser(id, staff);
    }

    int deleteUserById(UUID id);

    int updateUserById(UUID id, Staff staff);
}
