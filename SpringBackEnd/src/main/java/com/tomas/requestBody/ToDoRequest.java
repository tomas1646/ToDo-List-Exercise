package com.tomas.requestBody;

import lombok.Data;

@Data
public class ToDoRequest {

	private Long todoId;
	private String description;
	private Integer isCompleted;
	private Long folderId;

}
