package com.javainterview.sms.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javainterview.sms.modules.Products;

public interface ProductsRepository extends JpaRepository<Products, Integer> {

}
