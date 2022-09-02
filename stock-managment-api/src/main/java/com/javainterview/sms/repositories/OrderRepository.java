package com.javainterview.sms.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javainterview.sms.modules.Orders;

public interface OrderRepository extends JpaRepository<Orders, Integer> {

}
