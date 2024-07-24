package com.demo.projectD;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan
@SpringBootApplication
public class ProjectDApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectDApplication.class, args);
	}

}
