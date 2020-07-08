package com.demo.website.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RepositoryController {

    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }

    @RequestMapping(value = "/dashboard")
    public String dashboard() {
        return "dashboard";
    }

    @RequestMapping(value = "/posts")
    public String posts() {
        return "posts";
    }
}
