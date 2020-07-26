package com.demo.website.repository;

import com.demo.website.model.Post;
import com.demo.website.util.GenerateUuidUtil;
import com.demo.website.util.GenerateZonedDateTimeUtil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.QueryHint;
import java.util.UUID;
import java.util.stream.Stream;

import static org.hibernate.annotations.QueryHints.READ_ONLY;
import static org.hibernate.jpa.QueryHints.*;

/**
 *  Through this repository, an object 'Post' will be saved to the database
 */
@Repository
@Transactional
public interface PostsRepository extends JpaRepository<Post, UUID>, GenerateUuidUtil, GenerateZonedDateTimeUtil {

    /*@QueryHints(value = @QueryHint(name = HINT_FETCH_SIZE, value = "20"))
    @Query("select p from post p")
    Stream<Post> findAllPost();*/
}
