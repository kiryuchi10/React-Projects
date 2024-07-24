package com.demo.projectD.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.projectD.repository.vo.UtilVo;
import com.demo.projectD.service.UtilService;

@RestController
@RequestMapping("/util")
public class UtilController {
private static final Logger logger = LoggerFactory.getLogger(UtilController.class);
	
	@Autowired
	UtilService utilService;
	

	@GetMapping("/orders/all")
    public List<UtilVo> getBookOrders() {
        return utilService.getBookOrders(); // Adjust method name if necessary
    }

    @GetMapping("/orders/{date}")
    public List<UtilVo> getOrdersByDate(@RequestParam String date) {
        return utilService.getBookOrdersByDate(date);
    }
}
