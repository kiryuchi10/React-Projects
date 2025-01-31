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
    public UtilVo findByUserName(String userName) {
        return sqlSession.selectOne("utils.findByUserName", userName);
    }
    
    @Override
    public UtilVo login(String userName, String password) {
        Map<String, Object> params = new HashMap<>();
        params.put("userName", userName);
        params.put("password", password);
        return sqlSession.selectOne("utils.findByUserNameAndPassword", params);
    }
	
}
