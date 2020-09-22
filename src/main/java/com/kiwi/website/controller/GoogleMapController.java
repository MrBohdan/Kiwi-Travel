package com.kiwi.website.controller;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping(value = "api/v1.0/map/")
@CrossOrigin("*")
public class GoogleMapController {

    @RequestMapping("/getMap")
    public @ResponseBody
    String getMap() throws IOException {
        OkHttpClient client = new OkHttpClient().newBuilder()
                .build();
        Request request = new Request.Builder()
                .url("https://www.google.com/maps/embed/v1/place?key=AIzaSyAjq8aJKgtpjP-F0o3jONRjFf4wOuZIwfc&q=Eiffel+Tower,Paris+France&language=uk&region=UA")
                .method("GET", null)
                .build();
        Response response = client.newCall(request).execute();
        String jsonData = response.body().string();
        return jsonData;
    }
}
