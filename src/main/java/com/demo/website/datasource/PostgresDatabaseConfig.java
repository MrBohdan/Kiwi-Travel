package com.demo.website.datasource;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import java.net.URISyntaxException;

@Configuration
@ComponentScan(basePackages = "com.demo.website.datasource")
public class PostgresDatabaseConfig {

    private final static String JDBC_DATABASE_URL = System.getenv("JDBC_DATABASE_URL");
    private final static String JDBC_DATABASE_USERNAME = System.getenv("JDBC_DATABASE_USERNAME");
    private final static String JDBC_DATABASE_PASSWORD = System.getenv("JDBC_DATABASE_PASSWORD");
    private final static String SPRING_DATASOURCE_DRIVER_CLASS_NAME= System.getenv("SPRING_DATASOURCE_DRIVER-CLASS-NAME");

    @Bean
    public BasicDataSource dataSource() throws URISyntaxException {

        BasicDataSource basicDataSource = new BasicDataSource();
        basicDataSource.setUrl(JDBC_DATABASE_URL);
        basicDataSource.setUsername(JDBC_DATABASE_USERNAME);
        basicDataSource.setPassword(JDBC_DATABASE_PASSWORD);
        basicDataSource.setDriverClassName(SPRING_DATASOURCE_DRIVER_CLASS_NAME);
        return basicDataSource;
    }

}
