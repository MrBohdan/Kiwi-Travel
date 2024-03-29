package com.kiwi.website.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.ZonedDateTime;
import java.util.Arrays;
import java.util.Objects;
import java.util.UUID;

/**
 * JPA Annotated Pojo (Plain Old Java Object) that represents a post.
 *
 * @author Bohdan Skrypnyk (bohdan.skrypnyk@yahoo.com)
 */
@Entity(name = "post")
@Table(name = "post")
public class Post {

    @Id
    @Column(name = "post_Id", unique = true, updatable = false, length = 36, nullable = false)
    private UUID postId;
    @Column(name = "image", nullable = false)
    private byte[] image;
    @Column(name = "thumbnails", nullable = false)
    private byte[] thumbnails;
    @Column(name = "title", nullable = false, columnDefinition = "TEXT")
    private String title;
    @Column(name = "description", nullable = false, columnDefinition = "TEXT")
    private String description;
    @Column(name = "zonedDateTime", nullable = false, columnDefinition = "TIMESTAMP WITH TIME ZONE")
    private ZonedDateTime zonedDateTime;
    @Column(name = "staff_Id", length = 36, nullable = false)
    private UUID uuid;

    /**
     * @param postId
     * @param image
     * @param thumbnails
     * @param title
     * @param description
     * @param zonedDateTime
     * @param uuid
     */
    public Post(@JsonProperty("post_Id") UUID postId,
                @JsonProperty("image") byte[] image,
                @JsonProperty("thumbnails") byte[] thumbnails,
                @JsonProperty("title") String title,
                @JsonProperty("description") String description,
                @JsonProperty("zonedDateTime") ZonedDateTime zonedDateTime,
                @JsonProperty("staff_Id") UUID uuid) {
        this.postId = postId;
        this.image = image;
        this.thumbnails = thumbnails;
        this.title = title;
        this.description = description;
        this.zonedDateTime = zonedDateTime;
        this.uuid = uuid;
    }

    /**
     * @param postId
     * @param thumbnails
     * @param title
     * @param description
     * @param zonedDateTime
     * @param uuid
     */
    public Post(@JsonProperty("post_Id") UUID postId,
                @JsonProperty("thumbnails") byte[] thumbnails,
                @JsonProperty("title") String title,
                @JsonProperty("description") String description,
                @JsonProperty("zonedDateTime") ZonedDateTime zonedDateTime,
                @JsonProperty("staff_Id") UUID uuid) {
        this.postId = postId;
        this.thumbnails = thumbnails;
        this.title = title;
        this.description = description;
        this.zonedDateTime = zonedDateTime;
        this.uuid = uuid;
    }


    public Post() {
    }

    public UUID getPostId() {
        return postId;
    }

    public void setPostId(UUID postId) {
        this.postId = postId;
    }

    public UUID getStaffId() {
        return uuid;
    }

    public void setStaffId(UUID staffId) {
        this.uuid = staffId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ZonedDateTime getZonedDateTime() {
        return zonedDateTime;
    }

    public void setZonedDateTime(ZonedDateTime zonedDateTime) {
        this.zonedDateTime = zonedDateTime;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public byte[] getThumbnails() {
        return thumbnails;
    }

    public void setThumbnails(byte[] thumbnails) {
        this.thumbnails = thumbnails;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Post)) return false;
        Post post = (Post) o;
        return Objects.equals(postId, post.postId) &&
                Arrays.equals(image, post.image) &&
                Arrays.equals(thumbnails, post.thumbnails) &&
                Objects.equals(title, post.title) &&
                Objects.equals(description, post.description) &&
                Objects.equals(zonedDateTime, post.zonedDateTime) &&
                Objects.equals(uuid, post.uuid);
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(postId, title, description, zonedDateTime, uuid);
        result = 31 * result + Arrays.hashCode(image);
        result = 31 * result + Arrays.hashCode(thumbnails);
        return result;
    }
}
