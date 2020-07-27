package com.demo.website.repository;

import com.demo.website.model.Post;
import com.demo.website.util.GenerateUuidUtil;
import com.demo.website.util.GenerateZonedDateTimeUtil;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 *  Through this repository, an object 'Post' will be saved to the database
 */
@Repository
public interface PostsRepository extends JpaRepository<Post, UUID>, GenerateUuidUtil, GenerateZonedDateTimeUtil {

    Page<Post> findAll(Pageable pageable);
}
