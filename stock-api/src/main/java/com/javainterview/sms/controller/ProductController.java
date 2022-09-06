package com.javainterview.sms.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javainterview.sms.model.Product;
import com.javainterview.sms.service.ProductServices;

import lombok.RequiredArgsConstructor;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/product")
@RequiredArgsConstructor
public class ProductController {
	
	private final ProductServices productServices;
	
	// Create Product
	@PostMapping
	public ResponseEntity addProduct(@RequestBody Product product) {
		productServices.addProduct(product);
		return ResponseEntity.status(HttpStatus.CREATED).build(); 
	}
	
	// Update Product
	@PutMapping
	public ResponseEntity updateProduct(@RequestBody Product product) {
		productServices.updateProduct(product);
			return ResponseEntity.status(HttpStatus.OK).build();
	}
	
	// List everything
	@GetMapping
	public ResponseEntity<List<Product>> getAllProducts(){
		return ResponseEntity.ok(productServices.getAllProducts());
	}
	
	// Get by name
	@GetMapping("/{name}")
	public ResponseEntity<Product> getProductName(@PathVariable String name) {
		return ResponseEntity.ok(productServices.getProduct(name));
	}
	
	// Delete product
	@DeleteMapping("/{id}")
	public ResponseEntity deleteProduct(@PathVariable String id) {
		productServices.deleteProduct(id);
		return ResponseEntity.noContent().build();
	}
}