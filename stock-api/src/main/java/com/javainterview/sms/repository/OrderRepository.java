package com.javainterview.sms.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.javainterview.sms.model.Order;

public interface OrderRepository extends MongoRepository<Order, String>{

}
