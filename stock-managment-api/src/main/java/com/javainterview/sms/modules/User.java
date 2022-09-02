package com.javainterview.sms.modules;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor

public class User {
	@Id
	private Integer id;
	
	@Column
	private String name;
	private String position;
	private String genre;
}
