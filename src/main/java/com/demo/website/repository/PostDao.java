package com.demo.website.repository;

import com.demo.website.model.Post;
import com.demo.website.util.GenerateUuidUtil;
import com.demo.website.util.GenerateZonedDateTimeUtil;

import java.util.List;
import java.util.UUID;

public interface PostDao extends GenerateUuidUtil, GenerateZonedDateTimeUtil {

    int insertPost(UUID id, Post pos);

    default int insertPost(Post post){
        return insertPost(generateUUID(),post);
    }

    List<Post> findAll();
}
