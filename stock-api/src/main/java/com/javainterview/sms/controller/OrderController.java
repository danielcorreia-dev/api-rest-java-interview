package com.javainterview.sms.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javainterview.sms.model.Order;
import com.javainterview.sms.service.OrderServices;

import lombok.RequiredArgsConstructor;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/order")
@RequiredArgsConstructor
public class OrderController {
	
	private final OrderServices orderServices;
	
	// CreateOrder
	@PostMapping
	public ResponseEntity addOrder(@RequestBody Order brand) {
		orderServices.addOrder(brand);
		return ResponseEntity.status(HttpStatus.CREATED).build(); 
	}
	
	// List
	@GetMapping
	public ResponseEntity<List<Order>> getAllOrders(){
		return ResponseEntity.ok(orderServices.getAllOrders());
	}

	// Delete Order
	@DeleteMapping("/{id}")
	public ResponseEntity deleteOrder(@PathVariable String id) {
		orderServices.deleteOrder(id);
		return ResponseEntity.status(HttpStatus.OK).build();
	}
}