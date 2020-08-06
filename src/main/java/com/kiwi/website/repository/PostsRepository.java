package com.kiwi.website.repository;

import com.kiwi.website.model.Post;
import com.kiwi.website.util.GenerateUuidUtil;
import com.kiwi.website.util.GenerateZonedDateTimeUtil;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 *  Through this repository, an object 'Post' will be saved to the database
 */
@Repository
public interface PostsRepository extends JpaRepository<Post, UUID>, GenerateUuidUtil, GenerateZonedDateTimeUtil {

    @Query(value = "SELECT new com.kiwi.website.model.Post(p.postId AS post_Id, " +
            "p.thumbnails as thumbnails, " +
            "p.title as title, " +
            "p.description AS description, " +
            "p.zonedDateTime AS zonedDateTime, " +
            "p.uuid AS staff_Id" +
            ") FROM post p ")
    Page<Post> findAll(Pageable pageable);
}
