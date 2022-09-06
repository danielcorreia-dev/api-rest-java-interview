package com.javainterview.sms.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin
@Controller
public class AppController {
	
	@GetMapping("/index")
	public String goHome() {
		return "index";
	}
	
	@GetMapping("/products")
	public String goProducts() {
		return "products";
	}
	
	@GetMapping("/dashboard")
	public String goDashboard() {
		return "dashboard";
	}
}
