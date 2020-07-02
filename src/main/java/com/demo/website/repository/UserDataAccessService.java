package com.demo.website.repository;

import com.demo.website.model.User;
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
    public List<User> findAll() {
        String sql = "SELECT * FROM user";
        return jdbcTemplate.query(sql, (resultSet, i) -> {
            UUID id = UUID.fromString(resultSet.getString("id"));
            String fullname = resultSet.getString("fullname");
            String username = resultSet.getString("username");
            String password = resultSet.getString("password");
            return new User(id,
                    fullname,
                    username,
                    password);
        });
    }

    @Override
    public int insertUser(UUID id, User user) {
        String sql = "INSERT INTO user (" +
                "id," +
                "fullname," +
                "username," +
                "password)" +
                "VALUES (?,?,?,?)";
        return jdbcTemplate.update(sql,
                id,
                user.getFullname(),
                user.getUsername(),
                user.getPassword());
    }

    @Override
    public int deleteUserById(UUID id) {
        String sql = "DELETE FROM user WHERE id=?";
        return jdbcTemplate.update(sql,id);
    }

    @Override
    public int updateUserById(UUID id, User user) {
        String sql = "UPDATE user SET fullname=?, username=?, password=? WHERE id=?";
        return jdbcTemplate.update(sql, user.getFullname(),
                user.getUsername(),
                user.getPassword(),id);
    }

}
