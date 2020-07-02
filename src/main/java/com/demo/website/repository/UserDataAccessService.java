package com.demo.website.repository;

import com.demo.website.model.Staff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository("postgres")
public class UserDataAccessService implements UserDao {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public UserDataAccessService(JdbcTemplate jdbcTemplate) {
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
    public int insertUser(UUID id, Staff staff) {
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
    public int deleteUserById(UUID id) {
        String sql = "DELETE FROM staff WHERE id=?";
        return jdbcTemplate.update(sql,id);
    }

    @Override
    public int updateUserById(UUID id, Staff staff) {
        String sql = "UPDATE staff SET fullname=?, username=?, password=? WHERE id=?";
        return jdbcTemplate.update(sql, staff.getFullname(),
                staff.getUsername(),
                staff.getPassword(),id);
    }

}
