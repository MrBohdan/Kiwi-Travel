package com.demo.website.config;

import org.springframework.context.annotation.Configuration;


@Configuration
/**@EnableWebSecurity**/
public class SecurityConfig /** extends WebSecurityConfigurerAdapter **/{

    /**
     * Configuration for Spring Security
     *
     * @return
     */
    /** @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                // define what will be permitted for all
                .antMatchers("/",
                        "index",
                        "/built/entry.js",
                        "/build/entry.js.map",
                        "/build/bundle.js")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .httpBasic();/
        //.formLogin()
        //.and()
        //.csrf().disable()
        //.logout()
        //.logoutSuccessUrl("/");
    }**/

    /**
     * Define how user will be retrieved from database
     *
     * @return
     */
    /**@Override
    protected UserDetailsService userDetailsService() {
        return super.userDetailsService();
    }**/
}