package com.demo.projectD.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.demo.projectD.repository.vo.UtilVo;

@Service
public interface UtilService {

	List<UtilVo> getBookOrdersByDate(String date);

}
