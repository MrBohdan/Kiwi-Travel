package com.demo.website.datasource;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PostgresDatabaseConfig {

    @Value("${spring.datasource.url}")
    private String dbUrl;

    @Bean
    @ConfigurationProperties("spring.datasource")
    public HikariConfig hikariConfig(){
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(dbUrl);
        return new HikariDataSource(config);
    }

    /**@Bean
    @ConfigurationProperties("spring.datasource")
    public HikariDataSource hikariDataSource(){
        return DataSourceBuilder
                .create()
                .type(HikariDataSource.class)
                .build();
    }*/
}
