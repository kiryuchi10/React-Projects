package com.demo.projectD.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.demo.projectD.repository.vo.UtilVo;
import com.demo.projectD.service.UtilService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UtilController {
    private static final Logger logger = LoggerFactory.getLogger(UtilController.class);

    @Autowired
    private UtilService utilService;

    @GetMapping("/orders/all")
    public List<UtilVo> getBookOrders() {
        logger.info("Fetching all book orders");
        return utilService.getBookOrders();
    }

    @GetMapping("/orders/{date}")
    public List<UtilVo> getOrdersByDate(@PathVariable String date) {
        logger.info("Fetching book orders for date: {}", date);
        return utilService.getBookOrdersByDate(date);
    }

    @PostMapping("/signup")
    public String signup(@RequestBody UtilVo user) {
        utilService.registerUser(user);
        return "User registered successfully";
    }

    /*@PostMapping("/login")
    public UtilVo login(@RequestParam(required = false) String userName, 
                        @RequestParam(required = false) String password) {
        logger.info("Attempting login with userName: {} and password: {}", userName, password);

        if (userName == null || userName.isEmpty() || password == null || password.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username and password must be provided");
        }

        UtilVo user = utilService.login(userName, password);

        if (user != null) {
            logger.info("Login successful for userName: {}", userName);
            return user;
        } else {
            logger.info("Login failed for userName: {}", userName);
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid credentials");
        }
    }*/
   
    //@PostMapping("/login")
    @RequestMapping(value="/login",method= {RequestMethod.POST, RequestMethod.GET})
    public UtilVo login(@RequestBody UtilVo user) {
        logger.info("Attempting login with userName: {} and password: {}", user.getUserName(), user.getPassword());

        if (user.getUserName() == null || user.getUserName().isEmpty() ||
            user.getPassword() == null || user.getPassword().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username and password must be provided");
        }

        UtilVo authenticatedUser = utilService.login(user.getUserName(), user.getPassword());

        if (authenticatedUser != null) {
            logger.info("Login successful for userName: {}", user.getUserName());
            return authenticatedUser;
        } else {
            logger.info("Login failed for userName: {}", user.getUserName());
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid credentials");
        }
    }

}
