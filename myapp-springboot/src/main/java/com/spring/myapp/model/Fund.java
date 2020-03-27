package com.spring.myapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Fund {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String marketname;
	private double price;
	private double percent;
	
	public Fund() {}
	public Fund(String marketname, double price, double percent) {
		this.marketname = marketname;
		this.price = price;
		this.percent = percent;
	}
	
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public double getPercent() {
		return percent;
	}
	public void setPercent(double percent) {
		this.percent = percent;
	}

	public String getMarketname() {
		return marketname;
	}
	public void setMarketname(String marketname) {
		this.marketname = marketname;
	}
}
