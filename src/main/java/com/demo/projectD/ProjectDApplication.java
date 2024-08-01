package com.demo.projectD;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;

@SpringBootApplication(exclude= {UserDetailsServiceAutoConfiguration.class})
@MapperScan("com.demo.projectD.repository.dao")
public class ProjectDApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProjectDApplication.class, args);
    }
}
