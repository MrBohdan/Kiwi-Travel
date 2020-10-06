package com.kiwi.website.config.security;

/**
 * Define Permissions
 */
public enum ApplicationUserPermission {

    POST_ADD("post:add"),
    POST_GET("post:get"),
    POST_DELETE("post:delete"),
    POST_PUT("post:put");

    private final String permission;

    ApplicationUserPermission(String permission) {
        this.permission = permission;
    }

    public String getPermission() {
        return permission;
    }
}
