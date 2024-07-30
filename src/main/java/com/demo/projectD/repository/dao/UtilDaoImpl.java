package com.demo.projectD.repository.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import com.demo.projectD.repository.vo.UtilVo;

@Primary
@Repository
public class UtilDaoImpl implements UtilDao{
	@Autowired
	SqlSession sqlSession;
	
	@Override
	public List<UtilVo> getBookOrders() {
		return sqlSession.selectList("utils.findAllOrders");
	}

	
	@Override
	public List<UtilVo> getBookOrdersByDate(String date) {
		List<UtilVo> list=sqlSession.selectList("utils.findBookOrdersByDate");
		return list;
	}


	@Override
	public UtilVo findUserByName(String name) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("utils.findUserByName");
	}


	public void addUser(String name, String password) {
        Map<String, Object> params = new HashMap<>();
        params.put("name", name);
        params.put("password", password);
        sqlSession.insert("com.demo.projectD.repository.UtilDao.addUser", params);
    }

	
}
