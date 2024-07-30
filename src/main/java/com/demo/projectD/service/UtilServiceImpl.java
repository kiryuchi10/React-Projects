package com.demo.projectD.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.demo.projectD.repository.dao.UtilDao;
import com.demo.projectD.repository.vo.UtilVo;

@Primary
@Service
public class UtilServiceImpl implements UtilService {
    
    @Autowired
    private UtilDao utilDao;  // Injecting UtilDao

    /**
     * Fetches all book orders.
     * @return List of all book orders
     */
    @Override
    public List<UtilVo> getBookOrders() {
        try {
            return utilDao.getBookOrders();
        } catch (Exception e) {
            // Handle exception (log it, rethrow it, etc.)
            throw new RuntimeException("Failed to fetch book orders", e);
        }
    }

    /**
     * Fetches book orders by a specific date.
     * @param date The date to filter book orders
     * @return List of book orders for the specified date
     */
    @Override
    public List<UtilVo> getBookOrdersByDate(String date) {
        try {
            return utilDao.getBookOrdersByDate(date);
        } catch (Exception e) {
            // Handle exception (log it, rethrow it, etc.)
            throw new RuntimeException("Failed to fetch book orders by date", e);
        }
    }
    
    public UtilVo getUserByName(String name) {
        return utilDao.findUserByName(name);
    }

    public void addUser(String name, String password) {
        utilDao.addUser(name, password);
    }
}
