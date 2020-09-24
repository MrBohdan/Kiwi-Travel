package com.kiwi.website.controller;

import com.kiwi.website.model.Staff;
import com.kiwi.website.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.List;
import java.util.UUID;


/**
 * The controller is used to handling HTTP requests for the application
 *
 * @author Bohdan Skrypnyk (bohdan.skrypnyk@yahoo.com)
 */
@RestController
@RequestMapping("api/v1.0/staff/")
//TODO
@CrossOrigin("*") // should be defined
public class StaffController {

    private final StaffRepository staffRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public StaffController(StaffRepository staffRepository, PasswordEncoder passwordEncoder) {
        this.staffRepository = staffRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping(path = "/add") // Map ONLY POST Requests
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public @ResponseBody
    Staff addStaff(@RequestBody Staff staff) {
        staff.setUuid(staffRepository.generateUUID());
        staff.setPassword(passwordEncoder.encode(staff.getPassword()));
        return staffRepository.save(staff);
    }

    @GetMapping(value = "/get") // Map ONLY GET Requests
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public @ResponseBody
    List<Staff> findAll() {
        return staffRepository.findAll();
    }

    @DeleteMapping(path = "/delete/{uuid}") // Map ONLY DELETE Requests
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void removeStaffByUuid(@PathVariable("uuid") UUID uuid) {
        staffRepository.deleteById(uuid);
    }

    @GetMapping(value = "get/authorizedStaff/staff_Id")
    public @ResponseBody
    UUID authorizedStaff(HttpServletRequest request) {
        Staff user = (Staff) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return user.getUuid();
    }
}
