package com.demo.website.service;

import com.demo.website.model.Post;
import com.demo.website.repository.PostDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    private PostDao postDao;

    @Autowired
    public PostService(@Qualifier("postgresPost") PostDao postDao) {
        this.postDao = postDao;
    }

    public int addPost(Post post) {
        return postDao.insertPost(post);
    }

    public List<Post> getAllPost() {
        return postDao.findAll();
    }


}
