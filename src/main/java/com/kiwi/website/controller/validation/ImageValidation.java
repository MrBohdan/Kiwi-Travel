package com.kiwi.website.controller.validation;

import com.kiwi.website.model.Post;
import org.imgscalr.Scalr;
import org.springframework.web.bind.ServletRequestBindingException;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Arrays;

import static org.apache.http.entity.ContentType.IMAGE_JPEG;
import static org.apache.http.entity.ContentType.IMAGE_PNG;

public class ImageValidation {

    public static void isFile(MultipartFile file) {
        isFileEmpty(file);
        isImage(file);
        isImageSizeExceed(file);
    }

    public static void isTitleEmpty(Post post) throws ServletRequestBindingException {
        if (post.getTitle().isEmpty()) {
            throw new ServletRequestBindingException("Title cannot be empty!");
        }
    }

    public static void isDescriptionEmpty(Post post) throws ServletRequestBindingException {
        if (post.getDescription().isEmpty()) {
            throw new ServletRequestBindingException("Description cannot be empty!");
        }
    }

    private static void isFileEmpty(MultipartFile file) {
        if (file.isEmpty()) {
            throw new IllegalStateException("Cannot upload empty file [" + file.getSize() + "]");
        }
    }

    private static void isImage(MultipartFile file) {
        if (!Arrays.asList(IMAGE_JPEG.getMimeType(), IMAGE_PNG.getMimeType()).contains(file.getContentType())) {
            throw new IllegalStateException("File must be an image [" + file.getContentType() + "]");
        }
    }

    private static void isImageSizeExceed(MultipartFile file) {
        if (file.getSize() > 20 * 1024 * 1024) {
            throw new IllegalStateException("Image size cannot exceed 20M!");
        }
    }

    public static ByteArrayOutputStream createThumbnail(MultipartFile file, Integer width) throws IOException {
        ByteArrayOutputStream thumbOutput = new ByteArrayOutputStream();
        BufferedImage img = ImageIO.read(file.getInputStream());
        BufferedImage thumbImg = Scalr.resize(img, Scalr.Method.AUTOMATIC, Scalr.Mode.AUTOMATIC, width, Scalr.OP_ANTIALIAS);
        ImageIO.write(thumbImg, file.getContentType().split("/")[1], thumbOutput);
        return thumbOutput;
    }
}
