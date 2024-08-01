package com.demo.projectD.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.demo.projectD.repository.vo.UtilVo;

@Service
public interface UtilService {


	List<UtilVo> getBookOrders();
	List<UtilVo> getBookOrdersByDate(String date);
	void registerUser(UtilVo user);
	UtilVo login(String email, String password);
	

}
