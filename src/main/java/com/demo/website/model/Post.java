package com.demo.website.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;
import java.util.UUID;

@Entity(name = "post")
@Table(name = "post")
public class Post {

    @Id
    @Column(name = "post_Id", unique = true, updatable = false, length = 36, nullable = false)
    private UUID postId;
    @Column(name = "title", nullable = false)
    private String title;
    @Column(name = "description", nullable = false)
    private String description;
    @Column(name = "timestamp", nullable = false)
    private Timestamp timestamp;
    @Column(name = "staff_Id", length = 36, nullable = false)
    private UUID uuid;

    public Post(@JsonProperty("post_Id") UUID postId,
                @JsonProperty("title") String title,
                @JsonProperty("description") String description,
                @JsonProperty("timestamp") Timestamp timestamp,
                @JsonProperty("staff_Id") UUID uuid) {
        this.postId = postId;
        this.title = title;
        this.description = description;
        this.timestamp = timestamp;
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

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Post)) return false;
        Post post = (Post) o;
        return postId.equals(post.postId) &&
                title.equals(post.title) &&
                description.equals(post.description) &&
                timestamp.equals(post.timestamp);
    }

    @Override
    public int hashCode() {
        return Objects.hash(postId, title, description, timestamp);
    }
}
