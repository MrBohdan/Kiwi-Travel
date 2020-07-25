package com.demo.website.repository;

import com.demo.website.model.Post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import java.time.ZonedDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import static org.apache.http.entity.ContentType.*;

/*@Repository("postgresPost")*/
public class PostDaoImpl /*implements PostDao*/{
    /*
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public PostDaoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    @Override
    public int insertPost(UUID id, Post pos) {
        String sql = "INSERT INTO post (" +
                "post_Id," +
                "image," +
                "title," +
                "description," +
                "zoned_Date_Time," +
                "staff_Id)" +
                "VALUES (?,?,?,?,?,?)";
        return jdbcTemplate.update(sql,
                id,
                pos.getImage(),
                pos.getTitle(),
                pos.getDescription(),
                pos.getZonedDateTime(),
                pos.getStaffId());
    }

    @Override
    public List<Post> findAll() {
        String sql = "SELECT * FROM post";
        return jdbcTemplate.query(sql, (resultSet, i) -> {
            UUID postId = UUID.fromString(resultSet.getString("post_Id"));
            byte[] image = resultSet.getBytes("image");
            String title = resultSet.getString("title");
            String description = resultSet.getString("description");
            //ZonedDateTime zonedDateTime = ZonedDateTime.parse(resultSet.getString("zoned_date_time"));
            UUID staff_Id = UUID.fromString(resultSet.getString("staff_Id"));
            return new Post(postId,
                    image,
                    title,
                    description,staff_Id);
        });
    }


    public void isFileEmpty(MultipartFile file){
        if(file.isEmpty()){
            throw new IllegalStateException("Cannot upload empty file [" + file.getSize()+"]");
        }
    }

    public void isImage(MultipartFile file) {
        if (!Arrays.asList(IMAGE_JPEG.getMimeType(), IMAGE_PNG.getMimeType()).contains(file.getContentType())) {
            throw new IllegalStateException("File must be an image [" + file.getContentType() + "]");
        }
    }*/
}
