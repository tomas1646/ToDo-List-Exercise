package com.tomas.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "ToDo")
@Setter
@Getter
public class ToDo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Long id;

	private String description;
	private Integer isCompleted;

	@ManyToOne()
	@JoinColumn(name = "folder_id", referencedColumnName = "id")
	private Folder folder;
}
