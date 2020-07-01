package com.demo.website.datasource;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.net.URI;
import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@Configuration
public class PostgresDatabaseConfig {

    /**@Value("${spring.datasource.url}")
    private String dbUrl;**/
    /**private static Connection getConnection() throws URISyntaxException, SQLException {
        String dbUrl = System.getenv("JDBC_DATABASE_URL");
        return DriverManager.getConnection(dbUrl);
    }**/
    @Bean
    public BasicDataSource dataSource() throws URISyntaxException {
        String JDBC_DATABASE_URL = System.getenv("JDBC_DATABASE_URL");
        String JDBC_DATABASE_USERNAME = System.getenv("JDBC_DATABASE_USERNAME");
        String JDBC_DATABASE_PASSWORD = System.getenv("JDBC_DATABASE_PASSWORD");
        String SPRING_DATASOURCE_DRIVER_CLASS_NAME= System.getenv("SPRING_DATASOURCE_DRIVER-CLASS-NAME");

        BasicDataSource basicDataSource = new BasicDataSource();
        basicDataSource.setUrl(JDBC_DATABASE_URL);
        basicDataSource.setUsername(JDBC_DATABASE_USERNAME);
        basicDataSource.setPassword(JDBC_DATABASE_PASSWORD);
        basicDataSource.setDriverClassName(SPRING_DATASOURCE_DRIVER_CLASS_NAME);
        return basicDataSource;
    }
    /**@@Bean
    public HikariConfig hikariConfig() throws URISyntaxException {
        HikariConfig config = new HikariConfig();
        URI dbUri = new URI(System.getenv("JDBC_DATABASE_URL"));

        String username = dbUri.getUserInfo().split(":")[0];
        String password = dbUri.getUserInfo().split(":")[1];
        String dbUrl = "jdbc:postgresql://" + dbUri.getHost() + ':' + dbUri.getPort() + dbUri.getPath() + "?sslmode=require";

        config.setJdbcUrl(dbUrl);
        config.setUsername(username);
        config.setPassword(password);
        return new HikariDataSource(config);
    }**/
    /**@Bean
    @ConfigurationProperties("spring.datasource")
    public HikariConfig hikariConfig(){
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(dbUrl);
        return new HikariDataSource(config);
    }**/

    /**@Bean
    @ConfigurationProperties("spring.datasource")
    public HikariDataSource hikariDataSource(){
        return DataSourceBuilder
                .create()
                .type(HikariDataSource.class)
                .build();
    }*/
}
