package com.javainterview.sms.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.javainterview.sms.model.Brand;
import com.javainterview.sms.repository.BrandRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class BrandServices {
	
	private final BrandRepository brandRepository;
	
	
	// Add a product
	public void addBrand(Brand brand) {
		brandRepository.insert(brand);
	}
	
	// List everything
	public List<Brand> getAllBrands(){
		return brandRepository.findAll();
	}
	
	// Update Product
	public void updateBrand(Brand brand) {
		Brand savedBrand = brandRepository.findById(brand.getId())
				.orElseThrow(()-> new RuntimeException(
						String.format("Can't find product by ID %s", brand.getId())));
		
		savedBrand.setName(brand.getName());
		savedBrand.setStatus(brand.getStatus());
		
		brandRepository.save(savedBrand);
		
	}
	
	// Delete product
	
	public void deleteBrand(String id) {
		brandRepository.deleteById(id);
	}
}
