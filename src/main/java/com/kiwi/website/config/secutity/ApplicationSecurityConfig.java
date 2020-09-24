package com.kiwi.website.config.secutity;

import com.kiwi.website.controller.StaffController;
import com.kiwi.website.jwt.JwtConfig;
import com.kiwi.website.jwt.JwtUsernameAndPasswordAuthenticationFilter;
import com.kiwi.website.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import javax.crypto.SecretKey;

/**
 * @author Bohdan Skrypnyk (bohdan.skrypnyk@yahoo.com)
 */
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class ApplicationSecurityConfig extends WebSecurityConfigurerAdapter {

    private final PasswordEncoder passwordEncoder;
    private final StaffService staffService;
    private final SecretKey secretKey;
    private final JwtConfig jwtConfig;
    private final StaffController staffController;
    private JwtUsernameAndPasswordAuthenticationFilter jwtUsernameAndPasswordAuthenticationFilter;

    @Autowired
    public ApplicationSecurityConfig(PasswordEncoder passwordEncoder,
                                     StaffService staffService,
                                     SecretKey secretKey,
                                     JwtConfig jwtConfig, StaffController staffController) {
        this.passwordEncoder = passwordEncoder;
        this.staffService = staffService;
        this.secretKey = secretKey;
        this.jwtConfig = jwtConfig;
        this.staffController = staffController;
    }

    /**
     * Configuration for Spring Security
     * <p>
     * NOTE: delete '.logoutRequestMatcher' if .csrf is not disable
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                /*.csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                .and()*/
                .csrf().disable()

                /*   .sessionManagement()
                   .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                   .and()
                   .addFilter(new JwtUsernameAndPasswordAuthenticationFilter(authenticationManager(), jwtConfig, secretKey))
                   .addFilterAfter(new JwtTokenVerifier(jwtConfig, secretKey), JwtUsernameAndPasswordAuthenticationFilter.class)*/
                .authorizeRequests()

                // define what will be permitted for all
                .antMatchers(HttpMethod.GET, "/",
                        "index",
                        "/login",
                        "/api/v1.0/map/getMap",
                        "/built/assets/*.video.mp4",
                        "/built/assets/*.logo_full.png",
                        "/built/assets/*.frame-001.jpg",
                        "/built/public/*",
                        "/built/login/*",
                        "/built/main/*")
                .permitAll()
                .anyRequest()
                .authenticated()

                .and()
                .formLogin()
                .loginPage("/login").permitAll()
                .defaultSuccessUrl("/dashboard", true)
                .passwordParameter("password")
                .usernameParameter("username")

                .and()
                .logout()
                .logoutUrl("/logout")
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout", "GET"))
                .clearAuthentication(true)
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID")
                .logoutSuccessUrl("/");
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) {
        auth.authenticationProvider(daoAuthenticationProvider());
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(passwordEncoder);
        provider.setUserDetailsService(staffService);
        return provider;
    }
}