package com.kiwi.website.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;

@Controller
public class RepositoryController {

    @RequestMapping("/")
    public String getIndexView() {
        return "index";
    }

    @RequestMapping("/dashboard")
    public String getDashboardView() {
        return "dashboard";
    }

    @RequestMapping("/posts")
    public String getPostView() {
        return "posts";
    }

    @RequestMapping("/login")
    public String getLoginView() {
        return "login";
    }

}
