package com.demo.website.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "posts")
public class Post {

    @Id
    private UUID idPost;

    private String title;
    private String description;
    private Timestamp timestamp;

    public Post(@JsonProperty("id") UUID idPost,
                @JsonProperty("title") String title,
                @JsonProperty("description") String description,
                @JsonProperty("timestamp") Timestamp timestamp) {
        this.idPost = idPost;
        this.title = title;
        this.description = description;
        this.timestamp = timestamp;
    }

    public Post() {
    }

    public UUID getIdPost() {
        return idPost;
    }

    public void setIdPost(UUID idPost) {
        this.idPost = idPost;
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
        return idPost.equals(post.idPost) &&
                title.equals(post.title) &&
                description.equals(post.description) &&
                timestamp.equals(post.timestamp);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idPost, title, description, timestamp);
    }
}
