package com.kiwi.website.controller;

import com.kiwi.website.model.Staff;
import com.kiwi.website.repository.StaffDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

/**
 * The controller is used to handling HTTP requests for the application
 */
@RestController
@RequestMapping("api/v1.0/staff/")
//TODO
@CrossOrigin("*") // should be defined
public class StaffController {

    @Autowired
    private StaffDao staffDao;

    @PostMapping(path = "/add") // Map ONLY POST Requests
    public @ResponseBody
    int addNewUser(@RequestBody Staff staff) {
        return staffDao.insertStaff(staff);
    }

    @GetMapping(path = "/get") // Map ONLY GET Requests
    public List<Staff> getUsers() {
        return staffDao.findAll();
    }

    @DeleteMapping(path = "/delete/{uuid}") // Map ONLY DELETE Requests
    public int removeStaffByUuid(@PathVariable("uuid") UUID uuid) {
        return staffDao.deleteStaffByUuid(uuid);
    }

    @PutMapping(path = "/put/{id}") // Map ONLY PUT Requests
    public int updateStaffByUuid(@PathVariable("uuid") UUID uuid, @Valid @NonNull @RequestBody Staff staff) {
        return staffDao.updateStaffByUuid(uuid, staff);
    }
}
