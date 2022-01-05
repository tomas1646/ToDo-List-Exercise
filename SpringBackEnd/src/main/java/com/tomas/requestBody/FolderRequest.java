package com.tomas.requestBody;

import lombok.Data;

@Data
public class FolderRequest {

	private Long folderid;
	private String nombre;
	private Long userId;
}
