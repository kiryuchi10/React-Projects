package com.demo.projectD.repository.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.demo.projectD.repository.vo.UtilVo;

@Repository
public interface UtilDao {

	List<UtilVo> getBookOrdersByDate(String date);

}
