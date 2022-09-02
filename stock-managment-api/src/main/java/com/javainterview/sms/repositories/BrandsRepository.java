package com.javainterview.sms.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javainterview.sms.modules.Brands;

public interface BrandsRepository extends JpaRepository<Brands, Integer> {

}
