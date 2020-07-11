package com.demo.website.controller;

import com.demo.website.model.Post;
import com.demo.website.repository.PostsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1.0/post/")
//TODO
@CrossOrigin("*") // should be defined or not ?
public class PostController {

    @Autowired
    private PostsRepository postsRepository;

    @PostMapping(value = "/add")  // Map ONLY POST Requests
    public @ResponseBody
    Post addPost(@Validated @NonNull @RequestBody Post post) {
        post.setPostId(postsRepository.generateUUID());
        post.setZonedDateTime(postsRepository.timeWithTimeZoneUtil());
        return postsRepository.save(post);
    }

    @GetMapping(value = "/get") // Map ONLY GET Requests
    public List<Post> findAll() {
        return postsRepository.findAll();
    }
}
