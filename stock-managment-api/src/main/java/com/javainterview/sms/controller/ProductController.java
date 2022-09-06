package com.javainterview.sms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.javainterview.sms.model.Product;
import com.javainterview.sms.service.ProductService;

@RestController
public class ProductController {
	
	@Autowired
	private ProductService serviceProduct;
	
	
	@GetMapping("/api/products")
	public List<Product> getAll(){
		return serviceProduct.getAllProducts();
	}
	
//	@GetMapping("/products")
//	public String listProducts(Model model) {
//		model.addAttribute("products", serviceProduct.getAllProducts());
//		return "products";
//	}
	
	@PostMapping("/api/products")
	@ResponseStatus(code = HttpStatus.CREATED)
	public Product saveProduct(@RequestBody Product product) {
		return serviceProduct.add(product);
	}
}
