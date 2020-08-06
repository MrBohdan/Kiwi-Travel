package com.kiwi.website.service;

import com.kiwi.website.model.Staff;
import com.kiwi.website.repository.StaffDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class StaffService {

    private StaffDao staffDao;

    @Autowired
    public StaffService(@Qualifier("postgres_Staff") StaffDao staffDao) {
        this.staffDao = staffDao;
    }

    public int addStaff(Staff staff) {
        return staffDao.insertStaff(staff);
    }

    public List<Staff> getAllStaff() {
        return staffDao.findAll();
    }

    public int removeStaff(UUID id) {
        return staffDao.deleteStaffByUuid(id);
    }

    public int updateStaff(UUID id, Staff staff) {
        return staffDao.updateStaffByUuid(id, staff);
    }
}
