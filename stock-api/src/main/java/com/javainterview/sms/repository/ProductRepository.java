package com.javainterview.sms.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.javainterview.sms.model.Product;

public interface ProductRepository extends MongoRepository<Product, String> {
	 @Query("{'name': ?0}")
	 Optional<Product> findByName(String name);
}
