package com.javainterview.sms.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javainterview.sms.modules.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}