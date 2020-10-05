package com.kiwi.website.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;

import java.io.IOException;
import java.io.InputStream;

/**
 * Inject google analytics API V4 service account JSON
 *
 * @author Bohdan Skrypnyk (bohdan.skrypnyk@yahoo.com)
 */
@Configuration
public class ResourceFiles {

    @Value("classpath:Kiwi-Travel-e0816208fef3.json")
    private Resource jsonFile;

    @Bean(name = "jsonFile")
    public Resource getKeyFile() {
        System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>" + jsonFile);
        try (InputStream is = jsonFile.getInputStream()) {
            return jsonFile;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}