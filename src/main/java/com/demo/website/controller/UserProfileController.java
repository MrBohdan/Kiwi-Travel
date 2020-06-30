package com.demo.website.controller;

import com.demo.website.model.UserProfile;
import com.demo.website.service.UserProfileServie;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

/**
 * The controller is used to handling HTTP requests for the application
 *
 */
@RestController
@RequestMapping("api/v1.0/")
//TODO
@CrossOrigin("*") // should be defined
public class UserProfileController {

    @Autowired
    private UserProfileServie userProfileServie;

    @PostMapping(path="/add") // Map ONLY POST Requests
    public @ResponseBody int addNewUser (@RequestBody UserProfile userProfile) {
        return userProfileServie.addUser(userProfile);
    }

    @GetMapping(path="/get") // Map ONLY GET Requests
    public List<UserProfile> getUsers(){
       return userProfileServie.getAllUsers();
    }

    @DeleteMapping(path="/delete/{id}") // Map ONLY DELETE Requests
    public int removeUserById(@PathVariable("id") UUID id){
    return userProfileServie.removeUser(id);
    }

    @PutMapping(path="/put/{id}") // Map ONLY PUT Requests
    public int updateUserById(@PathVariable("id") UUID id, @Valid @NonNull @RequestBody UserProfile userProfile){
        return userProfileServie.updateUser(id, userProfile);
    }
}
