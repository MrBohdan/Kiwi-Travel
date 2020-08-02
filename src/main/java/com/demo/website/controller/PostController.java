package com.demo.website.controller;

import com.demo.website.model.Post;
import com.demo.website.repository.PostsRepository;
import org.imgscalr.Scalr;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.lang.NonNull;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.UUID;

import static org.apache.http.entity.ContentType.IMAGE_JPEG;
import static org.apache.http.entity.ContentType.IMAGE_PNG;

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
        isFileEmpty(file);
        isImage(file);
        isImageSizeExceed(file);

        post.setImage(file.getBytes());

        //BufferedImage thumbnail = ImageIO.read(new ByteArrayInputStream(file.getBytes()));
        //Thumbnails.Builder builder = Thumbnails.of(thumbnail).size(250, 250);
        post.setThumbnails(createThumbnail(file,600).toByteArray());
        post.setPostId(postsRepository.generateUUID());
        post.setZonedDateTime(postsRepository.generateZonedDateTimeUtil());
        return postsRepository.save(post);
    }

    private ByteArrayOutputStream createThumbnail(MultipartFile file, Integer width) throws IOException{
        ByteArrayOutputStream thumbOutput = new ByteArrayOutputStream();
        BufferedImage img = ImageIO.read(file.getInputStream());
        BufferedImage thumbImg = Scalr.resize(img, Scalr.Method.AUTOMATIC, Scalr.Mode.AUTOMATIC, width, Scalr.OP_ANTIALIAS);
        ImageIO.write(thumbImg, file.getContentType().split("/")[1] , thumbOutput);
        return thumbOutput;
    }

    @GetMapping(value = "/get") // Map ONLY GET Requests
    public @ResponseBody
    Page<Post> findAll(Pageable pageable) {
        return postsRepository.findAll(pageable);
    }

    @DeleteMapping(value = "/delete/{post_Id}") // Map ONLY DELETE Requests
    public void removePostByPostId(@PathVariable("post_Id") UUID post_Id) {
        postsRepository.deleteById(post_Id);
    }

    public void isFileEmpty(MultipartFile file) {
        if (file.isEmpty()) {
            throw new IllegalStateException("Cannot upload empty file [" + file.getSize() + "]");
        }
    }

    public void isImage(MultipartFile file) {
        if (!Arrays.asList(IMAGE_JPEG.getMimeType(), IMAGE_PNG.getMimeType()).contains(file.getContentType())) {
            throw new IllegalStateException("File must be an image [" + file.getContentType() + "]");
        }
    }

    public void isImageSizeExceed(MultipartFile file) {
        if (file.getSize() > 20 * 1024 * 1024) {
            throw new IllegalStateException("Image size cannot exceed 20M!");
        }
    }
}
