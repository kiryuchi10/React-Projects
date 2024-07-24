package com.demo.projectD.repository.vo;

import java.util.Date;

public class UtilVo {
	private Date orderDate;
	private long orderId;
	private String bookName;
	private int checked;
	
	public UtilVo() {
		
	}
	
	public UtilVo(Date orderDate, long orderId, String bookName, int checked) {
		super();
		this.orderDate = orderDate;
		this.orderId = orderId;
		this.bookName = bookName;
		this.checked = checked;
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

	@Override
	public String toString() {
		return "UtilVo [orderDate=" + orderDate + ", orderId=" + orderId + ", bookName=" + bookName + ", checked="
				+ checked + "]";
	}
	
	
	
	
}
