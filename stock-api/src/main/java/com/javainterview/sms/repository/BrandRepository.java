package com.javainterview.sms.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.javainterview.sms.model.Brand;

public interface BrandRepository extends MongoRepository<Brand, String>{

}
