package com.kiwi.website.controller;

import com.kiwi.website.model.Post;
import com.kiwi.website.repository.PostsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.lang.NonNull;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.ServletRequestBindingException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.security.PermitAll;
import java.io.IOException;
import java.util.UUID;

import static com.kiwi.website.controller.validation.ImageValidation.*;

/**
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
    @PreAuthorize("hasAuthority('post:add')")
    public @ResponseBody
    Post addPost(@RequestParam("file") MultipartFile file,
                 @Validated @NonNull @ModelAttribute Post post) throws IOException, ServletRequestBindingException {
        isTitleEmpty(post);
        isDescriptionEmpty(post);
        isFile(file);

        post.setImage(file.getBytes());
        post.setThumbnails(createThumbnail(file, 600).toByteArray());
        post.setPostId(postsRepository.generateUUID());
        post.setZonedDateTime(postsRepository.generateZonedDateTimeUtil());
        return postsRepository.save(post);
    }

    @GetMapping(value = "/get/sort/{sortProperty}") // Map ONLY GET Requests
    @PreAuthorize("hasAuthority('post:get')")
    public @ResponseBody
    Page<Post> findAll(@RequestParam(name = "page", defaultValue = "0") int page,
                       @RequestParam(name = "size", defaultValue = "9") int size,
                       @PathVariable("sortProperty") String sortProperty) {
        return postsRepository.findAll(PageRequest.of(page, size, Sort.by(sortProperty).descending()));
    }

    @GetMapping(value = "/open/get") // Map ONLY GET Requests
    @PermitAll
    public @ResponseBody
    Page<Post> findAll(@RequestParam(name = "page", defaultValue = "0") int page,
                       @RequestParam(name = "size", defaultValue = "8") int size) {
        return postsRepository.findAll(PageRequest.of(page, size, Sort.by("zonedDateTime").descending()));
    }

    @PutMapping(value = "/update/{post_Id}")
    @PreAuthorize("hasAuthority('post:put')")
    public Post updatePost(@PathVariable("post_Id") UUID post_Id,
                           @RequestParam("file") MultipartFile file,
                           @Validated @NonNull @ModelAttribute Post post) throws IOException, ServletRequestBindingException {
        Post updatePost = findPostById(post_Id);
        isTitleEmpty(post);
        isDescriptionEmpty(post);
        isFile(file);

        updatePost.setTitle(post.getTitle());
        updatePost.setDescription(post.getDescription());
        updatePost.setImage(file.getBytes());
        updatePost.setThumbnails(createThumbnail(file, 600).toByteArray());
        updatePost.setStaffId(post.getStaffId());
        updatePost.setZonedDateTime(postsRepository.generateZonedDateTimeUtil());
        return postsRepository.save(updatePost);
    }

    @DeleteMapping(value = "/delete/{post_Id}") // Map ONLY DELETE Requests
    @PreAuthorize("hasAuthority('post:delete')")
    public void removePostByPostId(@PathVariable("post_Id") UUID post_Id) {
        postsRepository.deleteById(post_Id);
    }

    @GetMapping(value = "/get/{post_Id}") // Map ONLY DELETE Requests
    @PreAuthorize("hasAuthority('post:get')")
    public Post findPostById(@PathVariable("post_Id") UUID id) {
        return postsRepository.findPostByPostId(id);
    }
}
