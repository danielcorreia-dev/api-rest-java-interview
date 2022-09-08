package com.javainterview.sms.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.javainterview.sms.model.Brand;
import com.javainterview.sms.model.Order;
import com.javainterview.sms.repository.OrderRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class OrderServices {
	
	private final OrderRepository orderRepository;
	
	
	// Add a product
	public void addOrder(Order order) {
		orderRepository.insert(order);
	}
	
	// List everything
	public List<Order> getAllOrders(){
		return orderRepository.findAll();
	}
	
	// Delete product
	
	public void deleteOrder(String id) {
		orderRepository.deleteById(id);
	}
}
