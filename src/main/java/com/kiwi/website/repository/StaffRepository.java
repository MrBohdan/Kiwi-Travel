package com.kiwi.website.repository;

import com.kiwi.website.model.Staff;
import com.kiwi.website.util.GenerateUuidUtil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface StaffRepository extends JpaRepository<Staff, UUID>, GenerateUuidUtil {

    Optional<Staff> findByUsername(String username);
}
