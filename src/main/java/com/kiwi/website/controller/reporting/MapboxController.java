package com.kiwi.website.controller.reporting;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1.0/analytics/Mapbox")
public class MapboxController {

    private final static String REACT_APP_MAPBOX_ACCESS_TOKEN = System.getenv("REACT_APP_MAPBOX_ACCESS_TOKEN");

    @GetMapping(value = "/getToken") // Map ONLY GET Requests
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public String getMapBoxToken(){
        return REACT_APP_MAPBOX_ACCESS_TOKEN;
    }
}
