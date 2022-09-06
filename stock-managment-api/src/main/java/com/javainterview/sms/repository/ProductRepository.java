package com.javainterview.sms.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.javainterview.sms.model.Product;

public interface ProductRepository extends MongoRepository<Product, Long>{

}
