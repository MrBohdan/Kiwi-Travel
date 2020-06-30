package com.demo.website.repository;

import com.demo.website.model.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

/**
 *  Through this repository, an object 'Posts' will be saved to the database
 */
public interface PostsRepository extends JpaRepository<UserProfile, UUID> {

}
