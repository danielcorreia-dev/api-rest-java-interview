package com.javainterview.sms.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.javainterview.sms.model.Product;
import com.javainterview.sms.repository.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class ProductServices {
	
	private final ProductRepository productRepository;
	
	
	// Add a product
	public void addProduct(Product product) {
		productRepository.insert(product);
	}
	
	// List everything
	public List<Product> getAllProducts(){
		return productRepository.findAll();
	}
	
	// Update Product
	public void updateProduct(Product product) {
		Product savedProduct = productRepository.findById(product.getId())
				.orElseThrow(()-> new RuntimeException(
						String.format("Can't find product by ID %s", product.getId())));
		
		savedProduct.setName(product.getName());
		savedProduct.setStatus(product.getStatus());
		savedProduct.setStock(product.getStock());
		
		productRepository.save(savedProduct);
		
	}
	
	// Get product by name
	public Product getProduct(String name) {
		return productRepository.findByName(name)
				.orElseThrow(()-> new RuntimeException(String.format("Cannot Find Expense by Name - %s", name)));
	}
	
	// Delete product
	
	public void deleteProduct(String id) {
		productRepository.deleteById(id);
	}
}
