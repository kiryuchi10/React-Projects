package com.demo.projectD.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RequestMapping("/api")
@RestController
public class TestController {
	
	@GetMapping("/hello")
	public String sayHello() {
		return "Hello from Spring Boot!";
	}
}
