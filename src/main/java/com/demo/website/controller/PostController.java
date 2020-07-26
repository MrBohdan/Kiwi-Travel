package com.demo.website.controller;

import com.demo.website.model.Post;
import com.demo.website.repository.PostsRepository;
import org.hibernate.jpa.QueryHints;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.lang.NonNull;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityManager;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.apache.http.entity.ContentType.*;


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

    private PostsRepository postsRepository;
    private EntityManager entityManager;

    @Autowired
    public PostController(PostsRepository postsRepository, EntityManager entityManager) {
        this.postsRepository = postsRepository;
        this.entityManager = entityManager;
    }

    @PostMapping(value = "/add")  // Map ONLY POST Requests
    @ResponseBody
    public Post addPost(@RequestParam("file") MultipartFile file, @Validated @NonNull @ModelAttribute Post post) throws IOException {

        isFileEmpty(file);
        isImage(file);

        post.setImage(file.getBytes());
        post.setPostId(postsRepository.generateUUID());
        post.setZonedDateTime(postsRepository.generateZonedDateTimeUtil());
        return postsRepository.save(post);
    }

   /* @GetMapping(value = "/get") // Map ONLY GET Requests
    public Page<Post> findAll(Pageable pageable){
        return postsRepository.findAll(pageable);
    }*/
    @GetMapping(value = "/get") // Map ONLY GET Requests
   @Transactional
    public @ResponseBody List<Post> findAll() {
        try(Stream<Post> postStream = entityManager
                .createQuery(
                        "select p " +
                                "from post p " +
                                "order by p.zonedDateTime desc", Post.class)
                .setHint( QueryHints.HINT_FETCH_SIZE, 20 )
                .unwrap(Query.class)
                .stream()
        ) {
            return postStream
                    .limit( 20 )
                    .collect(
                            Collectors.toList()
                    );
        }
    }

    @DeleteMapping(value = "/delete/{post_Id}") // Map ONLY DELETE Requests
    public void removePostByPostId(@PathVariable("post_Id") UUID post_Id){
        postsRepository.deleteById(post_Id);
    }

    public void isFileEmpty(MultipartFile file){
        if(file.isEmpty()){
            throw new IllegalStateException("Cannot upload empty file [" + file.getSize()+"]");
        }
    }

    public void isImage(MultipartFile file){
        if(!Arrays.asList(IMAGE_JPEG.getMimeType(), IMAGE_PNG.getMimeType()).contains(file.getContentType())){
            throw new IllegalStateException("File must be an image [" + file.getContentType() + "]");
        }
    }
}
