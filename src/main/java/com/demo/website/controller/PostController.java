package com.demo.website.controller;

import com.demo.website.model.Post;
import com.demo.website.repository.PostsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;
/**
 * JPA Annotated Pojo that represents a post.
 *
 * @author Bohdan Skrypnyk
 */
@RestController
@RequestMapping(value = "api/v1.0/post/")
//TODO
@CrossOrigin("*") // should be defined or not ?
public class PostController {

    @Autowired
    private PostsRepository postsRepository;

    @PostMapping(value = "/add")  // Map ONLY POST Requests
    @ResponseBody
    public Post addPost(@RequestParam("file") MultipartFile file, @Validated @NonNull @ModelAttribute Post post) throws IOException {
        post.setImage(file.getBytes());
        post.setPostId(postsRepository.generateUUID());
        post.setZonedDateTime(postsRepository.timeWithTimeZoneUtil());
        return postsRepository.save(post);
    }

    @GetMapping(value = "/get") // Map ONLY GET Requests
    public @ResponseBody List<Post> findAll() {
        return postsRepository.findAll();
    }

    @DeleteMapping(value = "/delete/{post_Id}") // Map ONLY DELETE Requests
    public void removePostByPostId(@PathVariable("post_Id") UUID post_Id){
        postsRepository.deleteById(post_Id);
    }
}
