package com.demo.projectD.repository.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.demo.projectD.repository.vo.UtilVo;

@Repository
public interface UtilDao {

	List<UtilVo> getBookOrdersByDate(String date);

	List<UtilVo> getBookOrders();

	UtilVo findByUserName(String userName);

	void addUser(UtilVo user);

	UtilVo login(String userName, String password);


}
