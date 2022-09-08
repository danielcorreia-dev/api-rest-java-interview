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
@Document("order")
public class Order {
	
	@Id
	private String id;
	
	@Field("customer")
	@Indexed(unique = true)
	private String customer;
	@Field("delivery")
	private Integer delivery;
}
