package com.demo.website.repository;

import com.demo.website.model.UserProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository("postgres")
public class EmployeeDataAccessService implements UserProfileDao{

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public EmployeeDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<UserProfile> findAll() {
        String sql = "SELECT * FROM users";
        return jdbcTemplate.query(sql, (resultSet, i) -> {
            UUID id = UUID.fromString(resultSet.getString("id"));
            String fullname = resultSet.getString("fullname");
            String username = resultSet.getString("username");
            String password = resultSet.getString("password");
            return new UserProfile(id, fullname, username, password);
        });
    }

    @Override
    public int insertUser(UUID id, UserProfile userProfile) {
        String sql = "INSERT INTO users (" +
                "id," +
                "fullname," +
                "username," +
                "password)" +
                "VALUES (?,?,?,?)";
        return jdbcTemplate.update(sql,id, userProfile.getFullname(), userProfile.getUsername(), userProfile.getPassword());
    }

    @Override
    public int deleteUserById(UUID id) {
        String sql = "DELETE FROM users WHERE id=?";
        return jdbcTemplate.update(sql,id);
    }

    @Override
    public int updateUserById(UUID id, UserProfile userProfile) {
        String sql = "UPDATE users SET fullname=?, username=?, password=? WHERE id=?";
        return jdbcTemplate.update(sql, userProfile.getFullname(),
                userProfile.getUsername(),
                userProfile.getPassword(),id);
    }

}
