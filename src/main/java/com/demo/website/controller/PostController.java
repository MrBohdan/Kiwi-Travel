package com.demo.website.controller;

import com.demo.website.model.Post;
import com.demo.website.repository.PostsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "api/v1.0/post/")
//TODO
@CrossOrigin("*") // should be defined
public class PostController {

    @Autowired
    private PostsRepository postsRepository;

    @PostMapping(value = "/add")  // Map ONLY POST Requests
    public @ResponseBody
    Post addPost(@RequestBody Post post) {
        UUID id = UUID.randomUUID();
        post.setPostId(id);
        return postsRepository.save(post);
    }

    @GetMapping(value = "/get") // Map ONLY GET Requests
    public List<Post> findAll() {
        return postsRepository.findAll();
    }
}
