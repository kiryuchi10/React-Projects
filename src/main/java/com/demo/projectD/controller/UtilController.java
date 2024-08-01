package com.demo.projectD.controller;

import java.util.List;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.projectD.repository.vo.UtilVo;
import com.demo.projectD.service.UtilService;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UtilController {
	private static final Logger logger = LoggerFactory.getLogger(UtilController.class);

	@Autowired
	UtilService utilService;

	@GetMapping("/orders/all")
	public List<UtilVo> getBookOrders(Model model) {
		logger.info("Fetching all book orders");
		List<UtilVo> orderDetails = utilService.getBookOrders();
		model.addAttribute("orderDetails", orderDetails);
		return utilService.getBookOrders();
	}

	@GetMapping("/orders/{date}")
	public List<UtilVo> getOrdersByDate(@PathVariable String date, Model model) {
		logger.info("Fetching book orders for date: {}", date);
		return utilService.getBookOrdersByDate(date);
	}

	@PostMapping("/signup")
	public String signup(@RequestBody UtilVo util) {
		utilService.registerUser(util);
		return "Util registered successfully";
	}

	@PostMapping("/login")
	public UtilVo login(@RequestParam String email, @RequestParam String password) {
		UtilVo Util = utilService.login(email, password);
		if (Util != null) {
			return Util;
		}
		throw new RuntimeException("Invalid credentials");
	}
}
