package com.demo.projectD.repository.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.demo.projectD.repository.vo.UtilVo;

@Repository
public interface UtilDao {

	List<UtilVo> getBookOrdersByDate(String date);

	List<UtilVo> getBookOrders();

	UtilVo findUserByName(@Param("name") String name);

<<<<<<< Updated upstream
	void addUser(@Param("name") String name, @Param("password") String password);
=======
	UtilVo findByUserName(String userName);
>>>>>>> Stashed changes

}
