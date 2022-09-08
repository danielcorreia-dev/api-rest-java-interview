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

import com.javainterview.sms.model.Brand;
import com.javainterview.sms.model.Product;
import com.javainterview.sms.service.BrandServices;

import lombok.RequiredArgsConstructor;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/brand")
@RequiredArgsConstructor
public class BrandController {
	
	private final BrandServices brandServices;
	
	// Create Product
	@PostMapping
	public ResponseEntity addBrand(@RequestBody Brand brand) {
		brandServices.addBrand(brand);
		return ResponseEntity.status(HttpStatus.CREATED).build(); 
	}
	
	// Update Product
	@PutMapping
	public ResponseEntity updateBrand(@RequestBody Brand brand) {
		brandServices.updateBrand(brand);
			return ResponseEntity.status(HttpStatus.OK).build();
	}
	
	// List everything
	@GetMapping
	public ResponseEntity<List<Brand>> getAllProducts(){
		return ResponseEntity.ok(brandServices.getAllBrands());
	}

	// Delete product
	@DeleteMapping("/{id}")
	public ResponseEntity deleteBrand(@PathVariable String id) {
		brandServices.deleteBrand(id);
		return ResponseEntity.status(HttpStatus.OK).build();
	}
}