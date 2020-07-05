package com.demo.website.repository;

import com.demo.website.model.Staff;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

public interface StaffDao {

    List<Staff> findAll();

    int insertStaff(UUID id, Staff staff);

    default int insertStaff(Staff staff){
        UUID id = UUID.randomUUID();
        return insertStaff(id,staff);
    }

    int deleteStaffByUuid(UUID id);

    int updateStaffByUuid(UUID id, Staff staff);
}
