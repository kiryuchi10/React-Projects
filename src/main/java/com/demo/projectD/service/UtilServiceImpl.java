package com.demo.projectD.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.demo.projectD.repository.dao.UtilDao;
import com.demo.projectD.repository.vo.UtilVo;

@Primary
@Service
public class UtilServiceImpl implements UtilService{
	
	@Autowired
	UtilDao utilDao;
	
	@Override
	public List<UtilVo> getBookOrdersByDate(String date) {
		List<UtilVo> list=utilDao.getBookOrdersByDate(date);
		return list;
	}
	
}
