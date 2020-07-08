package com.demo.website.repository;

import com.demo.website.model.Staff;
import com.demo.website.util.GenerateUuidUtil;

import java.util.List;
import java.util.UUID;

public interface StaffDao extends GenerateUuidUtil {

    List<Staff> findAll();

    int insertStaff(UUID id, Staff staff);

    default int insertStaff(Staff staff){
        return insertStaff(generateUUID(),staff);
    }

    int deleteStaffByUuid(UUID id);

    int updateStaffByUuid(UUID id, Staff staff);
}
