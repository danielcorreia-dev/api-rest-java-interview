package com.javainterview.sms.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document("product")
public class Product {
	
	@Id
	private String id;
	
	@Field("name")
	@Indexed(unique = true)
	private String name;
	@Field("status")
	private String status;
	@Field("stock")
	private Integer stock;
}
