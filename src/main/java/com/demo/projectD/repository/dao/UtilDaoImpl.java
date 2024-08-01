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
    public void addUser(UtilVo user) {
        sqlSession.insert("utils.addUser", user);
    }

    @Override
    public UtilVo findByEmail(String email) {
        return sqlSession.selectOne("utils.findByEmail", email);
    }

	
}
