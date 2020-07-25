package com.demo.website.controller;

import com.demo.website.model.Post;
import com.demo.website.repository.PostDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import static org.apache.http.entity.ContentType.*;

@RestController
@RequestMapping(value = "api/v1.0/post/")
//TODO
@CrossOrigin("*") // should be defined or not ?
public class PController {

    @Autowired
    private PostDao postDao;

    @PostMapping(value = "/add")  // Map ONLY POST Requests
    @ResponseBody
    public int addPost(@RequestParam("file") MultipartFile file, @Validated @NonNull @ModelAttribute Post post) throws IOException {

        isFileEmpty(file);
        isImage(file);

        post.setImage(file.getBytes());
        //post.setZonedDateTime(postDao.generateZonedDateTimeUtil());
        return postDao.insertPost(post);
    }

    @GetMapping(path = "/get") // Map ONLY GET Requests
    public List<Post> getPost() {
        return postDao.findAll();
    }

    public void isFileEmpty(MultipartFile file){
        if(file.isEmpty()){
            throw new IllegalStateException("Cannot upload empty file [" + file.getSize()+"]");
        }
    }

    public void isImage(MultipartFile file) {
        if (!Arrays.asList(IMAGE_JPEG.getMimeType(), IMAGE_PNG.getMimeType()).contains(file.getContentType())) {
            throw new IllegalStateException("File must be an image [" + file.getContentType() + "]");
        }
    }
}
