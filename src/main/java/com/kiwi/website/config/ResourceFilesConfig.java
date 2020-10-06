package com.kiwi.website.config;

import com.kiwi.website.controller.reporting.GoogleAnalyticsReportingController;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.logging.Logger;

/**
 * Inject google analytics API V4 service account JSON
 *
 * @author Bohdan Skrypnyk (bohdan.skrypnyk@yahoo.com)
 */
@Configuration
public class ResourceFilesConfig {

    private final static Logger LOGGER = Logger.getLogger(ResourceFilesConfig.class.getName());

    @Value("classpath:Kiwi-Travel-e0816208fef3.json")
    private Resource jsonFile;

    @Bean(name = "jsonFile")
    public File getKeyFile() {
        System.out.println(">>>>>>>>>>>>> ResourceFilesConfig >>>>>>>>>>>>>>>" + jsonFile);
        LOGGER.info("Service account JSON received: " + jsonFile);
        try (InputStream is = jsonFile.getInputStream()) {
            Path temp = Files.createTempFile("resource-", ".ext");
            Files.copy(is, temp, StandardCopyOption.REPLACE_EXISTING);
            return temp.toFile();
        } catch (IOException e) {
            LOGGER.info("Service account JSON received: FILE NOT FOUND" + jsonFile);
            System.out.println(">>>>>>>>>>>>> ResourceFilesConfig >>>>>>>>>>>>>>> FILE NOT FOUND");
            e.printStackTrace();
        }
        return null;
    }
}