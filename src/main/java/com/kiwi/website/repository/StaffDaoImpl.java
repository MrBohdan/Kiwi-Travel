package com.kiwi.website.repository;

import com.kiwi.website.model.Staff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository("postgres_Staff")
public class StaffDaoImpl implements StaffDao {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public StaffDaoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Staff> findAll() {
        String sql = "SELECT * FROM staff";
        return jdbcTemplate.query(sql, (resultSet, i) -> {
            UUID id = UUID.fromString(resultSet.getString("id"));
            String fullname = resultSet.getString("fullname");
            String username = resultSet.getString("username");
            String password = resultSet.getString("password");
            return new Staff(id,
                    fullname,
                    username,
                    password);
        });
    }

    @Override
    public int insertStaff(UUID id, Staff staff) {
        String sql = "INSERT INTO staff (" +
                "id," +
                "fullname," +
                "username," +
                "password)" +
                "VALUES (?,?,?,?)";
        return jdbcTemplate.update(sql,
                id,
                staff.getFullname(),
                staff.getUsername(),
                staff.getPassword());
    }

    @Override
    public int deleteStaffByUuid(UUID id) {
        String sql = "DELETE FROM staff WHERE id=?";
        return jdbcTemplate.update(sql,id);
    }

    @Override
    public int updateStaffByUuid(UUID id, Staff staff) {
        String sql = "UPDATE staff SET fullname=?, username=?, password=? WHERE id=?";
        return jdbcTemplate.update(sql, staff.getFullname(),
                staff.getUsername(),
                staff.getPassword(),id);
    }

}
