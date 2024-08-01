package com.demo.projectD.repository.vo;

public class UtilVo {
	private String orderDate;
	private long orderId;
	private String bookName;
	private int checked;
	
	private long userNo;
	private String userName;
	private String password;
	private String joinDate;
	
	public UtilVo(String orderDate, long orderId, String bookName, int checked, long userNo, String userName, String password,
			String joinDate) {
		super();
		this.orderDate = orderDate;
		this.orderId = orderId;
		this.bookName = bookName;
		this.checked = checked;
		this.userNo = userNo;
		this.userName = userName;
		this.password = password;
		this.joinDate = joinDate;
	}
	public String getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(String orderDate) {
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
	public long getUserNo() {
		return userNo;
	}
	public void setUserNo(long userNo) {
		this.userNo = userNo;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
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
				+ checked + ", no=" + userNo + ", name=" + userName + ", password=" + password + ", joinDate=" + joinDate + "]";
	}
	
	
	
	
}
