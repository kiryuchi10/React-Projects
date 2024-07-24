package com.demo.projectD.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.demo.projectD.repository.vo.UtilVo;
import com.demo.projectD.service.UtilService;

@Controller
public class TestController {
	
	private static final Logger logger = LoggerFactory.getLogger(TestController.class);
	
	@Autowired
	UtilService utilService;
	

	@RequestMapping({ "/main", "", "/" })
	public String main(Model model) {
		logger.debug("메인 페이지");
		// 모델에 필요한 기본 속성을 추가할 수 있습니다.
		// model.addAttribute("key", "value");
		return "home";
	}

	@GetMapping("/hello")
	public String sayHello() {
		return "Hello from Spring Boot!";
	}

	@GetMapping("/order/{date}")
	public String getBookOrderByDate(@PathVariable String date, Model model) {
		List<UtilVo> list = utilService.getBookOrdersByDate(date);
		model.addAttribute("list", list);
		return "/";
	}
}
