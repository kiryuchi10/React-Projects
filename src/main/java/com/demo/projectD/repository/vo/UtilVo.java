package com.demo.projectD.repository.vo;

import java.util.Date;

public class UtilVo {
	private Date orderDate;
	private long orderId;
	private String bookName;
	private int checked;
	
	private long no;
	private String name;
	private String password;
	private String joinDate;
	public UtilVo(Date orderDate, long orderId, String bookName, int checked, long no, String name, String password,
			String joinDate) {
		super();
		this.orderDate = orderDate;
		this.orderId = orderId;
		this.bookName = bookName;
		this.checked = checked;
		this.no = no;
		this.name = name;
		this.password = password;
		this.joinDate = joinDate;
	}
	public Date getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}
	public long getOrderId() {
		return orderId;
	}
	public void setOrderId(long orderId) {
		this.orderId = orderId;
	}
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	public int getChecked() {
		return checked;
	}
	public void setChecked(int checked) {
		this.checked = checked;
	}
	public long getNo() {
		return no;
	}
	public void setNo(long no) {
		this.no = no;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getJoinDate() {
		return joinDate;
	}
	public void setJoinDate(String joinDate) {
		this.joinDate = joinDate;
	}
	@Override
	public String toString() {
		return "UtilVo [orderDate=" + orderDate + ", orderId=" + orderId + ", bookName=" + bookName + ", checked="
				+ checked + ", no=" + no + ", name=" + name + ", password=" + password + ", joinDate=" + joinDate + "]";
	}
	
	
	
	
}
