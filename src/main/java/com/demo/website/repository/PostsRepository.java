package com.demo.website.repository;

import com.demo.website.model.Post;
import com.demo.website.util.GenerateUuidUtil;
import com.demo.website.util.TimeWithTimeZoneUtil;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

/**
 *  Through this repository, an object 'Post' will be saved to the database
 */
public interface PostsRepository extends JpaRepository<Post, UUID> , GenerateUuidUtil , TimeWithTimeZoneUtil {

    List<Post> findByPostId(UUID id);
}
