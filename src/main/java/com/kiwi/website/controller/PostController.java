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

import java.io.IOException;
import java.util.List;
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
    Post addPost(@RequestParam("file") MultipartFile file, @Validated @NonNull @ModelAttribute Post post) throws IOException, ServletRequestBindingException {
        isTitleEmpty(post);
        isDescriptionEmpty(post);
        isFileEmpty(file);
        isImage(file);
        isImageSizeExceed(file);

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
        return postsRepository.findAll(PageRequest.of(page, size/*. Sort.by(sortProperty).descending()*/));
    }

    @DeleteMapping(value = "/delete/{post_Id}") // Map ONLY DELETE Requests
    @PreAuthorize("hasAuthority('post:delete')")
    public void removePostByPostId(@PathVariable("post_Id") UUID post_Id) {
        postsRepository.deleteById(post_Id);
    }

    @GetMapping(value = "/get/{post_Id}") // Map ONLY DELETE Requests
    @PreAuthorize("hasAuthority('post:get')")
    public List<Post> findPostById(@PathVariable("post_Id") UUID id) {
        return postsRepository.findPostByPostId(id);
    }
}
